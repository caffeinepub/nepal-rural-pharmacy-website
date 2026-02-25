import { Link } from '@tanstack/react-router';
import { Phone, MessageCircle } from 'lucide-react';
import ServicesSection from '@/components/ServicesSection';

const PHONE_NUMBER = '9824284662';
const WHATSAPP_NUMBER = '9779824284662';
const WHATSAPP_MESSAGE = encodeURIComponent('Hello! I would like to know more about your services.');

export default function Services() {
  return (
    <main className="pb-20 md:pb-0">
      {/* Hero */}
      <section className="bg-pharmacy-green-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <span className="inline-block bg-white/20 text-white text-xs font-heading font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Our Services
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Everything Your Family Needs for Good Health
          </h1>
          <p className="text-pharmacy-green-100 text-lg font-body max-w-2xl leading-relaxed">
            From medicine sales to home delivery and free health advice — we are your complete health partner in Kalaiya 10, Bara, Nepal.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <div className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <ServicesSection />
        </div>
      </div>

      {/* Additional Info */}
      <section className="py-12 bg-pharmacy-green-50">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold text-pharmacy-green-800 mb-3">
              Need a Service Not Listed Here?
            </h2>
            <p className="text-muted-foreground font-body mb-6">
              Just call or WhatsApp us! We are always happy to help and will do our best to meet your health needs in Kalaiya 10.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 bg-pharmacy-green-600 text-white font-heading font-semibold px-6 py-3 rounded-xl tap-target hover:bg-pharmacy-green-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-pharmacy-saffron-500 text-white font-heading font-semibold px-6 py-3 rounded-xl tap-target hover:bg-pharmacy-saffron-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
