import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "A organização documental e o rigor no cumprimento das etapas contratuais foram determinantes na escolha da POLC como parceira. A conformidade com as exigências técnicas facilitou todo o processo de fiscalização.",
    author: "Gestor Público",
    role: "Secretaria de Infraestrutura",
  },
  {
    text: "Precisávamos de uma empresa com capacidade de execução e controle operacional rigoroso. A POLC entregou dentro do prazo, com qualidade e sem comprometer nossa linha de produção durante a obra.",
    author: "Diretor Industrial",
    role: "Indústria de grande porte — Pará",
  },
  {
    text: "O atendimento técnico e o comprometimento com os prazos contratuais foram exemplares. A documentação sempre atualizada e a comunicação transparente nos deram total segurança durante a execução.",
    author: "Representante Institucional",
    role: "Instituição financeira — Maranhão",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Prova Social</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Reconhecimento Institucional
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Relatos de parceiros e contratantes que atestam a capacidade técnica e o compromisso institucional da POLC.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-8 flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <Quote size={24} className="text-secondary/40 mb-4" />
              <p className="text-foreground/80 text-sm leading-relaxed italic flex-1 mb-6">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground text-sm">{t.author}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
