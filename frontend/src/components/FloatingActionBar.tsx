import { Phone, MessageCircle } from 'lucide-react';

const PHONE_NUMBER = '9824284662';
const WHATSAPP_NUMBER = '9779824284662';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello! I would like to order medicine or ask about your pharmacy services.'
);

export default function FloatingActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:bottom-6 md:right-6 md:left-auto md:flex md:flex-col md:gap-3">
      {/* Mobile: full-width bar */}
      <div className="flex md:hidden shadow-lg">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex-1 flex items-center justify-center gap-2 bg-pharmacy-green-600 text-white font-heading font-bold text-base py-4 tap-target transition-colors hover:bg-pharmacy-green-700 active:bg-pharmacy-green-800"
          aria-label="Call us now"
        >
          <Phone className="w-5 h-5" />
          <span>Call Now</span>
        </a>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-pharmacy-saffron-500 text-white font-heading font-bold text-base py-4 tap-target transition-colors hover:bg-pharmacy-saffron-600 active:bg-pharmacy-saffron-600"
          aria-label="WhatsApp us"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Desktop: floating buttons */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center justify-center w-14 h-14 bg-pharmacy-saffron-500 hover:bg-pharmacy-saffron-600 text-white rounded-full shadow-cta transition-all hover:scale-110 tap-target"
        aria-label="WhatsApp us"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="hidden md:flex items-center justify-center w-14 h-14 bg-pharmacy-green-600 hover:bg-pharmacy-green-700 text-white rounded-full shadow-card-hover transition-all hover:scale-110 tap-target"
        aria-label="Call us now"
        title="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
