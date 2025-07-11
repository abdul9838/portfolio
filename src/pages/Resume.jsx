import { FileDown } from "lucide-react";

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Khwaja Moinuddin Chisthi Language University, Lucknow",
      duration: "2020 - 2023",
      description:
        "Graduated with honors. Focused on Software Engineering and Web Development.",
    },
    {
      degree: "Deploma",
      institution: "Government Polytechnic College, Etawah",
      duration: "2017 - 2020",
      description:
        "Completed my Diploma in Computer Science. Focused on Software Engineering and Web Development.",
    },
    {
      degree: "Intermediate",
      institution: "S. L. B. S. Inter College, Deoria",
      duration: "2015 - 2017",
    },
    {
      degree: "High School",
      institution: "Kishan Intermediate College, Deoria",
      duration: "2013 - 2015",
    },
  ];

  const experience = [
    {
      position: "React Frontend Developer",
      company: "Growmore Tech",
      duration: "Mar 2024 - Present",
      description:
        "Worked on multiple web applications using React. Used coe splitting and best practices to improved application performance by 40%.",
    },
    {
      position: "Frontend Developer Intern",
      company: "Growmore Tech",
      duration: "Jan 2024 -Fab 2024",
      description:
        "Worked on multiple web applications using HTML, CSS, React. Implemented best practices to improved application performance by 30%.",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2021",
    },
    {
      name: "Google Professional Cloud Developer",
      issuer: "Google Cloud",
      year: "2020",
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      year: "2019",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            My education and professional experience
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <a
            href="/Abdul_Ahad.pdf"
            download
            className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-violet-600 text-white font-medium hover:from-purple-700 hover:to-violet-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Resume
            <FileDown />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-500 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l border-purple-900/30 last:border-0 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-violet-600"></div>
                  <div className="px-4 py-3 bg-gray-900/50 rounded-lg border border-purple-900/30">
                    <div className="flex flex-wrap justify-between items-center mb-2">
                      <h4 className="text-lg font-bold text-white">
                        {item.degree}
                      </h4>
                      <span className="text-sm font-medium text-purple-500 bg-purple-900/30 px-3 py-1 rounded-full">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-2">{item.institution}</p>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-500 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l border-purple-900/30 last:border-0 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-violet-600"></div>
                  <div className="px-4 py-3 bg-gray-900/50 rounded-lg border border-purple-900/30">
                    <div className="flex flex-wrap justify-between items-center mb-2">
                      <h4 className="text-lg font-bold text-white">
                        {item.position}
                      </h4>
                      <span className="text-sm font-medium text-purple-500 bg-purple-900/30 px-3 py-1 rounded-full">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-2">{item.company}</p>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
