export default function Footer() {
  return (
    <footer className="w-full py-12 px-12 border-t-2 border-neon-green bg-[#0A0A0A] relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="text-2xl font-black text-neon-green font-['Orbitron'] mb-3">HACKERVERSE</div>
            <p className="font-body-md text-on-surface-variant text-sm">The ultimate 48-hour hackathon experience by CodeKrafters.</p>
          </div>
          <div>
            <p className="font-label-mono text-neon-green text-xs mb-4">QUICK_LINKS</p>
            <div className="flex flex-col gap-2">
              {['about', 'tracks', 'prizes', 'faq'].map((id) => (
                <a key={id} href={`#${id}`} className="font-mono text-xs text-on-surface-variant hover:text-neon-green transition-colors capitalize">{id}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-label-mono text-neon-green text-xs mb-4">JOIN_THE_NETWORK</p>
            <div className="flex gap-2 mb-4">
              <input type="email" placeholder="operator@email.com" className="bg-black border border-neon-green/40 text-neon-green px-4 py-2 font-mono text-xs flex-1 focus:border-neon-green focus:outline-none" />
              <button className="bg-neon-green text-black px-4 py-2 font-label-mono text-xs hover:bg-white transition-all">SEND</button>
            </div>
            <div className="flex gap-4">
              {['Discord', 'Twitter', 'Github'].map((s) => (
                <a key={s} href="#" className="text-neon-green/50 hover:text-neon-green transition-colors font-label-mono text-xs">{s}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-neon-green/20 pt-6 flex flex-wrap justify-between items-center gap-4">
          <p className="font-mono text-xs tracking-widest uppercase text-neon-green/50">©2026 CODEKRAFTERS // TERMINAL_ACCESS_GRANTED</p>
          <div className="flex gap-6">
            <a href="#" className="font-mono text-xs text-neon-green/40 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="font-mono text-xs text-neon-green/40 hover:text-white transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
}