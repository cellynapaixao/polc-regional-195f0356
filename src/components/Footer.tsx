import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-gradient text-primary-foreground">
      <div className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded bg-primary flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="hsl(170,55%,40%)" />
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-1.42 3.42 2 2 0 01-1.42-.59l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1.08-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-3.42-1.42 2 2 0 01.59-1.42l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1.08 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary-foreground" />
                </svg>
              </div>
              <span className="font-semibold text-lg tracking-wide">
                POLC <span className="font-normal opacity-80">Engenharia</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Engenharia com Governança, Precisão Técnica e Capacidade de Alto desempenho.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-secondary">Navegação</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#inicio" className="hover:text-secondary transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-secondary transition-colors">Sobre a Empresa</a></li>
              <li><a href="#atuacao" className="hover:text-secondary transition-colors">Áreas de Atuação</a></li>
              <li><a href="#diferenciais" className="hover:text-secondary transition-colors">Diferenciais</a></li>
              <li><a href="#licitacoes" className="hover:text-secondary transition-colors">Licitações</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-secondary">Serviços</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>Obras Civis e Industriais</li>
              <li>Reformas Corporativas</li>
              <li>Projetos de Engenharia</li>
              <li>Instalações Técnicas</li>
              <li>Gestão de Obras</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-secondary">Contato</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-secondary shrink-0" />
                <span>Maranhão · Mato Grosso · Pará · Paraíba · Piauí</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-secondary shrink-0" />
                <span>(98) 9 85158012</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-secondary shrink-0" />
                <span>contato@polcengenharia.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} POLC Engenharia. Todos os direitos reservados.
          </p>
          <p className="text-xs text-primary-foreground/40">
            CNPJ: 00.000.000/0001-00 · CREA Ativo
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;