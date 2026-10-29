import React from "react";

// Nền trang trí sau hero: lưới chấm trôi chậm, phía trên là các sao chòm Song Ngư
// (không nối đường), nháy sáng lần lượt từ trên xuống. Tắt chuyển động khi người dùng
// bật giảm chuyển động (motion-safe).

// Toạ độ chiếu từ vị trí thật của các sao chính chòm Song Ngư: [x, y, độ sáng biểu kiến].
const STARS = [
  [1446, 934, 3.7],
  [1422, 865, 5.0],
  [1353, 832, 4.3],
  [1256, 858, 4.1],
  [1241, 984, 5.0],
  [1363, 1000, 5.0],
  [1099, 815, 4.0],
  [699, 792, 4.4],
  [582, 782, 4.3],
  [494, 792, 5.0],
  [362, 842, 5.0],
  [269, 862, 5.0],
  [103, 951, 3.8],
  [240, 739, 4.3],
  [303, 644, 5.0],
  [352, 538, 3.6],
  [391, 409, 5.0],
  [513, 350, 5.0],
  [494, 231, 4.6],
  [445, 142, 4.7],
  [513, 50, 4.5],
];

const VIEW_H = 1020;
// Thời gian làn sáng đi từ sao trên cùng xuống sao dưới cùng (giây).
const SWEEP_S = 2.5;

function HeroBackdrop() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none text-mxp-pink/35 dark:text-mxp-mint/30 bg-[radial-gradient(currentColor_1.5px,transparent_1.5px)] bg-size-[28px_28px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)] motion-safe:animate-drift"
      />
      <svg
        aria-hidden="true"
        viewBox={`0 0 1466 ${VIEW_H}`}
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none text-mxp-purple dark:text-mxp-mint"
      >
        {STARS.map(([x, y, m], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={(7 - m) * 1.6}
            fill="currentColor"
            className="motion-safe:animate-twinkle"
            style={{ animationDelay: `${(y / VIEW_H) * SWEEP_S}s` }}
          />
        ))}
      </svg>
    </>
  );
}

export default HeroBackdrop;
