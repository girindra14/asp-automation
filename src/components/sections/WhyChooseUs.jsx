import problem1 from "../../assets/images/why-choose-us/problem1.svg";
import problem2 from "../../assets/images/why-choose-us/problem2.svg";
import problem3 from "../../assets/images/why-choose-us/problem3.svg";
import problem4 from "../../assets/images/why-choose-us/problem4.svg";
import problem5 from "../../assets/images/why-choose-us/problem5.svg";
import problem6 from "../../assets/images/why-choose-us/problem6.svg";
import problem7 from "../../assets/images/why-choose-us/problem7.svg";
import problem8 from "../../assets/images/why-choose-us/problem7.svg";
import problem9 from "../../assets/images/why-choose-us/problem7.svg";
import whyChooseUs1 from "../../assets/images/why-choose-us/why-choose-us1.webp";
import whyChooseUs2 from "../../assets/images/why-choose-us/why-choose-us2.webp";
import whyChooseUs3 from "../../assets/images/why-choose-us/why-choose-us3.webp";
import whyChooseUs4 from "../../assets/images/why-choose-us/why-choose-us4.webp";

import { useEffect } from "react";

export default function WhyChooseUs({ headline }) {
    useEffect(() => {
        const applyStylesToStrongChildren = () => {
            const elements = document.querySelectorAll('.paintpoint-headline strong');

            elements.forEach(element => {
                element.style.color = '#07d4c8';
            });
        };
        applyStylesToStrongChildren();
    });
    const paint_points = [
        {
            name: "Experienced Automation Engineers",
            image: whyChooseUs1,
            description: [
                "Our team consists of skilled automation engineers with hands-on experience in industrial environments. We understand real operational challenges — from system downtime and process inefficiencies to safety compliance.",
                "We don't just design systems; we design solutions that work reliably in demanding industrial conditions."
            ],
            paint_point_items: [
                {
                    image: problem1,
                    explanation: "Accurate system design"
                },
                {
                    image: problem2,
                    explanation: "Reduced implementation risk"
                },
                {
                    image: problem3,
                    explanation: "Faster project execution"
                }
            ]
        },
        {
            name: "Reliable & Scalable Solutions",
            image: whyChooseUs2,
            description: [
                "Our automation systems are designed with long-term performance in mind. We prioritize system stability, industrial-grade components, and scalable architecture to ensure your operations can grow without major system overhauls."
            ],
            paint_point_items: [
                {
                    image: problem4,
                    explanation: "Reduced downtime"
                },
                {
                    image: problem5,
                    explanation: "Long-term investment protection"
                },
                {
                    image: problem6,
                    explanation: "Future-ready automation infrastructure"
                }
            ]
        },
        {
            name: "Strong Technical Support & After-Sales Service",
            image: whyChooseUs3,
            description: [
                "Automation systems require ongoing reliability. Our team provides responsive technical support, preventive maintenance guidance, and troubleshooting assistance to minimize operational disruption.",
                "We build long-term partnerships, not just transactions."
            ],
            paint_point_items: [
                {
                    image: problem7,
                    explanation: "Faster issue resolution"
                },
                {
                    image: problem8,
                    explanation: "Operational continuity"
                },
                {
                    image: problem9,
                    explanation: "Peace of mind"
                }
            ]
        },
        {
            name: "End-to-End Project Capability",
            image: whyChooseUs4,
            description: [
                "We provide complete automation services — from initial consultation and system design to panel fabrication, installation, commissioning, and after-sales support.",
                "By managing the full lifecycle of your automation project, we ensure seamless integration between hardware, software, and field devices."
            ],
            paint_point_items: [
                {
                    image: problem7,
                    explanation: "One trusted partner"
                },
                {
                    image: problem8,
                    explanation: "Clear communication"
                },
                {
                    image: problem9,
                    explanation: "Better system integration"
                }
            ]
        }
    ];
    return (
        <section
            id="why-choose-us"
            className="bg-jmso-dark-blue-alt relative py-8 md:py-12 lg:py-20"
        >
            <div className="container">
                <h2 className="paintpoint-headline jmso-heading text-white text-center mb-8 lg:mb-12" dangerouslySetInnerHTML={{ __html: headline }} />
            </div>

            {paint_points.map((item, index) => (
                <div key={index} className="pt-8 lg:pt-16">
                    {index % 2 === 0 ? (
                        <div className="flex flex-col lg:flex-row items-stretch">
                            <div className="w-full lg:w-1/2 flex items-center order-2 lg:order-1">
                                <div className="w-full px-4 py-6 lg:py-0 lg:px-8 xl:px-12">
                                    <h3 className="text-white text-2xl md:text-3xl lg:text-3xl xl:text-[40px] font-semibold mb-4 lg:mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: item.name }} />
                                    
                                    {/* Description Paragraphs */}
                                    {item.description && item.description.map((paragraph, pIdx) => (
                                        <p key={pIdx} className="text-white/80 text-base md:text-lg mb-4 lg:mb-5 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                    
                                    {/* What this means for you */}
                                    <p className="text-white font-semibold text-base md:text-lg lg:text-xl mb-3 lg:mb-4">
                                        What this means for you:
                                    </p>
                                    
                                    <ul className="flex flex-col gap-3 md:gap-4 lg:gap-6 xl:gap-8">
                                        {item.paint_point_items.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-3 md:gap-4 lg:gap-6 xl:gap-8">
                                                <img
                                                    src={point.image.src}
                                                    alt={`Solution ${idx + 1}`}
                                                    className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 flex-shrink-0 mt-0.5"
                                                />
                                                <p className="text-white/80 text-base md:text-lg lg:text-xl leading-normal" dangerouslySetInnerHTML={{ __html: point.explanation }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                                <img
                                    src={item.image.src}
                                    alt={`Why Choose Us ${index + 1}`}
                                    className="lg:rounded-l-xl w-full h-full object-cover min-h-[250px] md:min-h-[350px]"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col lg:flex-row items-stretch">
                            <div className="w-full lg:w-1/2">
                                <img
                                    src={item.image.src}
                                    alt={`Why Choose Us ${index + 1}`}
                                    className="lg:rounded-r-xl w-full h-full object-cover min-h-[250px] md:min-h-[350px]"
                                />
                            </div>
                            <div className="w-full lg:w-1/2 flex items-center">
                                <div className="w-full px-4 py-6 lg:py-0 lg:px-8 xl:px-12">
                                    <h3 className="text-white text-2xl md:text-3xl lg:text-3xl xl:text-[40px] font-semibold mb-4 lg:mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: item.name }} />
                                    
                                    {/* Description Paragraphs */}
                                    {item.description && item.description.map((paragraph, pIdx) => (
                                        <p key={pIdx} className="text-white/80 text-base md:text-lg mb-4 lg:mb-5 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                    
                                    {/* What this means for you */}
                                    <p className="text-white font-semibold text-base md:text-lg lg:text-xl mb-3 lg:mb-4">
                                        What this means for you:
                                    </p>
                                    
                                    <ul className="flex flex-col gap-3 md:gap-4 lg:gap-6 xl:gap-8">
                                        {item.paint_point_items.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-3 md:gap-4 lg:gap-6 xl:gap-8">
                                                <img
                                                    src={point.image.src}
                                                    alt={`Solution ${idx + 1}`}
                                                    className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 flex-shrink-0 mt-0.5"
                                                />
                                                <p className="text-white/80 text-base md:text-lg lg:text-xl leading-normal" dangerouslySetInnerHTML={{ __html: point.explanation }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
}