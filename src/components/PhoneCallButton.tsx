import { Phone } from "lucide-react";

const PhoneCallButton = () => {
  const phone = "+256730740544";

  return (
    <a
      href={`tel:${phone}`}
      aria-label="Call us directly"
      className="fixed bottom-6 left-6 z-50 group flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground pl-4 pr-5 py-3.5 rounded-full shadow-warm transition-smooth hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:scale-105"
    >
      <span className="relative flex h-7 w-7 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
        <Phone className="h-5 w-5 relative" />
      </span>
      <span className="hidden sm:inline font-semibold text-sm whitespace-nowrap">
        Call Us
      </span>
    </a>
  );
};

export default PhoneCallButton;
