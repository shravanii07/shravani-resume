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
                Frontend Developer | UI Developer | Full Stack Enthusiast
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-sm">
                <a
                  href="mailto:dandgeshravani@email.com"
                  className="flex items-center gap-2 hover:text-indigo-200 transition-colors"
                >
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

                {/* Add your real links */}
                <a
                  href="https://github.com/"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-indigo-200 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
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
              I am a Computer Science Engineering graduate passionate about frontend development and UI design. 
              I have hands-on experience in building responsive web interfaces and working with modern technologies 
              like HTML, CSS, JavaScript, React, and Django. I enjoy creating clean, user-friendly web experiences 
              and continuously learning new tools and technologies.
            </p>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-600 pb-2 mb-4">
              Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Django", "Web Scraping"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "VS Code", "Postman"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Other</h3>
                <div className="flex flex-wrap gap-2">
                  {["UI/UX", "Communication", "Problem Solving"].map((skill) => (
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
                <h3 className="text-lg font-semibold text-gray-800">Web Development Intern (Remote)</h3>
                <p className="text-indigo-600 font-medium">Orizzonte Consultancy Services</p>
                <p className="text-gray-500 text-sm mb-2">Feb 2024 - Completed</p>

                <ul className="text-gray-600 space-y-1 list-disc list-inside">
                  <li>Worked with HTML and CSS to build responsive UI components.</li>
                  <li>Contributed to designing and improving the company’s privacy page UI.</li>
                  <li>Built a feedback form and assisted with content creation for Instagram posts.</li>
                  <li>Learned and applied Django and web scraping concepts for R&D tasks.</li>
                  <li>Helped with content creation for comapnys instagram page.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-600 pb-2 mb-4">
              Education
            </h2>

            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-indigo-200">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
                <h3 className="text-lg font-semibold text-gray-800">B.Tech in Computer Science & Engineering - 7.10 CGPA</h3>
                <p className="text-indigo-600 font-medium">Marathwada Institute of Technology, Chh Sambhajinagar</p>
              </div>

              <div className="relative pl-8 border-l-2 border-indigo-200">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                <h3 className="text-lg font-semibold text-gray-800">HSC - 74%</h3>
                <p className="text-indigo-600 font-medium">Nath Jr College</p>
              </div>

              <div className="relative pl-8 border-l-2 border-indigo-200">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-emerald-600 rounded-full"></div>
                <h3 className="text-lg font-semibold text-gray-800">SSC - 80%</h3>
                <p className="text-indigo-600 font-medium">Fatima Convent School</p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-600 pb-2 mb-4">
              Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-800 mb-2">Swasta (Smart India Hackathon 2022)</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Contributed to chatbot features and login interface development for a project selected in SIH 2022.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["UI Design", "Frontend", "Team Project"].map((t) => (
                    <span key={t} className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded text-xs">{t}</span>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-800 mb-2">Pack My Bag Application UI (2023)</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Worked on user interface development and improved design experience for the application.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["UI", "Frontend", "Design"].map((t) => (
                    <span key={t} className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-xs">{t}</span>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-800 mb-2">Speech-to-Text Converter</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Built a speech-to-text converter using VS Code demonstrating software development skills.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "Web APIs", "Project"].map((t) => (
                    <span key={t} className="px-2 py-1 bg-emerald-100 text-emerald-600 rounded text-xs">{t}</span>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-800 mb-2">Web Feedback Form + Research Tasks</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Created feedback form UI and explored Django + web scraping techniques during internship R&D.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "Django"].map((t) => (
                    <span key={t} className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-6 text-center border-t border-gray-100">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Shravani Dandge — Portfolio Resume
          </p>
        </div>
      </main>
    </div>
  );
}