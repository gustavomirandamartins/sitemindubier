import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    company: "Chandon",
    description: "Measuring impact on land, worldwide",
    image: "https://images.unsplash.com/photo-1761489179352-0aaebb4665dc",
    link: "#use-cases",
  },
  {
    company: "Amarenco",
    description: "Solar energy & Regenerative ecosystems",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d",
    link: "#use-cases",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background" id="use-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Genesis in the <span className="font-display italic text-accent">words of our clients</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <a href={testimonial.link} className="block group">
                <Card className="relative rounded-2xl overflow-hidden h-72 lg:h-80 border-0 shadow-genesis group-hover:shadow-genesis-hover transition-shadow duration-300">
                  <img
                    src={testimonial.image}
                    alt={testimonial.company}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                  
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8">
                    <div className="w-12 h-12 rounded-xl bg-primary-foreground/15 backdrop-blur-[16px] border border-primary-foreground/20 flex items-center justify-center mb-4">
                      <span className="text-primary-foreground font-bold text-lg">{testimonial.company.charAt(0)}</span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-primary-foreground mb-1">{testimonial.company}</h3>
                    <p className="text-sm text-primary-foreground/70">{testimonial.description}</p>
                    <div className="flex items-center gap-1 mt-3 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors duration-200">
                      <span className="text-sm font-medium">Read case study</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
