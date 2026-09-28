import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-[15px] font-black uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink disabled:pointer-events-none disabled:opacity-50 active:translate-x-0.5 active:translate-y-0.5 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-tangerine text-ink border-2 md:border-4 border-ink shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-[2px_2px_0_0_#000]",
        destructive:
          "bg-red-500 text-white border-2 md:border-4 border-ink shadow-[4px_4px_0_0_#000] hover:bg-red-600 hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-[2px_2px_0_0_#000]",
        outline:
          "bg-surface-container-lowest text-ink border-2 md:border-4 border-ink shadow-[4px_4px_0_0_#000] hover:bg-tangerine hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-[2px_2px_0_0_#000]",
        secondary:
          "bg-ink text-surface-container-lowest border-2 md:border-4 border-ink shadow-[4px_4px_0_0_#000] hover:bg-surface-container-lowest hover:text-ink hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-[2px_2px_0_0_#000]",
        ghost:
          "text-ink font-bold hover:bg-tangerine/20 hover:text-ink active:bg-tangerine/40",
        link: "text-ink underline-offset-4 hover:underline font-bold",
      },
      size: {
        default: "h-12 px-6 py-2 text-sm sm:text-base",
        sm: "h-9 px-4 text-xs sm:text-sm font-bold",
        lg: "h-14 px-8 text-base sm:text-lg font-black",
        icon: "h-10 w-10 border-2 border-ink shadow-[2px_2px_0_0_#000] hover:shadow-[3px_3px_0_0_#000]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
