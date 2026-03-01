import { FileText, FolderCheck, Clock, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: FileText,
    title: "Experiência em Contratos Institucionais",
    text: "Histórico de atuação em contratos com órgãos públicos e instituições, com registro de cumprimento integral das obrigações técnicas e administrativas.",
  },
  {
    icon: FolderCheck,
    title: "Organização Documental",
    text: "Estrutura interna preparada para atendimento de processos licitatórios, com documentação técnica, jurídica e financeira sempre atualizada e organizada.",
  },
  {
    icon: Clock,
    title: "Compromisso com Prazos e Exigências",
    text: "Processos internos de controle que garantem o cumprimento de cronogramas, marcos contratuais e exigências técnicas específicas de cada edital.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e Preparo Administrativo",
    text: "Equipe administrativa capacitada para lidar com as complexidades de contratos formais, assegurando conformidade em todas as fases.",
  },
];

const PublicContractsSection = () => {
  return (
    <section id="licitacoes" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Licitações e Contratos Públicos</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Preparo Institucional para Processos Formais
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A POLC Engenharia mantém estrutura organizacional e operacional preparada para atender às exigências de contratos públicos, com segurança jurídica e responsabilidade técnica comprovadas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-lg p-8 flex gap-5 hover:shadow-lg hover:border-secondary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <item.icon size={22} className="text-secondary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicContractsSection;
