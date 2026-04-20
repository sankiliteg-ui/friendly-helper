import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Confetti } from "@/components/Confetti";
import { Balloons } from "@/components/Balloons";
import { BirthdayCake } from "@/components/BirthdayCake";
import bgImage from "@/assets/birthday-bg.jpg";
import bearImage from "@/assets/birthday-bear.jpg";
import stageImage from "@/assets/birthday-stage.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Happy Birthday ANNU 🎉" },
      { name: "description", content: "A special birthday celebration for ANNU — wishes, cake, and joy." },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" },
      { name: "theme-color", content: "#1a0a20" },
      { property: "og:title", content: "Happy Birthday ANNU 🎉" },
      { property: "og:description", content: "Celebrating ANNU's special day with love and joy." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@300;400;600;700&display=swap",
      },
    ],
  }),
});

const WISHES = [
  { from: "Family", text: "May your day sparkle as bright as you do, ANNU. We love you endlessly. 💖" },
  { from: "Friends", text: "Another trip around the sun with our favourite person. Cheers to you! 🥂" },
  { from: "Best Friend", text: "From silly jokes to late-night talks — here's to a million more memories. 🌙" },
  { from: "Yourself", text: "You've grown so much. Be proud, dream bigger, shine louder. ✨" },
];

function Index() {
  const [tab, setTab] = useState<"wish" | "cake" | "gift">("wish");
  const [giftOpen, setGiftOpen] = useState(false);
  const [wishIdx, setWishIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWishIdx((i) => (i + 1) % WISHES.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(180deg, oklch(0.12 0.05 320 / 0.85), oklch(0.18 0.08 340 / 0.75)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <Confetti count={30} />
      <Balloons count={6} />

      <div className="relative mx-auto max-w-md px-5 pt-10 pb-32">
        {/* Hero */}
        <header className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold-soft/80 mb-3">
            ✦ May 12 · A Special Day ✦
          </p>
          <h1
            className="text-shine leading-none"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 18vw, 6rem)" }}
          >
            Happy
          </h1>
          <h1
            className="text-shine -mt-3 leading-none"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 18vw, 6rem)" }}
          >
            Birthday
          </h1>
          <div className="mt-4 inline-block px-8 py-3 rounded-full glow-pulse"
            style={{
              background: "linear-gradient(135deg, oklch(0.65 0.22 10), oklch(0.78 0.15 60))",
            }}
          >
            <h2 className="text-4xl font-bold tracking-[0.2em] text-white">ANNU</h2>
          </div>
        </header>

        {/* Hero image card */}
        <section className="mt-8 relative rounded-3xl overflow-hidden border-2 border-gold/40 shadow-2xl">
          <img src={bearImage} alt="Happy birthday teddy bear with cake" className="w-full h-72 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 right-4">
            <p className="text-sm font-light text-gold-soft" style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem" }}>
              "To the most wonderful you."
            </p>
          </div>
        </section>

        {/* Tabs */}
        <nav className="mt-8 grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-card backdrop-blur-md border border-gold/30">
          {([
            { key: "wish", label: "💌 Wishes" },
            { key: "cake", label: "🎂 Cake" },
            { key: "gift", label: "🎁 Gift" },
          ] as const).map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`py-2.5 rounded-xl text-sm font-semibold transition-all active:scale-95 ${
                tab === t.key
                  ? "bg-gradient-to-br from-gold to-rose text-background shadow-lg"
                  : "text-gold-soft/80"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {/* Tab content */}
        <section className="mt-6 min-h-[280px]">
          {tab === "wish" && (
            <div className="rounded-3xl bg-card backdrop-blur-md border border-gold/30 p-6 text-center animate-in fade-in duration-500">
              <p className="text-xs uppercase tracking-widest text-gold mb-2">From {WISHES[wishIdx].from}</p>
              <p className="text-lg leading-relaxed text-foreground/95" style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", lineHeight: 1.4 }}>
                {WISHES[wishIdx].text}
              </p>
              <div className="mt-4 flex justify-center gap-1.5">
                {WISHES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setWishIdx(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === wishIdx ? "w-6 bg-gold" : "w-1.5 bg-gold/30"
                    }`}
                    aria-label={`Wish ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {tab === "cake" && (
            <div className="rounded-3xl bg-card backdrop-blur-md border border-gold/30 p-6 animate-in fade-in duration-500">
              <BirthdayCake name="ANNU" />
            </div>
          )}

          {tab === "gift" && (
            <div className="rounded-3xl bg-card backdrop-blur-md border border-gold/30 p-6 text-center animate-in fade-in duration-500">
              <button
                onClick={() => setGiftOpen((g) => !g)}
                className="relative mx-auto block active:scale-95 transition-transform"
              >
                <div
                  className="relative mx-auto"
                  style={{
                    width: 140,
                    height: 140,
                    background: "linear-gradient(135deg, #c9184a, #ff4757)",
                    borderRadius: 12,
                    boxShadow: "0 20px 50px rgba(201, 24, 74, 0.5)",
                  }}
                >
                  {/* Vertical ribbon */}
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-5 bg-gold" />
                  {/* Horizontal ribbon */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-5 bg-gold" />
                  {/* Bow */}
                  {!giftOpen && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl">🎀</div>
                  )}
                  {giftOpen && (
                    <div className="absolute inset-0 flex items-center justify-center text-5xl animate-in zoom-in duration-500">
                      💝
                    </div>
                  )}
                </div>
              </button>
              <p className="mt-5 text-sm text-gold-soft">
                {giftOpen
                  ? "A whole year of love, laughter and dreams come true. 💫"
                  : "Tap to open your surprise!"}
              </p>
            </div>
          )}
        </section>

        {/* Stage image */}
        <section className="mt-8 rounded-3xl overflow-hidden border-2 border-gold/40 shadow-2xl">
          <img src={stageImage} alt="Birthday celebration stage" className="w-full h-56 object-cover" />
        </section>

        {/* Signature */}
        <footer className="mt-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-soft/60">
            Made with 💖 for ANNU
          </p>
          <p
            className="mt-3 text-shine"
            style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem" }}
          >
            Happiest Birthday!
          </p>
        </footer>
      </div>
    </main>
  );
}
