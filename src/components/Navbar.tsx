import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Licitações", href: "#licitacoes" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#inicio" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center font-serif font-bold text-secondary-foreground text-lg">
            P
          </div>
          <span className="text-primary-foreground font-semibold text-lg tracking-wide">
            POLC <span className="font-normal opacity-80">Engenharia</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium tracking-wide uppercase"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#contato")}
            className="bg-secondary text-secondary-foreground px-5 py-2 rounded text-sm font-semibold hover:bg-gold-dark transition-colors"
          >
            Solicitar Proposta
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-primary-foreground/10 animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium py-2 text-left uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleClick("#contato")}
              className="bg-secondary text-secondary-foreground px-5 py-3 rounded text-sm font-semibold mt-2"
            >
              Solicitar Proposta
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
