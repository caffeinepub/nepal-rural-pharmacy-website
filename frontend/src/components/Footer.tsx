import { Link } from '@tanstack/react-router';
import { Cross, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

const PHONE_NUMBER = '9824284662';
const WHATSAPP_NUMBER = '9779824284662';
const WHATSAPP_MESSAGE = encodeURIComponent('Hello! I would like to enquire about your pharmacy services.');

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'nepal-pharmacy');

  return (
    <footer className="bg-pharmacy-green-800 text-white pb-20 md:pb-8">
      <div className="container mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Cross className="w-5 h-5 text-pharmacy-green-600" />
              </div>
              <div>
                <span className="block font-heading font-bold text-lg leading-none">Arogya Pharmacy</span>
                <span className="block text-pharmacy-green-200 text-xs">Your Village Health Partner</span>
              </div>
            </div>
            <p className="text-pharmacy-green-200 text-sm font-body leading-relaxed">
              Trusted pharmacy in Kalaiya 10, Bara, Nepal — serving our community with affordable medicines and genuine health care since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4 text-pharmacy-green-100">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Products', path: '/products' },
                { label: 'Health Tips', path: '/health-tips' },
                { label: 'Contact & Order', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-pharmacy-green-200 hover:text-white text-sm font-body transition-colors tap-target inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4 text-pharmacy-green-100">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-pharmacy-saffron-400 mt-0.5 flex-shrink-0" />
                <span className="text-pharmacy-green-200 text-sm font-body">
                  Kalaiya 10, Bara, Nepal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-pharmacy-saffron-400 flex-shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="text-pharmacy-green-200 hover:text-white text-sm font-body transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-pharmacy-saffron-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pharmacy-green-200 hover:text-white text-sm font-body transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-pharmacy-saffron-400 flex-shrink-0" />
                <span className="text-pharmacy-green-200 text-sm font-body">
                  Open: 7 AM – 9 PM Daily
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-pharmacy-green-300 text-xs font-body text-center md:text-left">
            © {year} Arogya Pharmacy Nepal. Affordable medicines for rural families.
          </p>
          <p className="text-pharmacy-green-300 text-xs font-body text-center">
            Built with{' '}
            <span className="text-pharmacy-saffron-400">♥</span>{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pharmacy-green-200 hover:text-white underline transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
