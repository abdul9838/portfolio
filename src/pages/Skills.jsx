const Skills = () => {
  const technicalSkills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 90 },
    { name: "React", percentage: 85 },
    { name: "Node.js", percentage: 80 },
    { name: "MongoDB", percentage: 70 },
    { name: "Express.js", percentage: 75 },
  ];

  const softSkills = [
    { name: "Communication", percentage: 80 },
    { name: "Teamwork", percentage: 85 },
    { name: "Problem Solving", percentage: 95 },
    { name: "Time Management", percentage: 80 },
  ];

  const techLogos = [
    {
      name: "React",
      logo: "https://miro.medium.com/v2/resize:fit:2000/0*zj_kGMq6f2ZxW7p3.png",
    },
    { name: "Node.js", logo: "https://nodejs.org/static/images/logo.svg" },
    {
      name: "JavaScript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "MongoDB",
      logo: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
    },
    {
      name: "HTML5",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
    },
    {
      name: "CSS3",
      logo: "https://billing.flourisense.in/wp-content/uploads/2022/11/css3.png",
    },
    {
      name: "Tailwind CSS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
    },
    {
      name: "Git",
      logo: "https://avatars.githubusercontent.com/u/18133?s=280&v=4",
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
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Here are my skills and technologies I've been working with recently
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-purple-500">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-violet-600 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
            <div className="space-y-6">
              {softSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-purple-500">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-violet-600 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {techLogos.map(({ name, logo }) => (
              <div
                key={name}
                className="flex flex-col items-center justify-center p-6 bg-gray-900/50 rounded-lg border border-purple-900/30 hover:border-purple-500/50 transition-colors"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img
                    src={logo}
                    alt={name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-center">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
