import { ShieldCheck, Award, Users, Heart, MapPin, Clock } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Certified',
    description:
      'Our pharmacy is fully licensed by the Nepal Pharmacy Council. All our pharmacists are trained and certified professionals.',
  },
  {
    icon: Award,
    title: '15+ Years of Service',
    description:
      'We have been serving our community in Kalaiya 10, Bara since 2010. Generations of families trust us for their medicine needs.',
  },
  {
    icon: Users,
    title: 'Community First',
    description:
      'We are your neighbors in Kalaiya 10. We understand the health challenges of rural Nepal and work hard to make medicines affordable for everyone.',
  },
  {
    icon: Heart,
    title: 'Genuine Medicines Only',
    description:
      'We source all medicines from certified suppliers. You can trust that every medicine you buy from us is 100% genuine and safe.',
  },
  {
    icon: MapPin,
    title: 'Locally Rooted',
    description:
      'We know Kalaiya 10 and the health needs of our people. From monsoon illnesses to seasonal health tips, we are always prepared.',
  },
  {
    icon: Clock,
    title: 'Always Available',
    description:
      'Open 7 days a week from early morning to late evening. For emergencies, you can always reach us by phone or WhatsApp.',
  },
];

const teamMembers = [
  {
    name: 'Ahsan Ansari',
    role: 'Head Pharmacist',
    experience: '15 years experience',
    image: '/assets/generated/staff-pharmacist.dim_600x600.png',
  },
];

export default function About() {
  return (
    <main className="pb-20 md:pb-0">
      {/* Hero */}
      <section className="bg-pharmacy-green-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <span className="inline-block bg-white/20 text-white text-xs font-heading font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            About Us
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Your Trusted Local Pharmacy in Kalaiya 10, Bara, Nepal
          </h1>
          <p className="text-pharmacy-green-100 text-lg font-body max-w-2xl leading-relaxed">
            We are a family-owned pharmacy serving the community of Kalaiya 10 and surrounding areas with love, care, and affordable medicines since 2010.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-pharmacy-green-100 text-pharmacy-green-700 text-sm font-heading font-semibold px-4 py-1 rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-pharmacy-green-800 mb-4">
                We Started with a Simple Goal: Help Our Community Stay Healthy
              </h2>
              <div className="space-y-4 text-foreground font-body leading-relaxed">
                <p>
                  Arogya Pharmacy was started in 2010 by a local pharmacist who saw that people in Kalaiya 10 had to travel far to get medicines. He wanted to change that — to bring quality healthcare right to our community in Bara, Nepal.
                </p>
                <p>
                  Today, we are proud to serve thousands of families across Kalaiya 10 and nearby areas. We stock over 2,000 medicines, offer free health advice, and deliver medicines to your home.
                </p>
                <p>
                  We believe that good health should not be expensive or hard to access. That is why we keep our prices fair and our service friendly. We treat every customer like a member of our own family.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-6 bg-pharmacy-green-600 text-white font-heading font-semibold px-6 py-3 rounded-xl tap-target hover:bg-pharmacy-green-700 transition-colors"
              >
                Contact Us Today
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="/assets/generated/pharmacy-interior.dim_800x500.png"
                alt="Inside Arogya Pharmacy - well-stocked medicine shelves"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 bg-pharmacy-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-pharmacy-green-100 text-pharmacy-green-700 text-sm font-heading font-semibold px-4 py-1 rounded-full mb-3">
              Meet Our Team
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-pharmacy-green-800">
              Friendly, Qualified Professionals
            </h2>
          </div>
          <div className="flex justify-center">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-card rounded-2xl overflow-hidden shadow-card border border-border max-w-xs w-full text-center">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-56 object-cover object-top"
                />
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-pharmacy-green-800">{member.name}</h3>
                  <p className="text-pharmacy-saffron-500 font-heading font-semibold text-sm">{member.role}</p>
                  <p className="text-muted-foreground text-sm font-body mt-1">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-pharmacy-saffron-100 text-pharmacy-saffron-600 text-sm font-heading font-semibold px-4 py-1 rounded-full mb-3">
              Why Choose Us
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-pharmacy-green-800">
              Why Our Community Trusts Us
            </h2>
            <p className="text-muted-foreground font-body mt-2 max-w-lg mx-auto">
              We have earned the trust of thousands of families in Kalaiya 10 through honest service and genuine care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="bg-card rounded-2xl p-6 shadow-card border border-border">
                  <div className="w-12 h-12 bg-pharmacy-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-pharmacy-green-600" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-pharmacy-green-800 mb-2">{point.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
