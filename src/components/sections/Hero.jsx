// ---
// import { Image } from "astro:assets";

import heroBg from "../../assets/images/hero-bg-untouched.webp";
import heroBgMobile from "../../assets/images/hero-bg-mobile.webp";
import heroBgTablet from "../../assets/images/hero-bg-tablet.webp";
// import { getLangFromUrl, useTranslations } from "@/lib/utils";

// const lang = getLangFromUrl(Astro.url);
// const t = useTranslations(lang);
// ---

import { useEffect } from "react";

export default function Hero({
    headline,
    sub_headline,
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
                <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b lg:bg-gradient-to-r from-jmso-dark-blue to-transparent"></div>
            </div>
            <div className="flex flex-col lg:flex-row items-center relative lg:min-h-[calc(100dvh-73px-84px)] container">
                <div className="pt-12 md:pt-12 lg:py-0 w-full xl:py-24 flex justify-center">
                    <div className="flex flex-col w-full lg:max-w-5xl gap-5 items-center">
                        <h1 className="text-center text-5xl lg:text-7xl text-white font-bold leading-none mb-5" dangerouslySetInnerHTML={{ __html: headline }} />
                        <p className="text-center text-white text-2xl lg:text-3xl font-medium mb-5" dangerouslySetInnerHTML={{ __html: sub_headline }} />
                        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center mb-20 md:mb-30 lg:mb-5">
                            <a
                                href="#contact-us"
                                className="px-8 py-4 bg-jmso-tosca hover:bg-jmso-tosca/90 text-jmso-dark-blue font-bold text-xl lg:text-2xl rounded-lg transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Request a Consultation
                            </a>
                            <a
                                href="#application"
                                className="px-8 py-4 bg-transparent hover:bg-white/10 text-white lg:text-white font-bold text-xl lg:text-2xl rounded-lg border-2 border-white/75 hover:border-white transition-all duration-300 text-center"
                            >
                                View Our Solutions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
