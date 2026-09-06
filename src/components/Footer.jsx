import React from "react";
import { socialLinks } from "../content/contacts";

function Footer() {
  return (
    <footer className="relative isolate border-t border-slate-200/60 dark:border-slate-800/60 font-inter">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((item) => {
            const isMailto = item.href.startsWith("mailto:");
            return (
              <a
                key={item.name}
                href={item.href}
                target={isMailto ? undefined : "_blank"}
                rel={isMailto ? undefined : "noopener noreferrer"}
                className="text-slate-400 dark:text-slate-500 hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors duration-200 rounded-md focus-ring-offset"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            );
          })}
        </div>

        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-slate-500 dark:text-slate-400 transition-colors duration-200">
            &copy; {new Date().getFullYear()} SongNgư.xyz.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
