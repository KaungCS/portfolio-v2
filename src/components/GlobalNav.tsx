'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function GlobalNav() {
  const pathname = usePathname();

  const modes = [
    { path: '/cs', label: 'CS', icon: '</>' },
    { path: '/academics', label: 'Academics', icon: '🎓' },
    { path: '/creative', label: 'Creative', icon: '🎨' },
    { path: '/about', label: 'About', icon: '👤' },
  ];

  return (
    <nav className="fixed top-6 right-6 z-40 bg-white/80 backdrop-blur-md border border-[#323031]/20 p-1.5 rounded-full shadow-lg flex items-center gap-1">
      {modes.map((mode) => {
        const isActive = pathname.startsWith(mode.path);
        return (
          <Link
            key={mode.path}
            href={mode.path}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
              isActive
                ? 'bg-[#084C61] text-white shadow-sm'
                : 'text-[#323031] hover:bg-black/5'
            }`}
          >
            <span>{mode.icon}</span>
            <span className="hidden sm:inline">{mode.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}