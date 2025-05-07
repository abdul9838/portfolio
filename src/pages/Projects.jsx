import { ExternalLink, Github } from "lucide-react";

import recipie from "@/assets/recipie.png";
import weather from "@/assets/weather.png";
import exommerce from "@/assets/ecommerce.png";

const Projects = () => {
  const projects = [
    {
      id: 2,
      title: "Recipe App",
      category: "web",
      image: recipie,
      description: "A recipe app with search functionality",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "React Router Dom",
      ],
      demoLink: "https://foodie-theta-cyan.vercel.app/",
      githubLink: "https://github.com/abdul9838/foodie.git",
    },
    {
      id: 3,
      title: "LoxeLoom",
      category: "web",
      image: exommerce,
      description:
        "A responsive furniture search component that filters and displays products in real-time as users type keywords.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Context Api",
        "React Router Dom",
      ],
      demoLink: "https://luxe-loom-ecommerce.vercel.app/",
      githubLink: "https://github.com/abdul9838/LuxeLoom-ecommerce",
    },
    {
      id: 1,
      title: "Weather App",
      category: "web",
      image: weather,
      description: "A weather app with search functionality",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "https://abdul9838.github.io/Weather_App/",
      githubLink: "https://github.com/abdul9838/Weather_App.git",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Check out some of my recent projects
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/50 rounded-lg overflow-hidden border border-purple-900/30 hover:border-purple-500/50 transition-all group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute  md:block inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex md:hidden justify-center gap-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-purple-900/30 text-purple-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
