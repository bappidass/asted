import staticbg from "../assets/static.png";

const Statistics = () => {
  const stats = [
    { number: "10+", label: "CURRENT PROJECTS" },
    { number: "3", label: "DISTRICTS COVERED" },
    { number: "1000+", label: "HOUSEHOLDS HELPED" },
  ];

  return (
    <section
      className="py-20 text-primary-foreground relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${staticbg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000080] opacity-70"></div>

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
