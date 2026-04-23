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
  X,
  Menu,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";

const emptyData = {
  name: "",
  email: "",
  contact: "",
  message: "",
};

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState(emptyData);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = [
        "home",
        "skills",
        "experience",
        "education",
        "services",
        "portfolio",
        "contact",
      ];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 100 && bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
        { name: "HTML / CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Redux", level: 85 },
      ],
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 60 },
        { name: "Express.js", level: 65 },
        { name: "Next.js", level: 70 },
        { name: "MongoDB", level: 70 },
        { name: "Git & GitHub", level: 75 },
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
      duration: "Jul 2025 – Jan 2026",
      points: [
        "Enhanced dashboard performance and scalability, contributing to ~30% faster data processing and improved user retention.",
        "Integrated REST APIs that streamlined operations, boosting system efficiency by ~25%.",
        "Implemented advanced filtering & search, increasing user engagement by ~35%.",
        "Designed analytics dashboards that improved business decision-making speed by ~40%.",
        "Optimized applications using lazy loading and memoization, reducing load time by ~30%.",
        "Collaborated with teams to deliver features that supported ~20% growth in product adoption.",
      ],
    },
    {
      id: 2,
      role: "React.js Developer",
      company: "Growmoredigi Codebuilder",
      location: "Lucknow, India",
      duration: "Jan 2024 – Jun 2025",
      points: [
        "Built role-based UI systems that improved platform security and reduced unauthorized access by ~40%.",
        "Developed reusable components, reducing development time by ~35% and increasing team productivity.",
        "Managed global state efficiently, improving application performance by ~25%.",
        "Enhanced responsiveness and UI consistency, increasing user satisfaction by ~30%.",
        "Maintained clean code practices, contributing to ~20% reduction in bugs and rework.",
      ],
    },
    {
      id: 3,
      role: "Web Developer Intern",
      company: "Analyze Infotech",
      location: "Lucknow, India",
      duration: "Aug 2022 – Dec 2022",
      points: [
        "Developed responsive websites that improved client engagement by ~25%.",
        "Worked on backend features that increased system efficiency by ~20%.",
        "Optimized performance and security, reducing load time by ~30%.",
        "Contributed to applications that supported ~15% growth in client satisfaction.",
      ],
    },
  ];

  const educationData = [
    {
      id: 1,
      degree: "B.Tech in Computer Science",
      year: "2020 – 2023",
      college: "Khwaja Moinuddin Chisthi Language University, Lucknow",
      description:
        "Graduated with honors. Focused on Software Engineering and Web Development.",
    },
    {
      id: 2,
      degree: "Diploma — Government Polytechnic",
      year: "2017 – 2020",
      college: "Government Polytechnic, Etawah",
      description: "",
    },
    {
      id: 3,
      degree: "Intermediate",
      year: "2015 – 2017",
      college: "S. L. B. S. Inter College, Deoria",
      description: "",
    },
    {
      id: 4,
      degree: "High School",
      year: "2013 – 2015",
      college: "Kishan Intermediate College, Deoria",
      description: "",
    },
  ];

  const services = [
    {
      icon: <Monitor size={28} />,
      title: "Frontend Development",
      desc: "Responsive, dynamic UIs with React.js, Tailwind CSS, and modern ES6+ JavaScript.",
      num: "01",
    },
    {
      icon: <Code size={28} />,
      title: "Backend Development",
      desc: "Secure, scalable APIs and server-side logic with Node.js, Express.js, and MongoDB.",
      num: "02",
    },
    {
      icon: <Server size={28} />,
      title: "Full-Stack Applications",
      desc: "End-to-end solutions integrating frontend and backend, deployed via Vercel or Netlify.",
      num: "03",
    },
  ];

  const portfolioProjects = [
    {
      id: 1,
      title: "Emstell",
      description:
        "Modern software company website showcasing digital services and innovative tech solutions for businesses.",
      image: "/assets/emstell.webp",
      link: "https://emstell.vercel.app/",
      tags: ["Next.js", "React", "Web Dev"],
    },
    {
      id: 2,
      title: "City Cars",
      description:
        "Car listing app with powerful functionality to help users post their cars for rent.",
      image: "/assets/cars.webp",
      link: "https://citycarsa.com/",
      tags: ["React", "Node.js", "Car Rental"],
    },
    {
      id: 3,
      title: "E-commerce",
      description:
        "E-commerce platform with advanced search functionality to help users find products easily.",
      image: "/assets/gaurastra.webp",
      link: "https://www.gaurastra.com/",
      tags: ["E-commerce", "Next.js", "React", "Tailwind CSS"],
    },
    {
      id: 4,
      title: "Digital Agency",
      description:
        "Creative agency website offering web design, branding, and development services.",
      image: "/assets/digital-agency.webp",
      link: "https://digital-agency-one-mu.vercel.app/",
      tags: ["React", "Design", "Marketing"],
    },
    {
      id: 5,
      title: "Recipe App",
      description:
        "Recipe app with powerful search to help users find, save, and explore delicious meals.",
      image: "/assets/recipie.webp",
      link: "https://foodie-theta-cyan.vercel.app/",
      tags: ["React", "API", "Food"],
    },
  ];

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    setSubmitting(true);
    e.preventDefault();

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbywPEEHkcCIUF4dDxMH4HhH6lGFk21LDxtraIcnGGdBtPZtPLMP9nFxlvrU-TCNZM-8/exec",
        {
          method: "POST",
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            contact: formData.contact,
            message: formData.message,
          }),
        },
      );

      const data = await res.json();

      if (data.status === "success") {
        setSubmitting(false);
        alert("Data sent successfully");
        setFormData(emptyData);
      }
    } catch (error) {
      console.error(error);
      alert("Error saving data");
    }

    setSubmitting(false);
  };

  // Shared section-label component
  const Label = ({ text }) => (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-8 h-px bg-[#aaff00] block" />
      <span
        className="text-[#aaff00] text-[11px] tracking-[0.16em] uppercase"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        {text}
      </span>
    </div>
  );

  const SectionTitle = ({ children }) => (
    <h2
      className="text-[#f0ede8] leading-[0.95] tracking-[-2.5px] mb-5"
      style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: "clamp(36px,5vw,68px)",
      }}
    >
      {children}
    </h2>
  );

  return (
    <div
      className="min-h-screen bg-[#080808] text-[#f0ede8] overflow-x-hidden"
      style={{ fontFamily: "'Instrument Sans', sans-serif" }}
    >
      {/* ══════════════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080808]/90 backdrop-blur-xl border-b border-[#1f1f1f]"
            : ""
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-8 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-[#f0ede8] no-underline text-xl tracking-tight"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Abdul<span className="text-[#aaff00]">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-9 list-none m-0 p-0">
            {navLinks.map((l) => (
              <li key={l.name}>
                <a
                  href={l.href}
                  className={`no-underline text-[11px] tracking-[0.12em] uppercase transition-colors duration-200 ${
                    activeSection === l.href.slice(1)
                      ? "text-[#aaff00]"
                      : "text-[#a8a7a7] hover:text-[#f0ede8]"
                  }`}
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {l.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="/assets/Abdul_Ahad_Resume.pdf"
            download
            className="hidden lg:flex items-center gap-2 bg-[#aaff00] text-[#080808] no-underline px-5 py-3 rounded-sm text-[11px] tracking-[0.08em] uppercase font-medium transition-all duration-200 hover:opacity-80 hover:-translate-y-px"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            <Download size={13} /> Resume
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#f0ede8] bg-transparent border-none cursor-pointer p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080808] flex flex-col items-center justify-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#f0ede8] no-underline hover:text-[#aaff00] transition-colors duration-200 text-[40px] tracking-[-1px]"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              {l.name}
            </a>
          ))}
        </div>
      )}

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-[72px] overflow-hidden"
      >
        {/* 🔥 Background Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] bg-red-400/50 opacity-20 blur-[140px] rounded-full animate-pulse" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[350px] h-[350px] bg-purple-500 opacity-10 blur-[120px] rounded-full animate-[spin_20s_linear_infinite]" />
        </div>

        {/* Content */}
        <div className="max-w-[900px] mx-auto px-6 py-24 text-center relative z-10 anim-slide-up">
          {/* Top badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {["Available for work", "React · Next.js", "Node · MongoDB"].map(
              (text, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 text-[11px] tracking-[0.1em] uppercase border border-[#2a2a2a] text-[#aaff00]"
                >
                  {text}
                </span>
              ),
            )}
          </div>

          {/* Heading */}
          <h1
            className="text-[#f0ede8] leading-[0.95] tracking-[-3px] mb-8"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(52px,8vw,100px)",
            }}
          >
            Hello,
            <br />
            I'm <span className="text-[#aaff00]">Abdul</span>
            <br />
            <em>Ahad.</em>
          </h1>

          {/* Description */}
          <p className="text-[17px] leading-[1.75] text-[#a8a7a7] max-w-[600px] mx-auto mb-12">
            A passionate{" "}
            <strong className="text-[#f0ede8] font-semibold">
              Web Developer
            </strong>{" "}
            crafting seamless digital experiences. With{" "}
            <strong className="text-[#aaff00] font-semibold">2.5+ years</strong>{" "}
            building modern, scalable web applications.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
            <a
              href="/assets/Abdul_Ahad_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#aaff00] text-[#080808] px-7 py-4 rounded-sm text-[12px] tracking-[0.08em] uppercase font-medium transition-all duration-200 hover:opacity-80 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(170,255,0,0.25)]"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <Download size={14} /> Download CV
            </a>

            {[
              {
                href: "https://github.com/abdul9838",
                icon: <Github size={18} />,
                label: "GitHub",
              },
              {
                href: "tel:+91 9838848691",
                icon: <Phone size={18} />,
                label: "Phone",
              },
              {
                href: "https://www.linkedin.com/in/abdul-ahad-04850a248/",
                icon: <Linkedin size={18} />,
                label: "LinkedIn",
              },
              {
                href: "mailto:abdulahed9838@gmail.com",
                icon: <Mail size={18} />,
                label: "Email",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-12 h-12 border border-[#2a2a2a] rounded-sm flex items-center justify-center text-[#a8a7a7] transition-all duration-200 hover:border-[#aaff00] hover:text-[#aaff00] hover:bg-[rgba(170,255,0,0.07)]"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-[#1f1f1f] max-w-[1280px] mx-auto" />

      {/* ══════════════════════════════════════════════
          SKILLS
      ══════════════════════════════════════════════ */}
      <section id="skills" className="py-32">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="mb-20">
            <Label text="My Expertise" />
            <SectionTitle>
              Technical <em className="italic text-[#aaff00]">Skills.</em>
            </SectionTitle>
            <p className="text-[16px] text-[#a8a7a7] mt-5 max-w-md leading-[1.7]">
              Proficiency across technologies and frameworks I ship with every
              day.
            </p>
          </div>

          {/* Skills panel grid */}
          <div className="grid lg:grid-cols-2 gap-px bg-[#1f1f1f] border border-[#1f1f1f] rounded-sm overflow-hidden mb-10">
            {skillsData.map((group) => (
              <div key={group.title} className="bg-[#0e0e0e] p-10">
                <div
                  className="text-[#aaff00] text-[11px] tracking-[0.14em] uppercase mb-10 flex items-center gap-3"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  <span className="w-5 h-px bg-[#aaff00] block" /> {group.title}
                </div>
                <div className="space-y-8">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-baseline mb-3">
                        <span className="text-[14px] font-medium text-[#d4d1cc]">
                          {skill.name}
                        </span>
                        <span
                          className="text-[12px] text-[#444]"
                          style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-px bg-[#1f1f1f] w-full overflow-hidden">
                        <div
                          className="h-full bg-[#aaff00] anim-bar"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional skills */}
          <div>
            <div
              className="text-[#444] text-[10px] tracking-[0.16em] uppercase mb-5"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Additional Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              {additionalSkills.map((tech) => (
                <span
                  key={tech}
                  className="text-[#a8a7a7] border border-[#2a2a2a] px-4 py-2 rounded-sm cursor-default text-[11px] tracking-[0.08em] uppercase transition-all duration-200 hover:border-[#aaff00] hover:text-[#aaff00] hover:bg-[rgba(170,255,0,0.05)]"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-[#1f1f1f] max-w-[1280px] mx-auto" />

      {/* ══════════════════════════════════════════════
          EXPERIENCE
      ══════════════════════════════════════════════ */}
      <section id="experience" className="py-32 bg-[#060606]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="mb-20">
            <Label text="Career Journey" />
            <SectionTitle>
              Work <em className="italic text-[#aaff00]">Experience.</em>
            </SectionTitle>
          </div>

          <div className="flex flex-col gap-px bg-[#1f1f1f] border border-[#1f1f1f] rounded-sm overflow-hidden">
            {experienceData.map((exp, idx) => (
              <div
                key={exp.id}
                className="bg-[#0a0a0a] grid md:grid-cols-[220px_1fr] group hover:bg-[#0f0f0f] transition-colors duration-300"
              >
                {/* Left meta */}
                <div className="p-8 md:border-r border-[#1f1f1f] flex flex-col justify-between gap-6">
                  <div>
                    <div
                      className="text-[#aaff00] text-[10px] tracking-[0.12em] uppercase mb-4"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      0{idx + 1}
                    </div>
                    <div
                      className="text-[#444] text-[11px] tracking-[0.06em] leading-[1.6]"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {exp.duration}
                    </div>
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-[#d4d1cc]">
                      {exp.company}
                    </div>
                    <div
                      className="text-[#444] text-[10px] tracking-[0.06em] mt-1"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Right content */}
                <div className="p-8">
                  <h3
                    className="text-[#f0ede8] mb-6 tracking-[-0.5px] group-hover:text-[#aaff00] transition-colors duration-300 text-[22px]"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {exp.role}
                  </h3>
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-[14px] text-[#a8a7a7] leading-[1.7]"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#aaff00] mt-[10px] flex-shrink-0 block" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-[#1f1f1f] max-w-[1280px] mx-auto" />

      {/* ══════════════════════════════════════════════
          EDUCATION
      ══════════════════════════════════════════════ */}
      <section id="education" className="py-32">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="mb-20">
            <Label text="Academic Background" />
            <SectionTitle>
              My <em className="italic text-[#aaff00]">Education.</em>
            </SectionTitle>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[#1f1f1f] border border-[#1f1f1f] rounded-sm overflow-hidden">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="bg-[#0e0e0e] p-8 group hover:bg-[#111] transition-colors duration-300"
              >
                <div
                  className="text-[#aaff00] text-[11px] tracking-[0.1em] uppercase mb-4"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {edu.year}
                </div>
                <h3
                  className="text-[#f0ede8] text-[20px] tracking-[-0.5px] mb-2 group-hover:text-[#aaff00] transition-colors duration-300"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {edu.degree}
                </h3>
                <p className="text-[13px] text-[#a8a7a7] mb-3 leading-[1.6]">
                  {edu.college}
                </p>
                {edu.description && (
                  <p className="text-[12px] text-[#3a3a3a] border-l-2 border-[#aaff00]/30 pl-4 leading-[1.7]">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-[#1f1f1f] max-w-[1280px] mx-auto" />

      {/* ══════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════ */}
      <section id="services" className="py-32 bg-[#060606]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="mb-20">
            <Label text="What I Offer" />
            <SectionTitle>
              My <em className="italic text-[#aaff00]">Services.</em>
            </SectionTitle>
            <p className="text-[16px] text-[#a8a7a7] mt-5 max-w-md leading-[1.7]">
              Specialized in building modern, scalable, and user-friendly web
              applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#1f1f1f] border border-[#1f1f1f] rounded-sm overflow-hidden">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-[#0e0e0e] p-10 group hover:bg-[#111] transition-colors duration-300"
              >
                <div
                  className="text-[#333] text-[10px] tracking-[0.14em] uppercase mb-8"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {s.num}
                </div>
                <div className="text-[#aaff00] mb-6 transition-transform duration-300 group-hover:translate-x-1">
                  {s.icon}
                </div>
                <h3
                  className="text-[#f0ede8] text-[22px] tracking-[-0.5px] mb-4 group-hover:text-[#aaff00] transition-colors duration-300"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-[14px] text-[#a8a7a7] leading-[1.75]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-[#1f1f1f] max-w-[1280px] mx-auto" />

      {/* ══════════════════════════════════════════════
          PORTFOLIO
      ══════════════════════════════════════════════ */}
      <section id="portfolio" className="py-32">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
            <div>
              <Label text="Recent Work" />
              <SectionTitle>
                Selected <em className="italic text-[#aaff00]">Projects.</em>
              </SectionTitle>
            </div>
            <div
              className="text-[#444] text-[12px] tracking-[0.06em]"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {portfolioProjects.length} projects shipped
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1f1f1f] border border-[#1f1f1f] rounded-sm overflow-hidden">
            {portfolioProjects.map((project, idx) => (
              <article
                key={project.id}
                className={`bg-[#0a0a0a] group relative overflow-hidden ${idx === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    style={{ filter: "grayscale(30%)" }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.filter = "grayscale(0%)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.filter = "grayscale(30%)")
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />

                  {/* External link button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="absolute top-4 right-4 w-10 h-10 bg-[#aaff00] rounded-sm flex items-center justify-center text-[#080808] no-underline opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[#aaff00] text-[10px] tracking-[0.08em] uppercase bg-[rgba(170,255,0,0.08)] border border-[rgba(170,255,0,0.15)] px-3 py-1 rounded-sm"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="text-[#f0ede8] text-[20px] tracking-[-0.5px] mb-2 group-hover:text-[#aaff00] transition-colors duration-300"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-[#a8a7a7] leading-[1.7] mb-5">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#444] no-underline text-[11px] tracking-[0.08em] uppercase transition-colors duration-200 hover:text-[#aaff00] group/link w-fit"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    View Project
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-[#1f1f1f] max-w-[1280px] mx-auto" />

      {/* ══════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════ */}
      <section id="contact" className="py-32 bg-[#060606]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid lg:grid-cols-[1fr_560px] gap-20 items-start">
            {/* Left info */}
            <div>
              <Label text="Get In Touch" />
              <SectionTitle>
                Let's <em className="italic text-[#aaff00]">Work</em>
                <br />
                Together.
              </SectionTitle>
              <p className="text-[16px] text-[#a8a7a7] leading-[1.75] mb-12 max-w-sm mt-5">
                Have a project in mind or want to discuss a collaboration? I'd
                love to hear from you.
              </p>

              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: <Phone size={15} />,
                    label: "Phone",
                    value: "+91 9838848691",
                    href: "tel:+91 9838848691",
                  },
                  {
                    icon: <Mail size={15} />,
                    label: "Email",
                    value: "abdulahadansari810@gmail.com",
                    href: "mailto:abdulahadansari810@gmail.com",
                  },
                  {
                    icon: <Github size={15} />,
                    label: "GitHub",
                    value: "github.com/abdul9838",
                    href: "https://github.com/abdul9838",
                  },
                  {
                    icon: <Linkedin size={15} />,
                    label: "LinkedIn",
                    value: "linkedin.com/in/abdul-ahad",
                    href: "https://www.linkedin.com/in/abdul-ahad-352b203b6/",
                  },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 no-underline group/link"
                  >
                    <div className="w-9 h-9 border border-[#2a2a2a] rounded-sm flex items-center justify-center text-[#444] transition-all duration-200 group-hover/link:border-[#aaff00] group-hover/link:text-[#aaff00] group-hover/link:bg-[rgba(170,255,0,0.07)]">
                      {c.icon}
                    </div>
                    <div>
                      <div
                        className="text-[#333] text-[10px] tracking-[0.1em] uppercase mb-0.5"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        {c.label}
                      </div>
                      <div className="text-[13px] text-[#666] transition-colors duration-200 group-hover/link:text-[#f0ede8]">
                        {c.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="border border-[#1f1f1f] rounded-sm overflow-hidden">
              <div className="bg-[#0e0e0e] px-8 py-5 border-b border-[#1f1f1f]">
                <span
                  className="text-[#444] text-[10px] tracking-[0.12em] uppercase"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Send a message
                </span>
              </div>
              <form
                onSubmit={handleSubmit}
                className="bg-[#0a0a0a] p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    {
                      id: "name",
                      type: "text",
                      label: "Name",
                      placeholder: "Your name",
                      autoComplete: "name",
                    },
                    {
                      id: "email",
                      type: "email",
                      label: "Email",
                      placeholder: "your@email.com",
                      autoComplete: "email",
                    },
                  ].map((f) => (
                    <div key={f.id}>
                      <label
                        htmlFor={f.id}
                        className="block text-[#444] text-[10px] tracking-[0.1em] uppercase mb-2"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        type={f.type}
                        name={f.id}
                        placeholder={f.placeholder}
                        autoComplete={f.autoComplete}
                        value={formData[f.id]}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#111] border border-[#2a2a2a] rounded-sm px-4 py-3 text-[14px] text-[#d4d1cc] placeholder-[#333] outline-none transition-all duration-200 focus:border-[#aaff00] focus:bg-[#0e0e0e]"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label
                    htmlFor="contact"
                    className="block text-[#444] text-[10px] tracking-[0.1em] uppercase mb-2"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    Contact
                  </label>
                  <input
                    id="contact"
                    type="text"
                    name="contact"
                    placeholder="+91 xxxxx-xxxxx"
                    autoComplete="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#111] border border-[#2a2a2a] rounded-sm px-4 py-3 text-[14px] text-[#d4d1cc] placeholder-[#333] outline-none transition-all duration-200 focus:border-[#aaff00] focus:bg-[#0e0e0e]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[#444] text-[10px] tracking-[0.1em] uppercase mb-2"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    className="w-full bg-[#111] border border-[#2a2a2a] rounded-sm px-4 py-3 text-[14px] text-[#d4d1cc] placeholder-[#333] outline-none transition-all duration-200 focus:border-[#aaff00] focus:bg-[#0e0e0e] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#aaff00] text-[#080808] py-4 rounded-sm text-[12px] tracking-[0.08em] uppercase font-medium flex items-center justify-center gap-3 transition-all duration-200 hover:opacity-85 hover:shadow-[0_12px_40px_rgba(170,255,0,0.2)] cursor-pointer border-none"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {submitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
                      <span className="text-sm font-medium text-gray-700">
                        Sending
                      </span>
                    </div>
                  ) : (
                    <>
                      Send Message <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
      <footer className="border-t border-[#1f1f1f] py-10">
        <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="#home"
            className="text-[#f0ede8] no-underline text-[20px] tracking-tight"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Abdul<span className="text-[#aaff00]">.</span>
          </a>

          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((l) => (
              <li key={l.name}>
                <a
                  href={l.href}
                  className="text-[#444] no-underline text-[10px] tracking-[0.1em] uppercase hover:text-[#aaff00] transition-colors duration-200"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {l.name}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="text-[#2a2a2a] text-[10px] tracking-[0.06em]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            © {new Date().getFullYear()} Abdul Ahad. Built with React &
            Tailwind.
          </div>
        </div>
      </footer>
    </div>
  );
}
