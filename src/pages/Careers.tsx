import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import careersHero from "@/assets/careers-hero.jpg";

const Careers = () => {
  const jobs = [
    {
      id: 1,
      title: "SENIOR PROGRAM MANAGER",
      department: "MICROFINANCE",
      type: "Full time | Senior Level",
      status: "open",
      description: "Lead our microfinance initiatives across Assam and Meghalaya. Develop strategic partnerships, manage field operations, and ensure program effectiveness in empowering rural communities.",
      requirements: [
        "Bachelor's degree in Social Work/Rural Development",
        "4+ years field experience in NE India",
        "Excellent communication and interpersonal skills",
        "Experience with community mobilization",
        "Basic computer literacy"
      ],
      location: "SHILLONG, MEGHALAYA",
      experience: "4+ YEARS"
    },
    {
      id: 2,
      title: "SENIOR PROGRAM MANAGER",
      department: "MICROFINANCE",
      type: "Full time | Senior Level",
      status: "closed",
      description: "Lead our microfinance initiatives across Assam and Meghalaya. Develop strategic partnerships, manage field operations, and ensure program effectiveness in empowering rural communities.",
      requirements: [
        "Bachelor's degree in Social Work/Rural Development",
        "4+ years field experience in NE India",
        "Excellent communication and interpersonal skills",
        "Experience with community mobilization",
        "Basic computer literacy"
      ],
      location: "SHILLONG, MEGHALAYA",
      experience: "4+ YEARS"
    },
    {
      id: 1,
      title: "SENIOR PROGRAM MANAGER",
      department: "MICROFINANCE",
      type: "Full time | Senior Level",
      status: "open",
      description: "Lead our microfinance initiatives across Assam and Meghalaya. Develop strategic partnerships, manage field operations, and ensure program effectiveness in empowering rural communities.",
      requirements: [
        "Bachelor's degree in Social Work/Rural Development",
        "4+ years field experience in NE India",
        "Excellent communication and interpersonal skills",
        "Experience with community mobilization",
        "Basic computer literacy"
      ],
      location: "SHILLONG, MEGHALAYA",
      experience: "4+ YEARS"
    },
    {
      id: 2,
      title: "SENIOR PROGRAM MANAGER",
      department: "MICROFINANCE",
      type: "Full time | Senior Level",
      status: "closed",
      description: "Lead our microfinance initiatives across Assam and Meghalaya. Develop strategic partnerships, manage field operations, and ensure program effectiveness in empowering rural communities.",
      requirements: [
        "Bachelor's degree in Social Work/Rural Development",
        "4+ years field experience in NE India",
        "Excellent communication and interpersonal skills",
        "Experience with community mobilization",
        "Basic computer literacy"
      ],
      location: "SHILLONG, MEGHALAYA",
      experience: "4+ YEARS"
    }
  ];

  return (
    <div className="min-h-screen">

      <section className="relative h-[400px] bg-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${careersHero})` }}
        >

          <div className="absolute top-0 left-0 h-full w-1/2 bg-[#000080] opacity-[69%]"></div>
        </div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 className="font-oswald font-bold text-hero text-brand-white mb-6">
            CAREERS
          </h1>
          <p className="font-work-sans text-xl text-brand-white max-w-2xl">
            JOIN THE TEAM AND BUILD THE FUTURE TOGETHER
          </p>
        </div>
      </section>


      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4  mx-auto">
            {jobs.map((job) => (
              <Card key={job.id} className="bg-[#EFEFFF] border-0 shadow-lg p-4">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-brand-blue/10 text-brand-blue font-work-sans text-sm px-4 py-2"
                    >
                      {job.type}
                    </Badge>
                    <Badge
                      className={`font-work-sans text-sm px-4 py-2 ${job.status === 'open'
                          ? 'bg-brand-mint text-brand-dark'
                          : 'bg-red-100 text-red-700'
                        }`}
                    >
                      {job.status === 'open' ? 'Open' : 'Closed'}
                    </Badge>
                  </div>

                  <h2 className="font-oswald font-bold text-2xl text-brand-dark mb-2">
                    {job.title}
                  </h2>
                  <h3 className="font-oswald font-bold text-lg text-brand-blue mb-4">
                    {job.department}
                  </h3>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="font-work-sans text-brand-dark leading-relaxed">
                    {job.description}
                  </p>

                  <div>
                    <h4 className="font-oswald font-bold text-lg text-brand-dark mb-3">
                      REQUIREMENTS
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="font-work-sans text-brand-dark flex items-start">
                          <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-brand-light-gray">
                    <div className="space-y-1">
                      <div className="font-oswald font-bold text-sm text-brand-dark">
                        LOCATION: {job.location}
                      </div>
                      <div className="font-oswald font-bold text-sm text-brand-dark">
                        EXPERIENCE: {job.experience}
                      </div>
                    </div>

                    <Button
                      variant={job.status === 'open' ? 'default' : 'secondary'}
                      disabled={job.status === 'closed'}
                      className="font-oswald font-semibold"
                    >
                      {job.status === 'open' ? 'APPLY NOW' : 'CLOSED'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;