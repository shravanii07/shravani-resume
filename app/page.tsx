import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-12 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
              <Image
                src="/neow.jpg"
                alt="Shravani Dandge"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Name and Title */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tight">
                Shravani Babasaheb Dandge
              </h1>
              <p className="text-xl mt-2 text-indigo-100">
                Frontend Developer
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-sm">
                <a href="mailto: dandgeshravani@email.com" className="flex items-center gap-2 hover:text-indigo-200 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  dandgeshravani@email.com
                </a>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Pune, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-8 py-10 space-y-10">
          {/* About Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-600 pb-2 mb-4">
              About Me
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Passionate and talented Full Stack Developer with expertise in building scalable web applications.
              Proficient in modern frontend and backend technologies with a strong foundation in software development
              principles. Committed to writing clean, efficient code and delivering exceptional user experiences.
            </p>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-600 pb-2 mb-4">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Spring Boot", "Node.js", "REST APIs", "MySQL", "MongoDB"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "Docker", "AWS", "VS Code", "Postman"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Problem Solving", "Team Collaboration", "Communication", "Agile/Scrum"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-600 pb-2 mb-4">
              Experience
            </h2>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-indigo-200">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
                <h3 className="text-lg font-semibold text-gray-800">Full Stack Developer</h3>
                <p className="text-indigo-600 font-medium">Tech Solutions Pvt. Ltd.</p>
                <p className="text-gray-500 text-sm mb-2">Jan 2023 - Present</p>
                <ul className="text-gray-600 space-y-1 list-disc list-inside">
                  <li>Developed responsive web applications using React and TypeScript</li>
                  <li>Built RESTful APIs using Java Spring Boot framework</li>
                  <li>Collaborated with cross-functional teams to deliver high-quality products</li>
                  <li>Implemented modern UI/UX designs using Tailwind CSS</li>
                </ul>
              </div>
              <div className="relative pl-8 border-l-2 border-indigo-200">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                <h3 className="text-lg font-semibold text-gray-800">Junior Software Developer</h3>
                <p className="text-indigo-600 font-medium">Innovate Technologies</p>
                <p className="text-gray-500 text-sm mb-2">Jun 2021 - Dec 2022</p>
                <ul className="text-gray-600 space-y-1 list-disc list-inside">
                  <li>Developed and maintained Java-based applications</li>
                  <li>Created interactive frontend components using JavaScript and React</li>
                  <li>Participated in code reviews and agile development processes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-600 pb-2 mb-4">
              Education
            </h2>
            <div className="relative pl-8 border-l-2 border-indigo-200">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
              <h3 className="text-lg font-semibold text-gray-800">Bachelor of Engineering in Computer Science</h3>
              <p className="text-indigo-600 font-medium">Pune University</p>
              <p className="text-gray-500 text-sm">2017 - 2021</p>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-600 pb-2 mb-4">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-800 mb-2">E-Commerce Platform</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Full-stack e-commerce application with React frontend and Spring Boot backend,
                  featuring user authentication, product catalog, and payment integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded text-xs">React</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded text-xs">Java</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded text-xs">MySQL</span>
                </div>
              </div>
              <div className="p-5 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-800 mb-2">Task Management App</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Collaborative task management tool with real-time updates,
                  drag-and-drop functionality, and team workspace features.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-xs">TypeScript</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-xs">Node.js</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-xs">MongoDB</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-6 text-center border-t border-gray-100">
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Shravani Dandge - Full Stack Developer
          </p>
        </div>
      </main>
    </div>
  );
}
