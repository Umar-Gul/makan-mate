import { useState } from "react";

const pages = [
  {
    icon: "📅",
    badge: "Reservations",
    badgeColor: { bg: "#fff0eb", color: "#a83a1e" },
    title: "Book A Table",
    desc: "Reserve your seat for an unforgettable dining experience. Choose your date, time, and party size in seconds.",
    stat: "Available 7 days",
  },
  {
    icon: "👨‍🍳",
    badge: "Team",
    badgeColor: { bg: "#e0f5ef", color: "#0a6b50" },
    title: "Our Chefs",
    desc: "Get to know the culinary artists behind every dish — their stories, inspirations, and signature creations.",
    stat: "12 Expert Chefs",
  },
  {
    icon: "🖼️",
    badge: "Media",
    badgeColor: { bg: "#e6f0fb", color: "#1558a0" },
    title: "Gallery",
    desc: "Explore a curated collection of our dishes, events, and restaurant atmosphere in stunning detail.",
    stat: "200+ Photos",
  },
  {
    icon: "💬",
    badge: "Support",
    badgeColor: { bg: "#eaf3de", color: "#3a6d11" },
    title: "FAQ",
    desc: "Everything you need to know — allergies, hours, parking, private dining, and more. Fast, clear answers.",
    stat: "30+ Questions",
  },
  {
    icon: "🚚",
    badge: "Delivery",
    badgeColor: { bg: "#fceaea", color: "#9e2b2b" },
    title: "Delivery Info",
    desc: "Check delivery zones, estimated times, and our partner apps. Fresh food at your door in under 30 minutes.",
    stat: "30 min avg",
  },
  {
    icon: "⭐",
    badge: "Reviews",
    badgeColor: { bg: "#faeeda", color: "#7a4a0a" },
    title: "Testimonials",
    desc: "Real stories from real diners who love what we do. See why guests keep coming back to Makan Mate.",
    stat: "4.9 / 5 rating",
  },
];

const stats = [
  { value: "12+", label: "Years serving" },
  { value: "98%", label: "Happy guests" },
  { value: "200+", label: "Menu items" },
  { value: "4.9★", label: "Avg. rating" },
];

const ORANGE = "#c94e2d";
const ORANGE_LIGHT = "#fff0eb";

export default function Pages() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ background: "#fafaf8", fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ── Hero ── */}
      <section style={{
        background: "#fff",
        borderBottom: "1px solid #ebebeb",
        padding: "100px 24px 88px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <span style={{
            display: "inline-block",
            fontSize: 11.5,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: ORANGE,
            background: ORANGE_LIGHT,
            padding: "5px 14px",
            borderRadius: 20,
            marginBottom: 22,
          }}>Explore Makan Mate</span>

          <h1 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(30px, 5vw, 54px)",
            fontWeight: 700,
            color: "#1a1a1a",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            margin: "0 0 18px",
          }}>Everything in one place</h1>

          <p style={{
            fontSize: 16,
            color: "#777",
            lineHeight: 1.8,
            margin: "0 auto 36px",
            maxWidth: 480,
          }}>
            Reservations, team bios, gallery, support — navigate every corner of the Makan Mate experience.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <button style={{
              background: ORANGE, color: "#fff", border: "none",
              padding: "13px 28px", borderRadius: 30,
              fontSize: 14.5, fontWeight: 600, cursor: "pointer",
            }}>Book a table</button>
            <button style={{
              background: "transparent", color: "#444",
              border: "1.5px solid #d0d0d0",
              padding: "13px 28px", borderRadius: 30,
              fontSize: 14.5, fontWeight: 600, cursor: "pointer",
            }}>View menu</button>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div style={{ background: "#fff", borderBottom: "1px solid #ebebeb" }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          padding: "0 32px",
        }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              padding: "28px 16px",
              borderRight: i < 3 ? "1px solid #ebebeb" : "none",
            }}>
              <span style={{
                fontFamily: "Georgia, serif",
                fontSize: 28,
                fontWeight: 700,
                color: ORANGE,
                lineHeight: 1,
              }}>{s.value}</span>
              <span style={{
                fontSize: 12,
                color: "#999",
                fontWeight: 500,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Cards grid ── */}
      <section style={{ padding: "80px 24px 100px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          <div style={{ marginBottom: 48 }}>
            <h2 style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 700,
              color: "#1a1a1a",
              margin: "0 0 10px",
            }}>Browse all pages</h2>
            <p style={{ fontSize: 15, color: "#888", margin: 0, lineHeight: 1.6 }}>
              Quick access to every part of our restaurant experience.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 22,
          }}>
            {pages.map((page, i) => (
              <div
                key={page.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: "#fff",
                  border: hovered === i ? "1px solid #f0c4b6" : "1px solid #e4e4e4",
                  borderRadius: 16,
                  padding: "30px 28px 26px",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  transform: hovered === i ? "translateY(-5px)" : "translateY(0)",
                  boxShadow: hovered === i ? "0 12px 40px rgba(201,78,45,0.09)" : "none",
                  transition: "all 0.22s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* top accent bar */}
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: 3,
                  background: ORANGE,
                  borderRadius: "16px 16px 0 0",
                  transform: hovered === i ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.25s ease",
                }} />

                {/* badge + icon row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <span style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "4px 12px",
                    borderRadius: 20,
                    background: page.badgeColor.bg,
                    color: page.badgeColor.color,
                  }}>{page.badge}</span>

                  <div style={{
                    width: 42, height: 42,
                    background: hovered === i ? "#f5c4b5" : ORANGE_LIGHT,
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18,
                    transition: "background 0.22s",
                    flexShrink: 0,
                  }}>{page.icon}</div>
                </div>

                {/* title */}
                <h3 style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#1a1a1a",
                  margin: "0 0 10px",
                  lineHeight: 1.25,
                }}>{page.title}</h3>

                {/* desc */}
                <p style={{
                  fontSize: 14,
                  color: "#737373",
                  lineHeight: 1.75,
                  margin: "0 0 24px",
                  flex: 1,
                }}>{page.desc}</p>

                {/* footer */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: 18,
                  borderTop: "1px solid #f2f2f2",
                  marginTop: "auto",
                }}>
                  <span style={{
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: ORANGE,
                    background: ORANGE_LIGHT,
                    padding: "4px 12px",
                    borderRadius: 20,
                  }}>{page.stat}</span>

                  <span style={{
                    fontSize: 18,
                    color: hovered === i ? ORANGE : "#ccc",
                    transform: hovered === i ? "translateX(4px)" : "translateX(0)",
                    transition: "all 0.2s",
                    display: "inline-block",
                  }}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ background: ORANGE, padding: "80px 24px" }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 40,
          flexWrap: "wrap",
        }}>
          <div>
            <h2 style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(24px, 3vw, 34px)",
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 10px",
              lineHeight: 1.2,
            }}>Ready to dine with us?</h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", margin: 0, lineHeight: 1.6 }}>
              Reserve your table or order online — we're ready when you are.
            </p>
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", flexShrink: 0 }}>
            <button style={{
              background: "#fff", color: ORANGE,
              border: "none",
              padding: "13px 28px", borderRadius: 30,
              fontSize: 14.5, fontWeight: 600, cursor: "pointer",
            }}>Book now</button>
            <button style={{
              background: "transparent", color: "#fff",
              border: "1.5px solid rgba(255,255,255,0.5)",
              padding: "13px 28px", borderRadius: 30,
              fontSize: 14.5, fontWeight: 600, cursor: "pointer",
            }}>Order online</button>
          </div>
        </div>
      </section>

    </div>
  );
}