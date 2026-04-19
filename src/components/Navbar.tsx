import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 text-primary-foreground">
          <img src={logo} alt="George Charity logo" width={40} height={40} className="h-10 w-10" />
          <span className="font-serif font-bold text-lg hidden sm:block">George Charity</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-primary-foreground/90 text-sm font-medium">
          <a href="#mission" className="hover:text-accent transition-smooth">Mission</a>
          <a href="#impact" className="hover:text-accent transition-smooth">Impact</a>
          <a href="#children" className="hover:text-accent transition-smooth">Children</a>
          <a href="#donate" className="hover:text-accent transition-smooth">Donate</a>
        </div>
        <Button variant="accent" size="sm">Donate</Button>
      </nav>
    </header>
  );
};

export default Navbar;
