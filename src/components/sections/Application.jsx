import bgFlipped from "../../assets/images/application-bg-flipped.png";
import automotive from "../../assets/images/industries/automotive.png";
import biotech from "../../assets/images/industries/biotech.png";
import lcd from "../../assets/images/industries/lcd.png";
import medical from "../../assets/images/industries/medical.png";
import rocket from "../../assets/images/industries/rocket.png";
import semiconductor from "../../assets/images/industries/semiconductor.png";
import automotiveMobile from "../../assets/images/industries/automotive-mobile.png";
import biotechMobile from "../../assets/images/industries/biotech-mobile.png";
import lcdMobile from "../../assets/images/industries/lcd-mobile.png";
import medicalMobile from "../../assets/images/industries/medical-mobile.png";
import rocketMobile from "../../assets/images/industries/rocket-mobile.png";
import semiconductorMobile from "../../assets/images/industries/semiconductor-mobile.png";
import tig1 from "../../assets/images/welding_types/tig1.webp";
import tig2 from "../../assets/images/welding_types/tig2.webp";
import tig3 from "../../assets/images/welding_types/tig3.webp";
import mig1 from "../../assets/images/welding_types/mig1.jpg";
import mig2 from "../../assets/images/welding_types/mig2.jpg";
import stick1 from "../../assets/images/welding_types/stick1.jpg";
import stick2 from "../../assets/images/welding_types/stick2.jpg";

import { useEffect } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ChartSlider } from "@/components/ui/swiper";

export default function Application({
    feature_headline,
    feature_description,
    feature_industry_headline,
    feature_industry_description
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
    const welding_types = [
        {
            name: "TIG Welding",
            images: [tig1, tig2, tig3]
        },
        {
            name: "MIG Welding",
            images: [mig1, mig2]
        },
        {
            name: "Stick Welding",
            images: [stick1, stick2]
        }
    ];

    const materials = [
        { name: "Aluminium" },
        { name: "Hastelloy" },
        { name: "Inconel" },
        { name: "Iron" },
        { name: "Stainless Steel" },
        { name: "Stellite" },
        { name: "Titanium" }
    ];
    const industries = [
        {
            title: "Industrial Control Systems",
            img: semiconductor,
            imgMobile: semiconductorMobile,
        },
        {
            title: "Electrical & Control Panels",
            img: rocket,
            imgMobile: rocketMobile,
        },
        {
            title: "Instrumentation & Field Devices",
            img: biotech,
            imgMobile: biotechMobile,
        },
        {
            title: "Network & Industrial Communication",
            img: lcd,
            imgMobile: lcdMobile,
        },
    ];
    return (
        <section id="application" className="relative py-8 md:py-12 lg:py-20">
            <div className="relative container flex flex-col items-center z-10">
                <h2 className="jmso-heading text-jmso-dark-blue text-center mb-8 lg:mb-12">
                    {feature_headline}
                </h2>
                <p
                    className="feature-description text-center text-gray-600 text-lg lg:text-2xl leading-tight max-w-[1080px]"
                    dangerouslySetInnerHTML={{ __html: feature_description }}
                />
                <div className="my-4"></div>
            </div>
            <ChartSlider client:load />
            <div className="mt-12"></div>
            <div className="relative container flex flex-col items-center z-10">
                <div className="h-px border border-gray-200 w-full"></div>
                <div className="mt-12 lg:mt-16 w-full">
                    <h2 className="jmso-heading text-jmso-dark-blue text-center mb-8 lg:mb-12">
                        {feature_industry_headline}
                    </h2>
                    {/* <p className="industry-description pb-6 lg:pb-10 text-left text-gray-800 text-base md:text-lg leading-tight" dangerouslySetInnerHTML={{ __html: feature_industry_description }} /> */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                        {industries.map((industry, index) => (
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
                        ))}
                    </div>
                </div>
                <div className="my-4"></div>
            </div>
            <img
                src={bgFlipped.src}
                alt="Application"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none"
            />
        </section>
    );
}
