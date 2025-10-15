import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import tendersHero from "../assets/tenders-hero.png";

const Tenders = () => {
    const tenders = [
        {
            id: 1,
            title: "PROCUREMENT OF FLOATING FISH FEED-MAKING MACHINES AND EQUIPMENT",
            description:
                "The core objective is to set up a locally owned and operated fish feed production unit with a capacity to produce a maximum of 200 Kg of fish feed per hour. This unit will provide affordable, high-quality feed to fish farmers, resulting in increased productivity within the fish farming sector. Additionally, it will contribute to raising the income levels of small-scale farmers.",
            requirements: [
                "5+ years experience in rural development",
                "Proven track record in North-East region",
                "Multi-lingual capabilities (English, Hindi, local languages)",
                "Certified training methodologies",
            ],
            tenderId: "ASTED/2025/TND/001",
            lastDate: "SEPTEMBER 15, 2025",
            estimatedValue: "₹25,00,000",
            status: "Active",
        },
        {
            id: 2,
            title: "SUPPLY AND INSTALLATION OF SOLAR WATER PUMP SYSTEMS",
            description:
                "This tender aims to install solar-powered water pumps to support agricultural irrigation for rural farmers. It focuses on sustainable energy use, minimizing carbon footprint, and improving access to water resources in underserved areas.",
            requirements: [
                "3+ years experience in solar or renewable energy sector",
                "Proven implementation experience in rural projects",
                "Valid MSME or ISO certification",
                "Strong technical manpower base",
            ],
            tenderId: "ASTED/2025/TND/002",
            lastDate: "OCTOBER 30, 2025",
            estimatedValue: "₹40,00,000",
            status: "Active",
        },
    ];

    return (
        <div className="min-h-screen">
            <section className="relative h-[400px] bg-primary overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${tendersHero})` }}
                >
                    <div className="absolute top-0 left-0 h-full w-1/2 bg-[#000080] opacity-[69%]"></div>
                </div>
                <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
                    <h1 className="font-oswald font-bold text-hero text-brand-white mb-6">
                        TENDERS
                    </h1>
                    <p className="font-work-sans text-xl text-brand-white max-w-2xl">
                        CURRENT PROCUREMENT OPPORTUNITIES AND PROJECTS
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 mx-auto">
                        {tenders.map((tender) => (
                            <Card
                                key={tender.id}
                                className="bg-[#EFEFFF] border-0 shadow-lg p-4"
                            >
                                <CardHeader className="pb-4 relative">
                                    <Badge
                                        className={`absolute top-8 right-4 font-work-sans text-sm px-4 py-2 rounded-full ${tender.status === "Active"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {tender.status.toUpperCase()}
                                    </Badge>

                                    <h2 className="font-oswald font-bold md:text-2xl text-brand-dark mb-4 pr-24">
                                        {tender.title}
                                    </h2>

                                    <p className="font-work-sans text-brand-dark leading-relaxed">
                                        {tender.description}
                                    </p>
                                </CardHeader>

                                <CardContent className="space-y-6">
                                    <div>
                                        <h4 className="font-oswald font-bold text-lg text-brand-dark mb-3">
                                            REQUIREMENTS
                                        </h4>
                                        <ul className="space-y-2">
                                            {tender.requirements.map((req, index) => (
                                                <li
                                                    key={index}
                                                    className="font-work-sans text-brand-dark flex items-start"
                                                >
                                                    <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center justify-between ">

                                        <div className="pt-4 border-t border-brand-light-gray space-y-1">
                                            <p className="font-oswald font-bold text-sm text-brand-dark">
                                                TENDER ID: {tender.tenderId}
                                            </p>
                                            <p className="font-oswald font-bold text-sm text-brand-dark">
                                                LAST DATE: {tender.lastDate}
                                            </p>
                                            <p className="font-oswald font-bold text-sm text-brand-dark">
                                                ESTIMATED VALUE: {tender.estimatedValue}
                                            </p>
                                        </div>

                                        <div className="">
                                            <Button
                                                variant="default"
                                                className="bg-[#000080] hover:bg-[#0000b3] text-white font-oswald font-semibold"
                                            >
                                                VIEW DOCUMENT
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

       
        </div>
    );
};

export default Tenders;
