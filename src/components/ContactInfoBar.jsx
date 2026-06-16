import { useRef } from "react";

const ORANGE = "#c94e2d";

const cards = [
  { label: "Phone",   value: "(414) 857 - 0107",    sub: "Mon–Sat, 9am – 10pm",      icon: "📞" },
  { label: "Email",   value: "hello@makanmate.com",  sub: "Response within 24 hours", icon: "✉️" },
  { label: "Address", value: "837 W. Marshall Lane", sub: "Marshalltown, IA 50158",   icon: "📍" },
  { label: "Hours",   value: "Mon – Sun",            sub: "11:00 AM – 11:00 PM",      icon: "🕐" },
];

// Duplicate 3× so the loop feels seamless at any screen width
const ticker = [...cards, ...cards, ...cards];

export default function ContactInfoBar() {
  const trackRef = useRef(null);

  return (
    <>
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker 28s linear infinite;
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }

        .ticker-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 40px;
          white-space: nowrap;
          border-right: 1px solid rgba(255,255,255,0.2);
          flex-shrink: 0;
        }

        .ticker-dot {
          width: 6px;
          height: 6px;
          background: rgba(255,255,255,0.6);
          border-radius: 50%;
          flex-shrink: 0;
        }
      `}</style>

<div
  style={{
    background: ORANGE,
    overflow: "hidden",
    position: "relative",
    height: "70px", // adjust as needed
    display: "flex",
    alignItems: "center",
    color: "#fff",
    fontFamily: "sans-serif",
  }}
>        {/* Left fade + LIVE badge */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, zIndex: 3,
          display: "flex", alignItems: "center",
        }}>
          <div style={{
            background: "#a83a1e",
            color: "#fff",
            padding: "0 20px",
            height: "100%",
            display: "flex", alignItems: "center", gap: 8,
            fontWeight: 800, fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            borderRight: "1px solid rgba(255,255,255,0.25)",
            zIndex: 4,
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#fff",
              boxShadow: "0 0 0 0 rgba(255,255,255,0.6)",
              animation: "pulse 1.4s ease-in-out infinite",
              display: "inline-block",
            }} />
            INFO
          </div>
          {/* Left gradient fade */}
          <div style={{
            width: 60,
            height: "100%",
            background: `linear-gradient(to right, ${ORANGE}, transparent)`,
            pointerEvents: "none",
          }} />
        </div>

        {/* Right gradient fade */}
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, zIndex: 2,
          width: 60,
          background: `linear-gradient(to left, ${ORANGE}, transparent)`,
          pointerEvents: "none",
        }} />

        {/* Scrolling track */}
        <div style={{ overflow: "hidden", paddingLeft: 130 }}>
          <div className="ticker-track" ref={trackRef}>
            {ticker.map((card, i) => (
              <div className="ticker-item" key={i}>
                <span style={{ fontSize: 15 }}>{card.icon}</span>
                <span style={{
                  fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.65)",
                }}>{card.label}:</span>
                <span style={{
                  fontSize: 14, fontWeight: 700, color: "#fff",
                }}>{card.value}</span>
                <span style={{
                  fontSize: 12, color: "rgba(255,255,255,0.65)",
                }}>— {card.sub}</span>
                <span className="ticker-dot" />
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.6); }
          50%       { box-shadow: 0 0 0 5px rgba(255,255,255,0); }
        }
      `}</style>
    </>
  );
}