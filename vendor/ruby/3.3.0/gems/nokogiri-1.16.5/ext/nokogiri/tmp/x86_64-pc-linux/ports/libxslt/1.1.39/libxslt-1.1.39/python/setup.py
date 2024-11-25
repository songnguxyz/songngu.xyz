#!/usr/bin/python -u
#
# Setup script for libxml2 and libxslt if found
#
import sys, os, subprocess

try:
    from setuptools import setup, Extension
except ImportError:
    try:
        # Using distutils, for python < 3.12
        from distutils.core import setup, Extension
    except ImportError:
        # distutils is not present in python 3.12 and greater
        print("setuptools is required for python >= 3.12")
        sys.exit(1)

# Below ROOT, we expect to find include, include/libxml2, lib and bin.
# On *nix, it is not needed (but should not harm),
# on Windows, it is set by configure.js.
ROOT = r'/workspaces/projects.songngu.xyz/vendor/ruby/3.3.0/gems/nokogiri-1.16.5/ports/x86_64-linux/libxslt/1.1.39'

# If this flag is set (windows only),
# a private copy of the dlls are included in the package.
# If this flag is not set, the libxml2 and libxslt
# dlls must be found somewhere in the PATH at runtime.
WITHDLLS = 1 and sys.platform.startswith('win')

def missing(file):
    if os.access(file, os.R_OK) == 0:
        return 1
    return 0

try:
    HOME = os.environ['HOME']
except:
    HOME="C:"

if sys.platform.startswith('win'):
    libraryPrefix = 'lib'
    platformLibs = []
else:
    libraryPrefix = ''
    platformLibs = ["m","z"]

# those are examined to find
# - libxslt/xsltconfig.h
includes_dir = [
"/usr/include",
"/usr/local/include",
"/opt/include",
os.path.join(ROOT,'include'),
HOME
];

# those are added in the linker search path for libraries
libdirs = [
os.path.join(ROOT,'lib'),
]

xslt_files = ["libxslt-api.xml", "libxslt-python-api.xml",
             "libxslt.c", "libxsl.py", "libxslt_wrap.h",
             "generator.py"]

if WITHDLLS:
    def altImport(s):
        s = s.replace("import libxml2mod","from libxmlmods import libxml2mod")
        s = s.replace("import libxsltmod","from libxsltmods import libxsltmod")
        return s

if missing("libxslt-py.c") or missing("libxslt.py"):
    if missing("generator.py") or missing(os.path.join("..", "doc", "libxslt-api.xml")):
        print("libxslt stub generator not found, libxslt not built")
    else:
        try:
            if hasattr(subprocess, 'run'):
                subprocess.run([sys.executable,
                                'generator.py',
                                os.path.join('..', 'doc', 'libxslt-api.xml'),
                                'libxslt-python-api.xml'
                               ], check=True)
            else:
                subprocess.check_output([sys.executable,
                                        'generator.py',
                                        os.path.join('..', 'doc', 'libxslt-api.xml'),
                                        'libxslt-python-api.xml'])
        except:
            print("failed to generate stubs for libxslt, aborting ...")
            print(sys.exc_info()[0], sys.exc_info()[1])
        else:
            head = open("libxsl.py", "r")
            generated = open("libxsltclass.py", "r")
            result = open("libxslt.py", "w")
            for line in head.readlines():
                if WITHDLLS:
                    result.write(altImport(line))
                else:
                    result.write(line)
            for line in generated.readlines():
                result.write(line)
            head.close()
            generated.close()
            result.close()

xml_includes=""
for dir in includes_dir:
    if not missing(dir + "/libxml2/libxml/tree.h"):
        xml_includes=dir + "/libxml2"
        break;

if xml_includes == "":
    print("failed to find headers for libxml2: update includes_dir")
    sys.exit(1)

xslt_includes=""
for dir in includes_dir:
    if not missing(dir + "/libxslt/xsltconfig.h"):
        xslt_includes=dir + "/libxslt"
        break;

if xslt_includes == "":
    print("failed to find headers for libxslt: update includes_dir")

if WITHDLLS:
    # libxslt dlls (expected in ROOT/bin)
    dlls = ['libxslt.dll','libexslt.dll']

    packaged_dlls = [os.path.join(ROOT,'bin',dll) for dll in dlls]

    # create __init__.py for the libxsltmods package
    if not os.path.exists("libxsltmods"):
        os.mkdir("libxsltmods")
        open("libxsltmods/__init__.py","w").close()

    packaged_dlls = [os.path.join(ROOT,'bin',dll) for dll in dlls]

descr = "libxslt package"
modules = [ 'libxslt']
if WITHDLLS:
    modules.append('libxsltmods.__init__')
c_files = []
includes= [xslt_includes, xml_includes]
libs    = platformLibs
macros  = []

descr = "libxslt package"
if not sys.platform.startswith('win'):
    #
    # We are gonna build 2 identical shared libs with merge initializing
    # both libxml2mod and libxsltmod
    #
    c_files = c_files + ['libxslt-py.c', 'libxslt.c']
    xslt_c_files = c_files
else:
    #
    # On windows the MERGED_MODULE option is not needed
    # (and does not work)
    #
    xslt_c_files = ['libxslt-py.c', 'libxslt.c', 'types.c']
libs.insert(0, libraryPrefix + 'exslt')
libs.insert(0, libraryPrefix + 'xslt')
libs.insert(0, libraryPrefix + 'xml2')
includes.append(xslt_includes)
modules.append('libxslt')


extens=[Extension('libxsltmod', xslt_c_files, include_dirs=includes,
                        library_dirs=libdirs,
                        libraries=libs, define_macros=macros)]

if missing("MANIFEST"):

    manifest = open("MANIFEST", "w")
    manifest.write("setup.py\n")
    for file in xslt_files:
        manifest.write(file + "\n")
    manifest.close()

if WITHDLLS:
    ext_package = "libxsltmods"
    if sys.version >= "2.2":
        base = "lib/site-packages/"
    else:
        base = ""
    data_files = [(base+ext_package,packaged_dlls)]
else:
    ext_package = None
    data_files = []

setup (name = "libxslt-python",
       # On *nix, the version number is created from setup.py.in
       # On windows, it is set by configure.js
       version = "1.1.39",
       description = descr,
       author = "Daniel Veillard",
       author_email = "veillard@redhat.com",
       url = "https://gitlab.gnome.org/GNOME/libxslt",
       licence="MIT Licence",
       py_modules=modules,
       ext_modules=extens,
       ext_package=ext_package,
       data_files=data_files,
       install_requires=['libxml2_python>=2.6.27'],
       )

sys.exit(0)

