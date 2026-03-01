import { Building2, Landmark, PenTool, Wrench, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Obras Civis e Industriais",
    description: "Execução estruturada de empreendimentos civis e industriais com controle técnico, financeiro e operacional integrado. Planejamento de fases, gestão de suprimentos e supervisão qualificada em todas as etapas.",
    highlights: ["Controle de escopo e custos", "Supervisão técnica permanente", "Cronograma estruturado"],
  },
  {
    icon: Landmark,
    title: "Reformas Corporativas e Bancárias",
    description: "Adequação e modernização de ambientes comerciais e institucionais com segurança, precisão e mínimo impacto nas operações do cliente. Experiência em ambientes de alta exigência normativa.",
    highlights: ["Mínimo impacto operacional", "Conformidade com normas vigentes", "Execução em ambientes ativos"],
  },
  {
    icon: PenTool,
    title: "Projetos de Engenharia",
    description: "Desenvolvimento técnico estratégico com análise de viabilidade, compatibilização de disciplinas e otimização de recursos. Projetos elaborados para suportar processos licitatórios e aprovações regulatórias.",
    highlights: ["Análise de viabilidade", "Compatibilização multidisciplinar", "Otimização de recursos"],
  },
  {
    icon: Wrench,
    title: "Instalações Técnicas Especializadas",
    description: "Sistemas elétricos, hidrossanitários, climatização e demais instalações executadas em conformidade com as normas vigentes e com foco na segurança operacional e durabilidade.",
    highlights: ["Segurança operacional", "Adequação normativa", "Durabilidade e eficiência"],
  },
  {
    icon: ClipboardCheck,
    title: "Gestão e Coordenação de Obras",
    description: "Controle integrado de escopo, prazo, qualidade e conformidade contratual. Relatórios técnicos periódicos, gestão de interfaces e acompanhamento de indicadores de performance.",
    highlights: ["Controle de qualidade", "Conformidade contratual", "Indicadores de performance"],
  },
];

const ServicesSection = () => {
  return (
    <section id="atuacao" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Áreas de Atuação</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Capacidade Técnica com Impacto Organizacional
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Cada serviço é executado com planejamento estratégico, segurança jurídica, redução de riscos e eficiência de investimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-lg p-8 group hover:shadow-xl hover:border-secondary/40 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-secondary/10 transition-colors">
                <service.icon size={24} className="text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
