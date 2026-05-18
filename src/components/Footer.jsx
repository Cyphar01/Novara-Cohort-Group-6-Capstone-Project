import { useState, useEffect } from "react";

const stars = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 0.5,
  opacity: Math.random() * 0.7 + 0.2,
  animDelay: Math.random() * 4,
}));

const socialIcons = ["𝕏", "in", "▶", "◉"];

const StarField = () => {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {stars.map((s) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            borderRadius: "50%",
            background: "#c8e0ff",
            opacity: s.opacity,
            animation: `twinkle 3s ${s.animDelay}s ease-in-out infinite alternate`,
          }}
        />
      ))}
    </div>
  );
};

const planets = [
  { name: "Mercury", color: "#b5b5b5", size: 8, ring: false },
  { name: "Venus", color: "#e8c87a", size: 12, ring: false },
  { name: "Earth", color: "#4a9eff", size: 13, ring: false },
  { name: "Mars", color: "#d45c30", size: 10, ring: false },
  { name: "Jupiter", color: "#c8956b", size: 20, ring: false },
  { name: "Saturn", color: "#e4c882", size: 17, ring: true },
  { name: "Uranus", color: "#7de8e8", size: 14, ring: false },
  { name: "Neptune", color: "#4060d4", size: 13, ring: false },
];

const footerLinks = {
  Explore: ["Solar System", "Inner Planets", "Outer Planets", "Dwarf Planets", "Moons & Rings"],
  Learn: ["Planetary Science", "Space History", "Missions", "Astronomy Basics", "Research Papers"],
  Tools: ["3D Model Viewer", "Distance Calculator", "Planet Comparator", "Sky Map", "Data Explorer"],
  About: ["Our Mission", "Data Sources", "Contributors", "Educators", "Contact Us"],
};

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      const scrolledContainer = Array.from(document.querySelectorAll("*")).find((el) => {
        if (el === document.body || el === document.documentElement) return false;
        const { overflow, overflowY } = window.getComputedStyle(el);
        return (overflow + overflowY).match(/auto|scroll/) && el.scrollTop > 200;
      });

      setVisible(winScroll > 200 || !!scrolledContainer);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll, { capture: true });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo?.({ top: 0, behavior: "smooth" });
    document.body.scrollTo?.({ top: 0, behavior: "smooth" });

    Array.from(document.querySelectorAll("*")).forEach((el) => {
      if (el === document.body || el === document.documentElement) return;
      const { overflow, overflowY } = window.getComputedStyle(el);
      if ((overflow + overflowY).match(/auto|scroll/) && el.scrollTop > 0) {
        el.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.3s, transform 0.3s",
      }}
    >
      {/* "Back to top" */}
      <div
        style={{
          color: "#fff",
          fontSize: "12px",
          fontFamily: "'Orbitron', sans-serif",
          letterSpacing: "1px",
          whiteSpace: "nowrap",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(10px)",
          transition: "opacity 0.25s, transform 0.25s",
          pointerEvents: "none",
          textShadow: "0 0 12px rgba(74,158,255,0.5)",
        }}
      >
        Back to top
      </div>

      {/* The circle button */}
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Back to top"
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          border: `1.5px solid rgba(74,158,255,${hovered ? 0.8 : 0.4})`,
          background: hovered ? "rgba(24,95,165,0.85)" : "rgba(2,9,22,0.85)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          transition: "background 0.2s, border-color 0.2s, transform 0.2s",
          boxShadow: hovered
            ? "0 0 14px rgba(74,158,255,0.5), 0 0 28px rgba(74,158,255,0.2)"
            : "0 0 8px rgba(74,158,255,0.2)",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 14V4" stroke={hovered ? "#a8d4ff" : "#7aa8d4"} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M4.5 8.5L9 4L13.5 8.5" stroke={hovered ? "#a8d4ff" : "#7aa8d4"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [hovered, setHovered] = useState(null);

  const handleSubscribe = () => {
    if (email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(1); }
          100% { opacity: 0.9; transform: scale(1.4); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ringPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.9; }
        }
        .footer-link {
          color: #7aa8d4;
          text-decoration: none;
          font-family: 'Exo 2', sans-serif;
          font-size: 13px;
          font-weight: 300;
          letter-spacing: 0.3px;
          transition: color 0.2s, padding-left 0.2s;
          display: block;
          padding: 3px 0;
        }
        .footer-link:hover {
          color: #a8d4ff;
          padding-left: 6px;
        }
        .social-btn {
          width: 36px; height: 36px;
          border: 1px solid rgba(74,158,255,0.3);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #7aa8d4;
          font-size: 14px;
          transition: all 0.25s;
          background: rgba(74,158,255,0.05);
          cursor: pointer;
        }
        .social-btn:hover {
          background: rgba(74,158,255,0.18);
          border-color: rgba(74,158,255,0.7);
          color: #a8d4ff;
          transform: translateY(-2px);
        }
        .email-input {
          flex: 1;
          background: rgba(74,158,255,0.07);
          border: 1px solid rgba(74,158,255,0.25);
          border-right: none;
          border-radius: 4px 0 0 4px;
          color: #c8e0ff;
          font-family: 'Exo 2', sans-serif;
          font-size: 13px;
          padding: 9px 14px;
          outline: none;
          transition: border-color 0.2s;
        }
        .email-input::placeholder { color: rgba(122,168,212,0.5); }
        .email-input:focus { border-color: rgba(74,158,255,0.55); }
        .sub-btn {
          background: linear-gradient(135deg, #185fa5, #378add);
          border: none;
          border-radius: 0 4px 4px 0;
          color: #e8f4ff;
          font-family: 'Orbitron', sans-serif;
          font-size: 10px;
          letter-spacing: 1px;
          padding: 9px 16px;
          cursor: pointer;
          transition: opacity 0.2s;
          white-space: nowrap;
        }
        .sub-btn:hover { opacity: 0.85; }
        .divider-line {
          border: none;
          border-top: 1px solid rgba(74,158,255,0.12);
          margin: 0;
        }
        .bottom-link {
          color: #344f6a;
          font-size: 12px;
          text-decoration: none;
          font-weight: 300;
          transition: color 0.2s;
        }
        .bottom-link:hover {
          color: #7aa8d4;
        }
      `}</style>

      <ScrollToTopButton />

      <footer style={{
        background: "linear-gradient(180deg, #020b1a 0%, #030d24 40%, #020916 100%)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Exo 2', sans-serif",
        animation: "fadeInUp 0.6s ease both",
      }}>
        <StarField />

        {/* Ambient glow */}
        <div style={{
          position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
          width: "600px", height: "200px",
          background: "radial-gradient(ellipse, rgba(24,95,165,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Planet strip */}
        <div style={{
          position: "relative", zIndex: 2,
          borderBottom: "1px solid rgba(74,158,255,0.1)",
          padding: "24px 0 20px",
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "clamp(12px, 3vw, 36px)",
        }}>
          {planets.map((p, i) => (
            <div
              key={p.name}
              onMouseEnter={() => setHovered(p.name)}
              onMouseLeave={() => setHovered(null)}
              style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", cursor: "default" }}
            >
              <div style={{
                position: "relative",
                width: `${p.size * 2 + (p.ring ? 24 : 0)}px`,
                height: `${p.size * 2 + (p.ring ? 10 : 0)}px`,
                display: "flex", alignItems: "center", justifyContent: "center",
                animation: `float 4s ${i * 0.4}s ease-in-out infinite`,
              }}>
                {p.ring && (
                  <div style={{
                    position: "absolute",
                    width: `${p.size * 2 + 22}px`,
                    height: "8px",
                    border: "2px solid rgba(228,200,130,0.45)",
                    borderRadius: "50%",
                    animation: "ringPulse 3s ease-in-out infinite",
                  }} />
                )}
                <div style={{
                  width: `${p.size * 2}px`,
                  height: `${p.size * 2}px`,
                  borderRadius: "50%",
                  background: `radial-gradient(circle at 35% 35%, ${p.color}cc, ${p.color}66)`,
                  boxShadow: hovered === p.name ? `0 0 12px ${p.color}66` : "none",
                  transition: "box-shadow 0.25s",
                }} />
              </div>

              <div style={{
                position: "absolute",
                bottom: "100%",
                left: "50%",
                transform: "translateX(-50%) translateY(-8px)",
                background: "rgba(2,9,22,0.9)",
                border: "1px solid rgba(74,158,255,0.3)",
                borderRadius: "3px",
                padding: "3px 8px",
                fontSize: "10px",
                fontFamily: "'Orbitron', sans-serif",
                color: "#a8d4ff",
                whiteSpace: "nowrap",
                opacity: hovered === p.name ? 1 : 0,
                transition: "opacity 0.2s",
                pointerEvents: "none",
                letterSpacing: "0.5px",
              }}>
                {p.name}
              </div>
            </div>
          ))}
        </div>

        {/* Main footer body */}
        <div style={{
          position: "relative", zIndex: 2,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "48px 32px 32px",
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr",
          gap: "40px",
        }}>
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ position: "relative", width: "36px", height: "36px" }}>
                <div style={{
                  position: "absolute", inset: 0,
                  border: "1.5px solid rgba(74,158,255,0.4)",
                  borderRadius: "50%",
                }} />
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: "14px", height: "14px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 35% 35%, #6cb4ff, #185fa5)",
                }} />
                <div style={{
                  position: "absolute", top: "2px", right: "2px",
                  width: "7px", height: "7px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 35% 35%, #ffd06e, #c8956b)",
                }} />
              </div>
              <div>
                <div style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#c8e0ff",
                  letterSpacing: "2px",
                  lineHeight: 1,
                }}>SOLAR</div>
                <div style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: "9px",
                  fontWeight: 400,
                  color: "#4a9eff",
                  letterSpacing: "3px",
                }}>EXPLORER</div>
              </div>
            </div>

            <p style={{
              color: "#5a80a0",
              fontSize: "13px",
              lineHeight: 1.7,
              fontWeight: 300,
              maxWidth: "220px",
              marginBottom: "24px",
            }}>
              Explore our solar system through interactive data, stunning visuals, and planetary science research.
            </p>

            {/* Newsletter */}
            <div style={{ marginBottom: "20px" }}>
              <p style={{
                color: "#7aa8d4",
                fontSize: "11px",
                fontFamily: "'Orbitron', sans-serif",
                letterSpacing: "1.5px",
                marginBottom: "10px",
              }}>MISSION UPDATES</p>
              {subscribed ? (
                <p style={{ color: "#4a9eff", fontSize: "13px", fontWeight: 400 }}>
                  ✦ You&apos;re on board. Launch notifications incoming.
                </p>
              ) : (
                <div style={{ display: "flex" }}>
                  <input
                    className="email-input"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && handleSubscribe()}
                  />
                  <button className="sub-btn" onClick={handleSubscribe}>LAUNCH</button>
                </div>
              )}
            </div>

            {/* Social */}
            <div style={{ display: "flex", gap: "8px" }}>
              {socialIcons.map((icon, i) => (
                <div key={i} className="social-btn">{icon}</div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                color: "#4a9eff",
                letterSpacing: "2px",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}>{section}</h4>
              {links.map(link => (
                <a key={link} href="#" className="footer-link">{link}</a>
              ))}
            </div>
          ))}
        </div>

        <hr className="divider-line" style={{ margin: "0 32px" }} />

        {/* Bottom bar */}
        <div style={{
          position: "relative", zIndex: 2,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p style={{
            color: "#344f6a",
            fontSize: "12px",
            fontWeight: 300,
            letterSpacing: "0.3px",
          }}>
            &copy; 2026 Solar Explorer. Data sourced from NASA, ESA &amp; JPL.
          </p>

          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Use", "Accessibility", "Sitemap"].map(item => (
              <a key={item} href="#" className="bottom-link">{item}</a>
            ))}
          </div>

          {/* Orbital distance decoration */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: "#4a9eff", opacity: 0.6,
              animation: "float 2s ease-in-out infinite",
            }} />
            <span style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "9px",
              color: "#2a4060",
              letterSpacing: "1px",
            }}>1 AU FROM HOME</span>
          </div>
        </div>
      </footer>
    </>
  );
}