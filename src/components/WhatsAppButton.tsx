import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "256730740544";
  const message = encodeURIComponent(
    "Hello George Charity Organisation, I'd like to learn more about supporting children in Uganda."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white pl-4 pr-5 py-3.5 rounded-full shadow-warm transition-smooth hover:scale-105"
    >
      <span className="relative flex h-7 w-7 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
        <MessageCircle className="h-5 w-5 relative" />
      </span>
      <span className="hidden sm:inline font-semibold text-sm whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
