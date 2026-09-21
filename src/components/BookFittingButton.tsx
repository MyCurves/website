import { buildFittingBookingWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface BookFittingButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  children?: React.ReactNode;
}

const variantStyles: Record<NonNullable<BookFittingButtonProps["variant"]>, string> = {
  primary:
    "bg-[#E6007E] text-white hover:bg-[#c50069] shadow-md",
  secondary:
    "bg-white/95 text-[#E6007E] hover:bg-white border-2 border-white shadow-md backdrop-blur-sm",
  outline:
    "border-2 border-[#E6007E] text-[#E6007E] hover:bg-pink-50",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1ebe57] shadow-md",
};

export function BookFittingButton({
  className,
  variant = "primary",
  children = "Book a free fitting",
}: BookFittingButtonProps) {
  return (
    <a
      href={buildFittingBookingWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-heading font-semibold transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </a>
  );
}
