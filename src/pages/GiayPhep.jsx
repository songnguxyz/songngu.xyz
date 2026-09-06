import React from "react";

function GiayPhep({ t, lang }) {
  return (
    <main
      id="noi-dung-chinh"
      className="grow flex flex-col items-center justify-start relative isolate px-6 pt-32 pb-16"
    >
      <div className="mx-auto max-w-4xl w-full flex flex-col text-left relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl drop-shadow-sm transition-colors duration-200 mb-6">
          {t.licenseTitle}
        </h1>
        <div className="max-w-none text-slate-600 dark:text-slate-300 transition-colors duration-200 font-medium pb-10">
          <p className="text-xl mb-6">{t.licenseDesc}</p>
          <div className="p-8 bg-white/60 dark:bg-[#1a0f2e]/60 rounded-3xl backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-200">
            {lang === "en" ? (
              <>
                <p className="mb-4">
                  Copyright in original text and media, where applicable, belongs to <b>SongNgư.xyz</b> unless stated otherwise.<br/>
                  All partner and alliance names and logos remain the property of their respective owners.
                </p>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Wiki projects</h2>
                <p className="mb-4">
                  Every wiki project on <b>SongNgư.xyz</b> uses the <b>Creative Commons Attribution-ShareAlike (CC BY-SA) 4.0</b> licence unless that project states otherwise.<br/>
                  By contributing to these projects you agree to license your contribution under the licence that applies to it.
                </p>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Custom Gameshows Wiki</h3>
                <p className="mb-4">
                  Contributions to this project are licensed under <b>Creative Commons Attribution-NonCommercial-ShareAlike (CC BY-NC-SA) 4.0</b>, and you waive any commercial claim over the Custom Gameshows channel's use of your contribution or works derived from it.
                </p>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Open source</h2>
                <p className="mb-6">
                  Thanks to the open-source projects and libraries this site is built on. The source is released under the <a href="https://github.com/songnguxyz/songngu.xyz/blob/main/LICENSE.md" target="_blank" rel="noopener noreferrer" className="font-semibold text-mxp-pink dark:text-mxp-mint underline underline-offset-4 decoration-mxp-pink/40 dark:decoration-mxp-mint/40 hover:decoration-mxp-pink dark:hover:decoration-mxp-mint transition-colors duration-300 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-mxp-pink dark:focus-visible:ring-mxp-mint">MIT licence</a> and available in the <a href="https://github.com/songnguxyz/songngu.xyz" target="_blank" rel="noopener noreferrer" className="font-semibold text-mxp-pink dark:text-mxp-mint underline underline-offset-4 decoration-mxp-pink/40 dark:decoration-mxp-mint/40 hover:decoration-mxp-pink dark:hover:decoration-mxp-mint transition-colors duration-300 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-mxp-pink dark:focus-visible:ring-mxp-mint">GitHub repository</a>.
                </p>
              </>
            ) : (
              <>
                <p className="mb-4">
                  Bản quyền các nội dung văn bản gốc và media (nếu có) thuộc về <b>SongNgư.xyz</b>, trừ khi có thông báo khác.<br/>
                  Tất cả tên thương hiệu, logo của đối tác và liên minh thuộc về chủ sở hữu tương ứng.
                </p>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Dự án Wiki</h2>
                <p className="mb-4">
                  Mọi dự án wiki tại <b>SongNgư.xyz</b>, trừ khi có thông báo khác tại dự án, đều sử dụng giấy phép <b>Creative Commons Ghi công - Chia sẻ tương tự (CC BY-SA) 4.0</b>.<br/>
                  Khi bạn đóng góp nội dung vào các dự án wiki của tôi, <b>bạn đồng ý</b> <b>một cách vô điều kiện</b> việc cấp phép nội dung đó theo giấy phép Creative Commons phù hợp với dự án.
                </p>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Custom Gameshows Wiki</h3>
                <p className="mb-4">
                  Bằng việc đóng góp vào dự án này, <b>bạn hoàn toàn từ bỏ quyền sử dụng thương mại</b> theo giấy phép <b>Creative Commons Ghi công - Không thương mại - Chia sẻ tương tự (CC BY-NC-SA) 4.0</b> đối với việc kênh Custom Gameshows sử dụng đóng góp của bạn và bất kỳ tác phẩm phái sinh nào từ đóng góp đó.<br/>
                  Điều này có nghĩa là <b>bạn không thể</b> yêu cầu bất kỳ khoản phí nào từ kênh Custom Gameshows cho việc sử dụng đóng góp của bạn.
                </p>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Mã nguồn mở</h2>
                <p className="mb-6">
                  Chân thành cảm ơn các dự án mã nguồn mở và thư viện đã hỗ trợ xây dựng trang web này.
                  Mã nguồn được phân phối dưới dạng mã nguồn mở dưới <a href="https://github.com/songnguxyz/songngu.xyz/blob/main/LICENSE.md" target="_blank" rel="noopener noreferrer" className="font-semibold text-mxp-pink dark:text-mxp-mint underline underline-offset-4 decoration-mxp-pink/40 dark:decoration-mxp-mint/40 hover:decoration-mxp-pink dark:hover:decoration-mxp-mint transition-colors duration-300 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-mxp-pink dark:focus-visible:ring-mxp-mint">giấy phép MIT</a>, nơi bạn có thể xem qua trên <a href="https://github.com/songnguxyz/songngu.xyz" target="_blank" rel="noopener noreferrer" className="font-semibold text-mxp-pink dark:text-mxp-mint underline underline-offset-4 decoration-mxp-pink/40 dark:decoration-mxp-mint/40 hover:decoration-mxp-pink dark:hover:decoration-mxp-mint transition-colors duration-300 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-mxp-pink dark:focus-visible:ring-mxp-mint">kho GitHub</a>.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default GiayPhep;
