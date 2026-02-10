import { BoardSlider } from "@/components/ui/swiper";
import BoardMobile from "@/components/ui/board-mobile";
import {
    Buildings,
    MapPin,
    UserCircle,
    UsersThree,
} from "@phosphor-icons/react/dist/ssr";

import jmsoLogo from "../../../assets/images/jmso-logo-en.png";
import company_1 from "../../../assets/images/companies/company-1-matsumura.jpeg";
import company_1_logo from "../../../assets/images/companies/company-logo-matsumura.png";
import company_2 from "../../../assets/images/companies/company-2-kyokuto.png";
import company_2_logo from "../../../assets/images/companies/company-logo-kyokuto.png";
import company_3 from "../../../assets/images/companies/company-3-yuko.png";
import company_3_logo from "../../../assets/images/companies/company-logo-yuko.png";
import company_4 from "../../../assets/images/companies/company-4-nagai.png";
import company_4_logo from "../../../assets/images/companies/company-logo-nagai.png";
import company_5 from "../../../assets/images/companies/company-5-kke.png";
import company_5_logo from "../../../assets/images/companies/company-logo-kke.png";

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
                    ? "relative py-8 md:py-12 lg:py-20 bg-gradient-to-b from-jmso-light-blue via-white to-white"
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
                                    src={jmsoLogo}
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
                            src={company_1}
                            alt="matsumura"
                            className="w-full h-auto aspect-[1/1] object-cover rounded-md mb-4"
                        />
                    }
                    matsumura_logo=
                    {
                        <img
                            src={company_1_logo}
                            alt="matsumura"
                            className="w-8 h-8"
                        />
                    }
                    kyokuto=
                    {
                        <img
                            src={company_2}
                            alt="kyokuto"
                            className="w-full h-auto aspect-[1/1] object-cover rounded-md mb-4"
                        />
                    }
                    kyokuto_logo=
                    {<img src={company_2_logo} alt="kyokuto" className="w-8 h-8" />}
                    yuko=
                    {
                        <img
                            src={company_3}
                            alt="yuko"
                            className="w-full h-auto aspect-[1/1] object-cover rounded-md mb-4"
                        />
                    }
                    yuko_logo=
                    {<img src={company_3_logo} alt="yuko" className="w-8 h-8" />}
                    nagai=
                    {
                        <img
                            src={company_4}
                            alt="nagai"
                            className="w-full h-auto aspect-[1/1] object-cover rounded-md mb-4"
                        />
                    }
                    nagai_logo=
                    {<img src={company_4_logo} alt="nagai" className="w-8 h-8" />}
                    kke=
                    {
                        <img
                            src={company_5}
                            alt="kke"
                            className="w-full h-auto aspect-[1/1] object-cover rounded-md mb-4"
                        />
                    }
                    kke_logo=
                    {<img src={company_5_logo} alt="kke" className="w-8 h-8" />}>
                </BoardMobile>
            </div>
            <div className="hidden md:block">
                {board == "slider" && (
                    <BoardSlider content={board_members}
                        matsumura=
                        {
                            <img
                                src={company_1}
                                alt="matsumura"
                                className="w-full h-auto aspect-[1/1] object-cover rounded-md mb-4"
                            />
                        }
                        matsumura_logo=
                        {
                            <img
                                src={company_1_logo}
                                alt="matsumura"
                                className="w-10 h-10"
                            />
                        }
                        kyokuto=
                        {
                            <img
                                src={company_2}
                                alt="kyokuto"
                                className="w-full h-auto aspect-[1/1] object-cover rounded-md mb-4"
                            />
                        }
                        kyokuto_logo=
                        {
                            <img
                                src={company_2_logo}
                                alt="kyokuto"
                                className="w-10 h-10"
                            />
                        }
                        yuko=
                        {
                            <img
                                src={company_3}
                                alt="yuko"
                                className="w-full h-auto aspect-[1/1] object-cover rounded-md mb-4"
                            />
                        }
                        yuko_logo=
                        {
                            <img
                                src={company_3_logo}
                                alt="yuko"
                                className="w-10 h-10"
                            />
                        }
                        nagai=
                        {
                            <img
                                src={company_4}
                                alt="nagai"
                                className="w-full h-auto aspect-[1/1] object-cover rounded-md mb-4"
                            />
                        }
                        nagai_logo=
                        {
                            <img
                                src={company_4_logo}
                                alt="nagai"
                                className="w-10 h-10"
                            />
                        }
                        kke=
                        {
                            <img
                                src={company_5}
                                alt="kke"
                                className="w-full h-auto aspect-[1/1] object-cover rounded-md mb-4"
                            />
                        }
                        kke_logo=
                        {
                            <img
                                src={company_5_logo}
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
                                    src={company_1}
                                    alt="matsumura"
                                    className="w-full h-auto aspect-[1/1] lg:aspect-[5/4] object-cover rounded-md mb-4"
                                />
                                <p className="p-2 mb-2 bg-jmso-light-blue text-jmso-dark-blue w-max text-xs rounded font-medium">
                                    {board_members.matsumura.category}
                                </p>
                                <h5 className="font-semibold text-lg text-jmso-dark-blue mb-2 inline-flex gap-1 items-center">
                                    <img
                                        src={company_1_logo}
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
                                    src={company_2}
                                    alt="kyokuto"
                                    className="w-full h-auto aspect-[1/1] lg:aspect-[5/4] object-cover rounded-md mb-4"
                                />
                                <p className="p-2 mb-2 bg-jmso-light-blue text-jmso-dark-blue w-max text-xs rounded font-medium">
                                    {board_members.kyokuto.category}
                                </p>
                                <h5 className="font-semibold text-lg text-jmso-dark-blue mb-2 inline-flex gap-1 items-center">
                                    <img
                                        src={company_2_logo}
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
                                    src={company_3}
                                    alt="yuko"
                                    className="w-full h-auto aspect-[1/1] lg:aspect-[5/4] object-cover rounded-md mb-4"
                                />
                                <p className="p-2 mb-2 bg-jmso-light-blue text-jmso-dark-blue w-max text-xs rounded font-medium">
                                    {board_members.yuko.category}
                                </p>
                                <h5 className="font-semibold text-lg text-jmso-dark-blue mb-2 inline-flex gap-1 items-center">
                                    <img
                                        src={company_3_logo}
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
                                    src={company_4}
                                    alt="nagai"
                                    className="w-full h-auto aspect-[1/1] lg:aspect-[5/4] object-cover rounded-md mb-4"
                                />
                                <p className="p-2 mb-2 bg-jmso-light-blue text-jmso-dark-blue w-max text-xs rounded font-medium">
                                    {board_members.nagai.category}
                                </p>
                                <h5 className="font-semibold text-lg text-jmso-dark-blue mb-2 inline-flex gap-1 items-center">
                                    <img
                                        src={company_4_logo}
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
                                    src={company_5}
                                    alt="kke"
                                    className="w-full h-auto aspect-[1/1] lg:aspect-[5/4] object-cover rounded-md mb-4"
                                />
                                <p className="p-2 mb-2 bg-jmso-light-blue text-jmso-dark-blue w-max text-xs rounded font-medium">
                                    {board_members.kke.category}
                                </p>
                                <h5 className="font-semibold text-lg text-jmso-dark-blue mb-2 inline-flex gap-1 items-center">
                                    <img
                                        src={company_5_logo}
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
