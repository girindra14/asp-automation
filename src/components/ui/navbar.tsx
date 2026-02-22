import logo from "../../assets/images/logo_asp.png";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/ui/mobile-nav";

export default function Navbar() {
    const navigation = {
        menu: [
            { link: "#what-we-do", title: "What We Do" },
            { link: "#why-choose-us", title: "Why Choose Us" },
            { link: "#our-solutions", title: "Our Solutions" },
            { link: "#our-products", title: "Our Products" },
            { link: "#about-us", title: "About Us" },
        ],
        contact_us: { link: "#contact-us", title: "Contact Us" },
    };
    return (
        <header className="w-full py-4 border-b border-black/10 bg-white sticky top-0 z-50">
            <div className="container lg:flex justify-between items-center gap-4 hidden">
                <a href={`/`} aria-label="ASP Automation">
                    <img
                        src={logo.src}
                        alt="ASP Automation"
                        loading="eager"
                        className="h-16 w-auto"
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
                            <a slot="titleImg" href="/" aria-label="ASP Automation">
                                <img
                                    src={logo.src}
                                    alt="ASP Automation"
                                    loading="eager"
                                    className="h-8 w-auto"
                                />
                            </a>
                        }
                    ></MobileNav>
                    <img
                        src={logo.src}
                        alt="ASP Automation"
                        width={128}
                        loading="eager"
                        className="hidden md:block lg:hidden"
                    />
                    <img
                        src={logo.src}
                        alt="ASP Automation"
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
