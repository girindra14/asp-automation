import { useEffect } from "react";
import { ChartSlider } from "@/components/ui/swiper";
import chart from "../../../assets/images/jmso-chart-en.png";
import chart_mobile from "../../../assets/images/jmso-chart-mobile-en.png";
export default function Chart({
    service_headline,
    service_description,
    service_explanation
}) {
    useEffect(() => {
        const applyStylesToStrongChildren = () => {
            const descriptions = document.querySelectorAll('.service-description strong');

            descriptions.forEach(element => {
                element.style.color = '#002a69';
            });

            const explanations = document.querySelectorAll('.service-explanation strong');

            explanations.forEach(element => {
                element.style.color = '#0759d4';
            });
        };
        applyStylesToStrongChildren();
    });
    return (
        <section id="features">
            <div className="py-8 md:py-12 lg:py-20">
                <div className="container relative z-20">
                    <h2 className="jmso-subheading text-jmso-blue mb-4 lg:mb-8 text-center leading-none" dangerouslySetInnerHTML={{ __html: service_headline }} />
                    <p className="service-description text-center text-gray-800 text-base md:text-lg lg:text-2xl leading-tight max-w-4xl mx-auto" dangerouslySetInnerHTML={{ __html: service_description }} />
                </div>
                <div className="py-8 relative w-full">
                    <div className="flex items-center justify-center relative z-20 container overflow-x-clip lg:overflow-visible">
                        <img
                            src={chart}
                            alt="Chart"
                            className="w-full hidden md:block relative z-10"
                        />
                        <img
                            src={chart_mobile}
                            alt="Chart"
                            className="w-full md:hidden relative z-10"
                        />
                        <div className="bg-chart w-[480px] h-[480px] lg:w-[720px] lg:h-[720px] absolute rounded-full rotate-90 blur-[256px] opacity-30"></div>
                    </div>
                </div>
                <div className="py-8 md:py-12 lg:py-20 relative z-20">
                    <div className="container">
                        <p className="service-explanation text-left md:text-center text-gray-600 text-base md:text-lg lg:text-2xl leading-tight max-w-8xl mx-auto" dangerouslySetInnerHTML={{ __html: service_explanation }} />
                    </div>
                </div>
                <ChartSlider client:load />
            </div>
        </section >
    );
}
