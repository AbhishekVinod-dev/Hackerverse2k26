import useCountdown from '../hooks/useCountdown';

export default function Hero() {
  const { time, flipMap } = useCountdown('2026-06-15T09:00:00');

  const units = [
    { key: 'days', id: 'cd-days' },
    { key: 'hours', id: 'cd-hours' },
    { key: 'mins', id: 'cd-mins' },
    { key: 'secs', id: 'cd-secs' },
  ];

  const labels = { days: 'DAYS', hours: 'HOURS', mins: 'MINS', secs: 'SECS' };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative" id="hero">
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:block">
        <span className="vertical-text text-neon-green font-['Orbitron'] text-sm tracking-[0.5em] opacity-50 uppercase">TERMINAL_ESTABLISHED_2026</span>
      </div>
      <div className="max-w-6xl mx-auto hero-float">
        <div className="inline-block pulse-live bg-neon-green/10 border border-neon-green px-4 py-1 mb-6">
          <span className="font-label-mono text-neon-green text-xs flex items-center gap-2">
            <span className="w-2 h-2 bg-neon-green rounded-full inline-block"></span> REGISTRATION LIVE
          </span>
        </div>
        <p className="font-label-mono text-neon-green mb-4 flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-sm">terminal</span> ORGANIZED BY CODEKRAFTERS
        </p>
        <h1 className="font-display-xl text-primary leading-tight mb-8">
          <span className="glitch-title" data-text="HACKER">HACKER</span>
          <span className="text-neon-green glitch-title glow-text" data-text="VERSE">VERSE</span>
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          48 hours of non-stop innovation. Build the future of AI, Web3, and Cybersecurity with 500+ hackers from around the globe.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-xl mx-auto">
          {units.map(({ key, id }) => (
            <div key={id} className="border-2 border-neon-green p-6 bg-surface/50 backdrop-blur-sm">
              <span id={id} className={`block font-display-xl text-neon-green text-5xl countdown-digit ${flipMap[key] ? 'flip' : ''}`}>
                {time[key]}
              </span>
              <span className="font-label-mono text-xs text-on-surface-variant">{labels[key]}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-neon-green text-black px-10 py-4 font-['Orbitron'] font-black text-xl hover:shadow-[0_0_20px_#CCFF00] transition-all">INITIALIZE_JOIN</button>
          <button className="border-2 border-neon-green text-neon-green px-10 py-4 font-['Orbitron'] font-black text-xl hover:bg-neon-green/10 transition-all">VIEW_DOCS</button>
        </div>
      </div>
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block">
        <span className="vertical-text text-neon-green font-['Orbitron'] text-sm tracking-[0.5em] opacity-50 uppercase">STATUS:SYSTEM_READY</span>
      </div>
    </section>
  );
}