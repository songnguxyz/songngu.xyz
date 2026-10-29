import React from "react";

// Nền trang trí sau hero: lưới chấm trôi chậm, ký hiệu ♓ (nửa trái) và chòm sao Song Ngư
// (nửa phải) xoay chậm, thay phiên nhau hiện; ẩn trên điện thoại. Một dải sáng quét từ
// trên xuống làm sao nháy lần lượt.
// Tắt chuyển động khi người dùng bật giảm chuyển động (motion-safe).

// Vị trí thật các sao chính chòm Song Ngư, quanh tâm (0, 0): [x, y, độ sáng biểu kiến].
const REAL = [
  [430, 262, 3.7],
  [415, 218, 5.0],
  [370, 197, 4.3],
  [308, 213, 4.1],
  [299, 294, 5.0],
  [377, 304, 5.0],
  [208, 186, 4.0],
  [-48, 171, 4.4],
  [-123, 165, 4.3],
  [-180, 171, 5.0],
  [-264, 203, 5.0],
  [-324, 216, 5.0],
  [-430, 273, 3.8],
  [-342, 137, 4.3],
  [-302, 76, 5.0],
  [-271, 8, 3.6],
  [-246, -74, 5.0],
  [-167, -112, 5.0],
  [-180, -188, 4.6],
  [-211, -245, 4.7],
  [-167, -304, 4.5],
];

// Ký hiệu ♓ của icon SN: hai cung quay lưng vào nhau và thanh ngang.
const GLYPH = [
  [-299, -300, 4.4],
  [299, -300, 4.4],
  [-225, -247, 4.4],
  [225, -247, 4.4],
  [-168, -175, 4.4],
  [168, -175, 4.4],
  [-131, -91, 4.4],
  [131, -91, 4.4],
  [-119, 0, 4.4],
  [119, 0, 4.4],
  [-131, 91, 4.4],
  [131, 91, 4.4],
  [-168, 175, 4.4],
  [168, 175, 4.4],
  [-225, 247, 4.4],
  [225, 247, 4.4],
  [-299, 300, 4.4],
  [299, 300, 4.4],
  [-204, 0, 4.4],
  [-68, 0, 4.4],
  [68, 0, 4.4],
  [204, 0, 4.4],
];

function Stars({ stars }) {
  return (
    <svg viewBox="-500 -500 1000 1000" className="w-full h-full">
      <g className="motion-safe:animate-orbit">
        {stars.map(([x, y, m], i) => (
          <circle key={i} cx={x} cy={y} r={(7 - m) * 1.6} fill="currentColor" />
        ))}
      </g>
    </svg>
  );
}

// Một trường sao: lớp mờ cố định và lớp sáng chỉ lộ ra trong dải quét từ trên xuống.
function StarField({ stars, className }) {
  return (
    <div className={`absolute inset-y-0 ${className}`}>
      <div className="absolute inset-0 opacity-50">
        <Stars stars={stars} />
      </div>
      <div className="absolute inset-0 hidden motion-safe:block mask-[linear-gradient(transparent,black_50%,transparent)] mask-size-[100%_30%] mask-no-repeat animate-sweep">
        <Stars stars={stars} />
      </div>
    </div>
  );
}

function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 pointer-events-none"
    >
      <div className="absolute inset-0 text-mxp-pink/35 dark:text-mxp-mint/30 bg-[radial-gradient(currentColor_1.5px,transparent_1.5px)] bg-size-[28px_28px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)] motion-safe:animate-drift" />
      {/* ♓ bên trái và chòm sao bên phải thay phiên nhau hiện; khi tắt chuyển động chỉ còn chòm sao. */}
      <div className="hidden md:block absolute inset-0 mx-auto max-w-7xl text-mxp-purple dark:text-mxp-mint">
        <StarField
          stars={GLYPH}
          className="left-0 w-1/2 hidden motion-safe:block animate-swap"
        />
        <StarField
          stars={REAL}
          className="right-0 w-3/5 motion-safe:animate-swap motion-safe:[animation-delay:-12s]"
        />
      </div>
    </div>
  );
}

export default HeroBackdrop;
