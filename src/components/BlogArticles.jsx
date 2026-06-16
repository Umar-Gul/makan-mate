import { useState } from "react";

const ORANGE = "#c94e2d";
const ORANGE_LIGHT = "#fff0eb";

const allSmallPosts = [
  {
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&q=80",
    date: "January 3, 2025",
    title: "How to prepare the perfect french fries in an air fryer",
    category: "Cooking Tips",
  },
  {
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&q=80",
    date: "January 3, 2025",
    title: "How to prepare delicious chicken tenders",
    category: "Recipes",
  },
  {
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
    date: "January 3, 2025",
    title: "7 delicious cheesecake recipes you can prepare",
    category: "Desserts",
  },
  {
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
    date: "January 3, 2025",
    title: "5 great pizza restaurants you should visit this city",
    category: "Guides",
  },
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
    date: "February 10, 2025",
    title: "The ultimate guide to pairing wine with food",
    category: "Guides",
  },
  {
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
    date: "February 14, 2025",
    title: "Healthy meal prep ideas for the entire week",
    category: "Healthy",
  },
  {
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80",
    date: "March 1, 2025",
    title: "10 must-try street foods from around the world",
    category: "Travel",
  },
  {
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&q=80",
    date: "March 8, 2025",
    title: "Breakfast ideas that will transform your mornings",
    category: "Breakfast",
  },
];

const allFeaturedPosts = [
  {
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    date: "January 3, 2025",
    category: "Featured",
    title: "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos possimus quibusdam ullam voluptate.",
  },
  {
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    date: "February 20, 2025",
    category: "Events",
    title: "How we catered the biggest food festival of the year — and what we learned",
    desc: "Behind the scenes of a massive culinary event, where our team served over 3,000 guests in a single evening.",
  },
  {
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    date: "March 15, 2025",
    category: "Chef's Corner",
    title: "Our head chef shares the one technique that changed everything in the kitchen",
    desc: "A deep dive into the cooking philosophy that drives every plate at Makan Mate — from sourcing to plating.",
  },
];

export default function BlogArticles() {
  const [showAll, setShowAll] = useState(false);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [hoveredSmall, setHoveredSmall] = useState(null);
  const [hoveredTab, setHoveredTab] = useState(null);
  const [hoveredReadBtn, setHoveredReadBtn] = useState(false);

  const visibleSmallPosts = showAll ? allSmallPosts : allSmallPosts.slice(0, 4);
  const featured = allFeaturedPosts[featuredIndex];

  return (
    <section style={{ background: "#fff", padding: "80px 0 90px" }}>
      <div style={{ width: "90%", maxWidth: 1200, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          gap: 20, marginBottom: 36, flexWrap: "wrap",
        }}>
          <h2 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(26px, 3vw, 40px)",
            fontWeight: 700, color: "#1a1a1a", margin: 0,
          }}>Our Blog &amp; Articles</h2>

          <button
            onClick={() => { setShowAll(!showAll); setFeaturedIndex(0); }}
            style={{
              background: ORANGE, color: "#fff", border: "none",
              padding: "12px 24px", borderRadius: 30,
              fontSize: 14, fontWeight: 600, cursor: "pointer",
              fontFamily: "inherit", whiteSpace: "nowrap",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#a83a1e"}
            onMouseLeave={e => e.currentTarget.style.background = ORANGE}
          >
            {showAll ? "Show Less ↑" : "Read All Articles →"}
          </button>
        </div>

        {/* ── Featured tabs (visible when expanded) ── */}
        {showAll && (
          <div style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
            {allFeaturedPosts.map((post, i) => (
              <button
                key={i}
                onClick={() => setFeaturedIndex(i)}
                onMouseEnter={() => setHoveredTab(i)}
                onMouseLeave={() => setHoveredTab(null)}
                style={{
                  background: featuredIndex === i ? ORANGE : hoveredTab === i ? ORANGE_LIGHT : "#f3f3f3",
                  color: featuredIndex === i ? "#fff" : hoveredTab === i ? ORANGE : "#555",
                  border: `1.5px solid ${featuredIndex === i ? ORANGE : hoveredTab === i ? ORANGE : "transparent"}`,
                  padding: "8px 20px", borderRadius: 30,
                  fontSize: 13.5, fontWeight: featuredIndex === i ? 600 : 500,
                  cursor: "pointer", fontFamily: "inherit",
                  transition: "all 0.2s",
                }}
              >
                {post.category}
              </button>
            ))}
          </div>
        )}

        {/* ── Main grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40, alignItems: "start",
        }}>

          {/* Featured post */}
          <div>
            {/* Image */}
            <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", marginBottom: 22 }}>
              <img
                src={featured.image}
                alt={featured.title}
                style={{
                  width: "100%", height: 320,
                  objectFit: "cover", display: "block",
                  transition: "transform 0.35s ease",
                }}
              />
              <span style={{
                position: "absolute", top: 14, left: 14,
                background: ORANGE, color: "#fff",
                fontSize: 11, fontWeight: 700,
                letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "4px 12px", borderRadius: 20,
              }}>{featured.category}</span>
            </div>

            {/* Content */}
            <span style={{ fontSize: 12, color: "#aaa", display: "block", marginBottom: 10 }}>
              {featured.date}
            </span>
            <h3 style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(18px, 2vw, 24px)",
              fontWeight: 700, color: "#1a1a1a",
              lineHeight: 1.35, margin: "0 0 12px",
            }}>{featured.title}</h3>
            <p style={{ fontSize: 14, color: "#737373", lineHeight: 1.8, margin: "0 0 20px" }}>
              {featured.desc}
            </p>

            <button
              onClick={() => alert(`Opening: "${featured.title}"`)}
              onMouseEnter={() => setHoveredReadBtn(true)}
              onMouseLeave={() => setHoveredReadBtn(false)}
              style={{
                background: hoveredReadBtn ? ORANGE : "transparent",
                color: hoveredReadBtn ? "#fff" : ORANGE,
                border: `1.5px solid ${ORANGE}`,
                padding: "10px 22px", borderRadius: 30,
                fontSize: 13.5, fontWeight: 600,
                cursor: "pointer", fontFamily: "inherit",
                transition: "all 0.2s",
              }}
            >
              Read Article →
            </button>
          </div>

          {/* Small posts 2×2 grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}>
            {visibleSmallPosts.map((post, index) => (
              <div
                key={index}
                onClick={() => alert(`Opening: "${post.title}"`)}
                onMouseEnter={() => setHoveredSmall(index)}
                onMouseLeave={() => setHoveredSmall(null)}
                style={{ display: "flex", flexDirection: "column", cursor: "pointer" }}
              >
                {/* Thumbnail */}
                <div style={{ borderRadius: 12, overflow: "hidden", marginBottom: 12, position: "relative" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{
                      width: "100%", height: 130,
                      objectFit: "cover", display: "block",
                      transform: hoveredSmall === index ? "scale(1.06)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <span style={{
                    position: "absolute", bottom: 8, left: 8,
                    background: "rgba(0,0,0,0.52)",
                    color: "#fff",
                    fontSize: 10, fontWeight: 700,
                    letterSpacing: "0.07em", textTransform: "uppercase",
                    padding: "3px 9px", borderRadius: 20,
                  }}>{post.category}</span>
                </div>

                <span style={{ fontSize: 12, color: "#aaa", display: "block", marginBottom: 6 }}>
                  {post.date}
                </span>
                <h4 style={{
                  fontSize: 13.5, fontWeight: 700, lineHeight: 1.5, margin: 0,
                  color: hoveredSmall === index ? ORANGE : "#1a1a1a",
                  transition: "color 0.2s",
                }}>{post.title}</h4>
              </div>
            ))}

            {/* Dashed load-more card */}
            
          </div>
        </div>

        {/* Collapse button */}
        
      

      </div>
    </section>
  );
}