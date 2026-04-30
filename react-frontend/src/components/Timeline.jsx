import { useState, useEffect, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const EVENTS = [
  {
    date: 'MAY 15 — JUN 01',
    name: 'RECRUITMENT_PHASE',
    desc: 'Registration open for all units. Form squads or enter as a lone operator.',
    sequence: 'AGTC-RCRUT-M15',
    specimen: 'HV-001',
  },
  {
    date: 'JUN 05',
    name: 'KICKOFF_BROADCAST',
    desc: 'Opening ceremony, team matching, and workshops. All channels go live.',
    sequence: 'TCGA-KCKOF-J05',
    specimen: 'HV-002',
  },
  {
    date: 'JUN 15 — JUN 17',
    name: 'HACK_MARATHON',
    desc: '48 hours of uninterrupted creation. Coffee protocols active. Terminal access granted.',
    sequence: 'GCTA-HMRHN-J15',
    specimen: 'HV-003',
  },
  {
    date: 'JUN 20',
    name: 'FINAL_UPLINK',
    desc: 'Submissions close. All repos synced. Judges review and deliberate.',
    sequence: 'ATCG-FNLUP-J20',
    specimen: 'HV-004',
  },
];

const BASES = ['A', 'T', 'G', 'C'];

function SequenceDecoder({ sequence, decoded, name }) {
  const [display, setDisplay] = useState(sequence);
  const [isDecoded, setIsDecoded] = useState(false);

  useEffect(() => {
    if (!decoded) return;
    let frame = 0;
    const maxFrames = 12;
    const interval = setInterval(() => {
      frame++;
      if (frame >= maxFrames) {
        setDisplay(name);
        setIsDecoded(true);
        clearInterval(interval);
        return;
      }
      const revealed = Math.floor((frame / maxFrames) * name.length);
      let result = '';
      for (let i = 0; i < name.length; i++) {
        if (i < revealed) {
          result += name[i];
        } else {
          result += BASES[Math.floor(Math.random() * 4)];
        }
      }
      setDisplay(result);
    }, 80);
    return () => clearInterval(interval);
  }, [decoded, name, sequence]);

  return (
    <span className={`font-mono text-sm md:text-base font-bold transition-colors duration-300 ${isDecoded ? 'text-neon-green' : 'text-neon-green/60'}`}>
      {display}
    </span>
  );
}

function HelixStrand({ side }) {
  const dots = Array.from({ length: 20 }, (_, i) => {
    const y = (i / 19) * 100;
    const phase = side === 'left' ? 0 : Math.PI;
    const x = 50 + Math.sin((i / 19) * Math.PI * 4 + phase) * 30;
    return { x, y };
  });

  return (
    <svg className="absolute top-0 bottom-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
      {dots.map((dot, i) => (
        <circle
          key={i}
          cx={dot.x}
          cy={`${dot.y}%`}
          r="1.5"
          fill="#CCFF00"
          opacity={0.2 + Math.sin(i * 0.5) * 0.15}
        >
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur={`${2 + i * 0.1}s`} repeatCount="indefinite" />
        </circle>
      ))}
      {side === 'left' && dots.map((dot, i) => {
        if (i % 3 !== 0) return null;
        const mirrorX = 50 + Math.sin((i / 19) * Math.PI * 4 + Math.PI) * 30;
        return (
          <line key={`rung-${i}`} x1={dot.x} y1={`${dot.y}%`} x2={mirrorX} y2={`${dot.y}%`}
            stroke="#CCFF00" strokeWidth="0.3" opacity="0.15" />
        );
      })}
    </svg>
  );
}

export default function Timeline() {
  const [ref, visible] = useScrollReveal();
  const [decodedItems, setDecodedItems] = useState([]);
  const triggered = useRef(false);

  useEffect(() => {
    if (!visible || triggered.current) return;
    triggered.current = true;
    EVENTS.forEach((_, i) => {
      setTimeout(() => setDecodedItems(prev => [...prev, i]), 800 + i * 600);
    });
  }, [visible]);

  return (
    <section className="py-24 px-6 bg-surface-container-lowest/80 border-y-2 border-neon-green/30 relative overflow-hidden" id="timeline">
      {/* Helix background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <HelixStrand side="left" />
        <HelixStrand side="right" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        {/* Lab report header */}
        <div className={`text-center mb-16 reveal ${visible ? 'visible' : ''}`}>
          <h2 className="font-headline-lg text-primary uppercase">DEPLOYMENT_TIMELINE</h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 bg-neon-green/30" />
            <span className="font-label-mono text-[10px] text-neon-green/50 tracking-widest">
              DNA SEQUENCE ANALYSIS — LAB REPORT #HV-2026
            </span>
            <div className="h-px w-16 bg-neon-green/30" />
          </div>
        </div>

        {/* Sequencer output */}
        <div className="space-y-6">
          {EVENTS.map((event, i) => {
            const isDecoded = decodedItems.includes(i);

            return (
              <div key={i} className={`flex items-stretch gap-4 transition-all duration-700 ${isDecoded ? 'opacity-100' : 'opacity-30'}`}>
                {/* Specimen label */}
                <div className="hidden md:flex flex-col items-center min-w-[80px]">
                  <div className={`font-mono text-[10px] px-2 py-1 border transition-all ${isDecoded ? 'border-neon-green text-neon-green' : 'border-on-surface-variant/30 text-on-surface-variant/50'}`}>
                    {event.specimen}
                  </div>
                  <div className={`flex-1 w-px transition-colors ${isDecoded ? 'bg-neon-green/40' : 'bg-on-surface-variant/20'}`} />
                </div>

                {/* Main card */}
                <div className={`flex-1 border p-6 transition-all duration-500 ${isDecoded ? 'border-neon-green/40 bg-black/40' : 'border-on-surface-variant/20 bg-black/20'}`}>
                  {/* Sequence bar */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="font-mono text-[10px] text-neon-green/40 tracking-widest">SEQ:</div>
                    <SequenceDecoder
                      sequence={event.sequence}
                      decoded={isDecoded}
                      name={event.name}
                    />
                  </div>

                  {/* Date */}
                  <div className={`font-label-mono text-xs mb-2 transition-colors ${isDecoded ? 'text-neon-green' : 'text-on-surface-variant/50'}`}>
                    {event.date}
                  </div>

                  {/* Description */}
                  <p className={`font-body-md transition-all duration-500 ${isDecoded ? 'text-on-surface-variant' : 'text-on-surface-variant/30'}`}>
                    {event.desc}
                  </p>

                  {/* Base pair visualization */}
                  <div className="flex gap-1 mt-3">
                    {event.sequence.split('').map((char, ci) => {
                      if (char === '-') return <div key={ci} className="w-1" />;
                      const colors = { A: '#CCFF00', T: '#00CCFF', G: '#FF6B6B', C: '#FFD700' };
                      return (
                        <div
                          key={ci}
                          className="w-3 h-3 rounded-sm transition-all duration-300"
                          style={{
                            background: isDecoded ? (colors[char] || '#666') : '#333',
                            opacity: isDecoded ? 0.7 : 0.2,
                          }}
                          title={char}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lab footer */}
        <div className={`mt-10 text-center font-label-mono text-[10px] text-neon-green/30 tracking-widest reveal stagger-2 ${visible ? 'visible' : ''}`}>
          ANALYSIS COMPLETE — ALL SEQUENCES DECODED — HACKERVERSE GENOME MAPPED
        </div>
      </div>
    </section>
  );
}