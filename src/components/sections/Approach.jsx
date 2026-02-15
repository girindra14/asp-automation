import { useEffect, useState } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { ChartSlider } from "@/components/ui/swiper";
import chart from "../../assets/images/jmso-chart-en.png";
import chart_mobile from "../../assets/images/jmso-chart-mobile-en.png";
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
import bg from "../../assets/images/application-bg.png";

export default function Approach({
    service_headline,
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

    const industries = [
        {
            title: "Industrial PC",
            img: semiconductor,
            imgMobile: semiconductorMobile,
            description: "Design and implementation of PLC, HMI, and SCADA systems tailored to industrial processes.",
            keySpecs: [
                "Industrial-Grade Processor & Long Lifecycle",
                "Rugged Design & Operating Conditions",
                "Flexible I/O & Expandability",
                "Reliability & Industrial OS Support"
            ],
            link: "#"
        },
        {
            title: "Uninterruptible Power Supply",
            img: rocket,
            imgMobile: rocketMobile,
            description: "Design, assembly, testing, and commissioning of electrical and control panels based on industry standards.",
            keySpecs: [
                "Isolation Transformer for Maximum Protection",
                "Dual Output Voltage Support",
                "High Reliability for Industrial Loads",
                "Clean & Stable Power Quality"
            ],
            link: "#"
        },
        {
            title: "CCTV",
            img: biotech,
            imgMobile: biotechMobile,
            description: "Selection, installation, and calibration of sensors, transmitters, and measurement instruments.",
            keySpecs: [
                "AI Video Analytics",
                "Thermal Imaging Capability",
                "High Accuracy & Early Warning",
                "Industrial-Grade Reliability & Integration"
            ],
            link: "#"
        },
        {
            title: "Fiber Optic",
            img: lcd,
            imgMobile: lcdMobile,
            description: "Design and deployment of reliable industrial networks for data communication and system integration.",
            keySpecs: [
                "High Bandwidth & Long-Distance Transmission",
                "Immunity to EMI & Electrical Noise",
                "Industrial-Grade Cable & Connector Design",
                "High Reliability & Network Stability"
            ],
            link: "#"
        },
                {
            title: "Industrial Switch",
            img: lcd,
            imgMobile: lcdMobile,
            description: "Design and deployment of reliable industrial networks for data communication and system integration.",
            keySpecs: [
                "Rugged Industrial Design",
                "High Reliability & Redundancy",
                "Flexible Port & PoE Options",
                "Industrial Network Management & Security"
            ],
            link: "#"
        },
        {
            title: "Supervisory Control and Data Acquisition",
            img: lcd,
            imgMobile: lcdMobile,
            description: "Design and deployment of reliable industrial networks for data communication and system integration.",
            keySpecs: [
                "Real-Time Monitoring & Control",
                "Reliable Communication Protocols",
                "High Availability & System Redundancy",
                "Scalability & Cybersecurity"
            ],
            link: "#"
        },
    ];

    return (
        <section
            id="approach"
            className="bg-jmso-light-blue relative py-8 md:py-12 lg:py-20"
        >
            <img
                src={bg.src}
                alt="Features"
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none"
            />
            <div className="relative container flex flex-col items-center z-10">
                <h2 className="jmso-heading text-jmso-dark-blue text-center mb-8 lg:mb-12" dangerouslySetInnerHTML={{ __html: service_headline }} />
                <div className="w-full max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                        {industries.map((industry, index) => (
                            <div
                                key={industry.title}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Card Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={industry.img.src}
                                        alt={industry.title}
                                        className="hidden md:block w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <img
                                        src={industry.imgMobile.src}
                                        alt={industry.title}
                                        className="block md:hidden w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-jmso-dark-blue/90 to-transparent"></div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-jmso-dark-blue mb-3">
                                        {industry.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                        {industry.description}
                                    </p>

                                    {/* Key Specs */}
                                    <div className="mb-6 space-y-2">
                                        {industry.keySpecs.map((spec, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-[#0759d4] mt-0.5 flex-shrink-0" />
                                                <span className="text-sm text-gray-700">{spec}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <a
                                        href={industry.link}
                                        className="block w-full bg-gradient-to-r from-jmso-dark-blue to-[#0759d4] text-white py-3 px-6 rounded-lg font-semibold hover:from-[#003380] hover:to-[#0865f0] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-center"
                                    >
                                        Learn More
                                    </a>
                                </div>

                                {/* Decorative Corner */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-jmso-dark-blue/10 to-transparent rounded-bl-full"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}