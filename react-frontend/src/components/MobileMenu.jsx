import useMobileMenu from '../hooks/useMobileMenu';

const links = ['about', 'tracks', 'timeline', 'prizes', 'team', 'sponsors', 'faq'];

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      <div id="menu-backdrop" className={`menu-backdrop fixed inset-0 bg-black/70 backdrop-blur-sm z-[998] ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div id="mobile-menu" className={`mobile-menu fixed top-0 right-0 w-72 h-full bg-[#0A0A0A] border-l-2 border-neon-green z-[999] flex flex-col p-8 gap-6 ${isOpen ? 'open' : ''}`}>
        <button onClick={onClose} className="self-end text-neon-green">
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>
        {links.map((link) => (
          <a key={link} href={`#${link}`} onClick={onClose} className="font-['Orbitron'] tracking-tighter uppercase font-bold text-neon-green text-xl py-2 border-b border-neon-green/20">
            {link}
          </a>
        ))}
        <button className="bg-neon-green text-black px-6 py-3 font-['Orbitron'] font-bold mt-4 uppercase">Register Now</button>
      </div>
    </>
  );
}