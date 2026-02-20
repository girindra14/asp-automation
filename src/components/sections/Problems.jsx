import problem1 from "../../assets/images/problems/problem1.svg";
import problem2 from "../../assets/images/problems/problem2.svg";
import problem3 from "../../assets/images/problems/problem3.svg";
import problem4 from "../../assets/images/problems/problem4.svg";
import problem5 from "../../assets/images/problems/problem5.svg";
import problem6 from "../../assets/images/problems/problem6.svg";
import problem7 from "../../assets/images/problems/problem7.svg";
import problem8 from "../../assets/images/problems/problem7.svg";
import problem9 from "../../assets/images/problems/problem7.svg";
import problem1_3 from "../../assets/images/problems/problem1_3.webp";
import problem4_6 from "../../assets/images/problems/problem4_6.webp";
import problem7_9 from "../../assets/images/problems/problem7_9.webp";

import { useEffect } from "react";

export default function Problems({ paintpoint_headline }) {
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
            image: problem1_3,
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
            name: "Proven Industrial Projects",
            image: problem4_6,
            description: [
                "Our automation systems are designed with long-term performance in mind. We prioritize system stability, industrial-grade components, and scalable architecture to ensure your operations can grow without major system overhauls."
            ],
            paint_point_items: [
                {
                    image: problem4,
                    explanation: "Current machine jig replacement is too costly to afford"
                },
                {
                    image: problem5,
                    explanation: "In Australia, existing automatic machines fail to reach the target production volume"
                },
                {
                    image: problem6,
                    explanation: "Hard to locate an automatic machine that fits both technical and budget constraints"
                }
            ]
        },
        {
            name: "Reliable After-Sales Support",
            image: problem7_9,
            description: [
                "Automation systems require ongoing reliability. Our team provides responsive technical support, preventive maintenance guidance, and troubleshooting assistance to minimize operational disruption.",
                "We build long-term partnerships, not just transactions."
            ],
            paint_point_items: [
                {
                    image: problem7,
                    explanation: "Outsourcing processes result in higher costs, which are not economical for customers"
                },
                {
                    image: problem8,
                    explanation: "Outsourced welding tasks face high defect rates, showing the need to install advanced machines"
                },
                {
                    image: problem9,
                    explanation: "Insufficient welders affecting in-house production quality"
                }
            ]
        },
        {
            name: "Trusted Technology Partners",
            image: problem1_3,
            description: [
                "We provide complete automation services — from initial consultation and system design to panel fabrication, installation, commissioning, and after-sales support.",
                "By managing the full lifecycle of your automation project, we ensure seamless integration between hardware, software, and field devices."
            ],
            paint_point_items: [
                {
                    image: problem7,
                    explanation: "Outsourcing processes result in higher costs, which are not economical for customers"
                },
                {
                    image: problem8,
                    explanation: "Outsourced welding tasks face high defect rates, showing the need to install advanced machines"
                },
                {
                    image: problem9,
                    explanation: "Insufficient welders affecting in-house production quality"
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
                <h2 className="paintpoint-headline jmso-heading text-white text-center mb-8 lg:mb-12" dangerouslySetInnerHTML={{ __html: paintpoint_headline }} />
            </div>

            {paint_points.map((item, index) => (
                <div key={index} className="pt-8 lg:pt-16">
                    {index % 2 === 0 ? (
                        <div className="flex items-stretch">
                            <div className="w-1/2 flex items-center">
                                <div className="w-full px-4 lg:px-8 xl:px-12">
                                    <h3 className="text-white text-lg md:text-2xl lg:text-3xl xl:text-[40px] font-semibold mb-3 md:mb-4 lg:mb-6 leading-tight md:leading-none" dangerouslySetInnerHTML={{ __html: item.name }} />
                                    
                                    {/* Description Paragraphs */}
                                    {item.description && item.description.map((paragraph, pIdx) => (
                                        <p key={pIdx} className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg mb-3 md:mb-4 lg:mb-5 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                    
                                    {/* What this means for you */}
                                    <p className="text-white font-semibold text-sm md:text-base lg:text-lg xl:text-xl mb-2 md:mb-3 lg:mb-4">
                                        What this means for you:
                                    </p>
                                    
                                    <ul className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-6 2xl:gap-8">
                                        {item.paint_point_items.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-2 md:gap-3 lg:gap-4 xl:gap-6 2xl:gap-8">
                                                <img
                                                    src={point.image.src}
                                                    alt={`Solution ${idx + 1}`}
                                                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 flex-shrink-0 mt-0.5"
                                                />
                                                <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-snug md:leading-normal" dangerouslySetInnerHTML={{ __html: point.explanation }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <img
                                    src={item.image.src}
                                    alt={`Problem ${index + 1}`}
                                    className="lg:rounded-l-xl w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-stretch">
                            <div className="w-1/2">
                                <img
                                    src={item.image.src}
                                    alt={`Problem ${index + 1}`}
                                    className="lg:rounded-r-xl w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-1/2 flex items-center">
                                <div className="w-full px-4 lg:px-8 xl:px-12">
                                    <h3 className="text-white text-lg md:text-2xl lg:text-3xl xl:text-[40px] font-semibold mb-3 md:mb-4 lg:mb-6 leading-tight md:leading-none" dangerouslySetInnerHTML={{ __html: item.name }} />
                                    
                                    {/* Description Paragraphs */}
                                    {item.description && item.description.map((paragraph, pIdx) => (
                                        <p key={pIdx} className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg mb-3 md:mb-4 lg:mb-5 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                    
                                    {/* What this means for you */}
                                    <p className="text-white font-semibold text-sm md:text-base lg:text-lg xl:text-xl mb-2 md:mb-3 lg:mb-4">
                                        What this means for you:
                                    </p>
                                    
                                    <ul className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-6 2xl:gap-8">
                                        {item.paint_point_items.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-2 md:gap-3 lg:gap-4 xl:gap-6 2xl:gap-8">
                                                <img
                                                    src={point.image.src}
                                                    alt={`Solution ${idx + 1}`}
                                                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 flex-shrink-0 mt-0.5"
                                                />
                                                <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-snug md:leading-normal" dangerouslySetInnerHTML={{ __html: point.explanation }} />
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