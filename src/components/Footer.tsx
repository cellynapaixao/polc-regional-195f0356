import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-gradient text-primary-foreground">
      <div className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center font-serif font-bold text-secondary-foreground text-lg">
                P
              </div>
              <span className="font-semibold text-lg tracking-wide">
                POLC <span className="font-normal opacity-80">Engenharia</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Engenharia com governança, precisão técnica e capacidade de execução regional.
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
                <span>Maranhão · Pará · Piauí</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-secondary shrink-0" />
                <span>(98) 3000-0000</span>
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
    </footer>
  );
};

export default Footer;
