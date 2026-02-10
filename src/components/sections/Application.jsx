import bg from "../../assets/images/application-bg.png";
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
import tig1 from "../../assets/images/welding_types/tig2.webp";
import tig2 from "../../assets/images/welding_types/tig3.webp";
import tig3 from "../../assets/images/welding_types/mig1.webp";
import mig1 from "../../assets/images/welding_types/mig2.webp";
import stick1 from "../../assets/images/welding_types/stick1.webp";
import stick2 from "../../assets/images/welding_types/stick2.webp";

import { useEffect } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

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
            title: "Semiconductor manufacturing equipment parts",
            img: semiconductor,
            imgMobile: semiconductorMobile,
        },
        {
            title: "Rocket and space development",
            img: rocket,
            imgMobile: rocketMobile,
        },
        {
            title: "Biotechnology and tanks",
            img: biotech,
            imgMobile: biotechMobile,
        },
        {
            title: "LCD equipment",
            img: lcd,
            imgMobile: lcdMobile,
        },
        {
            title: "Medical components",
            img: medical,
            imgMobile: medicalMobile,
        },
        {
            title: "Automotive parts",
            img: automotive,
            imgMobile: automotiveMobile,
        },
    ];
    return (
        <section id="application" className="relative py-8 md:py-12 lg:py-20">
            <img
                src={bg}
                alt="Application"
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none"
            />
            <div className="relative container flex flex-col items-center z-10">
                <h2 className="jmso-heading text-jmso-dark-blue text-center mb-8 lg:mb-12">
                    {feature_headline}
                </h2>
                <p
                    className="feature-description text-center text-gray-600 text-lg lg:text-2xl leading-tight max-w-[1080px]"
                    dangerouslySetInnerHTML={{ __html: feature_description }}
                />
                <div className="mt-12 lg:mt-16">
                    <h3 className="jmso-subheading text-jmso-blue mb-4 lg:mb-8 text-center">
                        Welding Type
                    </h3>
                    <div className="flex flex-wrap gap-4 lg:gap-8 justify-center w-full">
                        {welding_types.map((item, index) => (
                            <div className="rounded-md bg-white border border-gray-200 p-4 w-full md:w-max">
                                <h4 className="text-2xl font-sans text-jmso-dark-blue font-semibold text-center mb-4">
                                    {item.name}
                                </h4>
                                <div className="flex items-center justify-center md:justify-between gap-4 flex-wrap w-full">
                                    {item.images.map((image) => (
                                        <Popover key={item}>
                                            <PopoverTrigger className="overflow-hidden rounded-md">
                                                <img
                                                    slot="thumbnail"
                                                    src={image}
                                                    alt={item.name}
                                                    className="w-20 xl:w-[109px] aspect-[1/1] rounded-md object-cover hover:scale-110 duration-300 ease-out"
                                                />
                                            </PopoverTrigger>
                                            <PopoverContent className="w-full max-w-screen-sm">
                                                <img
                                                    slot="photo"
                                                    src={image}
                                                    alt={item.name}
                                                    className="w-full h-auto object-cover"
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-jmso-dark-blue-alt font-medium text-center text-base md:text-lg my-4">
                    Brazing and more...
                </p>
                <div className="h-px border border-gray-200 w-full"></div>
                <div className="mt-4 md:mt-12 w-full">
                    <h3 className="jmso-subheading text-jmso-blue mb-4 lg:mb-8 text-center">
                        Materials
                    </h3>
                    <div className="rounded-md bg-white grid grid-cols-2 lg:flex w-full lg:flex-wrap lg:justify-center gap-4 lg:gap-x-8 lg:gap-y-4">
                        {materials.map((item) => (
                            <div
                                key={item.name}
                                className="flex px-2 py-2 md:px-8 md:py-6 lg:px-12 lg:py-5 bg-jmso-light-blue text-base md:text-xl lg:text-2xl font-semibold font-heading text-jmso-dark-blue w-full md:w-auto lg:min-w-[270px] items-center justify-center"
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                    <p className="text-jmso-dark-blue-alt font-medium text-center text-base md:text-lg my-4">
                        and more...
                    </p>
                </div>
                <div className="h-px border border-gray-200 mt-4 lg:mt-0 w-full"></div>
                <div className="mt-12 lg:mt-16">
                    <h3 className="jmso-subheading text-jmso-blue mb-4 lg:mb-8 text-center">
                        {feature_industry_headline}
                    </h3>
                    <p className="industry-description pb-6 lg:pb-10 text-left text-gray-800 text-base md:text-lg leading-tight" dangerouslySetInnerHTML={{ __html: feature_industry_description }} />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-md group"
                            >
                                <img
                                    src={industry.img}
                                    alt={industry.title}
                                    className="hidden md:block w-auto h-full object-cover duration-200 ease-out"
                                />
                                <img
                                    src={industry.imgMobile}
                                    alt={industry.title}
                                    className="block md:hidden w-auto h-full object-cover duration-200 ease-out"
                                />
                                <div className="flex flex-col justify-end items-start gap-3 lg:gap-5 absolute top-0 h-full w-full bg-gradient-to-t from-jmso-dark-blue to-jmso-dark-blue/0 from-0% to-50% md:to-40% z-20 p-4 lg:p-6">
                                    <h4 className="text-white text-base lg:text-xl font-semibold">
                                        {industry.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-jmso-dark-blue-alt font-medium text-center text-base md:text-lg my-4">
                    and more...
                </p>
            </div>
        </section>
    );
}
