import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/Components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/Components/ui/select";
import { Textarea } from "@/components/ui/text-area";
import { Checkbox } from "@/components/ui/checkbox";
import { MultiSelect } from "@/components/ui/multi-select";
// import("@/Components/ui/multi-select");

import countryJSON from "country-json/src/country-by-name.json";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
// import { BASE_URL, cn } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { CaretDown, Check, CircleNotch } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { CommandList } from "cmdk";
// import { defaultLang } from "@/lib/i18n";

interface FormContactProps {
  baseUrl: string;
  slug: string;
  fields: any; // atau define structure yang lebih spesifik
  lang?: string;
}

export default function FormContact({ baseUrl, slug, fields, lang = "en" }: FormContactProps) {
    const BASE_URL = baseUrl;
    const defaultLang = "en";
    const source = `${baseUrl}/lp/${slug}`;
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isError, setIsError] = useState(false);
    const [openCountry, setOpenCountry] = useState(false);
    const formSchema = z.object({
        name: z.string().min(1, {
            message: fields.name.err_msg,
        }),
        email: z
            .string()
            .min(1, {
                message: fields.email.err_msg,
            })
            .email(),
        country: z
            .string({
                required_error: fields.country.err_msg,
            })
            .min(1, {
                message: fields.country.err_msg,
            }),
        company: z.string().min(1, {
            message: fields.company.err_msg,
        }),
        message: z.string().min(1, {
            message: fields.message.err_msg,
        }),
        agreement: z.boolean().refine((val) => val == true, {
            message: fields.agreement.err_msg,
        }),
        lp_type: z.string().default(fields.lp_type),
        lp_name: z.string().default(fields.lp_name),
        source: z.string().default(source),
        spam_detector: z.string().default(""),
    });
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            company: "",
            email: "",
            message: "",
            lp_type: fields.lp_type,
            lp_name: fields.lp_name,
            agreement: false,
        },
    });

    async function onSubmit(data: z.infer<typeof formSchema>) {
        // Create a new FormData object
        const formData = new FormData();
        for (const key in data) {
            const typedKey = key as keyof typeof data;
            const value = data[typedKey];
            
            // Check if the value is an array (for request field)
            if (Array.isArray(value)) {
                value.forEach((item: string | Blob, index: number) => {
                    if (item === undefined || item === null || item === "") {
                        if (key === "spam_detector") {
                            formData.append(key, "");
                        } else {
                            formData.append(`${key}[${index}]`, "-");
                        }
                    } else {
                        formData.append(`${key}[${index}]`, item);
                    }
                });
            } else {
                // Convert value to string
                if (value === undefined || value === null || value === "") {
                    if (key === "spam_detector") {
                        formData.append(key, "");
                    } else {
                        formData.append(key, "-");
                    }
                } else {
                    // Convert boolean and other types to string
                    formData.append(key, String(value));
                }
            }
        }
        setIsLoading(true);
        // for (const pair of formData.entries()) {
        //   console.log(`${pair[0]}: ${pair[1]}`);
        // }
        // setIsLoading(false);
        try {
            // Get CSRF token with null check
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                ?.getAttribute("content") || "";

            const res = await fetch(`${BASE_URL}/lp/inquiry`, {
                method: "POST",
                body: formData,
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                },
            });

            if (res.ok) {
                setIsLoading(false);
                setIsSent(true);
                window.location.href = `${BASE_URL}/lp/thank-you`;
            } else {
                throw new Error("Failed to submit form");
            }
        } catch (error) {
            setIsSent(false);
            setIsError(true);
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error("An unknown error occurred");
            }
        }
    }

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-8"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-jmso-dark-blue font-medium">
                                    {fields.name.label}{" "}
                                    <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={fields.name.placeholder}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-jmso-dark-blue font-medium">
                                    {fields.email.label}{" "}
                                    <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={fields.email.placeholder}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-jmso-dark-blue font-medium">
                                    {fields.country.label}{" "}
                                    <span className="text-red-500">*</span>
                                </FormLabel>
                                <Popover
                                    open={openCountry}
                                    onOpenChange={setOpenCountry}
                                >
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant="form-input"
                                                role="combobox"
                                                aria-label={
                                                    fields.country.placeholder
                                                }
                                                aria-expanded={openCountry}
                                                className={cn(
                                                    "w-full text-sm font-normal justify-between rounded-md placeholder:text-jmso-dark-blue/40 px-3 py-2",
                                                    !field.value &&
                                                        "text-jsmo-dark-blue hover:text-jsmo-dark-blue"
                                                )}
                                            >
                                                {field.value
                                                    ? field.value
                                                    : fields.country
                                                          .placeholder}
                                                <CaretDown className="ml-2 h-4 w-4" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className="p-0 rounded-md"
                                        align="start"
                                    >
                                        <Command>
                                            <CommandInput
                                                className="focus:!ring-0 focus-visible:!ring-0"
                                                placeholder={
                                                    fields.country.placeholder
                                                }
                                            />
                                            <CommandList>
                                                <CommandEmpty className="text-jmso-dark-blue/60">
                                                    {fields.country.no_country}
                                                </CommandEmpty>
                                                <CommandGroup>
                                                    <ScrollArea className="h-[240px] w-full">
                                                        {countryJSON.map(
                                                            (option) => (
                                                                <CommandItem
                                                                    value={
                                                                        option.country
                                                                    }
                                                                    key={
                                                                        option.country
                                                                    }
                                                                    onSelect={() => {
                                                                        form.setValue(
                                                                            "country",
                                                                            option.country
                                                                        );
                                                                        setOpenCountry(
                                                                            false
                                                                        );
                                                                    }}
                                                                >
                                                                    <Check
                                                                        className={cn(
                                                                            "mr-2 h-4 w-4",
                                                                            option.country ===
                                                                                field.value
                                                                                ? "opacity-100"
                                                                                : "opacity-0"
                                                                        )}
                                                                    />
                                                                    {
                                                                        option.country
                                                                    }
                                                                </CommandItem>
                                                            )
                                                        )}
                                                    </ScrollArea>
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-jmso-dark-blue font-medium">
                                    {fields.company.label}{" "}
                                    <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={fields.company.placeholder}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="spam_detector"
                        render={({ field }) => (
                            <FormItem className="invisible hidden">
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        className="invisible hidden"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="source"
                        render={({ field }) => (
                            <FormItem className="invisible hidden">
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        className="invisible hidden"
                                        value={source}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="lg:col-span-2">
                                <FormLabel className="text-jmso-dark-blue font-medium">
                                    {fields.message.label}{" "}
                                    <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder={fields.message.placeholder}
                                        className="resize-none"
                                        rows={7}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="bg-light-blue p-3 w-full max-h-64 bg-jmso-light-blue rounded-md overflow-y-scroll lg:col-span-2">
                        <h3 className="text-xl text-jmso-dark-blue">
                            {fields.privacy_policy.title}
                        </h3>
                        <p
                            className="prose-sm text-jmso-dark-blue"
                            dangerouslySetInnerHTML={{
                                __html: fields.privacy_policy.content,
                            }}
                        ></p>
                    </div>
                    <FormField
                        control={form.control}
                        name="agreement"
                        render={({ field }) => (
                            <FormItem className="space-y-0 flex items-center gap-2 flex-wrap lg:col-span-2">
                                <FormControl>
                                    <Checkbox
                                        aria-label="Agreement"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <FormLabel
                                    className="text-jmso-dark-blue"
                                    dangerouslySetInnerHTML={{
                                        __html: fields.agreement.label,
                                    }}
                                ></FormLabel>
                                <FormMessage className="block" />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        size="lg"
                        className="lg:col-span-2 bg-gradient-to-r from-jmso-dark-blue to-jmso-tosca to-[150%] hover:opacity-75 duration-300 ease-out"
                        disabled={isLoading}
                    >
                        {!isLoading ? (
                            fields.submit.label
                        ) : (
                            <span className="inline-flex items-center gap-2">
                                <CircleNotch
                                    size={24}
                                    className="text-white animate-spin"
                                />
                                {fields.submit.sending}
                            </span>
                        )}
                    </Button>

                    {isSent && (
                        <p
                            className="py-4 text-xs text-green-500"
                            dangerouslySetInnerHTML={{
                                __html: fields.submit.inquiry_success,
                            }}
                        ></p>
                    )}
                    {isError && (
                        <p
                            className="py-4 text-xs text-red-500"
                            dangerouslySetInnerHTML={{
                                __html: fields.submit.inquiry_error,
                            }}
                        ></p>
                    )}
                    <p className="lg:col-span-2 text-sm text-center mt-6 lg:mt-8">
                        {fields.notice}
                    </p>
                </form>
            </Form>
        </>
    );
}
