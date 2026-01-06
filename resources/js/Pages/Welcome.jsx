import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  ArrowUpRight, 
  Play, 
  Star, 
  CheckCircle2, 
  XCircle, 
  CloudSync, 
  LayoutDashboard, 
  Fingerprint, 
  BarChart3,
  Plus,
  Minus,
  Facebook,
  Database,
  Link2,
  Lock,
  Settings
} from 'lucide-react';



// Reusable Components
const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = "px-6 py-2.5 rounded-full font-medium transition-all flex items-center justify-center gap-2 text-sm md:text-base";
  const variants = {
    primary: "bg-primary hover:bg-primaryHover text-white shadow-lg shadow-primary/20",
    secondary: "bg-gray-200 dark:bg-surface-dark hover:bg-gray-300 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700",
    ghost: "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary",
    dark: "bg-black text-white hover:bg-gray-900 shadow-xl"
  };
  
  return (
    <button className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lead<span className="text-primary">Journey</span></span>
          </div>
          <div className="hidden md:flex items-baseline space-x-8">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm font-medium">Features</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm font-medium">Solutions</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm font-medium">Config</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm font-medium">FAQs</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm font-medium">Login</a>
            <Button>Book free demo <ArrowUpRight size={16} /></Button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600 dark:text-gray-300">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 p-4 space-y-4 shadow-xl">
          <a href="#" className="block text-gray-600 dark:text-gray-300 py-2">Features</a>
          <a href="#" className="block text-gray-600 dark:text-gray-300 py-2">Solutions</a>
          <a href="#" className="block text-gray-600 dark:text-gray-300 py-2">Config</a>
          <a href="#" className="block text-gray-600 dark:text-gray-300 py-2">FAQs</a>
          <hr className="border-gray-100 dark:border-gray-800" />
          <Button className="w-full">Book free demo</Button>
        </div>
      )}
    </nav>
  );
};

const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <div className={`border rounded-lg overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary bg-white dark:bg-surface-dark' : 'border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark hover:border-gray-300'}`}>
      <button onClick={onClick} className="w-full flex items-center justify-between p-5 text-left focus:outline-none">
        <span className="font-bold text-gray-900 dark:text-white flex gap-3">
          <span className="text-primary">{index.toString().padStart(2, '0')}</span> {question}
        </span>
        <span className={`rounded w-6 h-6 flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-200 dark:border-gray-800 pt-4 animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

const FeatureSection = ({ title, tag, description, image, reversed = false }) => {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center mb-24 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
      <div className={reversed ? 'order-2' : 'order-2 lg:order-1'}>
        <span className="inline-block px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold mb-4">{tag}</span>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{description}</p>
        <div className="flex gap-4">
          <Button>Book free demo now <ArrowUpRight size={16} /></Button>
          <button className="text-gray-700 dark:text-gray-300 hover:text-primary flex items-center gap-2 text-sm font-medium px-4 py-2.5">
            More details <ChevronRight size={16} />
          </button>
        </div>
      </div>
      <div className={`${reversed ? 'order-1' : 'order-1 lg:order-2'} bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-2xl`}>
        <img src={image} alt={title} className="rounded-lg w-full h-auto shadow-lg border border-gray-200 dark:border-gray-700" />
      </div>
    </div>
  );
};

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  const [activeTab, setActiveTab] = useState(1);
  const [openFaq, setOpenFaq] = useState(0);

  const handleImageError = () => {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
  };

  return (
    <div className="min-h-screen">
      <Head title="Welcome" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Track smarter. Scale faster. 100% Leadgen focus
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.15] mb-6">
                <span className="text-primary">Lead Gen Tracking & Reporting</span> That's Adblock-Proof, GDPR-Compliant & 95% Accurate
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
                Still tracking like it's 2019? You're wasting hours, flying blind, and handing your competitors the edge.
                <span className="text-primary font-semibold"> LeadJourney</span> combines real-time reporting and offline conversion tracking in one tool.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button className="px-8 py-4 text-lg">Book a free demo now <ChevronRight size={20}/></Button>
                <Button variant="secondary" className="px-8 py-4 text-lg">Watch guided tour <Play size={20}/></Button>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/${i + 50}/100/100`} alt="user" className="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark object-cover" />
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Loved by <span className="font-bold text-gray-900 dark:text-white">50+ marketers</span></p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-teal-500 rounded-2xl blur opacity-30 animate-pulse"></div>
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl bg-surface-dark group cursor-pointer">
                <img src="https://picsum.photos/seed/dashboard/800/600" alt="Dashboard" className="w-full opacity-90 group-hover:scale-105 transition-transform duration-700" onError={handleImageError} />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 scale-100 group-hover:scale-110 transition-transform">
                    <Play fill="white" size={40} className="ml-1 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white dark:bg-[#0F1623]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Leading Companies Rely On <span className="text-primary">LeadJourney</span> To Scale Their Performance Marketing Campaigns
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 dark:bg-red-900/10 rounded-2xl p-8 border border-red-100 dark:border-red-900/30">
              <div className="flex items-center gap-3 mb-8">
                <XCircle className="text-red-500" size={32} />
                <h3 className="text-lg font-bold text-red-700 dark:text-red-400 uppercase tracking-wide">Without LeadJourney</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex gap-4">
                   <div className="shrink-0 w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/40 flex items-center justify-center text-red-600"><XCircle size={20} /></div>
                   <div>
                     <h4 className="font-semibold text-gray-900 dark:text-white text-sm">No campaign clarity:</h4>
                     <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Can't match leads to specific ads accurately.</p>
                   </div>
                </li>
              </ul>
            </div>
            <div className="bg-emerald-50 dark:bg-primary/5 rounded-2xl p-8 border border-emerald-100 dark:border-primary/20">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="text-primary" size={32} />
                <h3 className="text-lg font-bold text-primary uppercase tracking-wide">With LeadJourney</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex gap-4">
                   <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary"><CheckCircle2 size={20} /></div>
                   <div>
                     <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Precise lead source:</h4>
                     <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Identify campaign and touchpoint for every single lead.</p>
                   </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Config Section */}
      <section className="py-20 bg-[#0F1623] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready To Use In Just <span className="text-primary">6 Simple Steps.</span></h2>
          </div>
          <div className="flex justify-center mb-12 overflow-x-auto pb-4 gap-4">
            {[1,2,3,4,5,6].map(step => (
              <button 
                key={step}
                onClick={() => setActiveTab(step)}
                className={`px-6 py-2 border-b-2 transition-all font-medium whitespace-nowrap ${activeTab === step ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-white'}`}
              >
                Step {step}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Over 25+ Integrations Supported</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[CloudSync, Facebook, Database, Link2, Fingerprint, BarChart3].map((Icon, i) => (
              <div key={i} className="w-20 h-20 bg-white dark:bg-surface-dark rounded-2xl shadow-lg flex items-center justify-center border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-300">
                <Icon size={32} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-light dark:bg-[#0B1120] border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <span className="text-2xl font-bold text-gray-900 dark:text-white mb-4 block">Lead<span className="text-primary">Journey</span></span>
           <p className="text-xs text-gray-500">2026 © All rights reserved to LeadJourney</p>
        </div>
      </footer>
    </div>
  );
}