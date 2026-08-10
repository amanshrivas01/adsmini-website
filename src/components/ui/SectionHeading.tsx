import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/lib/utils"

const sectionHeadingVariants = cva(
  "text-[40px] sm:text-[70px] md:text-[120px] leading-[0.9] font-black text-ink uppercase px-4 md:px-8 py-2 md:py-4 border-4 border-ink brutalist-shadow inline-block break-words hyphens-auto mb-4",
  {
    variants: {
      variant: {
        tangerine: "bg-tangerine",
        light: "bg-surface-container-lowest",
      }
    },
    defaultVariants: {
      variant: "tangerine",
    },
  }
)

export interface SectionHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof sectionHeadingVariants> {}

function SectionHeading({ className, variant, ...props }: SectionHeadingProps) {
  return (
    <h2
      className={cn(sectionHeadingVariants({ variant, className }))}
      {...props}
    />
  )
}

export { SectionHeading, sectionHeadingVariants }
