import aboutImage from "@/assets/about-team.webp";
import { Shield, Award, Scale } from "lucide-react";

const pillars = [
{
  icon: Shield,
  title: "Governança",
  text: "Compromisso com transparência, responsabilidade técnica e cumprimento contratual em todas as etapas do projeto."
},
{
  icon: Award,
  title: "Capacidade Técnica",
  text: "Equipe qualificada, planejamento detalhado e execução controlada, com foco em resultados mensuráveis."
},
{
  icon: Scale,
  title: "Compromisso Institucional",
  text: "Atuação ética e alinhada às exigências legais, normativas e regulatórias vigentes."
}];


const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Equipe de engenharia analisando projeto em canteiro de obras"
              className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
              loading="lazy" />
            
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Sobre a Empresa</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 font-sans">
              Estrutura Organizacional para Resultados Consistentes
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A POLC Engenharia é uma empresa estruturada para atender demandas de engenharia civil e industrial com eficiência, controle e conformidade. Com atuação consolidada no Maranhão, Pará e Piauí, mantemos processos internos rigorosos de planejamento, execução e supervisão.
              </p>
              <p>
                Nossa gestão estratégica de obras é orientada à performance e à mitigação de riscos, assegurando o cumprimento de prazos, orçamentos e requisitos técnicos. Cada projeto é conduzido com responsabilidade institucional e visão de longo prazo.
              </p>
              <p>
                A cultura organizacional da POLC prioriza a eficiência operacional, a transparência nas relações contratuais e o atendimento pleno às normas e regulamentações aplicáveis.
              </p>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {pillars.map((pillar) =>
          <div
            key={pillar.title}
            className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-secondary/30 transition-all duration-300">
            
              <pillar.icon size={28} className="text-secondary mb-4" />
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.text}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default AboutSection;