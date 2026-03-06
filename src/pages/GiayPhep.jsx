import React from "react";

function GiayPhep({ t }) {
  return (
    <main className="grow flex flex-col items-center justify-start relative isolate px-6 pt-32 pb-12 min-h-screen">
      <div className="mx-auto max-w-4xl w-full flex flex-col text-left relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl drop-shadow-sm transition-colors duration-500 mb-8">
          {t.licenseTitle}
        </h1>
        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 transition-colors duration-500 font-medium pb-12">
          <p className="text-xl mb-8">{t.licenseDesc}</p>
          <div className="p-8 bg-white/60 dark:bg-[#1a0f2e]/60 rounded-3xl backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-500">
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Mã Nguồn Mở</h2>
             <p className="mb-6">
                Chân thành cảm ơn các dự án mã nguồn mở và thư viện đã hỗ trợ xây dựng trang web này. Mã nguồn của trang phân phối dưới dạng open-source nơi bạn có thể xem qua trên GitHub.
             </p>
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Bản Quyền Nội Dung</h2>
             <p className="mb-4">
                Bản quyền các nội dung văn bản gốc và media (nếu có) thuộc về SongNgư.xyz, trừ khi có thông báo khác. 
                Tất cả tên thương hiệu, logo của đối tác và liên minh thuộc về chủ sở hữu tương ứng.
             </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default GiayPhep;
