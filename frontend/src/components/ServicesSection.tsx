import { Pill, Truck, HeartPulse, Clock, ShieldCheck, Users } from 'lucide-react';

const services = [
  {
    icon: Pill,
    title: 'Medicine Sales',
    description:
      'We stock a wide range of medicines — from common painkillers to prescription drugs. Our licensed pharmacist ensures you get the right medicine at an affordable price.',
    color: 'text-pharmacy-green-600',
    bg: 'bg-pharmacy-green-50',
  },
  {
    icon: Truck,
    title: 'Home Delivery',
    description:
      'Can\'t come to the pharmacy? No problem! We deliver medicines right to your doorstep in your village. Just call or WhatsApp us with your order.',
    color: 'text-pharmacy-saffron-500',
    bg: 'bg-pharmacy-saffron-50',
  },
  {
    icon: HeartPulse,
    title: 'Health Advice',
    description:
      'Our friendly pharmacist is always ready to answer your health questions. Get free advice on medicines, dosages, and when to see a doctor.',
    color: 'text-pharmacy-green-600',
    bg: 'bg-pharmacy-green-50',
  },
  {
    icon: Clock,
    title: 'Quick Service',
    description:
      'We understand your time is valuable. Get your medicines quickly without long waits. We are open early morning to late evening for your convenience.',
    color: 'text-pharmacy-saffron-500',
    bg: 'bg-pharmacy-saffron-50',
  },
  {
    icon: ShieldCheck,
    title: 'Genuine Medicines',
    description:
      'All our medicines are sourced from certified suppliers. We guarantee 100% genuine, quality-checked medicines for your family\'s safety.',
    color: 'text-pharmacy-green-600',
    bg: 'bg-pharmacy-green-50',
  },
  {
    icon: Users,
    title: 'Community Care',
    description:
      'We are part of your community. We offer special support for elderly patients, pregnant mothers, and families who need extra care and attention.',
    color: 'text-pharmacy-saffron-500',
    bg: 'bg-pharmacy-saffron-50',
  },
];

interface ServicesSectionProps {
  compact?: boolean;
}

export default function ServicesSection({ compact = false }: ServicesSectionProps) {
  const displayServices = compact ? services.slice(0, 3) : services;

  return (
    <section className={compact ? '' : 'py-16 section-gradient'}>
      {!compact && (
        <div className="container mx-auto px-4 mb-10 text-center">
          <span className="inline-block bg-pharmacy-green-100 text-pharmacy-green-700 text-sm font-heading font-semibold px-4 py-1 rounded-full mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-pharmacy-green-800 mb-3">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
            Everything you need for your family's health — all in one place, right here in your village.
          </p>
        </div>
      )}
      <div className={`${compact ? '' : 'container mx-auto px-4'} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5`}>
        {displayServices.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-border"
            >
              <div className={`w-12 h-12 ${service.bg} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${service.color}`} />
              </div>
              <h3 className="font-heading font-bold text-lg text-pharmacy-green-800 mb-2">{service.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
