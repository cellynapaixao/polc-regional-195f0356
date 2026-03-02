import { Building, Users, Briefcase, MapPin } from "lucide-react";

const stats = [
{ icon: Building, label: "Órgãos Públicos", text: "Atendimento estruturado" },
{ icon: Briefcase, label: "Instituições Financeiras", text: "Conformidade comprovada" },
{ icon: Users, label: "Indústrias", text: "Execução controlada" },
{ icon: MapPin, label: "Empresas de Médio e Grande Porte", text: "Capacidade regional" }];


const PositioningSection = () => {
  return (
    <section className="section-padding bg-card border-y border-border">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Posicionamento</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 font-sans">
            Estrutura Preparada para Atender
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Capacidade técnica e organizacional dimensionada para as exigências de diferentes segmentos e perfis de contratante.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) =>
          <div
            key={s.label}
            className="text-center p-6 rounded-lg border border-border hover:border-secondary/30 hover:shadow-md transition-all duration-300">
            
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <s.icon size={24} className="text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{s.label}</h3>
              <p className="text-muted-foreground text-xs">{s.text}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default PositioningSection;