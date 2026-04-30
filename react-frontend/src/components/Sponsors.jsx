import useScrollReveal from '../hooks/useScrollReveal';

const TIERS = [
  {
    name: 'PLATINUM',
    sponsors: ['TECH_X', 'CYBER_AI'],
    color: '#CCFF00',
    borderColor: 'border-neon-green/60',
    bgGlow: '0 0 30px rgba(204,255,0,0.08)',
    size: 'text-2xl md:text-3xl',
    padding: 'px-10 py-8',
  },
  {
    name: 'GOLD',
    sponsors: ['NODE_JS', 'BLOCK_Q', 'VIRT_O'],
    color: '#FFD700',
    borderColor: 'border-yellow-500/40',
    bgGlow: '0 0 20px rgba(255,215,0,0.05)',
    size: 'text-lg md:text-xl',
    padding: 'px-8 py-6',
  },
  {
    name: 'SILVER',
    sponsors: ['CLOUD_S', 'DEV_HUB', 'API_NET', 'DATA_X', 'FLUX_IO', 'BYTE_CO'],
    color: '#8e9379',
    borderColor: 'border-on-surface-variant/30',
    bgGlow: 'none',
    size: 'text-sm',
    padding: 'px-6 py-4',
  },
];

export default function Sponsors() {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="py-24 px-6 bg-[#060606] border-y-2 border-neon-green/30" id="sponsors">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className={`text-center mb-14 reveal ${visible ? 'visible' : ''}`}>
          <h2 className="font-headline-lg text-primary uppercase mb-2">NETWORK_PARTNERS</h2>
          <p className="font-label-mono text-xs text-on-surface-variant/40 tracking-widest">
            BACKED BY THE BEST IN TECH
          </p>
        </div>

        <div className="space-y-12">
          {TIERS.map((tier, ti) => (
            <div key={ti} className={`reveal stagger-${ti + 1} ${visible ? 'visible' : ''}`}>
              {/* Tier label */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="font-label-mono text-[10px] tracking-[0.3em] px-3 py-1 border"
                  style={{ color: tier.color, borderColor: `${tier.color}50` }}
                >
                  {tier.name}
                </div>
                <div className="flex-1 h-px" style={{ background: `${tier.color}20` }} />
              </div>

              {/* Sponsor cards */}
              <div className={`flex flex-wrap justify-center gap-4 ${ti === 2 ? 'gap-3' : ''}`}>
                {tier.sponsors.map((name, si) => (
                  <div
                    key={si}
                    className={`border bg-black/50 ${tier.borderColor} ${tier.padding} text-center transition-all duration-300 hover:scale-105 cursor-pointer group`}
                    style={{ boxShadow: tier.bgGlow }}
                  >
                    <span
                      className={`font-headline-md ${tier.size} font-bold tracking-wider transition-colors`}
                      style={{ color: tier.color }}
                    >
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}