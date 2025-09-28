import { useState } from "react";
import emailjs from 'emailjs-com';
import {
  Menu,
  X,
  Download,
  Monitor,
  Code,
  Github,
  Linkedin,
  Server,
  Mail,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
  from_name: '',
  user_email: '',
  message: '',
});


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  
  const serviceID = 'service_dn7lvqs';
  const templateID = 'template_3265zpi';
  const userID = 'BRIuWVR14ScDSDgSy'; // Also called public key

  console.log(formData) 

  emailjs.send(serviceID, templateID, formData, userID)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Form submitted successfully!');
      setFormData({ name: "", email: "", message: "" }); // Reset form
    }, (err) => {
      console.error('FAILED...', err);
      alert('Failed to send message. Please try again.');
    });
};
  const portfolioProjects = [
    {
      id: 1,
      title: "City Cars",
      image: "/assets/cars.png",
      description:
        "A car listing app featuring powerful functionality to help to post their car for rent.",
      link: "https://citycarsa.com/",
    },
    {
      id: 2,
      title: "Digital Agency",
      image: "/assets/digital-agency.png",
      description:
        "A creative digital agency website offering web design, branding, marketing, and development services to help businesses grow online.",
      link: "https://digital-agency-one-mu.vercel.app/",
    },
    {
      id: 3,
      title: "Wood Furniture",
      image: "/assets/ecommerce.png",
      description:
        "A responsive furniture search component that filters and displays products in real-time as users type keywords.",
      link: "https://luxe-loom-ecommerce.vercel.app/",
    },
    {
      id: 4,
      title: "Recipe App",
      image: "/assets/recipie.png",
      description:
        "A recipe app featuring powerful search functionality to help users quickly find, save, and explore delicious meals and cooking ideas.",
      link: "https://foodie-theta-cyan.vercel.app/",
    },
    {
      id: 5,
      title: "Weather App",
      image: "/assets/weather.png",
      description:
        "A Weather App that provides real-time weather updates, forecasts, and climate information for cities worldwide. Users can search for locations and get detailed weather insights in a simple and responsive interface.",
      link: "https://abdul9838.github.io/Weather_App/",
    },
  ];

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      year: "2020 - 2023",
      college: "Khwaja Moinuddin Chisthi Language University, Lucknow",
      description:
        "Graduated with honors. Focused on Software Engineering and Web Development.",
    },
    {
      id: 2,
      degree: "Diploma in Computer Science",
      year: "2017 - 2020",
      college: "Government Polytechnic College, Etawah",
      description:
        "Completed my Diploma in Computer Science. Focused on Software Engineering and Web Development.",
    },
    {
      id: 3,
      degree: "Intermediate",
      year: "2015 - 2017",
      college: "S. L. B. S. Inter College, Deoria",
      description: "",
    },
    {
      id: 4,
      degree: "High School",
      year: "2013 - 2015",
      college: "Kishan Intermediate College, Deoria",
      description: "",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold flex items-center gap-2">
              <img
                loading="lazy"
                src="/assets/logo.jpg"
                alt="logo"
                className="w-10 h-10 rounded"
              />
              <span className="text-gray-800">
                <span className="text-emerald-500">Port</span>folio.
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-800 hover:text-emerald-500 transition-colors"
              >
                Home
              </a>

              <a
                href="#skills"
                className="text-gray-600 hover:text-emerald-500 transition-colors"
              >
                Skills
              </a>
              <a
                href="#education"
                className="text-gray-600 hover:text-emerald-500 transition-colors"
              >
                Education
              </a>
              <a
                href="#portfolio"
                className="text-gray-600 hover:text-emerald-500 transition-colors"
              >
                Portfolio
              </a>

              <a
                href="#contact"
                className="text-gray-600 hover:text-emerald-500 transition-colors"
              >
                Contact
              </a>
            </div>

            <a
              href="mailto:abdulahadansari810@gmail.com"
              className="hidden md:block bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition-colors"
            >
              Hire Me
            </a>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 py-4">
              <div className="flex flex-col space-y-4 px-6">
                <a
                  href="#home"
                  className="text-gray-800 hover:text-emerald-500"
                >
                  Home
                </a>
                <a
                  href="#skills"
                  className="text-gray-600 hover:text-emerald-500"
                >
                  Skills
                </a>
                <a
                  href="#education"
                  className="text-gray-600 hover:text-emerald-500"
                >
                  Education
                </a>
                <a
                  href="#portfolio"
                  className="text-gray-600 hover:text-emerald-500"
                >
                  Portfolio
                </a>
                
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-emerald-500"
                >
                  Contact
                </a>
                <a
                  href="mailto:abdulahadansari810@gmail.com"
                  className="bg-emerald-500 text-white px-6 py-2 rounded-full w-fit text-center"
                >
                  Hire Me
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-green-100 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-green-200 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-emerald-300 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative min-h-[80vh] flex items-center">
          <div className="flex flex-col lg:flex-row items-center gap-x-20 justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gray-800">Hello There!</span>
                <br />
                <span className="text-gray-800">I'M </span>
                <span className="text-emerald-500">Abdul Ahad</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 max-w-lg">
                I'm a Professional Web Developer who loves crafting seamless
                digital experiences. I have 2 years of experience in designing
                and developing modern web applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/assets/resume.pdf"
                  download="Abdul_Ahad.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-emerald-500 text-white px-8 py-3 rounded-full hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
                    <Download size={20} />
                    Download CV
                  </button>
                </a>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/abdul9838"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-gray-300 rounded-full hover:border-emerald-500 hover:text-emerald-500 transition-colors"
                  >
                    <Github size={20} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/abdul-ahad-04850a248"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-gray-300 rounded-full hover:border-emerald-500 hover:text-emerald-500 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>

                  <a
                    href="mailto:abdulahadansari810@gmail.com"
                    className="p-3 border border-gray-300 rounded-full hover:border-emerald-500 hover:text-emerald-500 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-emerald-400 rounded-full flex items-center justify-center">
                  <div className="w-80 h-80 bg-emerald-500 rounded-full flex items-center justify-center">
                    <img
                      loading="lazy"
                      src="/assets/Profile.jpg"
                      alt="Profile"
                      className="w-72 h-7w-72 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-emerald-500">MY</span>
              <span className="text-gray-800"> SKILLS</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Here are my technical skills and proficiency levels in various
              technologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Frontend Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">
                Frontend Development
              </h3>
              <div className="space-y-6">
                {[
                  { name: "HTML/CSS", level: "95%" },
                  { name: "JavaScript", level: "90%" },
                  { name: "React.js", level: "88%" },
                  { name: "Tailwind CSS", level: "92%" },
                  { name: "Redux", level: "85%" },
                ].map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-emerald-500 font-semibold">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Backend & Tools */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">
                Backend & Tools
              </h3>
              <div className="space-y-6">
                {[
                  { name: "Node.js", level: "60%" },
                  { name: "Express.js", level: "65%" },
                  { name: "PHP", level: "75%" },
                  { name: "MongoDB", level: "70%" },
                  { name: "Git & GitHub", level: "75%" },
                ].map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-emerald-500 font-semibold">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-16 text-center">
            <h4 className="text-xl font-semibold text-gray-800 mb-6">
              Additional Technologies
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "RESTful APIs",
                "Responsive Design",
                "Vercel",
                "Netlify",
                "etc .",
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-20 bg-gradient-to-t from-white to-emerald-50"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-800">MY</span>
              <span className="text-emerald-500"> EDUCATION</span>
            </h2>
          </div>

          {/* Education Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow transition"
              >
                <h3 className="font-bold text-lg text-emerald-500 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 mb-1">{edu.year}</p>
                <p className="text-gray-700 mb-2">{edu.college}</p>
                {edu.description && (
                  <p className="text-gray-600 text-sm">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-800">MY</span>
              <span className="text-emerald-500"> SERVICES</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I specialize in building modern, scalable, and user-friendly web
              applications using the latest technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Development */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Monitor className="text-emerald-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Frontend Development
              </h3>
              <p className="text-gray-600">
                Building responsive and dynamic user interfaces with React.js, Tailwind CSS, and modern JavaScript (ES6+).
              </p>
            </div>

            {/* Backend Development */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Code className="text-emerald-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Backend Development
              </h3>
              <p className="text-gray-600">
                Creating secure, scalable APIs and server-side logic with
                Node.js, Express.js, and MongoDB for full-stack applications.
              </p>
            </div>

            {/* Full-Stack Projects */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Server className="text-emerald-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Full-Stack Applications
              </h3>
              <p className="text-gray-600">
                Delivering complete full-stack solutions, integrating frontend
                and backend, and deploying apps with Vercel, Netlify, or GitHub
                Actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-emerald-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-800">MY</span>
              <span className="text-emerald-500"> PORTFOLIO</span>
            </h2>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition"
              >
                {/* Project Image */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition"
                  />
                </div>

                {/* Project Info */}
                <div className="p-4">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-500 font-medium hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-b to-emerald-50 from-white"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-emerald-500">CONTACT</span>
              <span className="text-gray-800"> ME</span>
            </h2>
          </div>

          <div onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="from_name"
                placeholder="NAME"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="MESSAGE"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors resize-none"
              required
            ></textarea>
            <div className="text-center">
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-emerald-500 text-white px-8 py-4 rounded-full hover:bg-emerald-600 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold mb-2">
                <span className="text-gray-100">
                  <span className="text-emerald-500">Port</span>folio.
                </span>
              </div>
              <p className="text-gray-400">© Copyright 2024 by Go folio</p>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com/abdul9838"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 text-white rounded-lg hover:bg-emerald-500 transition-colors"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/abdul-ahad-04850a248"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 text-white rounded-lg hover:bg-emerald-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:abdulahadansari810@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 text-white rounded-lg hover:bg-emerald-500 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
