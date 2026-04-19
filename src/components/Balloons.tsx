import { useMemo } from "react";

const BALLOON_COLORS = [
  "linear-gradient(135deg, #ff6b9d, #ff4757)",
  "linear-gradient(135deg, #ffd700, #ffa94d)",
  "linear-gradient(135deg, #7b61ff, #b388ff)",
  "linear-gradient(135deg, #00d9ff, #4dabff)",
  "linear-gradient(135deg, #ff85c1, #ff6b9d)",
  "linear-gradient(135deg, #66ffb3, #00d9a3)",
];

export function Balloons({ count = 8 }: { count?: number }) {
  const balloons = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 95,
        delay: Math.random() * 8,
        duration: 12 + Math.random() * 10,
        size: 40 + Math.random() * 30,
        bg: BALLOON_COLORS[i % BALLOON_COLORS.length],
        drift: `${(Math.random() - 0.5) * 80}px`,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {balloons.map((b) => (
        <div
          key={b.id}
          className="absolute"
          style={{
            left: `${b.left}%`,
            bottom: 0,
            animation: `float-up ${b.duration}s ${b.delay}s ease-in infinite`,
            // @ts-expect-error css var
            "--drift": b.drift,
          }}
        >
          <div
            style={{
              width: b.size,
              height: b.size * 1.2,
              background: b.bg,
              borderRadius: "50% 50% 50% 50% / 55% 55% 45% 45%",
              boxShadow: "inset -8px -10px 20px rgba(0,0,0,0.2), inset 6px 6px 12px rgba(255,255,255,0.4)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: -6,
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent",
                borderTop: `8px solid ${b.bg.match(/#[0-9a-f]{6}/i)?.[0] ?? "#ff4757"}`,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -b.size * 1.5,
                left: "50%",
                width: 1,
                height: b.size * 1.5,
                background: "rgba(255,255,255,0.4)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
