import { Menu, Sparkles, X } from "lucide-react";

const Navbar = ({ navLinks, scrolled, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-sm z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-emerald-500/5" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-cyan-400 rounded-lg blur opacity-50 group-hover:opacity-75 transition"></div>
              <img
                loading="lazy"
                src="/assets/logo.webp"
                alt="logo"
                className="w-11 h-11 rounded-lg object-cover relative border-2 border-white shadow-lg transform group-hover:scale-105 transition"
              />
            </div>
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent font-black tracking-tight">
              Abdul Ahad
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-slate-700 hover:text-emerald-600 font-medium transition-all hover:bg-emerald-50 rounded-lg relative group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:w-3/4 transition-all"></span>
              </a>
            ))}
          </div>

          {/* Hire Me Button */}
          <a
            href="mailto:abdulahadansari810@gmail.com"
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-emerald-500/50 transition-all hover:scale-105 font-semibold"
          >
            <Sparkles size={18} />
            Hire Me
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-emerald-50 rounded-lg transition"
          >
            {isMenuOpen ? (
              <X size={26} className="text-emerald-600" />
            ) : (
              <Menu size={26} className="text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl animate-fade-in">
            <div className="flex flex-col space-y-1 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg transition font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="mailto:abdulahadansari810@gmail.com"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-full mt-4 text-center font-semibold shadow-lg"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
