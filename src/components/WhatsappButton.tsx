import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/whatsapp";

interface WhatsappButtonProps {
  message?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "whatsapp" | "secondary";
  className?: string;
}

export function WhatsappButton({
  message,
  label = "Falar no WhatsApp",
  size = "md",
  variant = "whatsapp",
  className,
}: WhatsappButtonProps) {
  return (
    <Button
      href={whatsappUrl(message)}
      external
      variant={variant}
      size={size}
      className={className}
      ariaLabel={label}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      {label}
    </Button>
  );
}
