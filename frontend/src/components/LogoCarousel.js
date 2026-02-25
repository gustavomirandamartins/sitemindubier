const logos = [
  { name: "L'Occitane", text: "L'OCCITANE" },
  { name: "SLB", text: "SLB" },
  { name: "JDE", text: "JDE" },
  { name: "Symrise", text: "SYMRISE" },
  { name: "Cristal Union", text: "CRISTAL UNION" },
  { name: "LVMH", text: "LVMH" },
  { name: "Lancome", text: "LANCÔME" },
  { name: "Chandon", text: "CHANDON" },
  { name: "Amarenco", text: "AMARENCO" },
];

export const LogoCarousel = () => {
  return (
    <section className="py-10 lg:py-14 border-b border-border/50 bg-background overflow-hidden">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-scroll-logos" style={{ width: 'max-content' }}>
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center justify-center px-8 lg:px-12"
            >
              <span className="text-muted-foreground/40 text-lg lg:text-xl font-bold tracking-wider uppercase whitespace-nowrap">
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
