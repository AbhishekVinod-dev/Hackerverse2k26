import useNavHighlight from '../hooks/useNavHighlight';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#tracks', label: 'Tracks' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#prizes', label: 'Prizes' },
  { href: '#team', label: 'Team' },
  { href: '#sponsors', label: 'Sponsors' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header({ onMenuToggle, menuOpen }) {
  const activeId = useNavHighlight();

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-20 bg-[#0A0A0A]/90 backdrop-blur-md border-b-2 border-neon-green shadow-[0_0_10px_rgba(204,255,0,0.3)]">
      <a href="#" className="text-2xl font-black text-neon-green tracking-widest italic font-['Orbitron']">HACKERVERSE</a>
      <nav className="hidden lg:flex gap-6 items-center">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`nav-link font-['Orbitron'] tracking-tighter uppercase font-bold text-neon-green text-sm px-3 py-1 hover:bg-neon-green hover:text-[#0A0A0A] transition-all duration-75 ${activeId === link.href.slice(1) ? 'active' : ''}`}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <button className="hidden md:block bg-neon-green text-[#0A0A0A] px-6 py-2 font-['Orbitron'] font-bold tracking-tighter uppercase hover:bg-white transition-all active:translate-y-1">
          REGISTER_NOW
        </button>
        <button id="menu-toggle" onClick={onMenuToggle} className="lg:hidden text-neon-green">
          <span className="material-symbols-outlined text-3xl">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>
    </header>
  );
}