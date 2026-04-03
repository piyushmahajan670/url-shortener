import { BarChart3, Shield, Zap } from "lucide-react";

export function Features() {
  
  const features = [
    { icon: Zap, title: "Lightning Fast", desc: "Generate short links in milliseconds" },
    { icon: Shield, title: "Secure & Reliable", desc: "Enterprise-grade link management" },
    { icon: BarChart3, title: "Analytics", desc: "Track clicks and engagement" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="p-6 text-center border-border/50 hover:shadow-md transition-shadow bg-card">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent mb-4">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}