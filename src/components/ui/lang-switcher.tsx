import React from "react";
import { DropdownMenu } from "../ui/dropdown-menu";
import { DropdownMenuContent } from "../ui/dropdown-menu";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "../ui/dropdown-menu";
import { languages, type Language } from "@/lib/i18n";
import { BASE_URL } from "@/lib/utils";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";

interface LangSwitcherProps {
  currentLang: Language;
}

export default function LangSwitcher({ currentLang }: LangSwitcherProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-sm flex gap-2 items-center">
        {currentLang in languages && languages[currentLang]}
        <CaretDown className="ml-auto h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {Object.entries(languages).map(([lang, label]) => (
          <DropdownMenuItem key={label}>
            <a
              href={`${BASE_URL}welding-machine/${lang === "en" ? "" : lang}`}
              className=""
            >
              {label}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
