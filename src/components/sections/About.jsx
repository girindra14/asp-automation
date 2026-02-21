/*
import { BoardSlider } from "@/components/ui/swiper";
import BoardMobile from "@/components/ui/board-mobile";
import {
    Buildings,
    MapPin,
    UserCircle,
    UsersThree,
} from "@phosphor-icons/react/dist/ssr";

import jmsoLogo from "../../assets/images/jmso-logo-en.png";
import company_1 from "../../assets/images/companies/company-1-matsumura.jpeg";
import company_1_logo from "../../assets/images/companies/company-logo-matsumura.png";
import company_2 from "../../assets/images/companies/company-2-kyokuto.png";
import company_2_logo from "../../assets/images/companies/company-logo-kyokuto.png";
import company_3 from "../../assets/images/companies/company-3-yuko.png";
import company_3_logo from "../../assets/images/companies/company-logo-yuko.png";
import company_4 from "../../assets/images/companies/company-4-nagai.png";
import company_4_logo from "../../assets/images/companies/company-logo-nagai.png";
import company_5 from "../../assets/images/companies/company-5-kke.png";
import company_5_logo from "../../assets/images/companies/company-logo-kke.png";

import React from "react";

export default function About({
    showDescription = true,
    board = "slider",
    is_country_lp,
    about_us_quote
}) {
    const board_members = {
        title: "Representative Director and Board Member Company",
        matsumura: {
            title: "MATSUMURA Co.,Ltd.",
            category: "Metalworking・Welding",
            description: `Since 1989, we hve been engaged in welding and precision machining of semiconductor equipment parts, ultra-high vacuum parts, pressure-resistant parts, thermocouples, and sensor cases for liquid level gauges. Our self-developed automatic TIG welding machine enables us to mass-produce 8,000 parts a day. We have eight production bases in Japan. We aspire to be a proposal-oriented manufacturing company by proposing welding and processing shapes, offering cost-effective welding designs and a wealth of innovative ideas.`,
        },
        kyokuto: {
            title: "Kyokuto Seiki Co.,Ltd.",
            category: "Precision Processing",
            description: `Since 1948, we have specialized in precision machining of
      difficult-to-cut materials, providing expert services in
      precision machining, NC lathe machining, general-purpose
      turning, and surface treatment for semiconductor manufacturing
      equipment and related parts for special valves. We provide
      unique and delicate products crafted with a combination of
      state-of-the-art equipment and blades hand-sharpened by skilled
      craftsmen at our own factory.`,
        },
        yuko: {
            title: "YUKO SEIKI Y.K.",
            category: "Cutting Tools",
            description: `Established in 1969, we are a machine tool trading company
      that mainly handles cemented carbide cutting tools. With our
      extensive tool knowledge cultivated over the years, we develop
      solutions that are tailored to our clients' requirements.<br/>
      Major handling brands : SANDVIK, SECO, WALTER, KENNAMETAL,
                AXIS, toolyuko, OSG, Sumitomo, Tungaloy, Mitsubishi, NACHi,
                KYOCERA, IWATATOOL, EIKO, Mitutoyo, BIG DAISHOWA, ABB, OKUMA`,
        },
        nagai: {
            title: "Nagai Ironworks Co.,Ltd.",
            category: "Cutting process",
            description: `Established in 1961, we specialize in mass precision metal
      processing using CNC lathes, CNC automatic lathes, and
      machining centers, and can handle everything from material
      procurement to surface treatment.<br/>
Materials handled: iron, stainless steel, brass, aluminum,
      resin.<br/>
Field of application : ultra-precision valve equipment /
      construction machinery / food manufacturing machinery/ textile
      machinery / industrial machinery medical equipment /
      decoration-related / various precisions`,
        },
        kke: {
            title: "KKE Co.,Ltd.",
            category: "Turning and milling",
            description: `Established in 1997, we are a machining company specializing
      in metal processing of difficult-to-machine materials such as
      SUS, titanium, and Hastelloy using horizontal machining
      centers/vertical machining centers/NC lathes/combined lathes.
      With our self-developed special jigs, we can handle small-lot,
      multi-variety, and mass production of semiconductor
      manufacturing equipment parts, ultra-high vacuum parts,
      thermocouples, liquid level gauges, and others.`,
        },
    };
    return (
        <section
            id="about"
            className={
                is_country_lp
                    ? "relative py-8 md:py-12 lg:py-20 bg-white"
                    : "relative py-8 md:py-12 lg:py-20 bg-white"
            }
        >
            <div className="relative">
                <div className="container">
                    <h2 className="jmso-heading text-jmso-dark-blue text-center mb-8 lg:mb-16">
                        About <span className="text-jmso-tosca">Us</span>
                    </h2>
                    <div className="flex flex-col items-center lg:items-center w-full">
                        <ul className="[&>li]:text-jmso-dark-blue grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0 border border-jmso-dark-blue/10 w-full">
                            <li className="inline-flex flex-col items-start md:items-center font-heading text-left md:text-center p-3 text-xl font-semibold hover:bg-white/25 duration-300 ease-out border-b md:border-r lg:border-b-0 border-jmso-dark-blue/10">
                                <Buildings
                                    size={48}
                                    className="text-jmso-dark-blue mb-3"
                                />
                                <span className="font-normal text-jmso-dark-blue/80 font-heading text-sm">
                                    Organization Name
                                </span>
                                <img
                                    src={jmsoLogo.src}
                                    alt="JMSO (Japan manufacturing Support Organization)"
                                    className="w-full h-auto max-w-40 mt-2"
                                />
                            </li>
                            <li className="inline-flex flex-col items-start md:items-center font-heading text-left md:text-center p-3 text-xl font-semibold hover:bg-white/25 duration-300 ease-out border-b lg:border-b-0 lg:border-r border-jmso-dark-blue/10">
                                <MapPin
                                    size={48}
                                    className="text-jmso-dark-blue mb-3"
                                />
                                <span className="font-normal text-jmso-dark-blue/80 font-heading text-sm">
                                    Location
                                </span>
                                Osaka, Japan
                            </li>
                            <li className="inline-flex flex-col items-start md:items-center font-heading text-left md:text-center p-3 text-xl font-semibold hover:bg-white/25 duration-300 ease-out border-b md:border-b-0 md:border-r border-jmso-dark-blue/10">
                                <UsersThree
                                    size={48}
                                    className="text-jmso-dark-blue mb-3"
                                />
                                <span className="font-normal text-jmso-dark-blue/80 font-heading text-sm">
                                    Member Companies
                                </span>
                                Approx. 40
                            </li>
                            <li className="inline-flex flex-col items-start md:items-center font-heading text-left md:text-center p-3 text-xl font-semibold hover:bg-white/25 duration-300 ease-out md:border-0 lg:border-0 border-jmso-dark-blue/10">
                                <UserCircle
                                    size={48}
                                    className="text-jmso-dark-blue mb-3"
                                />
                                <span className="font-normal text-jmso-dark-blue/80 font-heading text-sm">
                                    Representative Director
                                </span>
                                <span>
                                    MATSUMURA Co.,Ltd.
                                    <br />
                                    Kazuya Matsumura
                                </span>
                            </li>
                        </ul>
                        {showDescription && (
                            <p className="text-jmso-dark-blue mt-4" dangerouslySetInnerHTML={{ __html: about_us_quote }} />
                        )}
                    </div>
                </div>
            </div>
            <div className="block md:hidden">
                <BoardMobile content={board_members}
                    matsumura=
                    {
                        <img
                            src={company_1.src}
                            alt="matsumura"
                            className="w-full h-auto aspect-[1/1] object-cover rounded-md mb-4"
                        />
                    }
                    matsumura_logo=
                    {
                        <img
                            src={company_1_logo.src}
                            alt="matsumura"
                            className="w-8 h-8"
                        />
                    }
                    kyokuto=
                    {
                        <img
                            src={company_2.src}
                            alt="kyokuto"
                            className="w-full h-auto aspect-[1/1] object-cover rounded-md mb-4"
                        />
                    }
                    kyokuto_logo=
                    {<img src={company_2_logo.src} alt="kyokuto" className="w-8 h-8" />}
                    yuko=
                    {
                        <img
                            src={company_3.src}
                            alt="yuko"
                            className="w-full h-auto aspect-[1/1] object-cover rounded-md mb-4"
                        />
                    }
                    yuko_logo=
                    {<img src={company_3_logo.src} alt="yuko" className="w-8 h-8" />}
                    nagai=
                    {
                        <img
                            src={company_4.src}
                            alt="nagai"
                            className="w-full h-auto aspect-[1/1] object-cover rounded-md mb-4"
                        />
                    }
                    nagai_logo=
                    {<img src={company_4_logo.src} alt="nagai" className="w-8 h-8" />}
                    kke=
                    {
                        <img
                            src={company_5.src}
                            alt="kke"
                            className="w-full h-auto aspect-[1/1] object-cover rounded-md mb-4"
                        />
                    }
                    kke_logo=
                    {<img src={company_5_logo.src} alt="kke" className="w-8 h-8" />}>
                </BoardMobile>
            </div>
            <div className="hidden md:block">
                {board == "slider" && (
                    <BoardSlider content={board_members}
                        matsumura=
                        {
                            <img
                                src={company_1.src}
                                alt="matsumura"
                                className="w-full h-auto aspect-[1/1] object-cover rounded-md mb-4"
                            />
                        }
                        matsumura_logo=
                        {
                            <img
                                src={company_1_logo.src}
                                alt="matsumura"
                                className="w-10 h-10"
                            />
                        }
                        kyokuto=
                        {
                            <img
                                src={company_2.src}
                                alt="kyokuto"
                                className="w-full h-auto aspect-[1/1] object-cover rounded-md mb-4"
                            />
                        }
                        kyokuto_logo=
                        {
                            <img
                                src={company_2_logo.src}
                                alt="kyokuto"
                                className="w-10 h-10"
                            />
                        }
                        yuko=
                        {
                            <img
                                src={company_3.src}
                                alt="yuko"
                                className="w-full h-auto aspect-[1/1] object-cover rounded-md mb-4"
                            />
                        }
                        yuko_logo=
                        {
                            <img
                                src={company_3_logo.src}
                                alt="yuko"
                                className="w-10 h-10"
                            />
                        }
                        nagai=
                        {
                            <img
                                src={company_4.src}
                                alt="nagai"
                                className="w-full h-auto aspect-[1/1] object-cover rounded-md mb-4"
                            />
                        }
                        nagai_logo=
                        {
                            <img
                                src={company_4_logo.src}
                                alt="nagai"
                                className="w-10 h-10"
                            />
                        }
                        kke=
                        {
                            <img
                                src={company_5.src}
                                alt="kke"
                                className="w-full h-auto aspect-[1/1] object-cover rounded-md mb-4"
                            />
                        }
                        kke_logo=
                        {
                            <img
                                src={company_5_logo.src}
                                alt="kke"
                                className="w-10 h-10"
                            />
                        }>
                    </BoardSlider>
                )}
                {board == "grid" && (
                    <div className="container pt-8">
                        <h4 className="jmso-subheading text-jmso-dark-blue leading-none mb-8">
                            {board_members.title}
                        </h4>
                        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-8">
                            <div className="p-4 lg:p-4 flex flex-col gap-4 border rounded-md !h-auto bg-white lg:col-span-2">
                                <img
                                    src={company_1.src}
                                    alt="matsumura"
                                    className="w-full h-auto aspect-[1/1] lg:aspect-[5/4] object-cover rounded-md mb-4"
                                />
                                <p className="p-2 mb-2 bg-jmso-light-blue text-jmso-dark-blue w-max text-xs rounded font-medium">
                                    {board_members.matsumura.category}
                                </p>
                                <h5 className="font-semibold text-lg text-jmso-dark-blue mb-2 inline-flex gap-1 items-center">
                                    <img
                                        src={company_1_logo.src}
                                        alt="matsumura"
                                        className="w-10 h-10"
                                    />
                                    {board_members.matsumura.title}
                                </h5>
                                <div className="space-y-2">
                                    <p className="text-jmso-dark-blue/60 text-xs">
                                        {board_members.matsumura.description}
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 lg:p-4 flex flex-col gap-4 border rounded-md !h-auto bg-white lg:col-span-2">
                                <img
                                    src={company_2.src}
                                    alt="kyokuto"
                                    className="w-full h-auto aspect-[1/1] lg:aspect-[5/4] object-cover rounded-md mb-4"
                                />
                                <p className="p-2 mb-2 bg-jmso-light-blue text-jmso-dark-blue w-max text-xs rounded font-medium">
                                    {board_members.kyokuto.category}
                                </p>
                                <h5 className="font-semibold text-lg text-jmso-dark-blue mb-2 inline-flex gap-1 items-center">
                                    <img
                                        src={company_2_logo.src}
                                        alt="kyokuto"
                                        className="w-10 h-10"
                                    />{" "}
                                    {board_members.kyokuto.title}
                                </h5>
                                <div className="space-y-2">
                                    <p className="text-jmso-dark-blue/60 text-xs">
                                        {board_members.kyokuto.description}
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 lg:p-4 flex flex-col gap-4 border rounded-md !h-auto bg-white lg:col-span-2">
                                <img
                                    src={company_3.src}
                                    alt="yuko"
                                    className="w-full h-auto aspect-[1/1] lg:aspect-[5/4] object-cover rounded-md mb-4"
                                />
                                <p className="p-2 mb-2 bg-jmso-light-blue text-jmso-dark-blue w-max text-xs rounded font-medium">
                                    {board_members.yuko.category}
                                </p>
                                <h5 className="font-semibold text-lg text-jmso-dark-blue mb-2 inline-flex gap-1 items-center">
                                    <img
                                        src={company_3_logo.src}
                                        alt="yuko"
                                        className="w-10 h-10"
                                    />
                                    {board_members.yuko.title}
                                </h5>
                                <div className="space-y-2">
                                    <p className="text-jmso-dark-blue/60 text-xs">
                                        {board_members.yuko.description}
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 lg:p-4 flex flex-col gap-4 border rounded-md !h-auto bg-white lg:col-span-2 lg:col-start-2">
                                <img
                                    src={company_4.src}
                                    alt="nagai"
                                    className="w-full h-auto aspect-[1/1] lg:aspect-[5/4] object-cover rounded-md mb-4"
                                />
                                <p className="p-2 mb-2 bg-jmso-light-blue text-jmso-dark-blue w-max text-xs rounded font-medium">
                                    {board_members.nagai.category}
                                </p>
                                <h5 className="font-semibold text-lg text-jmso-dark-blue mb-2 inline-flex gap-1 items-center">
                                    <img
                                        src={company_4_logo.src}
                                        alt="nagai"
                                        className="w-10 h-10"
                                    />
                                    {board_members.nagai.title}
                                </h5>
                                <div className="space-y-2">
                                    <p className="text-jmso-dark-blue/60 text-xs">
                                        {board_members.nagai.description}
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 lg:p-4 flex flex-col gap-4 border rounded-md !h-auto bg-white lg:col-span-2">
                                <img
                                    src={company_5.src}
                                    alt="kke"
                                    className="w-full h-auto aspect-[1/1] lg:aspect-[5/4] object-cover rounded-md mb-4"
                                />
                                <p className="p-2 mb-2 bg-jmso-light-blue text-jmso-dark-blue w-max text-xs rounded font-medium">
                                    {board_members.kke.category}
                                </p>
                                <h5 className="font-semibold text-lg text-jmso-dark-blue mb-2 inline-flex gap-1 items-center">
                                    <img
                                        src={company_5_logo.src}
                                        alt="kke"
                                        className="w-10 h-10"
                                    />
                                    {board_members.kke.title}
                                </h5>
                                <div className="space-y-2">
                                    <p className="text-jmso-dark-blue/60 text-xs">
                                        {board_members.kke.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
*/

import React from "react";
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

export default function AboutUs() {
    const works = [
        {
            icon: <Factory size={64} />,
            category: "Manufacturing",
            title: "Automotive Assembly Line",
            products: "PLC Systems, HMI Panels, Servo Motors",
        },
        {
            icon: <Buildings size={64} />,
            category: "Infrastructure",
            title: "Smart Building Control",
            products: "BMS Systems, SCADA, IoT Sensors",
        },
        {
            icon: <Drop size={64} />,
            category: "Water Treatment",
            title: "Filtration System Control",
            products: "Process Controllers, Flow Meters, Valves",
        },
        {
            icon: <Package size={64} />,
            category: "Packaging",
            title: "Conveyor Automation",
            products: "Motion Controllers, VFDs, Safety Systems",
        },
        {
            icon: <Lightning size={64} />,
            category: "Energy",
            title: "Power Distribution Control",
            products: "Power Meters, Monitoring Systems, Switchgear",
        },
        {
            icon: <Flask size={64} />,
            category: "Chemical",
            title: "Process Automation",
            products: "DCS Systems, Analytical Instruments, Safety PLCs",
        },
    ];

    const partnerships = [
        { name: "Siemens" },
        { name: "Schneider" },
        { name: "ABB" },
        { name: "Rockwell" },
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
                            <div className="bg-gradient-to-br from-jmso-tosca to-jmso-dark-blue rounded-xl shadow-lg aspect-[4/3] overflow-hidden flex items-center justify-center text-white">
                                <div className="text-center p-8">
                                    <Gear size={96} className="mx-auto mb-4 opacity-50" />
                                    <p className="text-xl font-semibold">Industrial Automation</p>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="order-1 lg:order-2">
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
                                <div className="bg-gradient-to-br from-jmso-tosca to-jmso-dark-blue aspect-[4/3] flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300">
                                    <div className="opacity-50">{work.icon}</div>
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
                            <Handshake
                                size={48}
                                weight="fill"
                                className="text-jmso-tosca"
                            />
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
                                <div
                                    key={index}
                                    className="bg-white border-2 border-dashed border-gray-300 aspect-[3/2] rounded-xl hover:border-jmso-tosca hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center group"
                                >
                                    <span className="text-gray-600 group-hover:text-jmso-tosca font-semibold text-base md:text-lg transition-colors">
                                        {partner.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}