import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Layers, Shield, Eye, ArrowRight, TrendingUp, BarChart3, Leaf } from "lucide-react";

const PlatformFeatureCard = ({ icon, title, description }) => (
  <div className="text-center lg:text-left">
    <div className="w-12 h-12 rounded-xl bg-accent/10 backdrop-blur-[12px] border border-accent/15 flex items-center justify-center text-accent mx-auto lg:mx-0 mb-4">
      {icon}
    </div>
    <h4 className="text-base font-semibold text-foreground mb-2">{title}</h4>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const DataCard = ({ country, crop, status, score, color }) => (
  <div className="flex items-center justify-between p-3 bg-card/20 backdrop-blur-[12px] rounded-xl border border-border/20">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-muted/30 backdrop-blur-sm flex items-center justify-center text-xs font-bold">
        {country.slice(0, 2).toUpperCase()}
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">{country}</p>
        <p className="text-xs text-muted-foreground">{crop}</p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
        status === 'Good' ? 'bg-soil-good/10 text-soil-good' : 
        status === 'Fair' ? 'bg-soil-fair/10 text-soil-fair' : 
        'bg-soil-degraded/10 text-soil-degraded'
      }`}>{status}</span>
      <span className="text-lg font-bold text-foreground">{score}</span>
    </div>
  </div>
);

export const PlatformSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-lavender" id="platform">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground bg-card/25 backdrop-blur-[12px] border border-border/20">
            The Platform
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            The first <span className="font-display italic text-accent">Land Business Intelligence</span>
          </h2>
          <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
            to empower your resilience. An unmatched dashboard, offering a complete vision of your impact.
          </p>
          <Button className="rounded-full px-8 py-5 mt-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-genesis-elevated">
            Book a demo
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </motion.div>

        {/* Three Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <PlatformFeatureCard
              icon={<Layers size={24} />}
              title="Solution built for scale"
              description="Start small, then expand your projects as needed. Countries, regions, suppliers, raw materials, farms… The platform grows with your needs."
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <PlatformFeatureCard
              icon={<Shield size={24} />}
              title="High-integrity data"
              description="Ground-truthed soil samples combined with robust methodologies. Developed to meet international standards, ensuring credibility."
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <PlatformFeatureCard
              icon={<Eye size={24} />}
              title="Intuitive & Visual"
              description="Scores, graphs, dashboards… A complete, easy-to-read visualization of your projects, helping you engage partners."
            />
          </motion.div>
        </div>

        {/* Dashboard Preview Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Spot Outliers Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl p-5 border border-border/30 shadow-genesis bg-card/25 backdrop-blur-[16px] h-full flex flex-col">
              <h4 className="text-sm font-semibold text-foreground mb-4">Spot outliers. Prioritise interventions.</h4>
              <div className="space-y-3 flex-1">
                <DataCard country="USA" crop="Soja" status="Fair" score={4.8} />
                <DataCard country="Brazil" crop="Soja" status="Good" score={6.5} />
              </div>
            </Card>
          </motion.div>

          {/* Identify Production Modes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="rounded-2xl p-5 border border-border/30 shadow-genesis bg-card/25 backdrop-blur-[16px] h-full flex flex-col">
              <h4 className="text-sm font-semibold text-foreground mb-4">Identify production modes & best practices</h4>
              <div className="space-y-4 flex-1">
                <div className="flex items-center justify-between p-3 bg-muted/20 backdrop-blur-[12px] rounded-xl border border-border/15">
                  <div>
                    <p className="text-xs text-muted-foreground">Conventional agriculture</p>
                    <p className="text-sm font-medium text-foreground">Healthy soils</p>
                  </div>
                  <span className="text-2xl font-bold text-soil-fair">17%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/5 backdrop-blur-[12px] rounded-xl border border-accent/10">
                  <div>
                    <p className="text-xs text-muted-foreground">Organic agriculture</p>
                    <p className="text-sm font-medium text-foreground">Healthy soils</p>
                  </div>
                  <span className="text-2xl font-bold text-accent">95%</span>
                </div>
                <div className="flex items-center gap-2 px-3">
                  <TrendingUp size={14} className="text-accent" />
                  <span className="text-xs text-accent font-medium">Potential gain: +78pts</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Evidence Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="rounded-2xl p-5 border border-border/30 shadow-genesis bg-card/25 backdrop-blur-[16px] h-full flex flex-col">
              <h4 className="text-sm font-semibold text-foreground mb-4">Measure environmental co-benefits</h4>
              <div className="space-y-3 flex-1">
                {[
                  { type: "Permanent vegetation cover", co2: 244, level: 1 },
                  { type: "Short vegetation cover", co2: 146, level: 2 },
                  { type: "Bare soil", co2: 121, level: 3 },
                ].map((item) => (
                  <div key={item.type} className="flex items-center gap-3 p-3 bg-muted/15 backdrop-blur-[12px] rounded-xl border border-border/15">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                      item.level === 1 ? 'bg-soil-good/10 text-soil-good' : 
                      item.level === 2 ? 'bg-soil-fair/10 text-soil-fair' : 
                      'bg-soil-degraded/10 text-soil-degraded'
                    }`}>
                      {item.level}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-foreground font-medium">{item.type}</p>
                      <p className="text-[10px] text-muted-foreground">{item.co2} t/ha of equivalent CO2</p>
                    </div>
                    <Leaf size={14} className={item.level === 1 ? 'text-soil-good' : 'text-muted-foreground/30'} />
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
