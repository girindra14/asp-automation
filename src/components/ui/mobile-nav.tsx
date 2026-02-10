import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import { Button } from "@/Components/ui/button";
import React from "react";

export default function MobileNav({
    navItem,
    titleImg,
}: {
    navItem: any;
    titleImg?: any;
}) {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false);
    }, []);
    return (
        <Sheet open={menuOpen}>
            <SheetTrigger onClick={() => setMenuOpen(true)} aria-label="Menu">
                <List width={24} height={24} className="text-palm-900" />
            </SheetTrigger>
            <SheetContent side="top" className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <SheetClose onClick={() => setMenuOpen(false)}>
                        <X width={24} height={24} className="text-palm-900" />
                    </SheetClose>
                    <SheetHeader>
                        <SheetTitle>{titleImg}</SheetTitle>
                    </SheetHeader>
                </div>
                <ul className="gap-4 flex flex-col">
                    {navItem.map(
                        (
                            item: { link: string; title: string },
                            index: number
                        ) => (
                            <li key={index}>
                                <a
                                    href={item.link}
                                    className="hover:text-palm-500 font-medium"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.title}
                                </a>
                            </li>
                        )
                    )}
                    <li>
                        <a href={`#contact-us`}>
                            <Button
                                className="w-full"
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact Us
                            </Button>
                        </a>
                    </li>
                </ul>
            </SheetContent>
        </Sheet>
    );
}
