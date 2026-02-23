import { useEffect, useState } from "react";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { FadeSlider } from "../ui/swiper";
import IPC1 from "../../assets/images/our-products/ipc/ipc_1.png";
import IPC2 from "../../assets/images/our-products/ipc/ipc_2.png";
import IPC3 from "../../assets/images/our-products/ipc/ipc_3.png";
import IPCDatasheet from "../../assets/images/our-products/ipc/ipc-datasheet.pdf";
import UPS1 from "../../assets/images/our-products/ups/ups_1.png";
import UPS2 from "../../assets/images/our-products/ups/ups_2.png";
import UPS3 from "../../assets/images/our-products/ups/ups_3.png";
import UPSDatasheet from "../../assets/images/our-products/ups/ups-datasheet.pdf";
import CCTV1 from "../../assets/images/our-products/cctv/cctv_1.png";
import CCTV2 from "../../assets/images/our-products/cctv/cctv_2.png";
import CCTV3 from "../../assets/images/our-products/cctv/cctv_3.png";
import FO1 from "../../assets/images/our-products/fo/fo_1.png";
import FODatasheet from "../../assets/images/our-products/fo/fo-datasheet.pdf";
import ISG1 from "../../assets/images/our-products/isg/isg_1.png";
import ISG2 from "../../assets/images/our-products/isg/isg_2.png";
import ISGDatasheet from "../../assets/images/our-products/isg/isg-datasheet.pdf";
import bg from "../../assets/images/application-bg.png";

export default function OurProducts({
    headline,
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

    const products = [
        {
            title: "Industrial PC",
            imgs: [IPC1, IPC2, IPC3],
            description: "Design and implementation of PLC, HMI, and SCADA systems tailored to industrial processes.",
            keySpecs: [
                "Industrial-Grade Processor & Long Lifecycle",
                "Rugged Design & Operating Conditions",
                "Flexible I/O & Expandability",
                "Reliability & Industrial OS Support"
            ],
            link: IPCDatasheet
        },
        {
            title: "Uninterruptible Power Supply",
            imgs: [UPS1, UPS2, UPS3],
            description: "Design, assembly, testing, and commissioning of electrical and control panels based on industry standards.",
            keySpecs: [
                "Isolation Transformer for Maximum Protection",
                "Dual Output Voltage Support",
                "High Reliability for Industrial Loads",
                "Clean & Stable Power Quality"
            ],
            link: UPSDatasheet
        },
        {
            title: "CCTV",
            imgs: [CCTV1, CCTV2, CCTV3],
            description: "Selection, installation, and calibration of sensors, transmitters, and measurement instruments.",
            keySpecs: [
                "AI Video Analytics",
                "Thermal Imaging Capability",
                "High Accuracy & Early Warning",
                "Industrial-Grade Reliability & Integration"
            ],
            link: IPCDatasheet
        },
        {
            title: "Fiber Optic",
            imgs: [FO1],
            description: "Design and deployment of reliable industrial networks for data communication and system integration.",
            keySpecs: [
                "High Bandwidth & Long-Distance Transmission",
                "Immunity to EMI & Electrical Noise",
                "Industrial-Grade Cable & Connector Design",
                "High Reliability & Network Stability"
            ],
            link: FODatasheet
        },
                {
            title: "Industrial Switch",
            imgs: [ISG1, ISG2],
            description: "Design and deployment of reliable industrial networks for data communication and system integration.",
            keySpecs: [
                "Rugged Industrial Design",
                "High Reliability & Redundancy",
                "Flexible Port & PoE Options",
                "Industrial Network Management & Security"
            ],
            link: ISGDatasheet
        },
        {
            title: "Supervisory Control and Data Acquisition",
            imgs: [IPC1, IPC2, IPC3],
            description: "Design and deployment of reliable industrial networks for data communication and system integration.",
            keySpecs: [
                "Real-Time Monitoring & Control",
                "Reliable Communication Protocols",
                "High Availability & System Redundancy",
                "Scalability & Cybersecurity"
            ],
            link: IPCDatasheet
        },
    ];

    return (
        <section
            id="our-products"
            className="bg-jmso-light-blue relative py-8 md:py-12 lg:py-20"
        >
            <img
                src={bg.src}
                alt="Features"
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none"
            />
            <div className="relative container flex flex-col items-center z-10">
                <h2 className="jmso-heading text-jmso-dark-blue text-center mb-8 lg:mb-12" dangerouslySetInnerHTML={{ __html: headline }} />
                <div className="w-full max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                        {products.map((product, index) => (
                            <div
                                key={product.title}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Card Image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <FadeSlider imgs={product.imgs} client:load />
                                    <div className="absolute inset-0 bg-gradient-to-t from-jmso-dark-blue/90 to-transparent"></div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-jmso-dark-blue mb-3">
                                        {product.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                        {product.description}
                                    </p>

                                    {/* Key Specs */}
                                    <div className="mb-6 space-y-2">
                                        {product.keySpecs.map((spec, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <CheckCircle
                                                    size={24}
                                                    weight="fill"
                                                    className="text-jmso-tosca mt-1 flex-shrink-0"
                                                />
                                                <span className="text-sm text-gray-700">{spec}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <a
                                        href={product.link}
                                        className="block w-full bg-gradient-to-br from-jmso-tosca to-jmso-dark-blue text-white py-3 px-6 rounded-lg font-semibold hover:from-jmso-tosca hover:to-jmso-dark-blue transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-center"
                                    >
                                        Consult Now
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