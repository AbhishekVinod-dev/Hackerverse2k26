import useScrollReveal from '../hooks/useScrollReveal';

const CREW = [
  {
    name: 'ALEX_RIVERA',
    callsign: 'ARCHITECT',
    role: 'LEAD_ARCHITECT',
    module: 'CORE_SYSTEMS',
    hours: 2400,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmmiODuMGtrskI15tPMC2YQFzhzrkvupdL2r2MCR3uIUfTwLOHFID-uKzYQe3Mu8lBl5OqUTykCJwfam_Fhg_hvMVnknctbLzfsPcuXGooAX6lY86djbQWIcWkkJD4ZGMZJtjhTnx0IMYrzdTuCVvXY0yTt9lXCSY4x2WSAQ57dpg_HImWz5Tbza9o-yZkI7jZlt4JQJPlUzSsNUor2aRxMa9Cnv8gIZytRnO1kOG73xqF5cIRMcoih2si26a59LLPgX_TCwwP-MmZ',
    status: 'ACTIVE',
  },
  {
    name: 'SARAH_CHEN',
    callsign: 'STRATEGIST',
    role: 'PROTO_STRATEGIST',
    module: 'NAVIGATION',
    hours: 1850,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3PsUrUDORy1wa7OSPsIeqLqT8QBjvOdxKhvJnsNhlJa8r-8Turifbzp1YXJOBsngqiUzVtGAM3RCyBqY1qH9Ht27WJmXnUdzdKLHO2MpmsTP1pcKOjn1tJvaDSKIBxM6k1oukGsur1Qg_-S3pkKr-UQycfqR7WzLm-VMAJwlJJ3rtqVxYu-6HPZr7K1ggXA1SOWCu8Y0gEGKXWC_Mg8kGO3jGvUUIUJNe2kcZhBZXgF-Uw5pH3wjk7wTVJgjIVJVsEleRZDLQcGHF',
    status: 'ACTIVE',
  },
  {
    name: 'MARCUS_VAUGHN',
    callsign: 'SENTINEL',
    role: 'SECURITY_OFFICER',
    module: 'DEFENSE_GRID',
    hours: 3100,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1rIXazfxymwkjUapIzWHl0lm_2iQ7vPAFXUPMg1HYmHoBMF3Z6JPxdetjr_3vss5gguxdgiDy2MT4rnONGLfHRnYnSgXocOvBpGesZVK28AyctIF5f0lE02Vd4LD3tLvxdcW5MFQYNsuHm2SGIhDVSPcYEoDRojXt2lVPp40oSzq5ZCiMjPwlUZIecCx3BqLe4NvrjdRtFFfbv5cOzC1PLDXISn4lo0S-VFsGRgvmvasJ06s1JbUwMO772sUWQJLSnFC1P08Bj3gR',
    status: 'ACTIVE',
  },
  {
    name: 'ELENA_KOSTAS',
    callsign: 'HARVESTER',
    role: 'DATA_HARVESTER',
    module: 'DATA_ANALYSIS',
    hours: 2750,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrZZX1IjXJzJ2LZjbUFqkNHYdMlU4bVDokSV4Y-pDA1YCRVAmLQOlivSxbNqo8CI-8fa1HIdjg5RsQRxJm-WLtnjObyAkG33uyBBAFAKvs4je8UypzzNxf98hR-42hBW9UVy06hHCSj87I675mRE66JAcbzSZfqDIhZ6gimKpXqe7LCXLoBzNxorB8JEkVjq-RBWKvqOa-Q1IfC_4wC12Xm9R9GBYvX4lZUPGeZvmAPdIZQXST0j6NB2P0LSllVmcadKdLyIWO1Mkz',
    status: 'ACTIVE',
  },
];

function CrewCard({ member, index, visible }) {
  return (
    <div
      className={`border border-on-surface-variant/20 bg-surface/80 transition-all duration-600 hover:border-neon-green/50 group ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Mission patch / photo area */}
      <div className="relative overflow-hidden">
        <img src={member.img} alt={member.name} className="w-full h-56 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />

        {/* HUD overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Status indicator */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/70 px-2 py-1 border border-neon-green/30">
          <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
          <span className="font-mono text-[9px] text-neon-green tracking-wider">{member.status}</span>
        </div>

        {/* Callsign overlay */}
        <div className="absolute bottom-3 left-3">
          <div className="font-mono text-[9px] text-neon-green/60 tracking-widest">CALLSIGN</div>
          <div className="font-headline-md text-lg text-neon-green font-bold">{member.callsign}</div>
        </div>

        {/* Mission patch badge */}
        <div className="absolute top-3 left-3 w-10 h-10 rounded-full border-2 border-neon-green/40 bg-black/60 flex items-center justify-center">
          <span className="font-mono text-[10px] text-neon-green font-bold">
            {member.name.split('_').map(n => n[0]).join('')}
          </span>
        </div>
      </div>

      {/* Crew data */}
      <div className="p-4">
        {/* Name */}
        <h5 className="font-headline-md text-base text-primary uppercase mb-3">{member.name}</h5>

        {/* Data fields */}
        <div className="space-y-2 border-t border-on-surface-variant/10 pt-3">
          <div className="flex justify-between items-center">
            <span className="font-mono text-[9px] text-on-surface-variant/50 tracking-widest">ROLE</span>
            <span className="font-label-mono text-[10px] text-neon-green">{member.role}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-mono text-[9px] text-on-surface-variant/50 tracking-widest">MODULE</span>
            <span className="font-label-mono text-[10px] text-on-surface-variant">{member.module}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-mono text-[9px] text-on-surface-variant/50 tracking-widest">HRS_LOGGED</span>
            <span className="font-label-mono text-[10px] text-on-surface-variant">{member.hours.toLocaleString()}</span>
          </div>
        </div>

        {/* Social links - appear on hover */}
        <div className="flex gap-2 mt-3 pt-2 border-t border-on-surface-variant/10 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined text-neon-green text-sm cursor-pointer hover:text-white transition-colors">code</span>
          <span className="material-symbols-outlined text-neon-green text-sm cursor-pointer hover:text-white transition-colors">link</span>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="py-24 px-6 bg-background" id="team">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Mission header */}
        <div className={`mb-12 reveal ${visible ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full border-2 border-neon-green/40 flex items-center justify-center">
              <span className="material-symbols-outlined text-neon-green text-lg">rocket_launch</span>
            </div>
            <div>
              <h2 className="font-headline-lg text-primary uppercase">COMMAND_SQUAD</h2>
              <p className="font-label-mono text-[10px] text-neon-green/50 tracking-widest">
                MISSION: HACKERVERSE — CREW MANIFEST — CLEARANCE: LEVEL 5
              </p>
            </div>
          </div>

          {/* Mission status bar */}
          <div className="flex flex-wrap gap-6 border border-on-surface-variant/20 bg-black/30 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
              <span className="font-mono text-[10px] text-on-surface-variant/60">MISSION STATUS: <span className="text-neon-green">ACTIVE</span></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-on-surface-variant/60">CREW: <span className="text-neon-green">{CREW.length} OPERATIVES</span></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-on-surface-variant/60">LAUNCH: <span className="text-neon-green">JUN 2026</span></span>
            </div>
          </div>
        </div>

        {/* Crew grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {CREW.map((member, i) => (
            <CrewCard key={i} member={member} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}