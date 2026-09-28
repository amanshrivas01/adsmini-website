import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

const statCardVariants = cva(
  "flex flex-col items-center justify-between text-center border-4 border-ink brutalist-shadow transition-all duration-200 w-full h-full min-h-[220px] sm:min-h-[240px] lg:min-h-[250px] p-4 sm:p-5 lg:p-4 xl:p-6 select-none",
  {
    variants: {
      variant: {
        tangerine: "bg-tangerine text-ink",
        white: "bg-surface-container-lowest text-ink",
      },
    },
    defaultVariants: {
      variant: "white",
    },
  }
);

export interface StatCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statCardVariants> {
  value: string;
  label: string;
  rotationClassName?: string;
}

export function StatCard({
  value,
  label,
  variant = "white",
  rotationClassName,
  className,
  ...props
}: StatCardProps) {
  const isTangerine = variant === "tangerine";

  // Detect multi-line or long non-numeric content
  const isMultiLine =
    value.includes("\n") ||
    (value.includes("-") && value.length > 8) ||
    (value.includes(" ") && value.length > 8);
  const isLong = value.length >= 6;

  // Split lines cleanly so phrases like MULTI-COUNTRY or MULTI\nNATIONAL do not awkwardly wrap mid-word
  const lines = value.includes("\n")
    ? value.split("\n")
    : value.includes("-") && value.length > 8
      ? value.split("-").map((part, i, arr) => (i < arr.length - 1 ? `${part}-` : part))
      : value.includes(" ") && value.length > 8
        ? value.split(" ")
        : [value];

  return (
    <div
      className={cn(
        "@container flex flex-col justify-between items-center text-center",
        statCardVariants({ variant }),
        rotationClassName,
        className
      )}
      {...props}
    >
      {/* Value Display Box */}
      <div className="flex flex-1 items-center justify-center w-full py-2 overflow-hidden">
        <span
          className={cn(
            "font-black tracking-tight max-w-full block text-center transition-all",
            isMultiLine
              ? "text-[clamp(18px,8.5cqw,28px)] sm:text-[clamp(20px,2.2vw,30px)] leading-[1.05] uppercase"
              : isLong
                ? "text-[clamp(26px,12cqw,42px)] sm:text-[clamp(28px,2.8vw,46px)] leading-none whitespace-nowrap"
                : "text-[clamp(34px,16cqw,60px)] sm:text-[clamp(38px,3.8vw,64px)] leading-none whitespace-nowrap",
            isTangerine
              ? "text-surface-container-lowest drop-shadow-[2px_2px_0_rgba(0,0,0,1)] sm:drop-shadow-[3px_3px_0_rgba(0,0,0,1)]"
              : "text-tangerine drop-shadow-[2px_2px_0_rgba(0,0,0,1)] sm:drop-shadow-[3px_3px_0_rgba(0,0,0,1)]"
          )}
        >
          {lines.map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              {idx < lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </span>
      </div>

      {/* Label Box with consistent min-height for uniform alignment */}
      <div className="w-full border-t-4 border-ink pt-3 flex items-center justify-center min-h-[48px] sm:min-h-[52px]">
        <span className="text-[12px] sm:text-[13px] xl:text-[14px] font-black uppercase tracking-wider leading-snug text-center">
          {label}
        </span>
      </div>
    </div>
  );
}
