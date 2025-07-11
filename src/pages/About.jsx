import { FileDown } from "lucide-react";
import profile from "@/assets/Profile.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-lg overflow-hidden border-2 border-purple-500/30">
              <img
                src={profile}
                alt="About Me"
                className="w-full h-full object-cover scale-x-[-1]"
              />

              {/* Experience badge */}
              <div className="absolute -right-6 bottom-1/4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg p-4 shadow-xl">
                <div className="text-center">
                  <span className="block text-3xl font-bold">1+</span>
                  <span className="text-sm">Years of Experience</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl" />
            <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-violet-500/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              I'm Abdul Ahad, a passionate{" "}
              <span className="text-purple-500">React Frontend Developer</span>
            </h3>

            <p className="text-gray-400">
              I'm a skilled and experienced React frontend developer with a
              strong focus on creating visually appealing and user-friendly
              interfaces. With a keen eye for design and a deep understanding of
              the React ecosystem, I bring a unique blend of creativity and
              technical expertise to every project I work on.
            </p>

            <p className="text-gray-400">
              As a frontend developer, I excel in creating responsive and
              interactive user interfaces using React and its associated
              libraries. I have a strong understanding of HTML, CSS, and
              JavaScript, enabling me to build dynamic and engaging web
              applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-gray-300">
                  Name: <span className="text-white">Abdul Ahad</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-gray-300">
                  Email:{" "}
                  <span className="text-white">
                    abdulahadansari810@gmail.com
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-gray-300">
                  Location:{" "}
                  <span className="text-white">Lucknow, Uttar Pradesh</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-gray-300">
                  Availability: <span className="text-white">Open To Work</span>
                </span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="/assets/Abdul Ahad.pdf"
                download
                className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-violet-600 text-white font-medium hover:from-purple-700 hover:to-violet-700 transition-all duration-300 inline-flex items-center gap-2"
              >
                Download CV
                <FileDown />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
