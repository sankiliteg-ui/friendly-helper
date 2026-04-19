import { useState } from "react";

export function BirthdayCake({ name }: { name: string }) {
  const [blown, setBlown] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={() => setBlown((b) => !b)}
        className="relative active:scale-95 transition-transform"
        aria-label="Blow candles"
      >
        {/* Candles */}
        <div className="flex justify-center gap-2 mb-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="relative flex flex-col items-center">
              {!blown && (
                <div
                  className="flicker"
                  style={{
                    width: 10,
                    height: 14,
                    background: "radial-gradient(circle at 50% 70%, #fff200 0%, #ff8c00 50%, #ff3d00 100%)",
                    borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                    boxShadow: "0 0 15px #ffaa00, 0 0 30px #ff6600",
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              )}
              {blown && (
                <div className="text-xs text-muted-foreground" style={{ height: 14 }}>
                  ·
                </div>
              )}
              <div
                style={{
                  width: 4,
                  height: 24,
                  background: ["#ff6b9d", "#ffd700", "#7b61ff", "#00d9ff", "#ff85c1"][i],
                  borderRadius: 1,
                }}
              />
            </div>
          ))}
        </div>
        {/* Cake top tier */}
        <div
          className="relative"
          style={{
            width: 180,
            height: 50,
            background: "linear-gradient(180deg, #fff 0%, #ffe0e9 100%)",
            borderRadius: "8px 8px 4px 4px",
            boxShadow: "inset 0 -8px 0 #ffb3c6, 0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          {/* Drips */}
          {[10, 35, 60, 85, 110, 135, 160].map((x, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: 30,
                left: x,
                width: 14,
                height: 18,
                background: "linear-gradient(180deg, #ff5a87, #c9184a)",
                borderRadius: "0 0 50% 50%",
              }}
            />
          ))}
        </div>
        {/* Cake bottom tier */}
        <div
          className="relative -mt-1"
          style={{
            width: 220,
            height: 70,
            background: "linear-gradient(180deg, #ffd700 0%, #c9a227 100%)",
            borderRadius: "6px 6px 8px 8px",
            boxShadow: "inset 0 -10px 0 rgba(0,0,0,0.15), 0 8px 30px rgba(0,0,0,0.4)",
            marginLeft: -20,
          }}
        >
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[11px] font-bold tracking-widest text-rose-900">
            HAPPY {name.toUpperCase()}
          </div>
        </div>
        {/* Plate */}
        <div
          className="-mt-1"
          style={{
            width: 250,
            height: 12,
            background: "linear-gradient(180deg, #f5f5f5, #b8b8b8)",
            borderRadius: "50%",
            marginLeft: -35,
            boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
          }}
        />
      </button>
      <p className="text-xs text-gold-soft/80 italic">
        {blown ? "🌟 Make a wish, ANNU!" : "Tap the cake to blow the candles"}
      </p>
    </div>
  );
}
