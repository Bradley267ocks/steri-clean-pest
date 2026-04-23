/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, type FormEvent } from 'react';
import { 
  ShieldCheck, 
  Bug, 
  House, 
  Building2, 
  Truck, 
  Leaf, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Menu, 
  X,
  Clock,
  Award,
  Zap,
  ArrowRight,
  Droplet,
  GlassWater
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants ---
const COMPANY = {
  name: "Steri Clean Pest Control (Pty) LTD",
  tagline: "Master Exterminators",
  mission: "We believe something can be done!",
  phone: "+27 7 277 6612",
  phoneDisplay: "+27 7 277 6612",
  landline: "013 790 3673",
  whatsapp: "2772776612",
  address: "74 Diamant Street, Kingsview, Whiteriver, 1240, Mpumalanga, South Africa",
  emails: {
    sales: "sales@stericleanpestcontrol.co.za",
    technician: "technician@stericleanpestcontrol.co.za",
    accounts: "accounts@stericleanpestcontrol.co.za"
  }
};

const SERVICES = [
  {
    title: "Residential Pest Control",
    description: "Expert fumigation and protection for your home and family.",
    icon: House,
  },
  {
    title: "Commercial Pest Control",
    description: "Tailored solutions for businesses, offices, and retail spaces.",
    icon: Building2,
  },
  {
    title: "Subterranean Termite Treatment",
    description: "Certified treatment for construction sites. Certificates of Compliance issued.",
    icon: ShieldCheck,
  },
  {
    title: "Property Cleaning & Sanitization",
    description: "Deep cleaning and high-grade disinfection services for all properties.",
    icon: Droplet,
  },
  {
    title: "Golf Course Dune Moles",
    description: "Specialized treatment for delicate landscapes and golf courses.",
    icon: GlassWater,
  },
  {
    title: "Vegetation Management",
    description: "Stump treatment and herbicide spraying for invasive plants.",
    icon: Leaf,
  }
];

const TRUST_FACTORS = [
  { icon: Leaf, label: "Eco-Friendly Solutions", description: "Safe for pets and families" },
  { icon: Award, label: "Certified Provider", description: "Industry standard compliant" },
  { icon: Clock, label: "Fast Response", description: "Reliable and timely service" },
  { icon: Zap, label: "Advanced Methods", description: "Modern pest control tech" }
];

// --- Components ---

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 group">
            <img 
              src="https://i.ibb.co/5XLZbP63/Gemini-Generated-Image-3-removebg-preview.png" 
              alt="Steri Clean Pest Control Logo" 
              className="h-14 md:h-18 lg:h-22 w-auto object-contain transition-all"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-brand-900 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary py-2 px-5 text-sm">
              Request a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-brand-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden border-t border-brand-50"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-brand-900 py-2 border-b border-brand-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Request a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck size={14} />
              Master Exterminators
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-brand-900 leading-tight mb-6">
              Professional Pest Control <br />
              <span className="text-brand-600 underline decoration-brand-200 underline-offset-8">You Can Trust</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Eco-friendly, effective pest solutions for homes and businesses. Based in Whiteriver and serving all of Mpumalanga with expert extermination services.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary flex items-center gap-2">
                Request a Quote <ArrowRight size={18} />
              </a>
              <a 
                href={`https://wa.me/${COMPANY.whatsapp}`} 
                target="_blank" 
                rel="noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <MessageSquare size={18} /> WhatsApp Us Now
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-brand-50 flex items-center justify-center overflow-hidden">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} 
                      alt="User avatar" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">
                Trusted by <span className="text-brand-900 font-bold">500+</span> Happy Clients
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=1200" 
                alt="Pest Control Service" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-900/10"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-brand-50 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Leaf className="text-green-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">100% Eco-Friendly</p>
                  <p className="text-xs text-slate-500">Safe for your family</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ title, subtitle, centered = false }: { title: string, subtitle?: string, centered?: boolean }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-900 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-100 rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=800" 
                alt="Our professional team and values" 
                className="relative rounded-xl w-full object-cover shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading title="About Our Company" />
            <p className="text-lg text-slate-600 mb-6 italic font-medium text-brand-600">
              "{COMPANY.mission}"
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              At Steri Clean Pest Control, we are dedicated to providing the highest quality pest management services in South Africa. Our team of certified professionals combines years of experience with environment-friendly solutions to protect your property.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We specialize in everything from residential fumigation to large-scale commercial contracts. Our commitment is simple: effective extermination without compromising the safety of your environment.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <CheckCircle2 className="text-brand-600 mb-2" />
                <h4 className="font-bold text-brand-900">Proven Results</h4>
                <p className="text-sm text-slate-500">Years of successful operations in Mpumalanga.</p>
              </div>
              <div>
                <CheckCircle2 className="text-brand-600 mb-2" />
                <h4 className="font-bold text-brand-900">Expert Staff</h4>
                <p className="text-sm text-slate-500">Certified technicians you can trust.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading 
          centered 
          title="Our Specialized Services" 
          subtitle="Comprehensive solutions for every type of pest challenge." 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-brand-50 card-hover"
            >
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6 text-brand-600">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <a href="#contact" className="text-brand-600 font-semibold text-sm inline-flex items-center gap-1 hover:underline">
                Get a quote <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 bg-brand-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-brand-100 mb-8 max-w-2xl mx-auto">
              Prices depend on property size, rooms, or area treated. We offer monthly negotiable contracts for long-term protection.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="bg-white text-brand-600 px-8 py-3 rounded-lg font-bold hover:bg-brand-50 transition-colors">
                Contact Sales
              </a>
              <a href={`tel:${COMPANY.phone}`} className="border-2 border-brand-400 bg-brand-700/50 text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-700 transition-colors">
                Call: {COMPANY.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <ShieldCheck size={300} className="-mr-20 -mt-20" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingInfo() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title="Contracts & Pricing" />
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-brand-50 p-3 rounded-full h-fit">
                  <CheckCircle2 className="text-brand-600" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 text-lg">Once-off Services</h4>
                  <p className="text-slate-600">Perfect for immediate issues or specialized treatments like subterranean termite fumigation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-brand-50 p-3 rounded-full h-fit">
                  <Clock className="text-brand-600" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 text-lg">Monthly Contracts</h4>
                  <p className="text-slate-600">Negotiable long-term protection for commercial properties, warehouses, and estates.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-brand-50 p-3 rounded-full h-fit">
                  <Zap className="text-brand-600" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 text-lg">Flexible Payments</h4>
                  <p className="text-slate-600">We accept EFT and Speedpoint payments on-site for your convenience.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-brand-900 text-white p-8 md:p-12 rounded-3xl shadow-2xl border border-brand-800">
            <h3 className="text-2xl font-bold mb-6">Why Choose Steri Clean?</h3>
            <ul className="space-y-4 mb-8">
              {TRUST_FACTORS.map(factor => (
                <li key={factor.label} className="flex items-start gap-4">
                  <factor.icon className="text-brand-400 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-bold">{factor.label}</p>
                    <p className="text-brand-200 text-sm">{factor.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a href="#contact" className="block w-full bg-brand-600 text-center py-4 rounded-xl font-bold hover:bg-brand-500 transition-colors shadow-lg">
              Get Your Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading title="Get In Touch" subtitle="Our team is ready to help you with any pest-related concerns. Reach out for a free consultation." />
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-brand-50 text-brand-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Phone & WhatsApp</p>
                  <p className="text-slate-600">{COMPANY.phoneDisplay} (Cell)</p>
                  <p className="text-slate-600">{COMPANY.landline} (Landline)</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-brand-50 text-brand-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Business Emails</p>
                  <a href={`mailto:${COMPANY.emails.sales}`} className="text-brand-600 block hover:underline">{COMPANY.emails.sales}</a>
                  <a href={`mailto:${COMPANY.emails.technician}`} className="text-brand-600 block hover:underline">{COMPANY.emails.technician}</a>
                  <a href={`mailto:${COMPANY.emails.accounts}`} className="text-brand-600 block hover:underline">{COMPANY.emails.accounts}</a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-brand-50 text-brand-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Our Address</p>
                  <p className="text-slate-600 max-w-xs">{COMPANY.address}</p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                 <div className="bg-white p-4 rounded-lg shadow-lg">
                    <p className="font-bold text-brand-900">74 Diamant Street, Kingsview</p>
                    <p className="text-sm text-slate-500">Whiteriver, Mpumalanga</p>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-brand-600 font-bold text-xs mt-2 inline-block"
                    >
                      View on Google Maps
                    </a>
                 </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                alt="Map Background" 
                className="w-full h-full object-cover opacity-30"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-brand-50">
            <h3 className="text-2xl font-bold mb-8 text-brand-900">Request a Free Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input 
                    required 
                    type="tel" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="+27 00 000 0000"
                    value={formState.phone}
                    onChange={e => setFormState({...formState, phone: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input 
                  required 
                  type="email" 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message / Pest Issue</label>
                <textarea 
                  required 
                  rows={4} 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about the problem..."
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>
              
              <button 
                disabled={isSubmitting || isSuccess}
                className={`w-full py-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 ${
                  isSuccess ? 'bg-green-600 text-white' : 'bg-brand-600 text-white hover:bg-brand-700 active:scale-[0.98]'
                }`}
              >
                {isSubmitting ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                    <Droplet />
                  </motion.div>
                ) : isSuccess ? (
                  <>Success! We'll call you shortly <CheckCircle2 size={18} /></>
                ) : (
                  <>Send Request <ArrowRight size={18} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppButton() {
  return (
    <motion.a 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      href={`https://wa.me/${COMPANY.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95"
    >
      <MessageSquare fill="white" size={32} />
      <span className="absolute -top-2 -left-2 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
      </span>
    </motion.a>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="https://i.ibb.co/5XLZbP63/Gemini-Generated-Image-3-removebg-preview.png" 
                alt="Steri Clean Pest Control Logo" 
                className="h-20 md:h-28 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="max-w-md mb-8 leading-relaxed text-brand-300">
              Your trusted partner for professional and eco-friendly pest control in South Africa. We specialized in residential, commercial, and agricultural pest management with guaranteed results.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-800 flex items-center justify-center hover:bg-brand-800 transition-colors">
                <Phone size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-800 flex items-center justify-center hover:bg-brand-800 transition-colors">
                <MessageSquare size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-800 flex items-center justify-center hover:bg-brand-800 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-brand-400">Home</a></li>
              <li><a href="#about" className="hover:text-brand-400">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-400">Our Services</a></li>
              <li><a href="#pricing" className="hover:text-brand-400">Contracts & Pricing</a></li>
              <li><a href="#contact" className="hover:text-brand-400">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Business Details</h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin size={16} className="text-brand-500 shrink-0" />
                <span>{COMPANY.address}</span>
              </div>
              <div className="flex gap-3">
                <Phone size={16} className="text-brand-500 shrink-0" />
                <span>{COMPANY.phoneDisplay}</span>
              </div>
              <div className="flex gap-3">
                <Clock size={16} className="text-brand-500 shrink-0" />
                <span>Mon - Fri: 08:00 - 17:00</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-900 text-center text-xs text-brand-500 font-medium">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans text-slate-900 antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <PricingInfo />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

