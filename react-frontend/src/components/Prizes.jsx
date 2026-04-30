import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const PRIZES = [
  {
    label: 'GOLD_PRIME',
    amount: '$25K',
    perks: ['Venture Funding Intro', 'Exclusive Mentorship', 'Global Ecosystem Grant'],
    pinColor: '#ef4444',
    rotation: -3,
    top: '8%',
    left: '38%',
    type: 'main',
  },
  {
    label: 'SILVER_NODE',
    amount: '$10K',
    perks: ['GPU Cloud Credits', 'Hardware Access', 'Job Referrals'],
    pinColor: '#3b82f6',
    rotation: 2,
    top: '12%',
    left: '4%',
    type: 'polaroid',
  },
  {
    label: 'BRONZE_CORE',
    amount: '$5K',
    perks: ['Commemorative NFT', 'Swag Overload', 'Community Badge'],
    pinColor: '#3b82f6',
    rotation: -1,
    top: '14%',
    left: '72%',
    type: 'polaroid',
  },
];

const STICKY_NOTES = [
  { text: 'TOTAL\nBOUNTY:\n$40K', color: '#CCFF00', textColor: '#000', rotation: 5, top: '4%', left: '18%', pinColor: '#ef4444' },
  { text: 'Deadline:\nJUN 20', color: '#fbbf24', textColor: '#000', rotation: -4, top: '58%', left: '75%', pinColor: '#22c55e' },
  { text: 'Open to\nALL levels', color: '#86efac', textColor: '#000', rotation: 3, top: '62%', left: '6%', pinColor: '#3b82f6' },
];

const CLIPPINGS = [
  { headline: 'HACKATHON PRIZES HIT RECORD $40K', sub: 'CodeKrafters announces biggest prize pool yet', rotation: 1, top: '55%', left: '32%', pinColor: '#ef4444' },
  { headline: 'TOP HACKERS COMPETE FOR GLORY', sub: '500+ developers expected to participate', rotation: -2, top: '60%', left: '55%', pinColor: '#fbbf24' },
];

// Red string connections (SVG line pairs)
const STRINGS = [
  { x1: '28%', y1: '18%', x2: '42%', y2: '16%' },  // sticky to gold
  { x1: '52%', y1: '30%', x2: '76%', y2: '22%' },  // gold to bronze
  { x1: '42%', y1: '20%', x2: '16%', y2: '20%' },  // gold to silver
  { x1: '16%', y1: '35%', x2: '14%', y2: '68%' },  // silver to sticky
  { x1: '50%', y1: '40%', x2: '46%', y2: '62%' },  // gold to clipping
  { x1: '78%', y1: '38%', x2: '80%', y2: '66%' },  // bronze to sticky
];

function Pin({ color = '#ef4444' }) {
  return (
    <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
      <div className="w-4 h-4 rounded-full shadow-lg border border-white/20" style={{ background: color }} />
      <div className="w-0.5 h-2 bg-gray-500 mx-auto -mt-0.5 rounded-b" />
    </div>
  );
}

function MainPrizeCard({ prize, visible }) {
  return (
    <div
      className={`absolute w-56 transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      style={{ top: prize.top, left: prize.left, transform: `rotate(${prize.rotation}deg)` }}
    >
      <div className="relative bg-[#1a1a0a] border-2 border-neon-green/60 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.5),0_0_30px_rgba(204,255,0,0.1)]">
        <Pin color={prize.pinColor} />

        {/* Stamp */}
        <div className="absolute -top-1 -right-1 bg-red-600/90 text-white px-2 py-0.5 text-[8px] font-bold tracking-widest transform rotate-12">
          TOP SECRET
        </div>

        <div className="text-center mt-2">
          <div className="font-label-mono text-[9px] text-neon-green/60 tracking-widest mb-1">CASE FILE: {prize.label}</div>
          <div className="font-display-xl text-4xl text-neon-green font-black mb-3 glow-text">{prize.amount}</div>
        </div>

        <div className="border-t border-neon-green/20 pt-3 space-y-1.5">
          {prize.perks.map((p, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="material-symbols-outlined text-neon-green text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              <span className="font-label-mono text-[10px] text-on-surface-variant">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PolaroidCard({ prize, visible, delay }) {
  return (
    <div
      className={`absolute w-44 transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      style={{ top: prize.top, left: prize.left, transform: `rotate(${prize.rotation}deg)`, transitionDelay: `${delay}ms` }}
    >
      <div className="relative bg-[#f5f5f0] p-2.5 pb-8 shadow-[0_4px_15px_rgba(0,0,0,0.4)]">
        <Pin color={prize.pinColor} />

        {/* "Photo" area */}
        <div className="bg-[#111] h-28 flex flex-col items-center justify-center mb-2 relative overflow-hidden">
          {/* Scanlines */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.02)_2px,rgba(255,255,255,0.02)_4px)]" />
          <div className="font-display-xl text-3xl font-black" style={{ color: prize.label.includes('SILVER') ? '#C0C0C0' : '#CD7F32' }}>
            {prize.amount}
          </div>
          <div className="font-mono text-[8px] text-on-surface-variant/50 mt-1">{prize.label}</div>
        </div>

        {/* Handwritten label */}
        <div className="text-center">
          <span className="text-[11px] text-[#333]" style={{ fontFamily: "'Outfit', cursive", fontStyle: 'italic' }}>
            {prize.perks[0]}
          </span>
        </div>
      </div>

      {/* Additional evidence tag */}
      <div className="mt-2 ml-2 font-mono text-[8px] text-on-surface-variant/20">{prize.label.includes('SILVER') ? 'EXHIBIT B' : 'EXHIBIT C'}</div>
    </div>
  );
}

function StickyNote({ note, visible, delay }) {
  return (
    <div
      className={`absolute w-24 transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
      style={{ top: note.top, left: note.left, transform: `rotate(${note.rotation}deg)`, transitionDelay: `${delay}ms` }}
    >
      <div className="relative p-3 shadow-[2px_2px_8px_rgba(0,0,0,0.3)]" style={{ background: note.color }}>
        <Pin color={note.pinColor} />
        <p className="text-[11px] font-bold leading-tight whitespace-pre-line mt-1" style={{ color: note.textColor, fontFamily: "'Outfit', cursive" }}>
          {note.text}
        </p>
      </div>
    </div>
  );
}

function NewsClipping({ clip, visible, delay }) {
  return (
    <div
      className={`absolute w-48 transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      style={{ top: clip.top, left: clip.left, transform: `rotate(${clip.rotation}deg)`, transitionDelay: `${delay}ms` }}
    >
      <div className="relative bg-[#e8e4d8] p-3 shadow-[2px_2px_10px_rgba(0,0,0,0.3)] border border-[#d0ccc0]">
        <Pin color={clip.pinColor} />
        <div className="border-b border-[#333]/20 pb-1 mb-1.5">
          <p className="text-[10px] font-black text-[#222] leading-tight" style={{ fontFamily: "Georgia, serif" }}>{clip.headline}</p>
        </div>
        <p className="text-[8px] text-[#555] leading-snug" style={{ fontFamily: "Georgia, serif" }}>{clip.sub}</p>
        <div className="flex justify-between mt-2 text-[7px] text-[#999]">
          <span>HACKVERSE TIMES</span>
          <span>JUN 2026</span>
        </div>
      </div>
    </div>
  );
}

export default function Prizes() {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="py-24 px-6 bg-[#080808] border-t-2 border-neon-green" id="prizes">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className={`text-center mb-6 reveal ${visible ? 'visible' : ''}`}>
          <h2 className="font-headline-lg text-primary uppercase mb-2">PRIZE_POOL_ALLOCATION</h2>
          <p className="font-label-mono text-neon-green text-sm">TOTAL BOUNTY: $40,000 USD</p>
        </div>

        {/* Evidence Board */}
        <div
          className={`relative border-4 border-[#3a2a1a] overflow-hidden reveal stagger-1 ${visible ? 'visible' : ''}`}
          style={{
            background: 'linear-gradient(135deg, #2a1f14, #1e1610, #2a1f14)',
            minHeight: 520,
            boxShadow: 'inset 0 0 60px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.5)',
          }}
        >
          {/* Cork texture dots */}
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: 'radial-gradient(circle, #c4a77d 0.8px, transparent 0.8px)', backgroundSize: '8px 8px' }} />

          {/* Red strings */}
          <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
            {STRINGS.map((s, i) => (
              <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}
                stroke="#ef4444" strokeWidth="1" opacity="0.35"
                strokeDasharray={visible ? "none" : "4 4"}
                className="transition-all duration-1000"
              />
            ))}
          </svg>

          {/* Prize items */}
          <MainPrizeCard prize={PRIZES[0]} visible={visible} />
          <PolaroidCard prize={PRIZES[1]} visible={visible} delay={200} />
          <PolaroidCard prize={PRIZES[2]} visible={visible} delay={400} />

          {/* Sticky notes */}
          {STICKY_NOTES.map((note, i) => (
            <StickyNote key={i} note={note} visible={visible} delay={300 + i * 100} />
          ))}

          {/* Newspaper clippings */}
          {CLIPPINGS.map((clip, i) => (
            <NewsClipping key={i} clip={clip} visible={visible} delay={500 + i * 150} />
          ))}

          {/* Evidence label */}
          <div className="absolute bottom-3 right-4 font-mono text-[9px] text-[#c4a77d]/30 tracking-widest">
            EVIDENCE BOARD — CASE #HV-2026
          </div>
        </div>
      </div>
    </section>
  );
}