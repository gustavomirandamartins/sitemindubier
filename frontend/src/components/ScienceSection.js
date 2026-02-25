import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Satellite, FlaskConical, MapPin } from "lucide-react";

const countries = [
  "Ivory Coast", "Brazil", "United States", "Canada", "Turkey",
  "Nicaragua", "Argentina", "India", "Australia", "Scotland",
  "Peru", "France", "Romania", "Spain", "Greece", "Portugal", "Italy"
];

const MethodCard = ({ icon, title, description, image, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <Card className="relative rounded-2xl overflow-hidden h-64 lg:h-72 border-0 group cursor-pointer">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
      <div className="absolute inset-0 bg-foreground/55 group-hover:bg-foreground/45 transition-colors duration-300" />
      <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col justify-end">
        <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground mb-4">
          {icon}
        </div>
        <h4 className="text-lg lg:text-xl font-bold text-primary-foreground mb-2">{title}</h4>
        <p className="text-sm text-primary-foreground/70 leading-relaxed">{description}</p>
      </div>
    </Card>
  </motion.div>
);

export const ScienceSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background" id="science">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Science
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Make the <span className="font-display italic text-accent">data talk</span>
          </h2>
          <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
            Our strength: collecting land-use data from the ground all over the world mixed to remote sensing, and turning it into knowledge.
          </p>
          <Button
            variant="outline"
            className="rounded-full px-8 py-5 mt-6 border-border text-foreground hover:bg-muted transition-colors duration-200"
          >
            How it works
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </motion.div>

        {/* World Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="rounded-2xl p-6 lg:p-10 border border-border/30 shadow-genesis bg-card/25 backdrop-blur-[16px]">
            <div className="relative">
              {/* Simplified World Map with Dots */}
              <div className="relative h-48 lg:h-72 overflow-hidden">
                <Globe size={300} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-muted/50" strokeWidth={0.3} />
                
                {/* Country dots */}
                <div className="absolute inset-0">
                  {[
                    { name: "France", x: 52, y: 28 },
                    { name: "Brazil", x: 35, y: 62 },
                    { name: "USA", x: 20, y: 35 },
                    { name: "India", x: 72, y: 48 },
                    { name: "Australia", x: 82, y: 72 },
                    { name: "Canada", x: 22, y: 22 },
                    { name: "Turkey", x: 60, y: 34 },
                    { name: "Spain", x: 48, y: 36 },
                    { name: "Italy", x: 53, y: 34 },
                    { name: "Peru", x: 28, y: 58 },
                    { name: "Argentina", x: 32, y: 75 },
                    { name: "Ivory Coast", x: 47, y: 52 },
                  ].map((country) => (
                    <div
                      key={country.name}
                      className="absolute group"
                      style={{ left: `${country.x}%`, top: `${country.y}%` }}
                    >
                      <div className="relative">
                        <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                        <div className="w-3 h-3 rounded-full bg-accent/30 absolute inset-0 animate-ping" />
                      </div>
                      <span className="absolute left-4 top-0 text-[10px] text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {country.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Country Tags */}
              <div className="flex flex-wrap gap-2 mt-6 justify-center">
                {countries.map((country) => (
                  <span
                    key={country}
                    className="text-xs px-3 py-1.5 rounded-full bg-muted/25 backdrop-blur-[10px] border border-border/20 text-muted-foreground font-medium hover:bg-accent/10 hover:text-accent hover:border-accent/20 transition-colors duration-200 cursor-default"
                  >
                    <MapPin size={10} className="inline mr-1" />
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Three Methodology Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <MethodCard
            icon={<FlaskConical size={20} />}
            title="Soil samplings"
            description="Global standardized operations, scientifically designed with ISO indicators."
            image="https://images.unsplash.com/photo-1761474909188-ee209bfcfe60?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwxfHxyb2xsaW5nJTIwZ3JlZW4lMjBmaWVsZHN8ZW58MHx8fHwxNzcyMDI1NTI4fDA&ixlib=rb-4.1.0&q=85"
            delay={0.1}
          />
          <MethodCard
            icon={<Satellite size={20} />}
            title="Remote sensing"
            description="Detection of key practices, from vegetation cover to natural habitats, and more."
            image="https://images.pexels.com/photos/20286975/pexels-photo-20286975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            delay={0.2}
          />
          <MethodCard
            icon={<Globe size={20} />}
            title="Scoring"
            description="Transforming raw indicator values into a 0-10 score, adapted to the specific local context."
            image="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};
