import * as React from "react";
import { cn } from "@/lib/utils";

import { Check, X, CaretDown } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

export type OptionType = {
  label: string;
  value: string;
};

interface MultiSelectProps {
  options: OptionType[];
  selected: string[];
  onChange: React.Dispatch<React.SetStateAction<string[]>>;
  placeholder?: string;
  notFound?: string;
  className?: string;
}

function MultiSelect({
  options,
  selected,
  onChange,
  className,
  placeholder,
  notFound,
  ...props
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const handleUnselect = (item: string) => {
    onChange(selected.filter((i) => i !== item));
  };

  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger asChild>
        <Button
          variant="form-input"
          role="combobox"
          aria-expanded={open}
          className={`w-full justify-between border border-palm-200 text-palm-400 px-3 py-2 hover:bg-white hover:text-palm-400`}
          onClick={() => setOpen(!open)}
        >
          <div className="flex gap-1 flex-wrap font-normal text-sm">
            {placeholder}
            {selected.map((item) => (
              <Badge
                variant="default"
                key={item}
                className="mr-1 bg-palm-500 hover:bg-palm-500/90"
                onClick={() => handleUnselect(item)}
              >
                {item}
                <button
                  className="ml-1 ring-offset-0 rounded-full outline-none"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUnselect(item);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(item)}
                >
                  <X className="h-3 w-3 text-white" weight="bold" />
                </button>
              </Badge>
            ))}
          </div>
          <CaretDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 -translate-y-5">
        <Command className={className}>
          <CommandInput className="focus:!ring-0 focus-visible:!ring-0" placeholder={placeholder} />
          <CommandEmpty>{notFound}</CommandEmpty>
          <CommandGroup className="max-h-64 overflow-auto">
            {options.map((option) => (
              <CommandItem
                key={option.value}
                onSelect={() => {
                  onChange(
                    selected.includes(option.value)
                      ? selected.filter((item) => item !== option.value)
                      : [...selected, option.value],
                  );
                  setOpen(true);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selected.includes(option.value)
                      ? "opacity-100"
                      : "opacity-0",
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export { MultiSelect };
