import { useEffect, useState } from "react";
import { X } from "lucide-react";
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

export default function Chart({
    service_headline,
}) {
    const [selectedIndustry, setSelectedIndustry] = useState(null);

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
            title: "Industrial Automation Solutions",
            img: semiconductor,
            imgMobile: semiconductorMobile,
            description: "Design and implementation of PLC, HMI, and SCADA systems tailored to industrial processes.",
            problem: "Inefficient manual production processes, difficulties in real-time monitoring, and high operational costs",
            solution: "Implementation of PLC, SCADA, HMI, and integrated control systems with centralized monitoring and data analytics",
            benefit: "Increased productivity, reduced production errors, and full visibility into the production process."
        },
        {
            title: "Control Panel Engineering",
            img: rocket,
            imgMobile: rocketMobile,
            description: "Design, assembly, testing, and commissioning of electrical and control panels based on industry standards.",
            problem: "Non-standard control panels, incomplete documentation, and difficulties in troubleshooting when problems occur",
            solution: "Engineering panels according to IEC standards, complete documentation, proper component selection, and comprehensive testing",
            benefit: "High reliability, ease of maintenance, compliance with international standards, and optimal lifecycle cost"
        },
        {
            title: "Instrumentation & Field Devices",
            img: biotech,
            imgMobile: biotechMobile,
            description: "Selection, installation, and calibration of sensors, transmitters, and measurement instruments.",
            problem: "Inconsistent measurement accuracy, irregular calibration schedules, and lack of system integration",
            solution: "Selection and installation of quality sensors, transmitters, and field devices with structured calibration systems",
            benefit: "Measurement accuracy >99%, scheduled preventive maintenance, and integrated real-time data for decision making"
        },
        {
            title: "Industrial Network & Communication",
            img: lcd,
            imgMobile: lcdMobile,
            description: "Design and deployment of reliable industrial networks for data communication and system integration.",
            problem: "Frequent network downtime, data communication bottlenecks, and weak cybersecurity in OT environments",
            solution: "Design of industrial ethernet, Profinet/Modbus integration, managed switch, and cybersecurity for OT network",
            benefit: "Network uptime 99.9%, real-time data transfer without delay, layered security segmentation, and easy scalability"
        },
    ];
    return (
        <section id="our-solutions" className="relative py-8 md:py-12 lg:py-20">
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
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                        {industry.description}
                                    </p>

                                    {/* CTA Button */}
                                    <button
                                        onClick={() => setSelectedIndustry(industry)}
                                        className="w-full bg-gradient-to-br from-jmso-tosca to-jmso-dark-blue text-white py-3 px-6 rounded-lg font-semibold hover:from-jmso-tosca hover:to-jmso-dark-blue transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                                    >
                                        Explanation
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
            {selectedIndustry && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4 animate-fadeIn"
                    onClick={() => setSelectedIndustry(null)}
                >
                    <div
                        className="bg-white rounded-t-3xl md:rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-slideUp shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-jmso-dark-blue to-[#0759d4] text-white p-6 rounded-t-3xl md:rounded-t-3xl">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold">{selectedIndustry.title}</h3>
                                    <p className="text-blue-100 mt-1">{selectedIndustry.description}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedIndustry(null)}
                                    className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors ml-4"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8 space-y-8">
                            {/* Problem */}
                            <div className="relative pl-8 border-l-4 border-red-500">
                                <div className="absolute -left-3 top-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">P</span>
                                </div>
                                <h4 className="text-lg font-bold text-jmso-dark-blue mb-3 flex items-center gap-2">
                                    Problem
                                    <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Tantangan</span>
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    {selectedIndustry.problem}
                                </p>
                            </div>

                            {/* Solution */}
                            <div className="relative pl-8 border-l-4 border-[#0759d4]">
                                <div className="absolute -left-3 top-0 w-6 h-6 bg-[#0759d4] rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">S</span>
                                </div>
                                <h4 className="text-lg font-bold text-jmso-dark-blue mb-3 flex items-center gap-2">
                                    Solution
                                    <span className="text-xs bg-blue-100 text-[#0759d4] px-2 py-1 rounded-full">Pendekatan</span>
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    {selectedIndustry.solution}
                                </p>
                            </div>

                            {/* Benefit */}
                            <div className="relative pl-8 border-l-4 border-green-500">
                                <div className="absolute -left-3 top-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">B</span>
                                </div>
                                <h4 className="text-lg font-bold text-jmso-dark-blue mb-3 flex items-center gap-2">
                                    Benefit
                                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Keuntungan</span>
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    {selectedIndustry.benefit}
                                </p>
                            </div>

                            {/* CTA Footer */}
                            <div className="pt-6 border-t border-gray-200">
                                <button className="w-full bg-gradient-to-r from-jmso-dark-blue to-[#0759d4] text-white py-4 px-8 rounded-xl font-semibold hover:from-[#003380] hover:to-[#0865f0] transition-all duration-300 shadow-lg hover:shadow-xl">
                                    Konsultasi Gratis Sekarang
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slideUp {
                    from {
                        transform: translateY(100%);
                    }
                    to {
                        transform: translateY(0);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }

                .animate-slideUp {
                    animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
            `}</style>
        </section >
    );
}
