import logo from "../../../assets/images/jmso-logo.png";
import logoShort from "../../../assets/images/favicon.png";
import { Button } from "@/Components/ui/button";
import MobileNav from "@/components/ui/mobile-nav";

import React from "react";

export default function Navbar() {
    const navigation = {
        menu: [
            { link: "#application", title: "Application" },
            { link: "#features", title: "Features" },
            { link: "#case-study", title: "Case Study" },
            //   { link: "#products", title: "Products" },
            { link: "#faq", title: "FAQ" },
            { link: "#about", title: "About" },
        ],
        contact_us: { link: "#contact-us", title: "Contact Us" },
    };
    return (
        <header className="w-full py-4 border-b border-black/10 bg-white sticky top-0 z-50">
            <div className="container lg:flex justify-between items-center gap-4 hidden">
                <a href={`#`} aria-label="JMSO">
                    <img
                        src={logo.src}
                        alt="JMSO"
                        loading="eager"
                        className="h-8 w-auto"
                    />
                </a>
                <nav className="flex gap-8 items-center">
                    {navigation.menu.map((item: any) => (
                        <a
                            key={item.link}
                            href={item.link}
                            className="hover:text-palm-500 font-medium"
                        >
                            {item.title}
                        </a>
                    ))}
                </nav>
                <div className="flex gap-4 items-center">
                    {/* <LangSwitcher currentLang={lang} client:load /> */}
                    <a href="#contact-us">
                        <Button
                            size="default"
                            className="hidden lg:block leading-none"
                        >
                            Contact Us
                        </Button>
                        <Button size="sm" className="lg:hidden">
                            Contact Us
                        </Button>
                    </a>
                </div>
            </div>
            <div className="container flex justify-between gap-4 items-center lg:hidden">
                <div className="flex items-center gap-4">
                    <MobileNav
                        navItem={navigation.menu}
                        titleImg={
                            <a slot="titleImg" href="#" aria-label="JMSO">
                                <img
                                    src={logo.src}
                                    alt="JMSO"
                                    loading="eager"
                                    className="h-8 w-auto"
                                />
                            </a>
                        }
                    ></MobileNav>
                    <img
                        src={logo.src}
                        alt="JMSO"
                        height={32}
                        loading="eager"
                        className="hidden md:block lg:hidden"
                    />
                    <img
                        src={logoShort.src}
                        alt="JMSO"
                        loading="eager"
                        className="block md:hidden h-8 w-auto"
                    />
                </div>
                <div className="flex">
                    <a href="#contact-us">
                        <Button size="default" className="hidden lg:block">
                            Contact Us
                        </Button>
                        <Button size="sm" className="lg:hidden">
                            Contact Us
                        </Button>
                    </a>
                </div>
            </div>
        </header>
    );
}
