import { useEffect, useState } from "react";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { FadeSlider } from "../ui/swiper";
import { X } from "lucide-react";
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
import AICCTVDatasheet from "../../assets/images/our-products/cctv/ai-cctv-datasheet.pdf";
import FO1 from "../../assets/images/our-products/fo/fo_1.png";
import FODatasheet from "../../assets/images/our-products/fo/fo-datasheet.pdf";
import ISG1 from "../../assets/images/our-products/isg/isg_1.png";
import ISG2 from "../../assets/images/our-products/isg/isg_2.png";
import ISGDatasheet from "../../assets/images/our-products/isg/isg-datasheet.pdf";
import SCADA1 from "../../assets/images/our-products/scada/scada_1.png";
import SCADA2 from "../../assets/images/our-products/scada/scada_2.png";
import SCADA3 from "../../assets/images/our-products/scada/scada_3.png";
import SCADA4 from "../../assets/images/our-products/scada/scada_4.png";

export default function OurProducts({
    headline,
}) {
    const [selectedProduct, setSelectedProduct] = useState(null);

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
            productSpecs: {
                problem: "Inefficient manual production processes, difficulties in real-time monitoring, and high operational costs",
                solution: "Implementation of PLC, SCADA, HMI, and integrated control systems with centralized monitoring and data analytics",
                benefit: "Increased productivity, reduced production errors, and full visibility into the production process."
            },
            link: IPCDatasheet
        },
        {
            title: "Uninterruptible Power Supply",
            imgs: [UPS1, UPS2, UPS3],
            description: "Design, assembly, testing, and commissioning of electrical and control panels based on Product standards.",
            keySpecs: [
                "Isolation Transformer for Maximum Protection",
                "Dual Output Voltage Support",
                "High Reliability for Industrial Loads",
                "Clean & Stable Power Quality"
            ],
            productSpecs: {
                problem: "Inefficient manual production processes, difficulties in real-time monitoring, and high operational costs",
                solution: "Implementation of PLC, SCADA, HMI, and integrated control systems with centralized monitoring and data analytics",
                benefit: "Increased productivity, reduced production errors, and full visibility into the production process."
            },
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
            productSpecs: {
                problem: "Inefficient manual production processes, difficulties in real-time monitoring, and high operational costs",
                solution: "Implementation of PLC, SCADA, HMI, and integrated control systems with centralized monitoring and data analytics",
                benefit: "Increased productivity, reduced production errors, and full visibility into the production process."
            },
            link: AICCTVDatasheet
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
            productSpecs: {
                problem: "Inefficient manual production processes, difficulties in real-time monitoring, and high operational costs",
                solution: "Implementation of PLC, SCADA, HMI, and integrated control systems with centralized monitoring and data analytics",
                benefit: "Increased productivity, reduced production errors, and full visibility into the production process."
            },
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
            productSpecs: {
                problem: "Inefficient manual production processes, difficulties in real-time monitoring, and high operational costs",
                solution: "Implementation of PLC, SCADA, HMI, and integrated control systems with centralized monitoring and data analytics",
                benefit: "Increased productivity, reduced production errors, and full visibility into the production process."
            },
            link: ISGDatasheet
        },
        {
            title: "Supervisory Control and Data Acquisition",
            imgs: [SCADA1, SCADA2, SCADA3, SCADA4],
            description: "Design and deployment of reliable industrial networks for data communication and system integration.",
            keySpecs: [
                "Real-Time Monitoring & Control",
                "Reliable Communication Protocols",
                "High Availability & System Redundancy",
                "Scalability & Cybersecurity"
            ],
            productSpecs: {
                problem: "Inefficient manual production processes, difficulties in real-time monitoring, and high operational costs",
                solution: "Implementation of PLC, SCADA, HMI, and integrated control systems with centralized monitoring and data analytics",
                benefit: "Increased productivity, reduced production errors, and full visibility into the production process."
            },
            link: "#"
        },
    ];

    return (
        <section
            id="our-products"
            className="bg-jmso-light-blue relative py-8 md:py-12 lg:py-20"
        >
            <div className="relative container flex flex-col items-center z-10">
                <h2 className="jmso-heading text-jmso-dark-blue text-center mb-8 lg:mb-12" dangerouslySetInnerHTML={{ __html: headline }} />
                <div className="w-full max-w-6xl">
                    <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {products.map((product, index) => (
                            <div
                                key={product.title}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                            >
                                {/* Card Image */}
                                <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
                                    {product.title == 'Supervisory Control and Data Acquisition'
                                        ? <FadeSlider imgs={product.imgs} imgZoomType="zoom-out" client:load />
                                        : <FadeSlider imgs={product.imgs} imgZoomType="zoom-in" client:load />
                                    }
                                    <div className="absolute inset-0 bg-gradient-to-t from-jmso-dark-blue/75 to-transparent"></div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-jmso-dark-blue mb-3">
                                            {product.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                            {product.description}
                                        </p>

                                        {/* Key Specs */}
                                        <div className="space-y-2">
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
                                    </div>

                                    {/* CTA Button */}
                                    <a
                                        href={product.title == 'Supervisory Control and Data Acquisition' ? 'https://wa.me/6282139940054' : product.link}
                                        className="mt-6 mb-3 block w-full bg-gradient-to-br from-jmso-tosca to-jmso-dark-blue text-white py-3 px-6 rounded-lg font-semibold hover:from-jmso-tosca hover:to-jmso-dark-blue transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-center"
                                    >
                                        {product.title == 'Supervisory Control and Data Acquisition' ? 'Consult Now' : 'Product Info'}
                                    </a>

                                    {/* CTA Button */}
                                    <button
                                        onClick={() => setSelectedProduct(product)}
                                        className="w-full bg-white text-jmso-tosca border-2 py-3 px-6 rounded-lg font-semibold hover:from-jmso-tosca hover:to-jmso-dark-blue transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                                    >
                                        Product Spec
                                    </button>
                                </div>

                                {/* Decorative Corner */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-jmso-dark-blue/10 to-transparent rounded-bl-full"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedProduct && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4 animate-fadeIn"
                    onClick={() => setSelectedProduct(null)}
                >
                    <div
                        className="bg-white rounded-t-3xl md:rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-hidden animate-slideUp shadow-2xl flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header - Fixed */}
                        <div className="bg-gradient-to-br from-jmso-tosca to-jmso-dark-blue text-white p-6 rounded-t-3xl md:rounded-t-3xl flex-shrink-0">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold">{selectedProduct.title}</h3>
                                    <p className="hidden md:block text-blue-100 mt-1">{selectedProduct.description}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors ml-4 flex-shrink-0"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Content - Scrollable */}
                        <div className="overflow-y-auto flex-1">
                            <div className="p-8">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-jmso-tosca to-jmso-dark-blue text-white">
                                            <th className="w-1/4 px-5 py-3 text-left text-sm font-bold uppercase tracking-wider rounded-tl-xl">
                                                Kategori
                                            </th>
                                            <th className="px-5 py-3 text-left text-sm font-bold uppercase tracking-wider rounded-tr-xl">
                                                Deskripsi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Problem Row */}
                                        <tr className="border-b border-gray-100 hover:bg-red-50/50 transition-colors">
                                            <td className="px-5 py-5 align-top">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <span className="text-white text-xs font-bold">P</span>
                                                    </div>
                                                    <span className="font-bold text-jmso-dark-blue">Problem</span>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 text-gray-600 leading-relaxed align-top">
                                                {selectedProduct.productSpecs.problem}
                                            </td>
                                        </tr>

                                        {/* Solution Row */}
                                        <tr className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
                                            <td className="px-5 py-5 align-top">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-[#0759d4] rounded-full flex items-center justify-center flex-shrink-0">
                                                        <span className="text-white text-xs font-bold">S</span>
                                                    </div>
                                                    <span className="font-bold text-jmso-dark-blue">Solution</span>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 text-gray-600 leading-relaxed align-top">
                                                {selectedProduct.productSpecs.solution}
                                            </td>
                                        </tr>

                                        {/* Benefit Row */}
                                        <tr className="hover:bg-green-50/50 transition-colors">
                                            <td className="px-5 py-5 align-top">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <span className="text-white text-xs font-bold">B</span>
                                                    </div>
                                                    <span className="font-bold text-jmso-dark-blue">Benefit</span>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 text-gray-600 leading-relaxed align-top">
                                                {selectedProduct.productSpecs.benefit}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideUp {
                    from { transform: translateY(100%); }
                    to { transform: translateY(0); }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }

                .animate-slideUp {
                    animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
            `}</style>
        </section>
    );
}