import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const TRACKS = [
  {
    id: 'ai',
    name: 'AI_SENTIENCE',
    icon: 'psychology',
    desc: 'Bridge the gap between silicon and consciousness. Develop autonomous agents and neural models.',
    items: ['LLM ARCHITECTURES', 'NEURAL INTERFACES', 'AGENTIC WORKFLOWS'],
    scanColor: 'rgba(204, 255, 0, 0.15)',
  },
  {
    id: 'web3',
    name: 'WEB3_GENESIS',
    icon: 'database',
    desc: 'Decentralize the infrastructure of tomorrow. Build trustless protocols and verifiable systems.',
    items: ['ZERO-KNOWLEDGE PROOFS', 'SMART CONTRACT OPT', 'DAOs & GOVERNANCE'],
    scanColor: 'rgba(0, 200, 255, 0.15)',
  },
  {
    id: 'cyber',
    name: 'CYBER_ARMOR',
    icon: 'shield_lock',
    desc: 'Harden the digital perimeter. Design novel encryption methods and defensive cyber architectures.',
    items: ['QUANTUM RESISTANCE', 'THREAT DETECTION AI', 'SECURE ENCLAVES'],
    scanColor: 'rgba(255, 100, 100, 0.15)',
  },
];

function ScannerBag({ track, isSelected, onClick, visible }) {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer transition-all duration-500 border-2 p-6
        ${isSelected
          ? 'border-neon-green bg-neon-green/5 scale-105 shadow-[0_0_30px_rgba(204,255,0,0.2)]'
          : 'border-on-surface-variant/30 hover:border-neon-green/50 bg-surface/50'
        }
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{ transitionDelay: `${TRACKS.indexOf(track) * 150}ms` }}
    >
      {/* Scan overlay animation */}
      {isSelected && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute left-0 right-0 h-1 animate-scanner-sweep"
            style={{ background: 'linear-gradient(180deg, transparent, #CCFF00, transparent)', boxShadow: '0 0 20px #CCFF00' }}
          />
        </div>
      )}

      {/* X-ray effect when selected */}
      <div className={`transition-all duration-500 ${isSelected ? 'mix-blend-screen' : ''}`}>
        {/* Bag outline */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 border flex items-center justify-center transition-all
              ${isSelected ? 'border-neon-green bg-neon-green/20' : 'border-on-surface-variant/50'}`}>
              <span className={`material-symbols-outlined text-xl ${isSelected ? 'text-neon-green' : 'text-on-surface-variant'}`}>
                {track.icon}
              </span>
            </div>
            <div>
              <h3 className={`font-headline-md text-lg transition-colors ${isSelected ? 'text-neon-green' : 'text-primary'}`}>
                {track.name}
              </h3>
            </div>
          </div>
          <div className={`font-label-mono text-[10px] px-2 py-1 transition-all
            ${isSelected
              ? 'bg-neon-green text-black font-bold'
              : 'bg-on-surface-variant/20 text-on-surface-variant'
            }`}>
            {isSelected ? 'SCANNING' : 'QUEUED'}
          </div>
        </div>

        <p className={`font-body-md mb-4 transition-colors ${isSelected ? 'text-on-surface-variant' : 'text-on-surface-variant/60'}`}>
          {track.desc}
        </p>

        {/* Scanned items — visible when selected */}
        <div className={`space-y-2 overflow-hidden transition-all duration-500 ${isSelected ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="font-label-mono text-[10px] text-neon-green/60 tracking-widest mb-2">
            DETECTED_ITEMS:
          </div>
          {track.items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 font-label-mono text-xs text-neon-green"
              style={{ animationDelay: `${i * 200 + 300}ms` }}>
              <span className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse" />
              <span className="border-b border-neon-green/20 pb-0.5 flex-1">{item}</span>
              <span className="text-neon-green/40">[CLEAR]</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Tracks() {
  const [ref, visible] = useScrollReveal();
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="py-24 px-6 bg-background" id="tracks">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6" ref={ref}>
          <h2 className={`font-headline-lg text-primary uppercase reveal ${visible ? 'visible' : ''}`}>
            MISSION_TRACKS
          </h2>
          <span className={`font-label-mono text-neon-green hidden md:block reveal stagger-1 ${visible ? 'visible' : ''}`}>
            03 ACTIVE NODES
          </span>
        </div>

        {/* Conveyor belt header */}
        <div className={`flex items-center gap-4 mb-8 reveal stagger-1 ${visible ? 'visible' : ''}`}>
          <div className="h-px flex-1 bg-neon-green/20" />
          <div className="flex items-center gap-2 border border-neon-green/30 px-4 py-2 bg-black/50">
            <span className="material-symbols-outlined text-neon-green text-sm">sensors</span>
            <span className="font-label-mono text-[10px] text-neon-green tracking-widest">
              SECURITY_SCANNER — SELECT BAG TO INSPECT
            </span>
          </div>
          <div className="h-px flex-1 bg-neon-green/20" />
        </div>

        {/* Scanner bags */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRACKS.map((track) => (
            <ScannerBag
              key={track.id}
              track={track}
              isSelected={selectedId === track.id}
              onClick={() => setSelectedId(selectedId === track.id ? null : track.id)}
              visible={visible}
            />
          ))}
        </div>

        {/* Conveyor belt footer */}
        <div className="mt-6 relative h-2 bg-on-surface-variant/10 overflow-hidden">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(204,255,0,0.1)_20px,rgba(204,255,0,0.1)_22px)] animate-conveyor" />
        </div>
      </div>
    </section>
  );
}