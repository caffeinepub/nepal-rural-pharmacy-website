import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, CheckCircle, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useSubmitInquiry } from '@/hooks/useQueries';

const PHONE_NUMBER = '9824284662';
const WHATSAPP_NUMBER = '9779824284662';
const WHATSAPP_MESSAGE = encodeURIComponent('Hello! I would like to place a medicine order or ask a question.');

interface FormData {
  name: string;
  phone: string;
  address: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  address?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', address: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const { mutate: submitInquiry, isPending } = useSubmitInquiry();

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name.';
    if (!form.phone.trim()) newErrors.phone = 'Please enter your phone number.';
    if (!form.address.trim()) newErrors.address = 'Please enter your village or address.';
    if (!form.message.trim()) newErrors.message = 'Please enter your message or prescription details.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    submitInquiry(
      { name: form.name, phone: form.phone, address: form.address, message: form.message },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm({ name: '', phone: '', address: '', message: '' });
          setErrors({});
        },
      }
    );
  };

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <main className="pb-20 md:pb-0">
      {/* Hero */}
      <section className="bg-pharmacy-green-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <span className="inline-block bg-white/20 text-white text-xs font-heading font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Contact & Order
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Order Medicine or Ask a Question
          </h1>
          <p className="text-pharmacy-green-100 text-lg font-body max-w-2xl leading-relaxed">
            Fill in the form below, call us, or send a WhatsApp message. We will get back to you as quickly as possible.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-4">
              <h2 className="text-xl font-heading font-bold text-pharmacy-green-800 mb-4">
                Get in Touch
              </h2>

              <div className="bg-card rounded-2xl p-5 shadow-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pharmacy-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-pharmacy-green-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-pharmacy-green-800 mb-1">Call Us</h3>
                    <a href={`tel:${PHONE_NUMBER}`} className="text-pharmacy-green-600 font-body text-sm hover:underline">
                      {PHONE_NUMBER}
                    </a>
                    <p className="text-muted-foreground text-xs font-body mt-0.5">Available 7 AM – 9 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-5 shadow-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pharmacy-saffron-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-pharmacy-saffron-500" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-pharmacy-green-800 mb-1">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pharmacy-saffron-500 font-body text-sm hover:underline"
                    >
                      Send a Message
                    </a>
                    <p className="text-muted-foreground text-xs font-body mt-0.5">Quick replies on WhatsApp</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-5 shadow-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pharmacy-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-pharmacy-green-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-pharmacy-green-800 mb-1">Visit Us</h3>
                    <p className="text-foreground font-body text-sm">Kalaiya 10, Bara, Nepal</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-5 shadow-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pharmacy-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-pharmacy-green-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-pharmacy-green-800 mb-1">Opening Hours</h3>
                    <p className="text-foreground font-body text-sm">7:00 AM – 9:00 PM</p>
                    <p className="text-muted-foreground text-xs font-body">Open 7 days a week</p>
                  </div>
                </div>
              </div>

              {/* Quick CTA Buttons */}
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center justify-center gap-2 bg-pharmacy-green-600 text-white font-heading font-bold text-base px-6 py-4 rounded-xl tap-target hover:bg-pharmacy-green-700 transition-colors shadow-card"
                >
                  <Phone className="w-5 h-5" />
                  Call for Delivery
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-pharmacy-saffron-500 text-white font-heading font-bold text-base px-6 py-4 rounded-xl tap-target hover:bg-pharmacy-saffron-600 transition-colors shadow-cta"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order via WhatsApp
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border">
                {submitted ? (
                  <div className="text-center py-10 animate-fade-in">
                    <div className="w-16 h-16 bg-pharmacy-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-pharmacy-green-600" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-pharmacy-green-800 mb-3">
                      Thank You! 🙏
                    </h2>
                    <p className="text-muted-foreground font-body text-base mb-2">
                      Your message has been received. We will contact you shortly.
                    </p>
                    <p className="text-muted-foreground font-body text-sm mb-6">
                      For urgent orders, please call us directly at{' '}
                      <a href={`tel:${PHONE_NUMBER}`} className="text-pharmacy-green-600 font-semibold hover:underline">
                        {PHONE_NUMBER}
                      </a>
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-pharmacy-green-600 font-heading font-semibold text-sm hover:underline tap-target"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-heading font-bold text-pharmacy-green-800 mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-muted-foreground font-body text-sm mb-6">
                      Fill in the form below to order medicine, send a prescription, or ask any health question.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <Label htmlFor="name" className="font-heading font-semibold text-sm text-pharmacy-green-800">
                            Your Name <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="e.g. Ram Bahadur"
                            value={form.name}
                            onChange={handleChange('name')}
                            className={`h-12 text-base font-body rounded-xl ${errors.name ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                          />
                          {errors.name && <p className="text-destructive text-xs font-body">{errors.name}</p>}
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="phone" className="font-heading font-semibold text-sm text-pharmacy-green-800">
                            Phone Number <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="e.g. 98XXXXXXXX"
                            value={form.phone}
                            onChange={handleChange('phone')}
                            className={`h-12 text-base font-body rounded-xl ${errors.phone ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                          />
                          {errors.phone && <p className="text-destructive text-xs font-body">{errors.phone}</p>}
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="address" className="font-heading font-semibold text-sm text-pharmacy-green-800">
                          Your Village / Address <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="address"
                          type="text"
                          placeholder="e.g. Kalaiya 10, Bara"
                          value={form.address}
                          onChange={handleChange('address')}
                          className={`h-12 text-base font-body rounded-xl ${errors.address ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                        />
                        {errors.address && <p className="text-destructive text-xs font-body">{errors.address}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="message" className="font-heading font-semibold text-sm text-pharmacy-green-800">
                          Message / Prescription Details <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="List the medicines you need, or describe your health question..."
                          value={form.message}
                          onChange={handleChange('message')}
                          rows={5}
                          className={`text-base font-body rounded-xl resize-none ${errors.message ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                        />
                        {errors.message && <p className="text-destructive text-xs font-body">{errors.message}</p>}
                      </div>
                      <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full h-12 bg-pharmacy-green-600 hover:bg-pharmacy-green-700 text-white font-heading font-bold text-base rounded-xl tap-target"
                      >
                        {isPending ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
