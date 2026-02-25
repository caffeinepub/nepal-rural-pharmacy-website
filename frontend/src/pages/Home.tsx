import { Link } from '@tanstack/react-router';
import { Phone, MessageCircle, Lightbulb, ShoppingBag, Truck, HeartPulse, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServicesSection from '@/components/ServicesSection';

const PHONE_NUMBER = '9824284662';
const WHATSAPP_NUMBER = '9779824284662';
const WHATSAPP_MESSAGE = encodeURIComponent('Hello! I would like to order medicine from your pharmacy.');

const stats = [
  { value: '15+', label: 'Years Serving' },
  { value: '5000+', label: 'Happy Families' },
  { value: '2000+', label: 'Medicines Available' },
  { value: '24hr', label: 'Emergency Support' },
];

const testimonials = [
  {
    name: 'Sita Devi',
    village: 'Nearby Village',
    text: 'Arogya Pharmacy has been a blessing for our family. They deliver medicines to our home and the prices are very fair.',
    stars: 5,
  },
  {
    name: 'Ram Bahadur',
    village: 'Local Farmer',
    text: 'The pharmacist always explains how to take medicines properly. Very helpful and trustworthy people.',
    stars: 5,
  },
  {
    name: 'Kamala Thapa',
    village: 'Mother of 3',
    text: 'I can WhatsApp my prescription and they deliver the same day. So convenient for busy mothers like me!',
    stars: 5,
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-pharmacy-green-700 text-white">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/pharmacy-hero.dim_1200x600.png"
            alt="Arogya Pharmacy - Trusted Pharmacy in Kalaiya 10, Bara, Nepal"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative container mx-auto px-4 py-14 md:py-20">
          <div className="max-w-2xl">
            <span className="inline-block bg-pharmacy-saffron-500 text-white text-xs font-heading font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              🏥 Arogya Pharmacy, Kalaiya 10
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-4">
              <span className="text-pharmacy-saffron-400">Arogya Pharmacy</span> —{' '}
              Your Trusted Health Partner in Kalaiya 10
            </h1>
            <p className="text-pharmacy-green-100 text-lg md:text-xl font-body mb-8 leading-relaxed">
              Affordable medicines and home delivery for families in Kalaiya 10, Bara, Nepal.
              Your health is our priority — we are here for you every day.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-2 bg-white text-pharmacy-green-700 font-heading font-bold text-base px-6 py-4 rounded-xl tap-target shadow-lg hover:bg-pharmacy-green-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call / WhatsApp
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-pharmacy-saffron-500 text-white font-heading font-bold text-base px-6 py-4 rounded-xl tap-target shadow-cta hover:bg-pharmacy-saffron-600 transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                Order Medicine
              </Link>
              <Link
                to="/health-tips"
                className="flex items-center justify-center gap-2 bg-white/15 text-white border border-white/30 font-heading font-semibold text-base px-6 py-4 rounded-xl tap-target hover:bg-white/25 transition-colors"
              >
                <Lightbulb className="w-5 h-5" />
                Health Tips
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-pharmacy-green-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-heading font-bold text-pharmacy-saffron-400">
                  {stat.value}
                </div>
                <div className="text-pharmacy-green-100 text-sm font-body">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-pharmacy-green-100 text-pharmacy-green-700 text-sm font-heading font-semibold px-4 py-1 rounded-full mb-3">
              Our Key Services
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-pharmacy-green-800 mb-3">
              Medicine delivery in Kalaiya 10, Bara, Nepal
            </h2>
            <p className="text-muted-foreground font-body max-w-lg mx-auto">
              We make healthcare easy and accessible for every family in our community.
            </p>
          </div>
          <ServicesSection compact />
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-pharmacy-green-600 font-heading font-semibold hover:text-pharmacy-green-700 transition-colors"
            >
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-pharmacy-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border text-center">
              <div className="w-14 h-14 bg-pharmacy-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-7 h-7 text-pharmacy-green-600" />
              </div>
              <h3 className="font-heading font-bold text-lg text-pharmacy-green-800 mb-2">Free Home Delivery</h3>
              <p className="text-muted-foreground text-sm font-body mb-4">
                Order medicines from home. We deliver to your doorstep in Kalaiya 10 and nearby areas.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-pharmacy-green-600 text-white font-heading font-semibold text-sm px-5 py-2.5 rounded-xl tap-target hover:bg-pharmacy-green-700 transition-colors"
              >
                Order Now
              </Link>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card border border-border text-center">
              <div className="w-14 h-14 bg-pharmacy-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-7 h-7 text-pharmacy-saffron-500" />
              </div>
              <h3 className="font-heading font-bold text-lg text-pharmacy-green-800 mb-2">WhatsApp Orders</h3>
              <p className="text-muted-foreground text-sm font-body mb-4">
                Send your prescription or medicine list on WhatsApp. Quick and easy ordering from anywhere.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-pharmacy-saffron-500 text-white font-heading font-semibold text-sm px-5 py-2.5 rounded-xl tap-target hover:bg-pharmacy-saffron-600 transition-colors"
              >
                WhatsApp Now
              </a>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card border border-border text-center">
              <div className="w-14 h-14 bg-pharmacy-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartPulse className="w-7 h-7 text-pharmacy-green-600" />
              </div>
              <h3 className="font-heading font-bold text-lg text-pharmacy-green-800 mb-2">Free Health Advice</h3>
              <p className="text-muted-foreground text-sm font-body mb-4">
                Ask our pharmacist any health question. We give honest, helpful advice at no charge.
              </p>
              <Link
                to="/health-tips"
                className="inline-flex items-center gap-2 bg-pharmacy-green-600 text-white font-heading font-semibold text-sm px-5 py-2.5 rounded-xl tap-target hover:bg-pharmacy-green-700 transition-colors"
              >
                Read Health Tips
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-pharmacy-saffron-100 text-pharmacy-saffron-600 text-sm font-heading font-semibold px-4 py-1 rounded-full mb-3">
              What Our Customers Say
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-pharmacy-green-800">
              Trusted by Families in Kalaiya 10
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-2xl p-6 shadow-card border border-border">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-pharmacy-saffron-400 text-pharmacy-saffron-400" />
                  ))}
                </div>
                <p className="text-foreground font-body text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-heading font-bold text-sm text-pharmacy-green-800">{t.name}</p>
                  <p className="text-muted-foreground text-xs font-body">{t.village}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 bg-pharmacy-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Need Medicine? Call Arogya Pharmacy Now
          </h2>
          <p className="text-pharmacy-green-100 font-body text-lg mb-8 max-w-xl mx-auto">
            We are open 7 days a week in Kalaiya 10, Bara. Call or WhatsApp us for fast delivery and genuine medicines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-pharmacy-green-700 font-heading font-bold text-base px-8 py-4 rounded-xl tap-target shadow-lg hover:bg-pharmacy-green-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {PHONE_NUMBER}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-pharmacy-saffron-500 text-white font-heading font-bold text-base px-8 py-4 rounded-xl tap-target shadow-cta hover:bg-pharmacy-saffron-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Order
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
