import { useState, useEffect, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const BSOD_ERRORS = [
  { code: '0x0000001F', label: 'HACKERS_REGISTERED', value: '500+' },
  { code: '0x00000030', label: 'RUNTIME_DURATION', value: '48h' },
  { code: '0x00000028', label: 'PRIZE_POOL_USD', value: '$40K' },
  { code: '0x0000000A', label: 'MENTOR_COUNT', value: '20+' },
];

export default function About() {
  const [sectionRef, sectionVisible] = useScrollReveal();
  const [phase, setPhase] = useState('bsod'); // 'bsod' | 'glitch' | 'recovered'
  const triggered = useRef(false);

  useEffect(() => {
    if (!sectionVisible || triggered.current) return;
    triggered.current = true;

    // Show BSOD for 2.5s, then glitch, then recover
    setTimeout(() => setPhase('glitch'), 2500);
    setTimeout(() => setPhase('recovered'), 3200);
  }, [sectionVisible]);

  return (
    <section ref={sectionRef} className="py-24 px-6 border-y-2 border-neon-green/30 bg-surface-container-lowest/80" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className={`font-headline-lg text-primary uppercase mb-8 reveal ${sectionVisible ? 'visible' : ''}`}>
          ABOUT_HACKERVERSE
        </h2>

        <div className={`relative overflow-hidden border-2 transition-all duration-300 ${phase === 'bsod' ? 'border-blue-500' : 'border-neon-green/40'}`}
          style={{ minHeight: 420 }}>

          {/* === BSOD SCREEN === */}
          {(phase === 'bsod' || phase === 'glitch') && (
            <div className={`absolute inset-0 z-20 p-8 md:p-12 transition-opacity duration-300 ${phase === 'glitch' ? 'animate-glitch-out' : ''}`}
              style={{ background: '#0078d7', fontFamily: "'Outfit', sans-serif" }}>
              <div className="text-white text-3xl md:text-5xl font-light mb-6">:(</div>
              <p className="text-white text-base md:text-lg mb-4">
                Your system ran into a problem caused by <span className="font-bold">HACKATHON_OVERFLOW</span> and needs to restart.
              </p>
              <p className="text-white/70 text-sm mb-8">
                We're just collecting some error info, and then we'll redirect you to the truth.
              </p>

              {/* Error codes that ARE the stats */}
              <div className="font-mono text-xs text-white/60 space-y-1 mb-8">
                <p>Stop code: HACKATHON_OVERFLOW</p>
                <p className="mt-4">Technical information:</p>
                {BSOD_ERRORS.map((err, i) => (
                  <p key={i} className="ml-4">
                    *** {err.code} ({err.label}: {err.value})
                  </p>
                ))}
              </div>

              {/* Fake progress */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                <span className="text-white text-sm">
                  {phase === 'bsod' ? '42% complete' : '99% complete'}
                </span>
              </div>
            </div>
          )}

          {/* === RECOVERED CONTENT === */}
          <div className={`relative z-10 p-6 md:p-10 transition-all duration-700 ${phase === 'recovered' ? 'opacity-100' : 'opacity-0'}`}>
            {/* Hack success banner */}
            <div className="flex items-center gap-3 mb-8 border border-neon-green/30 bg-neon-green/5 px-4 py-3">
              <span className="text-neon-green text-xl">✓</span>
              <span className="font-label-mono text-xs text-neon-green tracking-widest">
                SYSTEM RECOVERED — BSOD WAS A HACK. WELCOME TO HACKERVERSE.
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Left — About Text */}
              <div>
                <p className="font-body-lg text-on-surface-variant mb-6">
                  HACKERVERSE is a 48-hour online hackathon organized by CodeKrafters where developers, designers, and innovators come together to build groundbreaking solutions across AI, Web3, and Cybersecurity.
                </p>
                <p className="font-body-md text-on-surface-variant mb-6">
                  Whether you're a seasoned hacker or a first-time participant, HACKERVERSE provides mentorship, workshops, and a global community to help you ship something extraordinary.
                </p>
                <div className="border border-neon-green/30 p-4 bg-black/50 font-['Orbitron'] text-sm text-neon-green">
                  <p className="opacity-50 mb-1">$ whois hackerverse</p>
                  <p>&gt; Global virtual hackathon</p>
                  <p>&gt; 48 hours of building</p>
                  <p>&gt; Open to all skill levels</p>
                  <p>&gt; $40,000 in prizes<span className="typing-cursor"></span></p>
                </div>
              </div>

              {/* Right — Stats as "recovered error codes" */}
              <div>
                <p className="font-label-mono text-xs text-neon-green/50 mb-4 tracking-widest">
                  RECOVERED_ERROR_CODES → ACTUAL_STATS
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {BSOD_ERRORS.map((err, i) => (
                    <StatCard key={i} err={err} visible={phase === 'recovered'} delay={i * 150} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ err, visible, delay }) {
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    if (!visible || animated.current) return;
    const timeout = setTimeout(() => {
      animated.current = true;
      const el = ref.current;
      if (!el) return;
      const num = parseInt(err.value.replace(/[^0-9]/g, ''));
      const suffix = err.value.replace(/[0-9]/g, '');
      const dur = 1200;
      const start = performance.now();
      function step(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * num) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timeout);
  }, [visible, err.value, delay]);

  return (
    <div className="border border-neon-green/30 bg-black/60 p-4 hover:border-neon-green/60 transition-all">
      <div className="font-mono text-[9px] text-neon-green/40 mb-1">{err.code}</div>
      <div className="font-label-mono text-[10px] text-neon-green/60 tracking-widest mb-2">{err.label}</div>
      <div ref={ref} className="font-display-xl text-neon-green text-3xl font-bold stat-number">
        {err.value}
      </div>
    </div>
  );
}