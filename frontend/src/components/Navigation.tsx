import { useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { Menu, X, Cross, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Health Tips', path: '/health-tips' },
  { label: 'Contact', path: '/contact' },
];

const PHONE_NUMBER = '9824284662';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-pharmacy-green-700 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 tap-target" onClick={() => setMobileOpen(false)}>
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
              <Cross className="w-5 h-5 text-pharmacy-green-600" />
            </div>
            <div className="leading-tight">
              <span className="block text-white font-heading font-bold text-sm leading-none">Arogya</span>
              <span className="block text-pharmacy-green-100 text-xs font-body">Pharmacy Nepal</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-body font-semibold transition-colors tap-target flex items-center ${
                  isActive(link.path)
                    ? 'bg-white/20 text-white'
                    : 'text-pharmacy-green-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="hidden md:flex items-center gap-2 bg-pharmacy-saffron-500 hover:bg-pharmacy-saffron-600 text-white font-heading font-semibold text-sm px-4 py-2 rounded-full transition-colors tap-target shadow-cta"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden tap-target flex items-center justify-center text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-pharmacy-green-800 border-t border-white/10 animate-fade-in">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-body font-semibold transition-colors tap-target ${
                  isActive(link.path)
                    ? 'bg-white/20 text-white'
                    : 'text-pharmacy-green-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="mt-2 flex items-center justify-center gap-2 bg-pharmacy-saffron-500 text-white font-heading font-semibold text-base px-4 py-3 rounded-lg tap-target"
              onClick={() => setMobileOpen(false)}
            >
              <Phone className="w-5 h-5" />
              Call Now: {PHONE_NUMBER}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
