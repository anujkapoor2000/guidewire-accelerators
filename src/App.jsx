import { useState } from "react";
import { CONFIG } from "./config.js";
import "./index.css";

export default function App() {
  const [activeId, setActiveId] = useState(CONFIG.segments[0]?.id);
  const activeSegment = CONFIG.segments.find((s) => s.id === activeId);
  const totalLinks = CONFIG.segments.reduce((a, s) => a + s.links.length, 0);

  return (
    <div className="root">
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="container">
        {/* ── HEADER ── */}
        <header className="header">
          <div className="header-eyebrow">AI Accelerator Hub</div>
          <h1 className="header-title">
            {CONFIG.siteName}
            <br />
            <span className="header-accent">{CONFIG.tagline}</span>
          </h1>
          <p className="header-subtitle">{CONFIG.subtitle}</p>
        </header>

        {/* ── TABS ── */}
        <nav className="tabs" role="tablist" aria-label="Segments">
          {CONFIG.segments.map((seg) => (
            <button
              key={seg.id}
              className={`tab${activeId === seg.id ? " active" : ""}`}
              onClick={() => setActiveId(seg.id)}
              style={activeId === seg.id ? { color: seg.accent } : {}}
              role="tab"
              aria-selected={activeId === seg.id}
            >
              <span
                className="tab-icon"
                style={activeId === seg.id ? { color: seg.accent } : {}}
              >
                {seg.icon}
              </span>
              {seg.label}
            </button>
          ))}
        </nav>

        {/* ── SEGMENT CONTENT ── */}
        {activeSegment && (
          <div key={activeSegment.id} className="segment-content">
            {/* Segment header */}
            <div className="segment-header">
              <span
                className="segment-icon-lg"
                style={{ color: activeSegment.accent }}
              >
                {activeSegment.icon}
              </span>
              <div>
                <div
                  className="segment-label"
                  style={{ color: activeSegment.accent }}
                >
                  {activeSegment.label}
                </div>
                <div className="segment-desc">{activeSegment.description}</div>
              </div>
            </div>

            {/* Cards grid */}
            {activeSegment.links.length > 0 ? (
              <div className="cards-grid">
                {activeSegment.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card"
                    style={{ "--card-accent": activeSegment.accent }}
                  >
                    <div className="card-top">
                      <span className="card-title">{link.title}</span>
                      <span className="card-arrow">↗</span>
                    </div>
                    <p className="card-desc">{link.description}</p>
                    <span
                      className="card-tag"
                      style={{
                        color: activeSegment.accent,
                        borderColor: `${activeSegment.accent}40`,
                      }}
                    >
                      {link.tag}
                    </span>
                  </a>
                ))}
              </div>
            ) : (
              <div className="empty-state">No links added yet.</div>
            )}
          </div>
        )}

        {/* ── ADD SEGMENT HINT ── */}
        <div className="add-hint">
          <div className="add-hint-icon">＋</div>
          <div>
            <strong>Add a new segment or link</strong>
            <span>
              Edit <code>src/config.js</code> — add a segment object or a link
              to an existing segment and redeploy.
            </span>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer className="footer">
          <div className="footer-brand">
            Guidewire AI Hub
            <span className="footer-dot" />
            Accelerators
          </div>
          <div className="footer-note">
            {CONFIG.segments.length} segment{CONFIG.segments.length !== 1 ? "s" : ""} ·{" "}
            {totalLinks} accelerator{totalLinks !== 1 ? "s" : ""}
          </div>
        </footer>
      </div>
    </div>
  );
}
