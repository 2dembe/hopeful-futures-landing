import logo from "@/assets/logo.png";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-earth text-cream pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="George Charity logo" width={48} height={48} className="h-12 w-12" />
              <span className="font-serif font-bold text-xl">George Charity</span>
            </div>
            <p className="text-cream/80 leading-relaxed max-w-md mb-6">
              George Charity Organisation Limited is a registered non-profit dedicated to transforming the lives of children across Africa.
            </p>
            <div className="inline-flex items-center gap-3 bg-primary/20 border border-primary/30 rounded-full px-5 py-2.5">
              <ShieldCheck className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">100% of donations reach the children</span>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-5 text-cream">Explore</h4>
            <ul className="space-y-3 text-cream/80 text-sm">
              <li><a href="#mission" className="hover:text-accent transition-smooth">Our Mission</a></li>
              <li><a href="#impact" className="hover:text-accent transition-smooth">Impact</a></li>
              <li><a href="#children" className="hover:text-accent transition-smooth">Sponsor a Child</a></li>
              <li><a href="#donate" className="hover:text-accent transition-smooth">Donate</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-5 text-cream">Contact</h4>
            <ul className="space-y-3 text-cream/80 text-sm">
              <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-1 text-accent" /> williamcharityorganization@gmail.com</li>
              <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-1 text-accent" /> +256 730 740 544</li>
              <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-1 text-accent" /> Kampala, Uganda</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-cream/60 text-sm">
          <p>© {new Date().getFullYear()} George Charity Organisation Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-smooth">Privacy</a>
            <a href="#" className="hover:text-accent transition-smooth">Transparency Report</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
