import {
  ArrowRight,
  Code,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Monitor,
  Server,
} from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const skillsData = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: "95%" },
        { name: "JavaScript", level: "90%" },
        { name: "React.js", level: "88%" },
        { name: "Tailwind CSS", level: "92%" },
        { name: "Redux", level: "85%" },
      ],
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", level: "60%" },
        { name: "Express.js", level: "65%" },
        { name: "Next.js", level: "70%" },
        { name: "MongoDB", level: "70%" },
        { name: "Git & GitHub", level: "75%" },
      ],
    },
  ];

  const additionalSkills = [
    "RESTful APIs",
    "Responsive Design",
    "Vercel",
    "Netlify",
    "Bootstrap",
    "MUI",
  ];

  const experienceData = [
    {
      id: 1,
      role: "React.js / Next.js Frontend Developer",
      company: "4Tuners Technology",
      location: "Greater Noida",
      duration: "July 2025 – January 2026",
      points: [
        "Built scalable admin dashboards and enterprise apps using React.js and Redux Toolkit.",
        "Integrated REST APIs for user management, RBAC, and analytics.",
        "Implemented advanced filtering & search (price, brand, size, variants).",
        "Designed analytics dashboards for surveys, bookings, and performance.",
        "Optimized apps using lazy loading, memoization, and modular architecture.",
        "Collaborated with backend and product teams for production-ready features.",
      ],
    },
    {
      id: 2,
      role: "React.js Developer",
      company: "Growmore Tech",
      location: "Lucknow, India",
      duration: "January 2024 – June 2025",
      points: [
        "Built role-based UIs with secure authentication.",
        "Created reusable components using MUI, Tailwind CSS, and Bootstrap.",
        "Managed global state using Redux Toolkit and Context API.",
        "Ensured responsive and cross-browser compatible UI.",
        "Participated in code reviews and maintained clean code.",
      ],
    },
    {
      id: 3,
      role: "Web Developer Intern",
      company: "Analyze Infotech",
      location: "Lucknow, India",
      duration: "December 2022 – May 2023",
      points: [
        "Designed responsive websites using HTML, CSS, and JavaScript.",
        "Worked on backend features with Python and Django.",
        "Improved application performance, security, and scalability.",
        "Contributed to enterprise and client-facing applications.",
      ],
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
      degree: "Diploma from Government Polytechnic, Etawah",
      year: "2017 - 2020",
      college: "Government Polytechnic, Etawah",
      description: "",
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

  const portfolioProjects = [
    {
      id: 1,
      title: "Emstell",
      description:
        "A modern software company website showcasing digital services, product development, and innovative tech solutions for businesses.",
      image: "/assets/emstell.webp",
      link: "https://emstell.vercel.app/",
      tags: ["Next.js", "React", "Software Company", "Web Development"],
    },
    {
      id: 2,
      title: "City Cars",
      description:
        "A car listing app featuring powerful functionality to help to post their car for rent.",
      image: "/assets/cars.webp",
      link: "https://citycarsa.com/",
      tags: ["React", "Node.js", "Car Rental"],
    },
    {
      id: 3,
      title: "Digital Agency",
      description:
        "A creative digital agency website offering web design, branding, marketing, and development services to help businesses grow online.",
      image: "/assets/digital-agency.webp",
      link: "https://digital-agency-one-mu.vercel.app/",
      tags: ["React", "Design", "Marketing"],
    },
    {
      id: 4,
      title: "Wood Furniture",
      description:
        "A responsive furniture search component that filters and displays products in real-time as users type keywords.",
      image: "/assets/ecommerce.webp",
      link: "https://luxe-loom-ecommerce.vercel.app/",
      tags: ["E-commerce", "React", "Search"],
    },
    {
      id: 5,
      title: "Recipe App",
      description:
        "A recipe app featuring powerful search functionality to help users quickly find, save, and explore delicious meals and cooking ideas.",
      image: "/assets/recipie.webp",
      link: "https://foodie-theta-cyan.vercel.app/",
      tags: ["React", "API", "Food"],
    },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-x-hidden">
      {/* Animated background elements */}
      {/* <AnimatedBackground /> */}
      {/* Navigation */}

      <Navbar
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navLinks={navLinks}
      />
      {/* Hero Section */}
      <section
        id="home"
        aria-labelledby="hero-heading"
        className="relative pt-32 pb-20 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span
                  className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold tracking-wide animate-bounce"
                  role="status"
                >
                  👋 Welcome to my portfolio
                </span>
              </div>

              <h1
                id="hero-heading"
                className="text-5xl lg:text-6xl font-black leading-tight"
              >
                <span className="text-slate-800">Hello There!</span>
                <br />
                <span className="text-slate-700">I'm </span>
                <span className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent animate-gradient bg-300%">
                  Abdul Ahad
                </span>
              </h1>

              <p className="text-slate-600 text-xl max-w-xl">
                A passionate{" "}
                <strong className="text-emerald-600 font-semibold">
                  Web Developer
                </strong>{" "}
                who loves crafting seamless digital experiences. With{" "}
                <strong className="text-emerald-600 font-semibold">
                  2.5+ years
                </strong>{" "}
                of experience in designing and developing modern web
                applications.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/assets/Abdul_Ahad_ReactJS.pdf"
                  download="Abdul_Ahad_ReactJS.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Abdul Ahad CV"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-emerald-500/50 transition-all hover:scale-105 font-semibold text-lg group focus:outline-none focus:ring-4 focus:ring-emerald-300"
                >
                  <Download
                    size={22}
                    aria-hidden="true"
                    className="group-hover:animate-bounce"
                  />
                  Download CV
                </a>

                {/* Social Links */}
                <div
                  className="flex gap-3"
                  role="navigation"
                  aria-label="Social media links"
                >
                  {[
                    {
                      href: "https://github.com/abdul9838",
                      icon: <Github size={22} aria-hidden="true" />,
                      label: "GitHub",
                    },
                    {
                      href: "https://www.linkedin.com/in/abdul-ahad-04850a248",
                      icon: <Linkedin size={22} aria-hidden="true" />,
                      label: "LinkedIn",
                    },
                    {
                      href: "mailto:abdulahadansari810@gmail.com",
                      icon: <Mail size={22} aria-hidden="true" />,
                      label: "Send Email",
                    },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="flex items-center justify-center w-14 h-14 border-2 border-slate-300 rounded-full hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 transition-all hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    >
                      <span className="group-hover:scale-110 transition">
                        {item.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div
                className="grid grid-cols-3 gap-6"
                role="list"
                aria-label="Professional statistics"
              >
                {[
                  { label: "Projects", value: "10+" },
                  { label: "Experience", value: "2.5+ Yrs" },
                ].map((stat, idx) => (
                  <div
                    key={stat.label}
                    role="listitem"
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  >
                    <div className="text-3xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-slate-500 text-sm font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Profile Image */}
            <div
              className="flex justify-center lg:justify-end animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative group">
                {/* Decorative gradients */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400 via-cyan-400 to-violet-400 opacity-75 blur-2xl group-hover:opacity-100 transition animate-spin-slow"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-4 rounded-full bg-gradient-to-bl from-cyan-400 via-emerald-400 to-violet-400 opacity-50 blur-xl animate-spin-reverse"
                />

                <div className="relative w-96 h-96">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 animate-pulse"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-3 rounded-full bg-gradient-to-bl from-cyan-500 to-emerald-500"
                  />

                  <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <img
                      src="/assets/Profile.webp"
                      alt="Portrait of Abdul Ahad, Web Developer"
                      width="384"
                      height="384"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="high"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                    />
                  </div>
                </div>

                {/* Floating icons */}
                <div
                  aria-hidden="true"
                  className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 animate-float"
                >
                  <Code className="text-emerald-500" size={32} />
                </div>

                <div
                  aria-hidden="true"
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <Server className="text-cyan-500" size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        aria-labelledby="skills-heading"
        className="py-24 relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <header className="text-center mb-20 animate-fade-in">
            <span className="text-emerald-600 font-semibold text-sm tracking-widest uppercase">
              My Expertise
            </span>

            <h2 id="skills-heading" className="text-5xl font-black mt-3 mb-5">
              <span className="text-slate-800">Technical </span>
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>

            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Proficiency levels in various technologies and frameworks I work
              with
            </p>
          </header>

          {/* Skills Grid */}
          <div
            className="grid lg:grid-cols-2 gap-12 mb-16"
            role="list"
            aria-label="Technical skill categories"
          >
            {skillsData.map((group, index) => (
              <article
                key={group.title}
                role="listitem"
                className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all border border-slate-100 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-cyan-500 rounded-full"
                  />
                  {group.title}
                </h3>

                <ul className="space-y-7" role="list">
                  {group.skills.map((skill) => {
                    const value = parseInt(skill.level);

                    return (
                      <li key={skill.name} className="group">
                        <div className="flex justify-between mb-3">
                          <span className="text-slate-700 font-semibold text-lg">
                            {skill.name}
                          </span>

                          <span
                            className="text-emerald-600 font-bold text-lg"
                            aria-label={`${skill.name} proficiency ${skill.level}`}
                          >
                            {skill.level}
                          </span>
                        </div>

                        {/* Progress bar */}
                        <div
                          className="relative w-full h-3 bg-slate-200 rounded-full overflow-hidden"
                          role="progressbar"
                          aria-valuenow={value}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-label={`${skill.name} proficiency`}
                        >
                          <div
                            className="absolute h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-emerald-500/50 animate-gradient bg-300%"
                            style={{ width: skill.level }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>

          {/* Additional Skills */}
          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8">
              Additional Technologies
            </h3>

            <ul
              className="flex flex-wrap justify-center gap-3"
              role="list"
              aria-label="Additional technologies"
            >
              {additionalSkills.map((tech, idx) => (
                <li key={tech}>
                  <span
                    className="px-6 py-3 bg-gradient-to-r from-emerald-50 to-cyan-50 text-emerald-700 rounded-full text-sm font-semibold border border-emerald-200 hover:border-emerald-400 hover:shadow-lg hover:scale-105 transition-all cursor-default"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="py-24 bg-white relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <header className="text-center mb-20 animate-fade-in">
            <span className="text-emerald-600 font-semibold text-sm tracking-widest uppercase">
              Career Journey
            </span>

            <h2
              id="experience-heading"
              className="text-5xl font-black mt-3 mb-5"
            >
              <span className="text-slate-800">Work </span>
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </header>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div
              aria-hidden="true"
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-cyan-500 hidden md:block"
            />

            <ol
              className="space-y-12"
              role="list"
              aria-label="Professional work experience timeline"
            >
              {experienceData.map((exp, idx) => (
                <li
                  key={exp.id}
                  role="listitem"
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <span
                    aria-hidden="true"
                    className="absolute left-6 w-5 h-5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full border-4 border-white shadow-lg hidden md:block"
                  />

                  <article className="md:ml-20 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-3xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all border border-emerald-100 group">
                    <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 group-hover:text-emerald-600 transition">
                          {exp.role}
                        </h3>

                        <p className="text-emerald-600 font-semibold text-lg flex items-center gap-2 mt-1">
                          <span className="font-semibold">{exp.company}</span>
                          <span aria-hidden="true">·</span>
                          <span>{exp.location}</span>
                        </p>
                      </div>

                      <time
                        className="px-4 py-2 bg-white text-slate-600 rounded-full text-sm font-medium shadow-md whitespace-nowrap"
                        aria-label={`Employment duration ${exp.duration}`}
                      >
                        {exp.duration}
                      </time>
                    </header>

                    <ul
                      className="space-y-3 mt-6"
                      role="list"
                      aria-label={`Responsibilities at ${exp.company}`}
                    >
                      {exp.points.map((point, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-slate-700"
                        >
                          <span
                            aria-hidden="true"
                            className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"
                          />

                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        aria-labelledby="education-heading"
        className="py-24 bg-gradient-to-b from-slate-50 to-white relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <header className="text-center mb-20 animate-fade-in">
            <span className="text-emerald-600 font-semibold text-sm tracking-widest uppercase">
              Academic Background
            </span>

            <h2
              id="education-heading"
              className="text-5xl font-black mt-3 mb-5"
            >
              <span className="text-slate-800">My </span>
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
          </header>

          {/* Education Grid */}
          <div
            className="grid md:grid-cols-2 gap-8"
            role="list"
            aria-label="Educational qualifications"
          >
            {educationData.map((edu, idx) => (
              <article
                key={edu.id}
                role="listitem"
                className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all border border-slate-100 group animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <header className="flex items-start gap-4 mb-4">
                  {/* Decorative Icon */}
                  <div
                    aria-hidden="true"
                    className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition"
                  >
                    <span className="text-white text-2xl font-black">🎓</span>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-slate-800 group-hover:text-emerald-600 transition mb-2">
                      {edu.degree}
                    </h3>

                    <time
                      className="text-emerald-600 font-semibold text-sm mb-1 block"
                      aria-label={`Completed in ${edu.year}`}
                    >
                      {edu.year}
                    </time>
                  </div>
                </header>

                <p className="text-slate-700 font-medium mb-2">{edu.college}</p>

                {edu.description && (
                  <p className="text-slate-600 text-sm bg-slate-50 px-4 py-2 rounded-xl">
                    {edu.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="py-24 bg-white relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <header className="text-center mb-20 animate-fade-in">
            <span className="text-emerald-600 font-semibold text-sm tracking-widest uppercase">
              What I Offer
            </span>

            <h2 id="services-heading" className="text-5xl font-black mt-3 mb-5">
              <span className="text-slate-800">My </span>
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>

            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Specialized in building modern, scalable, and user-friendly web
              applications
            </p>
          </header>

          {/* Services Grid */}
          <div
            className="grid md:grid-cols-3 gap-8"
            role="list"
            aria-label="Web development services"
          >
            {[
              {
                icon: <Monitor size={36} aria-hidden="true" />,
                title: "Frontend Development",
                description:
                  "Building responsive and dynamic user interfaces with React.js, Tailwind CSS, and modern JavaScript (ES6+).",
                gradient: "from-emerald-500 to-cyan-500",
              },
              {
                icon: <Code size={36} aria-hidden="true" />,
                title: "Backend Development",
                description:
                  "Creating secure, scalable APIs and server-side logic with Node.js, Express.js, and MongoDB.",
                gradient: "from-cyan-500 to-violet-500",
              },
              {
                icon: <Server size={36} aria-hidden="true" />,
                title: "Full-Stack Applications",
                description:
                  "Delivering complete solutions, integrating frontend and backend, deploying with Vercel, Netlify, or GitHub Actions.",
                gradient: "from-violet-500 to-emerald-500",
              },
            ].map((service) => (
              <article
                key={service.title}
                role="listitem"
                className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all border border-slate-100 group animate-fade-in"
              >
                {/* Icon */}
                <div
                  aria-hidden="true"
                  className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all`}
                >
                  <span className="text-white">{service.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        aria-labelledby="portfolio-heading"
        className="py-24 bg-gradient-to-b from-slate-50 to-white relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <header className="text-center mb-20 animate-fade-in">
            <span className="text-emerald-600 font-semibold text-sm tracking-widest uppercase">
              Recent Work
            </span>

            <h2
              id="portfolio-heading"
              className="text-5xl font-black mt-3 mb-5"
            >
              <span className="text-slate-800">My </span>
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
          </header>

          {/* Portfolio Grid */}
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
            aria-label="Portfolio projects"
          >
            {portfolioProjects.map((project, idx) => (
              <article
                key={project.id}
                role="listitem"
                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all group animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} project`}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-emerald-600 p-4 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  >
                    <ExternalLink size={24} aria-hidden="true" />
                  </a>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-xl text-slate-800 mb-2 group-hover:text-emerald-600 transition">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <ul
                    className="flex flex-wrap gap-2 mb-4"
                    role="list"
                    aria-label={`${project.title} technologies`}
                  >
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-full">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Project Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} project`}
                    className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center gap-2 group/link focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  >
                    View Project
                    <ArrowRight
                      size={18}
                      aria-hidden="true"
                      className="group-hover/link:translate-x-1 transition"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="py-24 bg-white relative"
      >
        <div className="max-w-4xl mx-auto px-6">
          {/* Title */}
          <header className="text-center mb-16 animate-fade-in">
            <span className="text-emerald-600 font-semibold text-sm tracking-widest uppercase">
              Get In Touch
            </span>

            <h2 id="contact-heading" className="text-5xl font-black mt-3 mb-5">
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Contact
              </span>{" "}
              <span className="text-slate-800">Me</span>
            </h2>

            <p id="contact-description" className="text-slate-600 text-lg">
              Let's discuss your next project or collaboration
            </p>
          </header>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            aria-describedby="contact-description"
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  autoComplete="name"
                  required
                  aria-required="true"
                  className="w-full p-5 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300 transition-all bg-slate-50 hover:bg-white font-medium"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="sr-only">
                  Your Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="email"
                  required
                  aria-required="true"
                  className="w-full p-5 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300 transition-all bg-slate-50 hover:bg-white font-medium"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                required
                aria-required="true"
                className="w-full p-5 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300 transition-all resize-none bg-slate-50 hover:bg-white font-medium"
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                aria-label="Send contact message"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-12 py-4 rounded-full hover:shadow-2xl hover:shadow-emerald-500/50 transition-all hover:scale-105 font-bold text-lg inline-flex items-center gap-3 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
              >
                Send Message
                <ArrowRight
                  size={22}
                  aria-hidden="true"
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-10 mb-10 text-center md:text-left">
            {/* Brand */}
            <div>
              <h3 className="text-3xl font-black mb-3 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Abdul Ahad
              </h3>
              <p className="text-slate-400 text-sm">
                Full Stack Developer specializing in modern web applications
                using React, Next.js and Node.js.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#home" className="hover:text-emerald-400 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-emerald-400 transition"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="hover:text-emerald-400 transition"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-emerald-400 transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Connect</h4>
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="https://github.com/abdul9838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-700 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-500 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                >
                  <Github size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/abdul-ahad-04850a248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-700 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-500 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                >
                  <Linkedin size={22} />
                </a>

                <a
                  href="mailto:abdulahadansari810@gmail.com"
                  className="w-12 h-12 bg-slate-700 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-500 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <p>© {new Date().getFullYear()} Abdul Ahad. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Built with ❤️ using React & Tailwind</p>
          </div>
        </div>
      </footer>

      <style jsx="true">{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient {
          animation: gradient 8s ease infinite;
        }

        .bg-300\\% {
          background-size: 300%;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
