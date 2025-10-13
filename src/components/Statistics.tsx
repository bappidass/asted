const Statistics = () => {
  const stats = [
    {
      number: "10+",
      label: "CURRENT PROJECTS"
    },
    {
      number: "3", 
      label: "DISTRICTS COVERED"
    },
    {
      number: "1000+",
      label: "HOUSEHOLDS HELPED"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary/50 to-transparent text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-primary/30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-oswald font-bold text-stats leading-none">
                {stat.number}
              </h3>
              <p className="font-work-sans text-body tracking-wider opacity-90">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;