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
            name: "For manufacturing processes and operations",
            image: problem1_3,
            paint_point_items: [
                {
                    image: problem1,
                    explanation: "Australia's older welders find it hard to transfer skills to younger staff"
                },
                {
                    image: problem2,
                    explanation: "Labor shortages delay production schedules"
                },
                {
                    image: problem3,
                    explanation: "Inconsistent quality and high defect rate"
                }
            ]
        },
        {
            name: "For introduction of automatic machines",
            image: problem4_6,
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
            name: "For outsourcing",
            image: problem7_9,
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
            id="problems"
            className="bg-jmso-dark-blue-alt relative py-8 md:py-12 lg:py-20"
        >
            <div className="container">
                <h2 className="paintpoint-headline jmso-heading text-white text-center mb-8 lg:mb-12" dangerouslySetInnerHTML={{ __html: paintpoint_headline }} />
            </div>

            {paint_points.map((item, index) => (
                index % 2 === 0 ? (
                    <div className="flex flex-wrap items-center gap-8 pt-8 lg:pt-16">
                        <div className="ml-auto lg:max-w-[480px] xl:max-w-[576px] 2xl:max-w-[640px] pt-0 lg:py-0 w-full px-4 lg:pl-4 lg:pr-12 lg:w-1/2 xl:py-0">
                            <h3 className="text-white text-2xl lg:text-3xl xl:text-[40px] font-semibold mb-4 lg:mb-8 leading-none" dangerouslySetInnerHTML={{ __html: item.name }} />
                            <ul className="flex flex-col gap-4 lg:gap-8">
                                {item.paint_point_items.map((item, index) => (
                                    <li className="inline-flex items-center gap-4 lg:gap-8">
                                        <img
                                            src={item.image.src}
                                            alt={`Solution ${index + 1}`}
                                            className="w-8 h-8 lg:w-12 lg:h-12"
                                        />
                                        <p className="text-white/80 text-base md:text-lg xl:text-xl" dangerouslySetInnerHTML={{ __html: item.explanation }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-first w-full h-full lg:order-last lg:w-1/2">
                            <img
                                src={item.image.src}
                                alt={`Problem ${index + 1}`}
                                className="lg:rounded-l-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-wrap items-center gap-8 pt-8 lg:pt-16">
                        <div className="w-full h-full lg:w-1/2">
                            <img
                                src={item.image.src}
                                alt={`Problem ${index + 1}`}
                                className="lg:rounded-r-xl w-full h-full object-cover"
                            />
                        </div>
                        <div className="mr-auto lg:max-w-[480px] xl:max-w-[576px] 2xl:max-w-[640px] pt-0 lg:py-0 w-full px-4 lg:pl-12 lg:pr-4 lg:w-1/2 xl:py-0">
                            <h3 className="text-white text-2xl lg:text-3xl xl:text-[40px] font-semibold mb-4 lg:mb-8 leading-none" dangerouslySetInnerHTML={{ __html: item.name }} />
                            <ul className="flex flex-col gap-4 lg:gap-8">
                                {item.paint_point_items.map((item, index) => (
                                    <li className="inline-flex items-center gap-4 lg:gap-8">
                                        <img
                                            src={item.image.src}
                                            alt={`Solution ${index + 1}`}
                                            className="w-8 h-8 lg:w-12 lg:h-12"
                                        />
                                        <p className="text-white/80 text-base md:text-lg xl:text-xl" dangerouslySetInnerHTML={{ __html: item.explanation }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            ))}
        </section>
    );
}
