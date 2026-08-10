import Link from "next/link";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export interface CallToActionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CallToAction({
  title,
  description,
  buttonText = "Talk to Our Team",
  buttonHref = "/contact",
  className,
  ...props
}: CallToActionProps) {
  const isLongTitle = title.length > 30;

  return (
    <section 
      className={cn("min-h-[40vh] md:min-h-[50vh] bg-surface-container-lowest flex flex-col justify-center items-center text-center px-4 md:px-margin-desktop py-12 md:py-16 relative overflow-hidden bg-grid-pattern", className)}
      {...props}
    >
      <div className="bg-tangerine border-4 border-ink p-6 sm:p-8 md:p-10 lg:p-12 brutalist-shadow relative z-10 w-full max-w-5xl transform rotate-0 md:rotate-[-1deg]">
        <h2 
          className={cn(
            "font-black uppercase text-ink mb-6 md:mb-8 drop-shadow-[2px_2px_0_rgba(255,255,255,1)] md:drop-shadow-[4px_4px_0_rgba(255,255,255,1)] break-words hyphens-auto",
            isLongTitle 
              ? "text-[24px] leading-[1.1] sm:text-[36px] md:text-[46px] lg:text-[54px]" 
              : "text-[32px] leading-[0.95] sm:text-[48px] md:text-[64px] lg:text-[76px]"
          )}
        >
          {title}
        </h2>
        <p className="text-[15px] leading-[1.4] sm:text-[18px] md:text-[20px] font-bold text-ink mb-6 md:mb-10 bg-surface-container-lowest border-4 border-ink p-4 md:p-6 brutalist-shadow mx-auto max-w-3xl transform rotate-0 md:rotate-1">
          {description}
        </p>
        <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto text-base sm:text-lg">
          <Link href={buttonHref}>
            {buttonText}
            <span className="material-symbols-outlined ml-2">arrow_forward</span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
