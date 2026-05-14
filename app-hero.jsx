// Hero + Telemetry panel + Topbar.
// Globals expected: React, CONTENT.

const { useState, useEffect, useRef, useMemo } = React;

/* ============================================================
   TOPBAR
   ============================================================ */
function Topbar({ lang, setLang, sections }) {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const h = String(d.getHours()).padStart(2, '0');
      const m = String(d.getMinutes()).padStart(2, '0');
      const s = String(d.getSeconds()).padStart(2, '0');
      setTime(`${h}:${m}:${s} BRT`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const navAnchors = ['about', 'skills', 'projects', 'games', 'experience', 'awards', 'contact'];

  return (
    <div className="topbar">
      <div className="topbar__left">
        <div className="topbar__sig">
          <span className="topbar__dot" />
          <span>PHBP · v26.05</span>
        </div>
        <span className="topbar__nav-time dim" style={{ marginLeft: 4 }}>
          {time}
        </span>
      </div>
      <nav className="topbar__nav">
        {sections.map((label, i) => (
          <a key={i} href={`#${navAnchors[i]}`}>
            {String(i + 1).padStart(2, '0')}_{label}
          </a>
        ))}
      </nav>
      <div className="topbar__right">
        <div className="lang-toggle" role="tablist">
          <button
            className={lang === 'pt' ? 'is-active' : ''}
            onClick={() => setLang('pt')}
          >
            PT
          </button>
          <button
            className={lang === 'en' ? 'is-active' : ''}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   HUMANOID DIAGRAM (only circles + lines + text — primitives)
   ============================================================ */
function HumanoidDiagram() {
  // Subtle joint angle drift to feel "live"
  const [t, setT] = useState(0);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const loop = (now) => {
      setT((now - start) / 1000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const sway = Math.sin(t * 0.6) * 4;
  const elbow = Math.sin(t * 0.8) * 8;
  const knee = Math.sin(t * 1.1) * 6;

  // body coords (centered around x=100)
  const cx = 100;
  const headY = 28;
  const neckY = 50;
  const hipY = 110;
  const kneeY = 145 + knee * 0.3;
  const footY = 180;
  const shoulderY = 58;
  const elbowY = 88 + elbow * 0.2;
  const wristY = 118 + elbow * 0.4;

  return (
    <svg viewBox="0 0 200 220" className="bot-svg" preserveAspectRatio="xMidYMid meet">
      {/* frame */}
      <g className="bot-tick" stroke="currentColor">
        <line x1="10" y1="10" x2="20" y2="10" />
        <line x1="10" y1="10" x2="10" y2="20" />
        <line x1="190" y1="10" x2="180" y2="10" />
        <line x1="190" y1="10" x2="190" y2="20" />
        <line x1="10" y1="210" x2="20" y2="210" />
        <line x1="10" y1="210" x2="10" y2="200" />
        <line x1="190" y1="210" x2="180" y2="210" />
        <line x1="190" y1="210" x2="190" y2="200" />
      </g>

      {/* center vertical guideline */}
      <line
        x1={cx}
        y1={20}
        x2={cx}
        y2={200}
        stroke="rgba(91,142,245,0.18)"
        strokeWidth="0.5"
        strokeDasharray="2 3"
      />

      {/* spine */}
      <line x1={cx + sway * 0.4} y1={neckY} x2={cx} y2={hipY} className="bot-link" />

      {/* shoulders */}
      <line x1={cx - 22} y1={shoulderY} x2={cx + 22} y2={shoulderY} className="bot-link" />

      {/* left arm */}
      <line x1={cx - 22} y1={shoulderY} x2={cx - 26 + elbow * 0.4} y2={elbowY} className="bot-link" />
      <line x1={cx - 26 + elbow * 0.4} y1={elbowY} x2={cx - 30 + elbow * 0.8} y2={wristY} className="bot-link" />

      {/* right arm */}
      <line x1={cx + 22} y1={shoulderY} x2={cx + 26 - elbow * 0.4} y2={elbowY} className="bot-link" />
      <line x1={cx + 26 - elbow * 0.4} y1={elbowY} x2={cx + 30 - elbow * 0.8} y2={wristY} className="bot-link" />

      {/* hips */}
      <line x1={cx - 14} y1={hipY} x2={cx + 14} y2={hipY} className="bot-link" />

      {/* left leg */}
      <line x1={cx - 14} y1={hipY} x2={cx - 16 + sway * 0.2} y2={kneeY} className="bot-link" />
      <line x1={cx - 16 + sway * 0.2} y1={kneeY} x2={cx - 18} y2={footY} className="bot-link" />

      {/* right leg */}
      <line x1={cx + 14} y1={hipY} x2={cx + 16 - sway * 0.2} y2={kneeY} className="bot-link" />
      <line x1={cx + 16 - sway * 0.2} y1={kneeY} x2={cx + 18} y2={footY} className="bot-link" />

      {/* foot bases */}
      <line x1={cx - 24} y1={footY} x2={cx - 12} y2={footY} className="bot-link" />
      <line x1={cx + 24} y1={footY} x2={cx + 12} y2={footY} className="bot-link" />

      {/* head */}
      <circle cx={cx + sway * 0.4} cy={headY} r="10" className="bot-joint--head" />
      <circle cx={cx + sway * 0.4 - 3} cy={headY - 1} r="1.2" fill="currentColor" style={{ color: 'var(--accent)' }} />
      <circle cx={cx + sway * 0.4 + 3} cy={headY - 1} r="1.2" fill="currentColor" style={{ color: 'var(--accent)' }} />

      {/* joints */}
      {[
        [cx + sway * 0.4, neckY, 'NECK'],
        [cx - 22, shoulderY, 'SHLD_L'],
        [cx + 22, shoulderY, 'SHLD_R'],
        [cx - 26 + elbow * 0.4, elbowY, 'ELB_L'],
        [cx + 26 - elbow * 0.4, elbowY, 'ELB_R'],
        [cx, hipY, 'HIP'],
        [cx - 14, hipY, ''],
        [cx + 14, hipY, ''],
        [cx - 16 + sway * 0.2, kneeY, 'KNEE_L'],
        [cx + 16 - sway * 0.2, kneeY, 'KNEE_R'],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" className="bot-joint" />
      ))}

      {/* labels */}
      <text x={cx + 38} y={headY + 2} className="bot-label">HEAD · IMU</text>
      <line x1={cx + 12} y1={headY} x2={cx + 36} y2={headY} stroke="rgba(232,230,225,0.18)" strokeWidth="0.5" />

      <text x={cx + 38} y={shoulderY + 2} className="bot-label">J_SHLD · 6DOF</text>
      <line x1={cx + 22} y1={shoulderY} x2={cx + 36} y2={shoulderY} stroke="rgba(232,230,225,0.18)" strokeWidth="0.5" />

      <text x={cx - 92} y={hipY + 2} className="bot-label">J_HIP · LINEAR</text>
      <line x1={cx - 14} y1={hipY} x2={cx - 38} y2={hipY} stroke="rgba(232,230,225,0.18)" strokeWidth="0.5" />

      <text x={cx + 38} y={kneeY + 2} className="bot-label">J_KNEE · RL</text>
      <line x1={cx + 18} y1={kneeY} x2={cx + 36} y2={kneeY} stroke="rgba(232,230,225,0.18)" strokeWidth="0.5" />
    </svg>
  );
}

/* ============================================================
   TELEMETRY READOUT
   ============================================================ */
function Telemetry() {
  const [vals, setVals] = useState({ batt: 87, cpu: 42, imu: 0.12, mpc: 0.92 });
  useEffect(() => {
    const id = setInterval(() => {
      setVals((v) => ({
        batt: Math.max(60, Math.min(99, v.batt + (Math.random() - 0.5) * 1.2)),
        cpu: Math.max(20, Math.min(80, v.cpu + (Math.random() - 0.5) * 4)),
        imu: Math.max(0, Math.min(0.4, v.imu + (Math.random() - 0.5) * 0.04)),
        mpc: Math.max(0.85, Math.min(0.99, v.mpc + (Math.random() - 0.5) * 0.01)),
      }));
    }, 1200);
    return () => clearInterval(id);
  }, []);

  const feedItems = [
    '[ROS2] node /mpc_controller :: heartbeat OK',
    '[GAIT] phase=stance · com_offset=0.018m',
    '[VISION] yolo_v8 inference 14.2ms',
    '[ARM] torque_compensation=feedforward',
    '[RL] policy=walk_v17 reward=412.3',
    '[ESP32] imu0 latency=2.1ms',
    '[OSQP] solved in 0.84ms · feasible',
    '[SIM] gazebo step=200hz · stable',
  ];

  return (
    <div className="telemetry">
      <div className="telemetry__head">
        <span>UNIT_PHBP-01 · OPERATOR FEED</span>
        <span className="live">LIVE</span>
      </div>
      <div className="telemetry__viz">
        <div className="telemetry__diagram">
          <HumanoidDiagram />
        </div>
        <div className="telemetry__readout">
          <div className="telemetry__readout-row is-ok">
            <span>BATT</span>
            <b>{vals.batt.toFixed(1)}%</b>
          </div>
          <div className="telemetry__readout-row">
            <span>CPU_LOAD</span>
            <b>{vals.cpu.toFixed(1)}%</b>
          </div>
          <div className="telemetry__readout-row">
            <span>IMU_DRIFT</span>
            <b>{vals.imu.toFixed(3)} rad</b>
          </div>
          <div className="telemetry__readout-row is-warn">
            <span>MPC_CONF</span>
            <b>{vals.mpc.toFixed(2)}</b>
          </div>
          <div className="telemetry__readout-row">
            <span>STACK</span>
            <b>ROS2 · OSQP</b>
          </div>
          <div className="telemetry__readout-row">
            <span>MODE</span>
            <b>WALK · v17</b>
          </div>
          <div className="telemetry__readout-row is-ok">
            <span>NETWORK</span>
            <b>OPEN</b>
          </div>
          <div className="telemetry__readout-row">
            <span>SUBJECT</span>
            <b>HUMANOID</b>
          </div>
        </div>
      </div>
      <div className="telemetry__feed">
        <div className="telemetry__feed-track">
          {[...feedItems, ...feedItems].map((s, i) => (
            <span key={i}>
              <b>›</b> {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function Hero({ lang }) {
  const t = CONTENT.hero[lang];
  return (
    <section className="hero" id="top">
      <div className="hero__grid">
        <div className="hero__left">
          <div className="hero__greet">
            <span className="topbar__dot" />
            {t.greet}
          </div>
          <div>
            <h1 className="hero__name">
              {t.name.map((piece, i) =>
                typeof piece === 'string' ? <span key={i}>{piece} </span> : piece
              )}
            </h1>
            <p className="hero__role">{t.role}</p>
          </div>
          <div className="hero__cta">
            <a className="btn btn--primary" href="CurriculoPedroPeres.pdf" download>
              {t.cv} <span className="btn__arrow">↓</span>
            </a>
            <a className="btn" href="#contact">
              {t.contact} <span className="btn__arrow">→</span>
            </a>
          </div>
          <div className="hero__meta">
            {t.metaLabels.map((lab, i) => (
              <div key={i} className="hero__meta-cell">
                <span className="hero__meta-label">{lab}</span>
                <span className="hero__meta-value">{t.metaValues[i]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__right">
          <Telemetry />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Topbar, Hero, Telemetry, HumanoidDiagram });
