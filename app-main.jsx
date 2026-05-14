// Experience, Awards, Education, Contact, Footer + App root.
// Globals: React, ReactDOM, CONTENT, CONTENT_2, CONTENT_3, Topbar, Hero, About, Skills, Projects, Games, SectionHead.

const { useState, useEffect } = React;

/* ============================================================
   EXPERIENCE
   ============================================================ */
function Experience({ lang }) {
  const t = CONTENT_3.experience[lang];
  return (
    <section id="experience">
      <SectionHead title={t.title} id={t.id} />
      <div className="xp__list">
        {t.items.map((it, i) => (
          <div key={i} className={`xp__entry${it.current ? ' is-current' : ''}`}>
            <div className="xp__row">
              <div className="xp__when">
                <b>{it.when}</b>
                {it.dur}
              </div>
              <div className="xp__body">
                <div className="xp__role">{it.role}</div>
                <div className="xp__where">
                  <b>{it.where.split(' · ')[0]}</b>
                  {it.where.includes('·') ? ' · ' + it.where.split(' · ').slice(1).join(' · ') : ''}
                </div>
                <ul className="xp__notes">
                  {it.notes.map((n, j) => (
                    <li key={j}>{n}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   AWARDS
   ============================================================ */
function Awards({ lang }) {
  const t = CONTENT_3.awards[lang];
  return (
    <section id="awards">
      <SectionHead title={t.title} id={t.id} />
      <div className="awards__grid">
        {t.items.map((a, i) => (
          <div className="award" key={i}>
            <div className="award__rank">{String(i + 1).padStart(2, '0')}</div>
            <div className="award__year">{a.year}</div>
            <div className={`award__medal is-${a.medal}`}>{a.label}</div>
            <div className="award__title">{a.title}</div>
            <div className="award__sub">{a.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   EDUCATION
   ============================================================ */
function Education({ lang }) {
  const t = CONTENT_3.education[lang];
  return (
    <section id="education">
      <SectionHead title={t.title} id={t.id} />
      <div className="edu">
        {[t.academic, t.training].map((block, bi) => (
          <div className="edu__block" key={bi}>
            <h4>{block.head}</h4>
            {block.items.map((it, i) => (
              <div className="edu__item" key={i}>
                <div className="edu__item-row">
                  <span className="edu__item-title">{it.title}</span>
                  <span className="edu__item-when">{it.when}</span>
                </div>
                <div className="edu__item-where">{it.where}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT
   ============================================================ */
function Contact({ lang }) {
  const t = CONTENT_3.contact[lang];
  return (
    <section id="contact" className="contact">
      <SectionHead title={t.title} id={t.id} />
      <div className="contact__grid">
        <div>
          <h2 className="contact__lead">{t.lead.map((p, i) => (typeof p === 'string' ? <span key={i}>{p}</span> : p))}</h2>
          <p style={{ marginTop: 16, color: 'var(--fg-dim)', fontSize: 16, maxWidth: 380 }}>{t.sub}</p>
        </div>
        <div className="contact__cta">
          {t.rows.map(([label, val, href], i) => {
            const inner = (
              <>
                <span className="lab">{label}</span>
                <span>{val}</span>
              </>
            );
            return href ? (
              <a key={i} className="contact__row" href={href} target="_blank" rel="noopener">
                {inner}
              </a>
            ) : (
              <div key={i} className="contact__row">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer({ lang }) {
  return (
    <footer className="footer">
      <span>© 2026 Pedro H. B. Peres · Built with HTML, CSS, intentos</span>
      <span>
        SYS:OK · PHBP-portfolio.v26 <span className="footer__cursor">█</span>
      </span>
    </footer>
  );
}

/* ============================================================
   APP ROOT
   ============================================================ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/ {
  "language": "pt",
  "accent": "#5b8ef5",
  "tone": "hybrid",
  "showGrid": false
} /*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLang] = useState(tweaks.language || 'pt');

  // sync lang ↔ tweaks
  useEffect(() => {
    if (tweaks.language !== lang) setLang(tweaks.language);
  }, [tweaks.language]);
  const setLangBoth = (v) => {
    setLang(v);
    setTweak('language', v);
  };

  // apply accent + bg grid
  useEffect(() => {
    document.documentElement.style.setProperty('--accent', tweaks.accent);
    // derive a dim version (just darken)
    const dim = tweaks.accent + '99';
    document.documentElement.style.setProperty('--accent-dim', dim);
    document.body.style.backgroundImage = tweaks.showGrid
      ? 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)'
      : 'none';
    document.body.style.backgroundSize = '32px 32px';
  }, [tweaks.accent, tweaks.showGrid]);

  const nav = CONTENT.nav[lang];

  return (
    <>
      <Topbar lang={lang} setLang={setLangBoth} sections={nav} />
      <div className="app">
        <Hero lang={lang} tone={tweaks.tone} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Games lang={lang} />
        <Experience lang={lang} />
        <Awards lang={lang} />
        <Education lang={lang} />
        <Contact lang={lang} />
        <Footer lang={lang} />
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Idioma">
          <TweakRadio
            label="Language"
            value={tweaks.language}
            options={[
              { value: 'pt', label: 'PT' },
              { value: 'en', label: 'EN' },
            ]}
            onChange={(v) => setTweak('language', v)}
          />
        </TweakSection>

        <TweakSection label="Visual">
          <TweakColor
            label="Cor de destaque"
            value={tweaks.accent}
            options={['#5b8ef5', '#ff5a1f', '#6dd58c', '#e8e6e1']}
            onChange={(v) => setTweak('accent', v)}
          />
          <TweakToggle
            label="Grid de fundo"
            value={tweaks.showGrid}
            onChange={(v) => setTweak('showGrid', v)}
          />
        </TweakSection>

        <TweakSection label="Direção">
          <TweakSelect
            label="Tom"
            value={tweaks.tone}
            options={[
              { value: 'hybrid', label: 'Híbrido (default)' },
              { value: 'robotics', label: 'Foco robótica' },
              { value: 'games', label: 'Foco game dev' },
            ]}
            onChange={(v) => setTweak('tone', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
