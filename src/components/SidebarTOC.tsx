'use client';

import { useState, useEffect } from 'react';

interface SidebarTOCProps {
  projectTitles: { id: string; title: string }[];
}

export default function SidebarTOC({ projectTitles }: SidebarTOCProps) {
  const [activeSection, setActiveSection] = useState<string>('profile');

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled to the absolute bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + 250;

      // Check contact section first if in view
      const contactEl = document.getElementById('contact-section');
      if (contactEl && contactEl.offsetTop <= scrollPosition) {
        setActiveSection('contact');
        return;
      }

      // Check coming soon section
      const comingSoonEl = document.getElementById('coming-soon-section');
      if (comingSoonEl && comingSoonEl.offsetTop <= scrollPosition) {
        setActiveSection('coming-soon');
        return;
      }

      // Check individual projects bottom-up or top-down
      for (const proj of projectTitles) {
        const el = document.getElementById(`project-${proj.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the project card is near or above the upper-middle of the viewport, and bottom is still visible
          if (rect.top <= 300 && rect.bottom >= 100) {
            setActiveSection(`project-${proj.id}`);
            return;
          }
        }
      }

      // Check profile section
      const profileEl = document.getElementById('profile-section');
      if (profileEl) {
        const rect = profileEl.getBoundingClientRect();
        if (rect.top <= 300 && rect.bottom >= 0) {
          setActiveSection('profile');
          return;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [projectTitles]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="w-64 hidden lg:block sticky top-24 h-[calc(100vh-6rem)] p-6 flex flex-col justify-between border-r border-[#323031]/10">
      <div className="space-y-6">
        <h3 className="text-xs font-mono uppercase tracking-widest text-[#084C61]/70">Navigation</h3>
        
        <nav className="space-y-4">
          {/* Profile / Hero Link */}
          <div>
            <button
              onClick={() => scrollToSection('profile-section')}
              className={`text-left transition-all duration-200 block font-bold ${
                activeSection === 'profile'
                  ? 'text-[#084C61] text-xl translate-x-2'
                  : 'text-[#323031]/60 text-sm hover:text-[#323031]'
              }`}
            >
              Profile
            </button>
          </div>

          {/* Projects Link & Nested Sub-headings */}
          <div className="space-y-2">
            <button
              onClick={() => scrollToSection(`project-${projectTitles[0]?.id}`)}
              className={`text-left transition-all duration-200 block font-bold ${
                activeSection.startsWith('project-')
                  ? 'text-[#084C61] text-xl translate-x-2'
                  : 'text-[#323031]/60 text-sm hover:text-[#323031]'
              }`}
            >
              Projects
            </button>
            
            {/* Nested project titles list */}
            <div className="pl-4 space-y-2 border-l border-[#323031]/10 my-2">
              {projectTitles.map((proj) => {
                const isItemActive = activeSection === `project-${proj.id}`;
                return (
                  <button
                    key={proj.id}
                    onClick={() => scrollToSection(`project-${proj.id}`)}
                    className={`text-left transition-all duration-200 block text-xs truncate w-full ${
                      isItemActive
                        ? 'text-[#177E89] font-semibold translate-x-1'
                        : 'text-[#323031]/50 hover:text-[#323031]'
                    }`}
                  >
                    {proj.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Coming Soon Link */}
          <div>
            <button
              onClick={() => scrollToSection('coming-soon-section')}
              className={`text-left transition-all duration-200 block font-bold ${
                activeSection === 'coming-soon'
                  ? 'text-[#084C61] text-xl translate-x-2'
                  : 'text-[#323031]/60 text-sm hover:text-[#323031]'
              }`}
            >
              Pipeline
            </button>
          </div>

          {/* Contact Link */}
          <div>
            <button
              onClick={() => scrollToSection('contact-section')}
              className={`text-left transition-all duration-200 block font-bold ${
                activeSection === 'contact'
                  ? 'text-[#084C61] text-xl translate-x-2'
                  : 'text-[#323031]/60 text-sm hover:text-[#323031]'
              }`}
            >
              Contact
            </button>
          </div>
        </nav>
      </div>

      <div className="text-[10px] font-mono text-[#323031]/40 uppercase tracking-widest">
        Desktop Viewport v2.0
      </div>
    </aside>
  );
}