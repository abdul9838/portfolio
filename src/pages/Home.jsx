import { ArrowRight, Github, Linkedin, FileDown } from "lucide-react";
import { Link } from "react-router-dom";
import profile from "@/assets/Profile.jpg";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent" />

      {/* Hero section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-purple-500 text-lg font-semibold mb-2">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent">
                  Abdul Ahad
                </span>
              </h1>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-2xl md:text-3xl font-bold text-white">
                  React Frontend Developer
                </span>
                <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></span>
              </div>
              <p className="text-gray-400 text-lg max-w-xl">
                I build exceptional and accessible digital experiences for the
                web. Focused on creating elegant solutions to complex problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex justify-center">
                <a
                  href="/Abdul_Ahad.pdf"
                  download
                  className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-violet-600 text-white font-medium hover:from-purple-700 hover:to-violet-700 transition-all duration-300 inline-flex items-center gap-2"
                >
                  Resume
                  <FileDown />
                </a>
              </div>
              <Link
                to="/projects"
                className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-violet-600 text-white font-medium hover:from-purple-700 hover:to-violet-700 transition-all duration-300 flex items-center gap-2"
              >
                View Projects <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-md border border-purple-500 text-purple-500 font-medium hover:bg-purple-500/10 transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/abdul9838"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-ahad-04850a248/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Linkedin />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-full max-w-md mx-auto">
              <div className="relative w-full aspect-square rounded-full bg-gradient-to-br from-purple-600 to-violet-600 p-1">
                <div className="absolute inset-1 rounded-full overflow-hidden bg-black">
                  <img
                    src={profile}
                    alt="Profile"
                    className="w-full scale-x-[-1] rotate-15 h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-violet-500/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
