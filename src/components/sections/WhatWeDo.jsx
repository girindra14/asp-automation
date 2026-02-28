import IFD from "../../assets/images/core-solutions/ifd.webp";
import NID from "../../assets/images/core-solutions/nid.webp";
import ECP from "../../assets/images/core-solutions/ecp.webp";
import ICS from "../../assets/images/core-solutions/ics.webp";
import IFDMobile from "../../assets/images/core-solutions/ifd-mobile.webp";
import NIDMobile from "../../assets/images/core-solutions/nid-mobile.webp";
import ECPMobile from "../../assets/images/core-solutions/ecp-mobile.webp";
import ICSMobile from "../../assets/images/core-solutions/ics-mobile.webp";

import { useEffect } from "react";
import { WhatWeDoSlider } from "@/components/ui/swiper";

export default function WhatWeDo({
    headline,
    description,
    solution_headline,
}) {
    useEffect(() => {
        const applyStylesToStrongChildren = () => {
            const feature_description = document.querySelectorAll(
                ".feature-description strong"
            );

            feature_description.forEach((element) => {
                element.style.color = "#0759d4";
            });

            const industry_description = document.querySelectorAll(
                '.industry-description strong'
            );

            industry_description.forEach(element => {
                element.style.color = '#002a69';
            });
        };
        applyStylesToStrongChildren();
    });
    const industries = [
        {
            title: "Industrial Control Systems",
            img: ICS,
            imgMobile: ICSMobile,
        },
        {
            title: "Electrical & Control Panels",
            img: ECP,
            imgMobile: ECPMobile,
        },
        {
            title: "Instrumentation & Field Devices",
            img: IFD,
            imgMobile: IFDMobile,
        },
        {
            title: "Network & Industrial Communication",
            img: NID,
            imgMobile: NIDMobile,
        },
    ];
    return (
        <section id="what-we-do" className="relative py-8 md:py-12 lg:py-20 bg-gradient-to-b from-white to-jmso-light-blue">
            <div className="relative container flex flex-col items-center z-10">
                <h2 className="jmso-heading text-jmso-dark-blue text-center mb-8 lg:mb-12">
                    {headline}
                </h2>
                <p
                    className="feature-description text-center text-gray-600 text-lg lg:text-2xl leading-tight max-w-[1080px]"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
                <div className="my-4"></div>
            </div>
            <WhatWeDoSlider client:load />
            <div className="mt-12"></div>
            <div className="relative container flex flex-col items-center z-10">
                <div className="h-px border border-gray-200 w-full"></div>
                <div className="mt-12 lg:mt-16 w-full">
                    <h2 className="jmso-heading text-jmso-dark-blue text-center mb-8 lg:mb-12">
                        {solution_headline}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                        {industries.map((industry, index) => (
                            <a href="#our-solutions">
                                <div
                                    key={industry.title}
                                    className="relative overflow-hidden rounded-md group flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                >
                                    <img
                                        src={industry.img.src}
                                        alt={industry.title}
                                        className="hidden md:block w-full h-full object-cover duration-200 ease-out"
                                    />
                                    <img
                                        src={industry.imgMobile.src}
                                        alt={industry.title}
                                        className="block md:hidden w-full h-full object-cover duration-200 ease-out"
                                    />
                                    <div className="flex flex-col justify-end items-center gap-3 lg:gap-5 absolute top-0 h-full w-full bg-gradient-to-t from-jmso-dark-blue to-jmso-dark-blue/0 from-0% to-50% md:to-40% z-20 p-4 lg:p-6">
                                        <h4 className="text-white text-center text-xl lg:text-2xl font-semibold">
                                            {industry.title}
                                        </h4>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="my-4"></div>
            </div>
        </section>
    );
}
