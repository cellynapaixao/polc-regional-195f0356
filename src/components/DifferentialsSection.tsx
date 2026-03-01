import { Target, Clock, ShieldCheck, FileCheck, Truck, Headphones } from "lucide-react";

const differentials = [
  {
    icon: Target,
    title: "Gestão Integrada de Projetos",
    text: "Planejamento, execução e controle em um único fluxo coordenado, com visibilidade completa de cada etapa.",
  },
  {
    icon: Clock,
    title: "Controle Rigoroso de Cronogramas",
    text: "Metodologias de acompanhamento que asseguram o cumprimento de marcos e prazos contratuais.",
  },
  {
    icon: ShieldCheck,
    title: "Conformidade Normativa e Regulatória",
    text: "Atuação alinhada às normas técnicas da ABNT, legislação aplicável e requisitos contratuais específicos.",
  },
  {
    icon: FileCheck,
    title: "Preparo para Contratos Públicos",
    text: "Documentação estruturada, processos formais e experiência em atendimento às exigências de licitações.",
  },
  {
    icon: Truck,
    title: "Capacidade Logística Regional",
    text: "Operação preparada para mobilização e execução em diferentes localidades do Maranhão, Pará e Piauí.",
  },
  {
    icon: Headphones,
    title: "Atendimento Consultivo e Técnico",
    text: "Acompanhamento próximo com suporte técnico dedicado em todas as fases do projeto.",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="section-padding bg-navy-gradient text-primary-foreground">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Diferenciais</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-4">
            Estrutura que Sustenta Resultados
          </h2>
          <p className="text-primary-foreground/60 leading-relaxed">
            A POLC Engenharia reúne processos, capacidade técnica e organização para entregar valor consistente em cada contrato.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((d) => (
            <div
              key={d.title}
              className="border border-primary-foreground/10 rounded-lg p-7 hover:border-secondary/40 hover:bg-primary-foreground/5 transition-all duration-300"
            >
              <d.icon size={24} className="text-secondary mb-4" />
              <h3 className="font-serif text-lg font-bold mb-2">{d.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
