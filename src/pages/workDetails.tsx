
import Agri1 from "@/assets/Agri1.png";
import Agri2 from "@/assets/Agri2.png";
import Agri3 from "@/assets/Agri3.png";

import Agriculture from "../assets/agriculture.svg";
import education from "../assets/Education.svg";
import environment from "../assets/Environment.svg";
import livelihood from "../assets/Livelihood.svg";

const WorkDeatils = () => {
    const workdetailsData = {

        heroSection: {
            category: "AGRICULTURE",
            bannerSubline: "MEDICINAL PLANTS CULTIVATION",
            title: "Medicinal Plants: Harnessing Nature for Sustainable Livelihoods",
            description:
                "Medicinal plants have been an integral part of traditional healthcare systems for centuries. With rising demand for natural remedies and herbal products, there is a unique opportunity to promote sustainable cultivation practices that not only preserve biodiversity but also provide livelihood opportunities to rural communities. Our Medicinal Plant Cultivation project works with farmers and local groups to encourage the systematic cultivation of medicinal plants, ensuring economic growth alongside environmental conservation.",
            images: [
                { src: Agri1, alt: "Community on boat near river" },
                { src: Agri2, alt: "Farmer carrying produce in field" },
                { src: Agri3, alt: "Tractor spraying crops" }
            ]
        },

        visionsGoalsImpact: {

            goals: [
                "To promote sustainable and eco-friendly farming practices.",
                "To provide alternative income sources for rural farmers.",
                "To preserve and promote indigenous knowledge of medicinal plants.",
                "To create market linkages for fair trade opportunities."
            ],
            sideImage: { src: Agri1, alt: "Farmer working in field" }
        },

        impactHighlights: [
            {
                icon: Agriculture,
                title: "Community Health",
                description:
                    "Promoting the use of locally grown medicinal plants strengthens traditional health practices."
            },
            {
                icon: education,
                title: "Economic Empowerment",
                description:
                    "Farmers have gained access to new income streams through the sale of medicinal plants."
            },
            {
                icon: environment,
                title: "Knowledge Preservation",
                description:
                    "Traditional knowledge of medicinal herbs is documented and passed on to younger generations."
            },
            {
                icon: livelihood,
                title: "Environmental Benefits",
                description:
                    "The cultivation of native species helps preserve local biodiversity."
            }
        ],

        beneficiaries: {
            groups: [
                {
                    name: "Women Self-Help Groups",
                    image: Agri1,
                    alt: "Group of women smiling outdoors"
                },
                {
                    name: "Rural Communities",
                    image: Agri1,
                    alt: "Rural youth riding bicycle"
                },
                {
                    name: "Local Health Practitioners",
                    image: Agri1,
                    alt: "Health worker consulting patient"
                },
                {
                    name: "Marginal Farmers",
                    image: Agri1,
                    alt: "Farmer carrying produce"
                }
            ]
        },


    };


    return (
        <div className="min-h-screen">

            <section className="relative h-[400px] bg-primary overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${Agri1})` }}
                >
                    <div className="absolute top-0 left-0 h-full w-1/2 bg-[#000080] opacity-[69%]"></div>
                </div>
                <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
                    <h1 className="font-oswald font-bold text-hero text-brand-white mb-6">
                        {workdetailsData.heroSection.category || ''}
                    </h1>
                    <p className="font-work-sans text-xl text-brand-white max-w-2xl">
                        {workdetailsData.heroSection.bannerSubline || ''}
                    </p>
                </div>
            </section>


            <section className="py-6  ">
                <div className="flex flex-col items-center gap-10  mx-auto ">
                    <div className="flex flex-col items-center gap-10 container ">
                        <h2 className="font-oswald font-bold text-section-header text-center text-primary  uppercase">
                            {workdetailsData.heroSection.title || ''}
                        </h2>
                        <div className="space-y-6">
                            <p className="font-work-sans text-body text-foreground leading-relaxed text-center">
                                {workdetailsData.heroSection.description || ''}
                            </p>
                        </div>
                        <div className="flex items-center justify-between  gap-4 ">
                            <div className="relative">
                                <img
                                    src={workdetailsData.heroSection.images[0].src}
                                    alt={workdetailsData.heroSection.images[0].alt}
                                    className="h-[100px] w-[100px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250] lg:w-[400px] lg:h-[400px] object-cover"
                                />
                                <div className="absolute top-0 left-0 h-full w-1/3 bg-[#000080] opacity-75"></div>
                            </div>

                            <img src={workdetailsData.heroSection.images[1].src} alt={workdetailsData.heroSection.images[1].alt} className="h-[100px] w-[100px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250] lg:w-[400px] lg:h-[400px] object-cover" />
                            <img src={workdetailsData.heroSection.images[2].src} alt={workdetailsData.heroSection.images[2].alt} className="h-[100px] w-[100px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250] lg:w-[400px] lg:h-[400px] object-cover" />
                        </div>
                    </div>

                    <div className="bg-primary w-full p-6 sm:p-8">
                        <h2 className="font-oswald font-bold text-section-header text-white uppercase text-center sm:text-left">
                            VISIONS, GOALS AND IMPACT
                        </h2>

                        <div className="flex flex-col-reverse lg:flex-row justify-center py-8 lg:py-10 gap-6 lg:gap-0">
                            <div className="w-full lg:w-3/4 flex flex-col text-black justify-start items-start gap-4">
                                {workdetailsData.visionsGoalsImpact.goals.map((goal, index) => (
                                    <div
                                        key={index}
                                        className="relative bg-white py-3 px-4 w-full rounded-md shadow-sm"
                                    >
                                        <div className="absolute left-0 top-0 bottom-0 w-[50px] sm:w-[60px] bg-[#000080] opacity-75 z-10 rounded-l-md"></div>
                                        <p className="ml-16 sm:ml-20 font-work-sans text-body text-foreground leading-relaxed text-start relative z-20">
                                            {goal}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full lg:w-1/4 h-56 sm:h-72 lg:h-[260px] relative">
                                <img
                                    src={workdetailsData.visionsGoalsImpact.sideImage.src}
                                    alt="vision-side"
                                    className="w-full h-full object-cover rounded-md"
                                />
                                <div className="absolute bottom-0 w-full h-full bg-[#000080] opacity-40 z-10 rounded-md"></div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="grid md:grid-cols-2 xl:grid-cols-4 ">
                            {workdetailsData.impactHighlights.map((impact, index) => (
                                <div
                                    key={index}
                                    className={`p-8 text-center  transition-all duration-300
                                    ${index === 1
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-white text-primary"
                                        }`}
                                >
                                    <h3 className="font-oswald text-card-header uppercase font-bold text-xl mb-3">
                                        {impact.title}
                                    </h3>
                                    <p className="font-work-sans text-base leading-relaxed">
                                        {impact.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col container  gap-10">
                        <h2 className="font-oswald font-bold text-section-header text-center text-primary  uppercase">
                            beneficiaries
                        </h2>
                        <div className="flex flex-wrap md:flex-nowrap items-start justify-between  gap-4 md:gap-0">
                            <div className="relative">
                                <img
                                    src={workdetailsData.beneficiaries.groups[0].image}
                                    alt={workdetailsData.beneficiaries.groups[0].alt}
                                    className=" md:h-[250px] md:w-[250] lg:w-[400px] lg:h-[400px] object-cover"
                                />
                                <div className="absolute bottom-0 w-full h-10   md:h-28 bg-[#000080] opacity-75 z-10 flex items-center justify-center">
                                    <h3 className=" font-oswald text-white text-center text-card-header uppercase font-bold ">
                                        {workdetailsData.beneficiaries.groups[0].name}
                                    </h3>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src={workdetailsData.beneficiaries.groups[1].image}
                                    alt={workdetailsData.beneficiaries.groups[1].alt}
                                    className=" md:h-[320px] md:w-[250] lg:w-[400px] lg:h-[495px] object-cover"
                                />
                                <div className="absolute bottom-0 w-full h-10   md:h-28 bg-[#000080] opacity-75 z-10 flex items-center justify-center">
                                    <h3 className=" font-oswald text-white text-center text-card-header uppercase font-bold ">
                                        {workdetailsData.beneficiaries.groups[1].name}
                                    </h3>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src={workdetailsData.beneficiaries.groups[2].image}
                                    alt={workdetailsData.beneficiaries.groups[2].alt}
                                    className=" md:h-[250px] md:w-[250] lg:w-[400px] lg:h-[400px] object-cover"
                                />
                                <div className="absolute bottom-0 w-full h-10   md:h-28 bg-[#000080] opacity-75 z-10 flex items-center justify-center">
                                    <h3 className=" font-oswald text-white text-center text-card-header uppercase font-bold ">
                                        {workdetailsData.beneficiaries.groups[2].name}
                                    </h3>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src={workdetailsData.beneficiaries.groups[3].image}
                                    alt={workdetailsData.beneficiaries.groups[3].alt}
                                    className="md:h-[320px] md:w-[250] lg:w-[400px] lg:h-[495px] object-cover"
                                />
                                <div className="absolute bottom-0 w-full h-10  md:h-28 bg-[#000080] opacity-75 z-10 flex items-center justify-center">
                                    <h3 className=" font-oswald text-white text-center text-card-header uppercase font-bold ">
                                        {workdetailsData.beneficiaries.groups[3].name}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:w-1/2 mt-20  gap-10">
                        <p className="font-work-sans text-body text-foreground leading-relaxed text-center">
                            Join us in empowering farmers and preserving nature’s pharmacy. Together, we can create a healthier and more sustainable future
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 w-full">
                            <button className="bg-primary text-white py-3 px-6 font-work-sans font-bold w-full sm:w-auto">
                                DONATE NOW
                            </button>
                            <button className="text-primary bg-white border-2 border-primary py-3 px-6 font-work-sans font-bold w-full sm:w-auto">
                                PARTNER WITH US
                            </button>
                        </div>

                    </div>
                </div>
            </section>

 
        </div>
    );
};

export default WorkDeatils;