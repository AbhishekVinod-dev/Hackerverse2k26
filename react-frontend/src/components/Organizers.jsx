import { useState, useEffect, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const METRICS = [
  { label: 'HACKATHONS_RUN', value: 12, suffix: '+', icon: 'terminal' },
  { label: 'MEMBERS_ONLINE', value: 5000, suffix: '+', icon: 'group' },
  { label: 'COUNTRIES_LINKED', value: 30, suffix: '', icon: 'public' },
  { label: 'UPTIME', value: 99.9, suffix: '%', icon: 'speed' },
];

const LOG_ENTRIES = [
  { time: '11:42:01', msg: 'HackerVerse 2026 initialized', type: 'ok' },
  { time: '11:42:03', msg: 'Sponsor modules loaded', type: 'ok' },
  { time: '11:42:05', msg: 'Mentor network connected', type: 'ok' },
  { time: '11:42:06', msg: 'Registration portal ACTIVE', type: 'warn' },
  { time: '11:42:08', msg: 'All systems nominal', type: 'ok' },
];

function MetricPanel({ metric, visible, delay }) {
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    if (!visible || animated.current || !ref.current) return;
    const timeout = setTimeout(() => {
      animated.current = true;
      const end = metric.value;
      const isDecimal = end % 1 !== 0;
      const dur = 1500;
      const start = performance.now();
      function step(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = eased * end;
        if (ref.current) ref.current.textContent = (isDecimal ? val.toFixed(1) : Math.floor(val)) + metric.suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timeout);
  }, [visible, metric.value, metric.suffix, delay]);

  return (
    <div className={`border border-neon-green/20 bg-black/60 p-4 transition-all duration-500 hover:border-neon-green/50 group ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex items-center justify-between mb-3">
        <span className="material-symbols-outlined text-neon-green/40 text-lg group-hover:text-neon-green/70 transition-colors">{metric.icon}</span>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
          <span className="font-mono text-[8px] text-neon-green/50">LIVE</span>
        </div>
      </div>
      <div ref={ref} className="font-display-xl text-2xl text-neon-green font-bold stat-number mb-1">
        0{metric.suffix}
      </div>
      <div className="font-label-mono text-[9px] text-on-surface-variant/50 tracking-widest">{metric.label}</div>
    </div>
  );
}

export default function Organizers() {
  const [ref, visible] = useScrollReveal();
  const [logLines, setLogLines] = useState([]);
  const triggered = useRef(false);

  useEffect(() => {
    if (!visible || triggered.current) return;
    triggered.current = true;
    LOG_ENTRIES.forEach((_, i) => {
      setTimeout(() => setLogLines(prev => [...prev, i]), 400 + i * 300);
    });
  }, [visible]);

  return (
    <section className="py-24 px-6 bg-[#060606] border-y-2 border-neon-green/30" id="organizers">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className={`flex items-center justify-between mb-10 reveal ${visible ? 'visible' : ''}`}>
          <div>
            <h2 className="font-headline-lg text-primary uppercase">ORGANIZED_BY</h2>
            <p className="font-label-mono text-[10px] text-neon-green/40 tracking-widest mt-1">MISSION CONTROL — CODEKRAFTERS HQ</p>
          </div>
          <div className="hidden md:flex items-center gap-2 border border-neon-green/20 px-3 py-1.5 bg-neon-green/5">
            <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span className="font-label-mono text-[10px] text-neon-green tracking-widest">ALL SYSTEMS GREEN</span>
          </div>
        </div>

        {/* Main dashboard grid */}
        <div className="grid md:grid-cols-3 gap-4">

          {/* Left panel — Org identity */}
          <div className={`md:col-span-2 border border-neon-green/20 bg-black/40 p-6 reveal stagger-1 ${visible ? 'visible' : ''}`}>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 border-2 border-neon-green flex items-center justify-center bg-neon-green/5">
                <span className="text-2xl font-black text-neon-green font-['Orbitron'] tracking-widest glow-text">CK</span>
              </div>
              <div>
                <h3 className="font-headline-md text-2xl text-primary">CodeKrafters</h3>
                <p className="font-label-mono text-xs text-on-surface-variant/50 tracking-wider">EST. 2023 — GLOBAL DEVELOPER COMMUNITY</p>
              </div>
            </div>

            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-6">
              CodeKrafters is a global developer community building the next generation of tech talent through hackathons, workshops, and open-source projects. We believe in learning by building and growing together.
            </p>

            {/* Metric panels */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {METRICS.map((m, i) => (
                <MetricPanel key={i} metric={m} visible={visible} delay={i * 150 + 300} />
              ))}
            </div>
          </div>

          {/* Right panel — Live log */}
          <div className={`border border-neon-green/20 bg-black/60 overflow-hidden reveal stagger-2 ${visible ? 'visible' : ''}`}>
            {/* Log header */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-neon-green/5 border-b border-neon-green/20">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-neon-green/40" />
                <div className="w-2 h-2 rounded-full bg-neon-green/20" />
                <div className="w-2 h-2 rounded-full bg-neon-green/10" />
              </div>
              <span className="font-label-mono text-[9px] text-neon-green/50 tracking-widest ml-1">SYS_LOG</span>
            </div>

            {/* Log entries */}
            <div className="p-3 space-y-1 min-h-[200px] font-mono text-[11px]">
              {LOG_ENTRIES.map((entry, i) => (
                <div key={i} className={`flex gap-2 transition-all duration-300 ${logLines.includes(i) ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="text-on-surface-variant/30 shrink-0">{entry.time}</span>
                  <span className={entry.type === 'ok' ? 'text-neon-green/70' : 'text-yellow-500/70'}>
                    [{entry.type === 'ok' ? 'OK' : '!!'}]
                  </span>
                  <span className="text-on-surface-variant/60">{entry.msg}</span>
                </div>
              ))}
              {logLines.length >= LOG_ENTRIES.length && (
                <div className="text-neon-green/40 animate-pulse mt-2">█</div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar — links */}
        <div className={`mt-4 flex flex-wrap gap-3 reveal stagger-3 ${visible ? 'visible' : ''}`}>
          {[
            { label: 'WEBSITE', icon: 'language' },
            { label: 'DISCORD', icon: 'forum' },
            { label: 'GITHUB', icon: 'code' },
            { label: 'TWITTER', icon: 'tag' },
          ].map((link, i) => (
            <a key={i} href="#"
              className="flex items-center gap-2 border border-neon-green/20 px-4 py-2 hover:bg-neon-green/5 hover:border-neon-green/40 transition-all group">
              <span className="material-symbols-outlined text-neon-green/40 text-sm group-hover:text-neon-green transition-colors">{link.icon}</span>
              <span className="font-label-mono text-[10px] text-on-surface-variant/60 group-hover:text-neon-green tracking-widest transition-colors">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}