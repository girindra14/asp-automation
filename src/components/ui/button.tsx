import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-semibold inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-blue-950 dark:focus-visible:ring-blue-300",
  {
    variants: {
      variant: {
        default: "bg-jmso-tosca text-dark-blue hover:bg-jmso-tosca/90 transition-all duration-300 ease-out",
        secondary:
          "bg-gradient-to-tr from-white/75 to-white text-jmso-dark-blue hover:from-white/80 hover:to-white/80 transition-all duration-300 ease-out",
        "form-input":
          "bg-jmso-light-blue border border-jmso-light-blue focus:border-jmso-dark-blue/10 text-jmso-dark-blue hover:bg-jmso-light-blue-50 transition-all duration-300 ease-out",
      },
      size: {
        default: "h-10 px-6 py-3 text-base",
        sm: "h-8 px-4 text-sm",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
