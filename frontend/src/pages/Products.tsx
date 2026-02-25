import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { MessageCircle, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const WHATSAPP_NUMBER = '9779824284662';

const categories = [
  {
    id: 'painkillers',
    title: 'Painkillers & Fever',
    image: '/assets/generated/category-painkillers.dim_400x300.png',
    description:
      'Paracetamol, Ibuprofen, Aspirin and more. Safe and effective relief for headaches, body pain, and fever for all ages.',
    examples: ['Paracetamol', 'Ibuprofen', 'Aspirin', 'Diclofenac'],
    badge: 'Most Popular',
  },
  {
    id: 'vitamins',
    title: 'Vitamins & Supplements',
    image: '/assets/generated/category-vitamins.dim_400x300.png',
    description:
      'Vitamin C, D, B-complex, Iron, Calcium and more. Keep your family strong and healthy with daily supplements.',
    examples: ['Vitamin C', 'Vitamin D', 'Iron Tablets', 'Calcium'],
    badge: null,
  },
  {
    id: 'children',
    title: "Children's Medicines",
    image: '/assets/generated/category-children.dim_400x300.png',
    description:
      'Safe medicines specially made for babies and children. Syrups, drops, and chewable tablets for common childhood illnesses.',
    examples: ['Paediatric Syrup', 'ORS Sachets', 'Zinc Drops', 'Cough Syrup'],
    badge: 'For Kids',
  },
  {
    id: 'cold-flu',
    title: 'Cold & Flu',
    image: '/assets/generated/category-cold-flu.dim_400x300.png',
    description:
      'Medicines for cough, cold, runny nose, and flu. Get relief quickly with our range of trusted cold and flu remedies.',
    examples: ['Cough Syrup', 'Antihistamines', 'Decongestants', 'Throat Lozenges'],
    badge: 'Seasonal',
  },
  {
    id: 'first-aid',
    title: 'First Aid & Wound Care',
    image: '/assets/generated/category-first-aid.dim_400x300.png',
    description:
      'Bandages, antiseptics, cotton, and wound care supplies. Be prepared for minor injuries and emergencies at home.',
    examples: ['Bandages', 'Antiseptic', 'Cotton Wool', 'Plasters'],
    badge: null,
  },
];

export default function Products() {
  const [search, setSearch] = useState('');

  const filtered = categories.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase()) ||
      c.examples.some((e) => e.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <main className="pb-20 md:pb-0">
      {/* Hero */}
      <section className="bg-pharmacy-green-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <span className="inline-block bg-white/20 text-white text-xs font-heading font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Products & Categories
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Medicines for Every Need
          </h1>
          <p className="text-pharmacy-green-100 text-lg font-body max-w-2xl leading-relaxed">
            We stock over 2,000 medicines across all categories. Find what you need or ask us — we are always happy to help.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-6 bg-pharmacy-green-50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search medicines or categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-12 text-base font-body rounded-xl border-border"
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground font-body text-lg">No categories found. Try a different search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow border border-border flex flex-col"
                >
                  <div className="relative">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-36 md:h-48 object-cover"
                    />
                    {cat.badge && (
                      <span className="absolute top-2 left-2 bg-pharmacy-saffron-500 text-white text-xs font-heading font-bold px-2 py-0.5 rounded-full">
                        {cat.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-heading font-bold text-sm md:text-base text-pharmacy-green-800 mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-xs md:text-sm leading-relaxed mb-3 flex-1 hidden md:block">
                      {cat.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {cat.examples.slice(0, 3).map((ex) => (
                        <span
                          key={ex}
                          className="bg-pharmacy-green-50 text-pharmacy-green-700 text-xs font-body px-2 py-0.5 rounded-full border border-pharmacy-green-200"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello! I would like to enquire about ${cat.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 bg-pharmacy-saffron-500 text-white font-heading font-semibold text-xs md:text-sm px-4 py-2.5 rounded-xl tap-target hover:bg-pharmacy-saffron-600 transition-colors w-full"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Enquire
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Note */}
      <section className="py-8 bg-pharmacy-green-50">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl p-6 border border-border shadow-card max-w-2xl mx-auto text-center">
            <p className="text-foreground font-body text-sm leading-relaxed">
              <strong className="text-pharmacy-green-700">Don't see what you need?</strong> We can order any medicine for you.
              Just call or WhatsApp us with your prescription or medicine name and we will arrange it quickly.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-4 bg-pharmacy-green-600 text-white font-heading font-semibold text-sm px-5 py-3 rounded-xl tap-target hover:bg-pharmacy-green-700 transition-colors"
            >
              Send Prescription Request
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
