import { contactLinks } from '@/data/projectsData';

export default function ContactSection() {
  return (
    <section id="contact-section" className="py-16 border-t border-[#323031]/10">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-extrabold text-[#084C61] mb-4">Get In Touch</h2>
        <p className="text-[#323031]/80 text-sm mb-8 leading-relaxed">
          Whether you want to discuss full-stack engineering roles, research opportunities, or just connect over tech and design, my inbox is always open.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border-2 border-[#323031] bg-white shadow-[3px_3px_0px_#323031] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#323031] transition-all flex flex-col justify-between group"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-[#177E89] font-bold">
                {link.label}
              </span>
              <span className="text-xs text-[#323031] font-medium mt-3 truncate group-hover:underline">
                {link.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}