import { useMemo } from "react";

const COLORS = ["#FFD700", "#FF6B9D", "#FF4757", "#7B61FF", "#00D9FF", "#FFA94D"];

export function Confetti({ count = 40 }: { count?: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 4,
        color: COLORS[i % COLORS.length],
        size: 6 + Math.random() * 8,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: "-5vh",
            width: p.size,
            height: p.size * 0.4,
            background: p.color,
            animation: `confetti-fall ${p.duration}s ${p.delay}s linear infinite`,
            borderRadius: "2px",
          }}
        />
      ))}
    </div>
  );
}
