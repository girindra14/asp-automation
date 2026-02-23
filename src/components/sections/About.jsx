import {
    Eye,
    Target,
    CheckCircle,
    Factory,
    Buildings,
    Drop,
    Package,
    Lightning,
    Flask,
    Gear,
    Handshake,
} from "@phosphor-icons/react/dist/ssr";
import aboutUs from "../../assets/images/about-us.webp";
import aboutUsMobile from "../../assets/images/about-us-mobile.webp";
import work1 from "../../assets/images/our-works/work_1.webp";
import work2 from "../../assets/images/our-works/work_2.webp";
import work3 from "../../assets/images/our-works/work_3.webp";
import work4 from "../../assets/images/our-works/work_4.webp";
import work5 from "../../assets/images/our-works/work_5.webp";
import work1Mobile from "../../assets/images/our-works/work_1-mobile.webp";
import work2Mobile from "../../assets/images/our-works/work_2-mobile.webp";
import work3Mobile from "../../assets/images/our-works/work_3-mobile.webp";
import work4Mobile from "../../assets/images/our-works/work_4-mobile.webp";
import work5Mobile from "../../assets/images/our-works/work_5-mobile.webp";
import ABB from "../../assets/images/partnerships/abb.webp";
import Ablerex from "../../assets/images/partnerships/ablerex.webp";
import Advantech from "../../assets/images/partnerships/advantech.webp";
import Belden from "../../assets/images/partnerships/belden.webp";
import Cisco from "../../assets/images/partnerships/cisco.webp";
import HanwhaVision from "../../assets/images/partnerships/hanwha-vision.webp";
import Netviel from "../../assets/images/partnerships/netviel.webp";

export default function AboutUs() {
    const works = [
        {
            img: work1,
            imgMobile: work1Mobile,
            category: "Manufacturing",
            title: "Automotive Assembly Line",
            products: "PLC Systems, HMI Panels, Servo Motors",
        },
        {
            img: work2,
            imgMobile: work2Mobile,
            category: "Infrastructure",
            title: "Smart Building Control",
            products: "BMS Systems, SCADA, IoT Sensors",
        },
        {
            img: work3,
            imgMobile: work3Mobile,
            category: "Water Treatment",
            title: "Filtration System Control",
            products: "Process Controllers, Flow Meters, Valves",
        },
        {
            img: work4,
            imgMobile: work4Mobile,
            category: "Packaging",
            title: "Conveyor Automation",
            products: "Motion Controllers, VFDs, Safety Systems",
        },
        {
            img: work5,
            imgMobile: work5Mobile,
            category: "Energy",
            title: "Power Distribution Control",
            products: "Power Meters, Monitoring Systems, Switchgear",
        },
    ];

    const partnerships = [
        { img: ABB },
        { img: Ablerex },
        { img: Advantech },
        { img: Belden },
        { img: Cisco },
        { img: HanwhaVision },
        { img: Netviel },

    ];

    return (
        <>
            {/* About Us Section */}
            <section id="about-us" className="relative py-8 md:py-12 lg:py-20 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Header */}
                    <h2 className="jmso-heading text-jmso-dark-blue text-center mb-8 lg:mb-12">About Us</h2>

                    {/* Company Overview */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
                        {/* Image */}
                        <div className="order-2 lg:order-1">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                                <img
                                    src={aboutUs.src}
                                    alt="About Us"
                                    className="hidden md:block w-full h-full object-cover"
                                />
                                <img
                                    src={aboutUsMobile.src}
                                    alt="About Us"
                                    className="block md:hidden w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-jmso-dark-blue/90 to-transparent"></div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="order-1 lg:order-2 text-center lg:text-start">
                            <div className="inline-block px-4 py-2 bg-jmso-light-blue text-jmso-tosca rounded-full text-sm font-semibold mb-4">
                                Company Overview
                            </div>
                            <h3 className="jmso-subheading text-jmso-dark-blue mb-6">
                                Delivering Reliable Automation Solutions
                            </h3>
                            <p className="text-jmso-dark-blue/70 text-lg leading-relaxed">
                                We are an industrial automation company focused on delivering
                                reliable and scalable automation solutions for manufacturing,
                                infrastructure, and industrial facilities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-b from-jmso-light-blue to-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Vision */}
                        <div className="bg-white p-8 md:p-10 rounded-xl border-2 border-jmso-tosca/20 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-jmso-tosca/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Eye size={32} className="text-jmso-tosca" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-jmso-dark-blue">
                                    Our Vision
                                </h3>
                            </div>
                            <p className="text-jmso-dark-blue/70 text-lg leading-relaxed">
                                To become a trusted automation partner that drives industrial
                                efficiency and sustainability.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-jmso-light-blue text-jmso-tosca rounded-full text-sm font-medium">
                                    Efficiency
                                </span>
                                <span className="px-3 py-1 bg-jmso-light-blue text-jmso-tosca rounded-full text-sm font-medium">
                                    Safety
                                </span>
                                <span className="px-3 py-1 bg-jmso-light-blue text-jmso-tosca rounded-full text-sm font-medium">
                                    Innovation
                                </span>
                            </div>
                        </div>

                        {/* Mission */}
                        <div className="bg-white p-8 md:p-10 rounded-xl border-2 border-jmso-tosca/20 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-jmso-tosca/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Target size={32} className="text-jmso-tosca" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-jmso-dark-blue">
                                    Our Mission
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-jmso-dark-blue/70 text-lg">
                                    <CheckCircle
                                        size={24}
                                        weight="fill"
                                        className="text-jmso-tosca mt-1 flex-shrink-0"
                                    />
                                    <span>Deliver reliable automation systems</span>
                                </li>
                                <li className="flex items-start gap-3 text-jmso-dark-blue/70 text-lg">
                                    <CheckCircle
                                        size={24}
                                        weight="fill"
                                        className="text-jmso-tosca mt-1 flex-shrink-0"
                                    />
                                    <span>Provide high-quality products and services</span>
                                </li>
                                <li className="flex items-start gap-3 text-jmso-dark-blue/70 text-lg">
                                    <CheckCircle
                                        size={24}
                                        weight="fill"
                                        className="text-jmso-tosca mt-1 flex-shrink-0"
                                    />
                                    <span>Support customers throughout the project lifecycle</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Works Section */}
            <section className="relative py-12 md:py-16 lg:py-20 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="jmso-heading text-jmso-dark-blue text-center mb-8 lg:mb-10">Our Works</h2>
                        <p className="text-jmso-dark-blue/70 text-lg max-w-2xl mx-auto">
                            Trusted by leading industries for reliability, precision, and
                            comprehensive support
                        </p>
                    </div>

                    {/* Works Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {works.map((work, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-xl border border-jmso-dark-blue/10 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={work.img.src}
                                        alt={work.title}
                                        className="hidden md:block w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <img
                                        src={work.imgMobile.src}
                                        alt={work.title}
                                        className="block md:hidden w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-jmso-dark-blue/90 to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <span className="inline-block px-3 py-1 bg-jmso-light-blue text-jmso-tosca rounded-full text-xs font-semibold mb-3">
                                        {work.category}
                                    </span>
                                    <h4 className="text-xl font-bold text-jmso-dark-blue mb-2">
                                        {work.title}
                                    </h4>
                                    <p className="text-jmso-dark-blue/60 text-sm">
                                        Products: {work.products}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Partners Section */}
            <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-jmso-light-blue">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Header - Centered */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center gap-3 mb-6 md:mb-10">
                            <h2 className="jmso-heading text-jmso-dark-blue">
                                Our Partners
                            </h2>
                        </div>
                        <p className="text-jmso-dark-blue/70 text-lg max-w-2xl mx-auto">
                            Collaborating with global industry leaders to deliver the best automation solutions
                        </p>
                    </div>

                    {/* Partners Grid - Centered */}
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                            {partnerships.map((partner, index) => (
                                <div key={index} className="group flex items-center justify-center">
                                    <img
                                        src={partner.img.src}
                                        alt={partner.img.alt}
                                        className="w-full h-auto object-contain hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}