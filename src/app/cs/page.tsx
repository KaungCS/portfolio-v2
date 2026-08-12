import DesktopNotice from '@/components/DesktopNotice';
import GlobalNav from '@/components/GlobalNav';
import SidebarTOC from '@/components/SidebarTOC';
import ProjectCard from '@/components/ProjectCard';
import ContactSection from '@/components/ContactSection';
import { csProfileData, featuredProjects, comingSoonProjects } from '@/data/projectsData';

export default function CSPage() {
  const projectTitles = featuredProjects.map((p) => ({ id: p.id, title: p.title }));

  return (
    <main className="min-h-screen bg-[#FFFFE9] text-[#323031] relative">
      {/* Protect desktop-first constraint */}
      <DesktopNotice />

      {/* Floating Mode Switcher */}
      <GlobalNav />

      <div className="max-w-7xl mx-auto flex">
        {/* Sticky Table of Contents Sidebar */}
        <SidebarTOC projectTitles={projectTitles} />

        {/* Main Content Area */}
        <div className="flex-1 px-6 md:px-16 py-12 max-w-4xl space-y-24">
          
          {/* PROFILE / HERO SECTION */}
          <section id="profile-section" className="pt-8 space-y-8">
            <div className="p-8 rounded-2xl border-2 border-[#323031] bg-white shadow-[6px_6px_0px_#323031] flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-2xl border-2 border-[#323031] bg-[#084C61] flex items-center justify-center text-white font-extrabold text-3xl shadow-inner shrink-0">
                {csProfileData.name.charAt(0)}
              </div>
              <div className="space-y-2 text-center md:text-left">
                <h1 className="text-3xl font-extrabold text-[#323031]">{csProfileData.name}</h1>
                <p className="text-sm font-mono text-[#177E89]">{csProfileData.title}</p>
                <p className="text-xs text-[#323031]/70">{csProfileData.focus}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={`#project-${featuredProjects[0]?.id}`}
                className="px-6 py-3 rounded-xl bg-[#084C61] text-white font-bold text-xs uppercase tracking-wider border-2 border-[#323031] shadow-[3px_3px_0px_#323031] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#323031] transition-all"
              >
                Projects
              </a>
              <a
                href="#contact-section"
                className="px-6 py-3 rounded-xl bg-[#FFC857] text-[#323031] font-bold text-xs uppercase tracking-wider border-2 border-[#323031] shadow-[3px_3px_0px_#323031] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#323031] transition-all"
              >
                Contact Me
              </a>
            </div>
          </section>

          {/* FEATURED PROJECTS SECTION */}
          <section id="projects-section" className="space-y-8">
            <div className="border-b-2 border-[#323031] pb-4">
              <h2 className="text-3xl font-extrabold text-[#084C61]">Featured Projects</h2>
              <p className="text-xs font-mono text-[#323031]/60 mt-1">Production software, hackathon wins, and HCI prototypes</p>
            </div>

            <div className="space-y-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          {/* COMING SOON / PIPELINE SECTION */}
          <section id="coming-soon-section" className="space-y-8">
            <div className="border-b-2 border-[#323031] pb-4">
              <h2 className="text-3xl font-extrabold text-[#084C61]">Pipeline / Coming Soon</h2>
              <p className="text-xs font-mono text-[#323031]/60 mt-1">Active builds currently in development</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {comingSoonProjects.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl border-2 border-dashed border-[#323031]/60 bg-white/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono px-2.5 py-1 bg-[#FFC857] text-[#323031] border border-[#323031] rounded-md font-bold uppercase tracking-wider">
                      Expected: {item.expectedFinish}
                    </span>
                    <h3 className="text-xl font-bold text-[#323031] mt-2">{item.title}</h3>
                    <p className="text-xs text-[#323031]/70 leading-relaxed max-w-xl">{item.teaser}</p>
                  </div>
                  <div className="w-24 h-16 rounded-xl border border-[#323031] bg-white flex items-center justify-center text-[10px] font-mono text-[#323031]/40 shrink-0">
                    In Build
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT SECTION */}
          <ContactSection />

        </div>
      </div>
    </main>
  );
}