import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const DARK_BG = "#2e2e2e";
const ORANGE = "#c94e2d";

const tickerItems = [
  { icon: "📞", label: "Phone",   value: "(414) 857 - 0107",    sub: "Mon–Sat, 9am – 10pm"      },
  { icon: "✉️", label: "Email",   value: "yummy@bistrobliss",   sub: "Response within 24 hours"  },
  { icon: "📍", label: "Address", value: "837 W. Marshall Lane", sub: "Marshalltown, IA 50158"    },
  { icon: "🕐", label: "Hours",   value: "Mon – Sun",            sub: "11:00 AM – 11:00 PM"       },
];

const ticker = [...tickerItems, ...tickerItems, ...tickerItems];

const socials = [
  { href: "https://x.com",         icon: <FaXTwitter />,    label: "X / Twitter" },
  { href: "https://facebook.com",  icon: <FaFacebookF />,   label: "Facebook"    },
  { href: "https://linkedin.com",  icon: <FaLinkedinIn />,  label: "LinkedIn"    },
  { href: "https://instagram.com", icon: <FaInstagram />,   label: "Instagram"   },
];

export default function TopBar() {
  return (
    <>
      <style>{`
        @keyframes topbar-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes topbar-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.55); }
          50%       { box-shadow: 0 0 0 5px rgba(255,255,255,0);  }
        }

        .topbar-track {
          display: flex;
          width: max-content;
          animation: topbar-ticker 30s linear infinite;
        }
        .topbar-track:hover {
          animation-play-state: paused;
        }

        .topbar-social-link {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 12px;
          transition: background 0.2s, color 0.2s;
          flex-shrink: 0;
        }
        .topbar-social-link:hover {
          background: ${ORANGE};
          color: #fff;
        }

        .topbar-ticker-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 32px;
          white-space: nowrap;
          border-right: 1px solid rgba(255,255,255,0.12);
          flex-shrink: 0;
        }

        .topbar-divider {
          width: 1px;
          height: 20px;
          background: rgba(255,255,255,0.15);
          flex-shrink: 0;
        }
      `}</style>

      <div style={{
        background: DARK_BG,
        height: 40,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}>

        {/* ── LEFT: LIVE badge ── */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0,
          display: "flex", alignItems: "center", zIndex: 4, flexShrink: 0,
        }}>
          <div style={{
            background: ORANGE,
            height: "100%",
            padding: "0 16px",
            display: "flex", alignItems: "center", gap: 7,
            fontSize: 10, fontWeight: 800,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "#fff", whiteSpace: "nowrap",
            borderRight: "1px solid rgba(255,255,255,0.2)",
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#fff", display: "inline-block",
              animation: "topbar-pulse 1.4s ease-in-out infinite",
            }} />
            INFO
          </div>
          {/* left fade */}
          <div style={{
            width: 48, height: "100%",
            background: `linear-gradient(to right, ${DARK_BG}, transparent)`,
            pointerEvents: "none",
          }} />
        </div>

        {/* ── TICKER (middle, padded away from both edges) ── */}
        <div style={{
          flex: 1,
          overflow: "hidden",
          paddingLeft: 110,
          paddingRight: 170,
        }}>
          <div className="topbar-track">
            {ticker.map((item, i) => (
              <div className="topbar-ticker-item" key={i}>
                <span style={{ fontSize: 13 }}>{item.icon}</span>
                <span style={{
                  fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                }}>{item.label}:</span>
                <span style={{
                  fontSize: 12.5, fontWeight: 600, color: "#fff",
                }}>{item.value}</span>
                <span style={{
                  fontSize: 11.5, color: "rgba(255,255,255,0.5)",
                }}>— {item.sub}</span>
                <span style={{
                  width: 4, height: 4, borderRadius: "50%",
                  background: "rgba(255,255,255,0.35)",
                  display: "inline-block", flexShrink: 0,
                }} />
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: social icons ── */}
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0,
          display: "flex", alignItems: "center", zIndex: 4,
        }}>
          {/* right fade */}
          <div style={{
            width: 48, height: "100%",
            background: `linear-gradient(to left, ${DARK_BG}, transparent)`,
            pointerEvents: "none",
          }} />
          <div style={{
            background: DARK_BG,
            height: "100%",
            paddingLeft: 8,
            paddingRight: 16,
            display: "flex", alignItems: "center",
            gap: 4,
            borderLeft: "1px solid rgba(255,255,255,0.1)",
          }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="topbar-social-link"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}