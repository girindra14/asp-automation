// ---
// import { Image } from "astro:assets";

import heroBg from "../../assets/images/hero-bg-untouched.png";
import heroBgMobile from "../../assets/images/hero-bg-mobile.png";
import heroBgTablet from "../../assets/images/hero-bg-tablet.png";
import arcTosca from "../../assets/images/arc-underline-tosca.svg";
import heroChart from "../../assets/images/hero-chart-en.svg";
// import { getLangFromUrl, useTranslations } from "@/lib/utils";

// const lang = getLangFromUrl(Astro.url);
// const t = useTranslations(lang);
// ---

import { useEffect } from "react";

export default function Hero({
    hero_headline,
    hero_sub_headline,
    hero_headline_data,
    hero_quote
}) {
    useEffect(() => {
        const applyStylesToStrongChildren = () => {
            const elements = document.querySelectorAll('.hero-quote span');

            elements.forEach(element => {
                const computedStyles = window.getComputedStyle(element);
                const textDecoration = computedStyles.getPropertyValue('text-decoration');

                if (textDecoration.includes('underline')) {
                    element.style.borderBottom = '8px solid white';
                    element.style.borderBottomLeftRadius = '20% 10%';
                    element.style.borderBottomRightRadius = '20% 10%';
                    element.style.textDecoration = '';
                }
            });
        };
        applyStylesToStrongChildren();
    });
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 h-full w-full">
                <img
                    src={heroBg.src}
                    alt="Welding"
                    loading="eager"
                    className="hidden lg:block w-full h-full object-cover select-none pointer-events-none lg:h-screen"
                />
                <img
                    src={heroBgTablet.src}
                    alt="Welding"
                    loading="eager"
                    className="hidden md:block lg:hidden w-full h-full object-cover select-none pointer-events-none lg:h-screen"
                />
                <img
                    src={heroBgMobile.src}
                    alt="Welding"
                    loading="eager"
                    className="block md:hidden w-full h-full object-cover select-none pointer-events-none lg:h-screen"
                />
                <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-[-10%] md:from-0% to-70% lg:bg-gradient-to-r from-jmso-dark-blue to-transparent"></div>
            </div>
            <div className="flex flex-col lg:flex-row items-center relative lg:min-h-[calc(100dvh-73px-84px)] container">
                <div className="pt-12 md:pt-12 lg:py-0 w-full xl:py-24">
                    <div className="flex flex-col w-full lg:max-w-3xl gap-5 items-center md:items-start">
                        <h1 className="text-left text-3xl md:text-5xl lg:text-[3.25rem] text-white font-bold leading-none" dangerouslySetInnerHTML={{ __html: hero_headline }} />
                        <p className="text-left text-white text-base md:text-xl font-medium mb-40 md:mb-60 lg:mb-0" dangerouslySetInnerHTML={{ __html: hero_sub_headline }} />
                        <div className="p-4 md:p-8 lg:px-10 lg:py-6 bg-jmso-dark-blue/40 backdrop-blur-lg rounded-xl border border-white/20 w-full lg:max-w-xl flex flex-col items-start">
                            <div className="mb-3 md:mb-4">
                                <h2 className="font-semibold text-lg md:text-2xl text-jmso-light-blue" dangerouslySetInnerHTML={{ __html: hero_headline_data }} />
                            </div>
                            <img
                                src={heroChart.src}
                                alt="Chart"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full h-full lg:w-3/5 xl:w-2/5 2xl:w-1/5 px-4 py-6">
                    <div className="divide-x-0 md:divide-x lg:divide-x-0 divide-white/50 px-4 py-6 lg:absolute w-full bg-gradient-to-b lg:bg-gradient-to-r from-[#0759D4]/90 to-[#0759D4] lg:pl-10 lg:py-6 rounded-xl flex flex-col md:flex-row lg:flex-col justify-center lg:justify-start gap-0">
                        <div className="flex flex-col items-center lg:items-start px-2 md:px-4 lg:px-2">
                            <div className="flex flex-col items-center">
                                <h2 className="text-white text-xl text-center font-sans font-normal md:font-semibold">
                                    Single-function
                                </h2>
                                <img
                                    src={arcTosca.src}
                                    alt="Single-function"
                                    className="mb-2"
                                />
                                <p className="text-white text-3xl md:text-4xl font-semibold text-center mb-2">
                                    US $ 10,000-
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center lg:items-start px-2 md:px-4 lg:px-2">
                            <div className="flex flex-col items-center">
                                <h2 className="text-white text-xl text-center font-sans font-normal md:font-semibold">
                                    Multifunctional
                                </h2>
                                <img
                                    src={arcTosca.src}
                                    alt="Multifunctional"
                                    className="mb-2"
                                />
                                <p className="text-white text-3xl md:text-4xl font-semibold text-center mb-2">
                                    US $ 50,000-
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-jmso-tosca relative lg:sticky lg:bottom-0">
                <div className="container py-6">
                    <p className="hero-quote font-heading text-jmso-dark-blue text-center text-xl lg:text-3xl font-bold">
                        <span className="inline-block relative" dangerouslySetInnerHTML={{ __html: hero_quote }} />
                    </p>
                </div>
            </div>
        </section>
    );
}
