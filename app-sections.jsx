// About, Skills, Projects, Games sections.
// Globals: React, CONTENT, CONTENT_2.

const { useState, useMemo } = React;

/* ============================================================
   SECTION HEAD
   ============================================================ */
function SectionHead({ id, title }) {
  return (
    <div className="section__head">
      <h2 className="section__title">{title}</h2>
      <div className="section__id">{id}</div>
    </div>
  );
}

/* ============================================================
   ABOUT
   ============================================================ */
function About({ lang }) {
  const t = CONTENT.about[lang];
  return (
    <section id="about">
      <SectionHead title={t.title} id={t.id} />
      <div className="about">
        <div className="about__bio">
          {t.bio.map((p, i) => (
            <p key={i} className={i === 0 ? '' : i === 2 ? 'dim' : ''}>
              {p}
            </p>
          ))}
        </div>
        <div className="about__stats">
          {t.stats.map(([value, label], i) => (
            <div className="stat" key={i}>
              <span className="stat__value">{value}</span>
              <span className="stat__label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SKILLS
   ============================================================ */
function Skills({ lang }) {
  const t = CONTENT.skills[lang];
  return (
    <section id="skills">
      <SectionHead title={t.title} id={t.id} />
      <div className="skills__grid">
        {t.groups.map((g) => (
          <div className="skills__cell" key={g.ix}>
            <div className="skills__cell-head">
              <span className="ix">[{g.ix}]</span>
              <span>{g.name}</span>
            </div>
            <ul className="skills__list">
              {g.items.map(([name, age], i) => (
                <li key={i}>
                  <span style={{ color: 'var(--fg)' }}>{name}</span>
                  <span>{age}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   GLYPHS for project cards — only circles/lines/rect primitives
   ============================================================ */
function ProjGlyph({ kind }) {
  // colors via currentColor / class
  switch (kind) {
    case 'quadruped':
      return (
        <svg viewBox="0 0 200 140" className="proj__image-glyph">
          <line x1="40" y1="60" x2="160" y2="60" stroke="#888" strokeWidth="2" />
          <rect x="60" y="40" width="80" height="40" stroke="#888" strokeWidth="1" fill="none" />
          {/* arm */}
          <line x1="140" y1="40" x2="170" y2="20" stroke="var(--accent)" strokeWidth="2" />
          <line x1="170" y1="20" x2="185" y2="35" stroke="var(--accent)" strokeWidth="2" />
          <circle cx="140" cy="40" r="3" fill="var(--accent)" />
          <circle cx="170" cy="20" r="3" fill="var(--accent)" />
          <circle cx="185" cy="35" r="3" fill="var(--accent)" />
          {/* legs */}
          {[70, 95, 130, 150].map((x, i) => (
            <g key={i}>
              <line x1={x} y1="80" x2={x - 4} y2="110" stroke="#aaa" strokeWidth="1.5" />
              <line x1={x - 4} y1="110" x2={x - 2} y2="125" stroke="#aaa" strokeWidth="1.5" />
              <circle cx={x} cy="80" r="2.5" fill="#aaa" />
              <circle cx={x - 4} cy="110" r="2" fill="#aaa" />
            </g>
          ))}
          {/* sensors */}
          <line x1="60" y1="50" x2="48" y2="44" stroke="#888" strokeWidth="1" />
          <circle cx="48" cy="44" r="3" fill="#888" />
          <text x="6" y="12" className="bot-label">SPOT · MPC</text>
        </svg>
      );
    case 'humanoid':
      return (
        <svg viewBox="0 0 200 140" className="proj__image-glyph">
          <circle cx="100" cy="32" r="10" stroke="#aaa" strokeWidth="1.5" fill="none" />
          <line x1="100" y1="42" x2="100" y2="80" stroke="#aaa" strokeWidth="2" />
          <line x1="78" y1="50" x2="122" y2="50" stroke="#aaa" strokeWidth="2" />
          <line x1="78" y1="50" x2="68" y2="78" stroke="var(--accent)" strokeWidth="2" />
          <line x1="68" y1="78" x2="74" y2="100" stroke="var(--accent)" strokeWidth="2" />
          <line x1="122" y1="50" x2="132" y2="78" stroke="var(--accent)" strokeWidth="2" />
          <line x1="132" y1="78" x2="126" y2="100" stroke="var(--accent)" strokeWidth="2" />
          <line x1="92" y1="80" x2="86" y2="115" stroke="#aaa" strokeWidth="2" />
          <line x1="108" y1="80" x2="114" y2="115" stroke="#aaa" strokeWidth="2" />
          <line x1="86" y1="115" x2="88" y2="125" stroke="#aaa" strokeWidth="2" />
          <line x1="114" y1="115" x2="112" y2="125" stroke="#aaa" strokeWidth="2" />
          {[[100, 42], [78, 50], [122, 50], [68, 78], [132, 78], [92, 80], [108, 80]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.5" fill="var(--accent)" />
          ))}
          <text x="6" y="12" className="bot-label">HUMANOID · ROBOCUP</text>
        </svg>
      );
    case 'gait':
      return (
        <svg viewBox="0 0 200 140" className="proj__image-glyph">
          {/* phase plot */}
          <line x1="20" y1="100" x2="180" y2="100" stroke="#666" strokeWidth="1" />
          <line x1="20" y1="30" x2="20" y2="110" stroke="#666" strokeWidth="1" />
          {Array.from({ length: 40 }).map((_, i) => {
            const x = 20 + i * 4;
            const y = 70 + Math.sin(i * 0.4) * 28;
            return <circle key={i} cx={x} cy={y} r="1.5" fill={i % 8 < 4 ? 'var(--accent)' : '#aaa'} />;
          })}
          <line x1="20" y1="70" x2="180" y2="70" stroke="rgba(255,90,31,0.3)" strokeWidth="0.5" strokeDasharray="3 3" />
          <text x="6" y="12" className="bot-label">GAIT · BIPEDAL</text>
          <text x="22" y="125" className="bot-label">t</text>
          <text x="160" y="40" className="bot-label" style={{ fill: 'var(--accent)' }}>L FOOT</text>
          <text x="160" y="105" className="bot-label">R FOOT</text>
        </svg>
      );
    case 'mesh':
      return (
        <svg viewBox="0 0 200 140" className="proj__image-glyph">
          {/* mesh triangles */}
          {Array.from({ length: 8 }).map((_, i) =>
            Array.from({ length: 5 }).map((_, j) => {
              const x = 20 + i * 22;
              const y = 30 + j * 18 + (i % 2) * 9;
              return (
                <polygon
                  key={`${i}-${j}`}
                  points={`${x},${y} ${x + 18},${y - 4} ${x + 22},${y + 14}`}
                  stroke="#666"
                  strokeWidth="0.8"
                  fill="none"
                />
              );
            })
          )}
          <circle cx="100" cy="70" r="8" fill="var(--accent)" />
          <text x="6" y="12" className="bot-label">MESH · TERRAIN</text>
        </svg>
      );
    case 'eye':
      return (
        <svg viewBox="0 0 200 140" className="proj__image-glyph">
          <circle cx="100" cy="70" r="44" stroke="#888" strokeWidth="1.5" fill="none" />
          <circle cx="100" cy="70" r="20" stroke="var(--accent)" strokeWidth="2" fill="none" />
          <circle cx="100" cy="70" r="4" fill="var(--accent)" />
          {/* scan ticks */}
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * Math.PI * 2;
            const x1 = 100 + Math.cos(a) * 50;
            const y1 = 70 + Math.sin(a) * 50;
            const x2 = 100 + Math.cos(a) * 56;
            const y2 = 70 + Math.sin(a) * 56;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#666" strokeWidth="1" />;
          })}
          <rect x="60" y="36" width="30" height="20" stroke="var(--accent)" strokeWidth="1" fill="none" />
          <rect x="118" y="80" width="24" height="16" stroke="var(--accent)" strokeWidth="1" fill="none" />
          <text x="6" y="12" className="bot-label">YOLO · DETECT</text>
        </svg>
      );
    case 'brain':
      return (
        <svg viewBox="0 0 200 140" className="proj__image-glyph">
          {/* nn layers */}
          {[40, 80, 120, 160].map((x, li) => {
            const nodes = [3, 5, 5, 2][li];
            return Array.from({ length: nodes }).map((_, i) => {
              const y = 70 + (i - (nodes - 1) / 2) * 18;
              return (
                <g key={`${li}-${i}`}>
                  {li < 3 &&
                    Array.from({ length: [5, 5, 2][li] }).map((_, j) => {
                      const ny = 70 + (j - ([5, 5, 2][li] - 1) / 2) * 18;
                      return (
                        <line
                          key={j}
                          x1={x}
                          y1={y}
                          x2={x + 40}
                          y2={ny}
                          stroke="rgba(232,230,225,0.12)"
                          strokeWidth="0.6"
                        />
                      );
                    })}
                  <circle
                    cx={x}
                    cy={y}
                    r="3.5"
                    fill={li === 0 || li === 3 ? 'var(--accent)' : '#888'}
                  />
                </g>
              );
            });
          })}
          <text x="6" y="12" className="bot-label">LLM · ADAPTIVE</text>
        </svg>
      );
    default:
      return null;
  }
}

/* ============================================================
   PROJECTS
   ============================================================ */
function Projects({ lang }) {
  const t = CONTENT_2.projects[lang];
  const [filter, setFilter] = useState(t.filters[0]);

  // map filter to category match
  const filterMap = {
    [t.filters[0]]: null,
    [t.filters[1]]: lang === 'pt' ? 'Humanoide' : 'Humanoid',
    [t.filters[2]]: lang === 'pt' ? 'Quadrúpede' : 'Quadruped',
    [t.filters[3]]: 'Control',
    [t.filters[4]]: lang === 'pt' ? 'Visão' : 'Vision',
  };
  // The "Controle/Control" filter doesn't have a direct category — let it grab MPC items via chips
  const filtered = useMemo(() => {
    const cat = filterMap[filter];
    if (!cat) return t.items;
    if (cat === 'Control') {
      return t.items.filter((p) => p.chips.includes('MPC') || p.chips.includes('OSQP'));
    }
    return t.items.filter((p) => p.cat === cat);
  }, [filter, lang]);

  return (
    <section id="projects">
      <SectionHead title={t.title} id={t.id} />
      <div className="proj__filters">
        {t.filters.map((f) => (
          <button
            key={f}
            className={`proj__filter${f === filter ? ' is-active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
        <span className="proj__count">
          {String(filtered.length).padStart(2, '0')} / {String(t.items.length).padStart(2, '0')} {t.countLabel}
        </span>
      </div>
      <div className="proj__grid">
        {filtered.map((p) => (
          <article className="proj__card" key={p.id}>
            <div className="proj__card-head">
              <span className="proj__id">{p.id}</span>
              <span className={`proj__status ${p.status === 'ongoing' ? 'is-ongoing' : 'is-completed'}`}>
                {p.status === 'ongoing'
                  ? lang === 'pt'
                    ? 'EM ANDAMENTO'
                    : 'ONGOING'
                  : lang === 'pt'
                  ? 'CONCLUÍDO'
                  : 'COMPLETED'}
              </span>
            </div>
            <div className="proj__image">
              <div className="proj__image-grid" />
              <ProjGlyph kind={p.glyph} />
              <span className="proj__image-tag">{p.tag}</span>
            </div>
            <div className="proj__body">
              <h3 className="proj__title">{p.title}</h3>
              <div className="proj__role">{p.role}</div>
              <p className="proj__desc">{p.desc}</p>
              <div className="proj__chips">
                {p.chips.map((c) => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   GAMES
   ============================================================ */
function GameScreen({ slug }) {
  // pixel-ish placeholder using primitives
  const palettes = {
    NIGHT_PATROL: ['#1a1a28', '#2a3a55', '#ff5a1f'],
    COG_CITY: ['#2a1a14', '#5a4030', '#ff5a1f'],
    ADAPT_QUEST: ['#0a1a14', '#1a4040', '#ff5a1f'],
  };
  const [bg, mid, fg] = palettes[slug] || ['#181818', '#2a2a2a', '#ff5a1f'];
  return (
    <svg viewBox="0 0 160 120" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <rect width="160" height="120" fill={bg} />
      {/* pixel "ground" */}
      <rect x="0" y="80" width="160" height="40" fill={mid} />
      {/* sky elements */}
      {slug === 'NIGHT_PATROL' &&
        Array.from({ length: 24 }).map((_, i) => (
          <rect key={i} x={(i * 13) % 160} y={(i * 7) % 60} width="2" height="2" fill="#666" />
        ))}
      {slug === 'COG_CITY' &&
        [0, 1, 2].map((i) => (
          <g key={i}>
            <circle cx={30 + i * 50} cy={40} r={14 - i * 2} stroke={fg} strokeWidth="2" fill="none" />
            {Array.from({ length: 8 }).map((_, j) => {
              const a = (j / 8) * Math.PI * 2;
              const r = 14 - i * 2;
              return (
                <line
                  key={j}
                  x1={30 + i * 50 + Math.cos(a) * r}
                  y1={40 + Math.sin(a) * r}
                  x2={30 + i * 50 + Math.cos(a) * (r + 3)}
                  y2={40 + Math.sin(a) * (r + 3)}
                  stroke={fg}
                  strokeWidth="1.5"
                />
              );
            })}
          </g>
        ))}
      {slug === 'ADAPT_QUEST' &&
        [0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={20 + i * 32} y={50 - i * 2} width="8" height="32 + i*2" stroke={fg} strokeWidth="1" fill="none" height={32 + i * 2} />
            <circle cx={24 + i * 32} cy={46 - i * 2} r="3" fill={fg} />
          </g>
        ))}
      {/* sprite */}
      <g>
        <rect x={75} y={66} width="10" height="14" fill={fg} />
        <rect x={77} y={62} width="6" height="6" fill={fg} />
      </g>
      {/* hud bar */}
      <rect x="6" y="6" width="40" height="6" fill="none" stroke={fg} strokeWidth="1" />
      <rect x="7" y="7" width="28" height="4" fill={fg} />
    </svg>
  );
}

function Games({ lang }) {
  const t = CONTENT_2.games[lang];
  return (
    <section id="games" className="games">
      <SectionHead title={t.title} id={t.id} />
      <p style={{ color: 'var(--fg-dim)', maxWidth: 560, marginBottom: 28, marginTop: -12, fontSize: 15 }}>
        {t.sub}
      </p>
      <div className="games__grid">
        {t.items.map((g) => (
          <article className="game" key={g.id}>
            <div className="game__screen">
              <GameScreen slug={g.slug} />
              <div className="game__scanlines" />
              <span className="game__corner">{g.status}</span>
              <span className="game__pixel-title">{g.slug}</span>
            </div>
            <div className="game__body">
              <div className="game__meta">
                <span>{g.id}</span>
                <span>{g.engine}</span>
              </div>
              <h3 className="game__title">{g.title}</h3>
              <p className="game__desc">{g.desc}</p>
              <div className="game__meta" style={{ marginTop: 4 }}>
                <span>{g.genre}</span>
              </div>
              {g.href ? (
                <a className="game__cta" href={g.href} target="_blank" rel="noopener">
                  <span>{t.cta}</span>
                  <span>▶</span>
                </a>
              ) : (
                <div className="game__cta">
                  <span>{t.cta}</span>
                  <span>▶</span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { About, Skills, Projects, Games, SectionHead });
