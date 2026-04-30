import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const FAQS = [
  {
    flag: '--who-can-join',
    q: 'Who can participate?',
    a: 'HackerVerse is open to everyone — students, professionals, hobbyists. Solo or teams of up to 4 members.',
  },
  {
    flag: '--cost',
    q: 'Is there a registration fee?',
    a: 'No. HackerVerse is completely free. We believe innovation should be accessible to all, regardless of financial constraints.',
  },
  {
    flag: '--tracks',
    q: 'What are the hackathon tracks?',
    a: 'Three tracks: AI_SENTIENCE (AI & neural networks), WEB3_GENESIS (blockchain & decentralized systems), CYBER_ARMOR (cybersecurity & encryption).',
  },
  {
    flag: '--teams',
    q: 'How does team formation work?',
    a: 'Form teams of 1-4 before or during the event. We host a team matching session during the Kickoff Broadcast for solo participants.',
  },
  {
    flag: '--tools',
    q: 'What tools can I use?',
    a: 'Any language, framework, or tool. No restrictions. We encourage open-source technologies. Use whatever helps you build the best solution.',
  },
  {
    flag: '--judging',
    q: 'How are projects judged?',
    a: 'Innovation (30%), Technical Complexity (25%), Design & UX (20%), Impact & Viability (15%), Presentation (10%). Judged by industry experts.',
  },
];

export default function FAQ() {
  const [ref, visible] = useScrollReveal();
  const [openFlag, setOpenFlag] = useState(null);

  return (
    <section className="py-24 px-6 bg-[#060606]" id="faq">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <h2 className={`font-headline-lg text-primary uppercase mb-10 reveal ${visible ? 'visible' : ''}`}>
          FAQ_PROTOCOL
        </h2>

        {/* Terminal window */}
        <div className={`border border-neon-green/30 bg-black/80 overflow-hidden reveal stagger-1 ${visible ? 'visible' : ''}`}>
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-neon-green/5 border-b border-neon-green/20">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <span className="font-mono text-[10px] text-neon-green/50 ml-2">hackerverse --help</span>
          </div>

          {/* Terminal content */}
          <div className="p-5 md:p-6 font-mono text-sm">
            {/* Command header */}
            <div className="text-neon-green mb-1">HACKERVERSE v4.0.26</div>
            <div className="text-on-surface-variant/50 text-xs mb-4">48-hour online hackathon by CodeKrafters</div>

            <div className="text-on-surface-variant/40 text-xs mb-4">USAGE: hackerverse [OPTIONS]</div>
            <div className="text-on-surface-variant/40 text-xs mb-6">OPTIONS:</div>

            {/* FAQ items as flags */}
            <div className="space-y-1">
              {FAQS.map((faq, i) => {
                const isOpen = openFlag === i;
                return (
                  <div key={i}>
                    <button
                      onClick={() => setOpenFlag(isOpen ? null : i)}
                      className="w-full text-left flex items-start gap-4 py-2 px-3 hover:bg-neon-green/5 transition-colors group"
                    >
                      <span className={`shrink-0 transition-colors ${isOpen ? 'text-neon-green' : 'text-neon-green/60 group-hover:text-neon-green'}`}>
                        {faq.flag}
                      </span>
                      <span className={`transition-colors ${isOpen ? 'text-on-surface-variant' : 'text-on-surface-variant/40 group-hover:text-on-surface-variant/60'}`}>
                        {faq.q}
                      </span>
                      <span className={`ml-auto shrink-0 text-neon-green/30 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
                        ▸
                      </span>
                    </button>

                    {/* Answer */}
                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-8 md:pl-12 pr-4 pb-3 flex gap-2">
                        <span className="text-neon-green/30 shrink-0">→</span>
                        <p className="text-on-surface-variant/70 text-xs leading-relaxed">{faq.a}</p>
                      </div>
                    </div>

                    {/* Separator */}
                    <div className="h-px bg-on-surface-variant/5 mx-3" />
                  </div>
                );
              })}
            </div>

            {/* Terminal prompt */}
            <div className="mt-6 flex items-center gap-2 text-xs">
              <span className="text-neon-green/50">hackerverse@faq:~$</span>
              <span className="text-neon-green animate-pulse">█</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}