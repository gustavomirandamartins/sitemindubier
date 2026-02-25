import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const crops = [
  { name: "Vine", image: "https://images.unsplash.com/photo-1661702208419-aaa786753f43" },
  { name: "Cereals", image: "https://images.unsplash.com/photo-1709226418945-86040e45c48f" },
  { name: "Sunflower", image: "https://images.unsplash.com/photo-1551945326-df678a97c3af" },
  { name: "Coffee", image: "https://images.unsplash.com/photo-1675306408031-a9aad9f23308" },
  { name: "Rapeseed", image: "https://images.unsplash.com/photo-1651486315832-e32159a744a9" },
  { name: "Beetroot", image: "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82" },
  { name: "Cotton", image: "https://images.unsplash.com/photo-1633527992904-53f86f81a23a" },
  { name: "Cocoa", image: "https://images.unsplash.com/photo-1573710661345-610f790e1218" },
  { name: "Wood", image: "https://images.unsplash.com/photo-1604038707558-17b7cc670943" },
];

export const BenchmarkSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground bg-card/25 backdrop-blur-[12px] border border-border/20">
            Benchmark
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Strategic <span className="font-display italic text-accent">knowledge</span>
          </h2>
          <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
            for your raw materials. Leverage Genesis exclusive database on raw materials, understand how you rank against aggregated data.
          </p>
        </motion.div>
      </div>

      {/* Scrolling Carousel */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-scroll-benchmarks" style={{ width: 'max-content' }}>
          {[...crops, ...crops, ...crops].map((crop, i) => (
            <div
              key={`${crop.name}-${i}`}
              className="flex-shrink-0 w-40 lg:w-48 mx-3 group cursor-pointer"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-genesis group-hover:shadow-genesis-hover transition-shadow duration-300">
                <img
                  src={crop.image}
                  alt={crop.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              </div>
              <p className="text-center text-sm font-medium text-foreground mt-3">{crop.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
