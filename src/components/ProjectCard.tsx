'use client';

import { useState } from 'react';
import { Project } from '@/data/projectsData';

export default function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      id={`project-${project.id}`}
      className="p-6 md:p-8 rounded-2xl border-2 border-[#323031] bg-white shadow-[4px_4px_0px_#323031] transition-all"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl border border-[#323031] bg-[#FFFFE9] flex items-center justify-center font-bold text-lg text-[#084C61] overflow-hidden">
            {project.logoUrl ? (
              <img src={project.logoUrl} alt={project.title} className=" h-full object-contain" />
            ) : (
              project.title.charAt(0)
            )}
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-[#323031]">{project.title}</h3>
            <p className="text-xs text-[#177E89] font-mono mt-0.5">{project.subtitle}</p>
          </div>
        </div>
        <div className="text-xs font-mono px-3 py-1 bg-[#FFFFE9] border border-[#323031] rounded-full self-start md:self-auto text-[#323031]">
          {project.dateRange}
        </div>
      </div>

      <p className="text-sm text-[#323031]/80 leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[11px] font-mono px-2.5 py-1 bg-[#084C61]/5 text-[#084C61] border border-[#084C61]/20 rounded-md">
            {tag}
          </span>
        ))}
      </div>

      {/* Image Pile Preview */}
      {project.imagePile && project.imagePile.length > 0 && (
        <div className="mb-6 p-4 rounded-xl bg-[#FFFFE9]/50 border border-[#323031]/10 flex gap-3 overflow-x-auto">
          {project.imagePile.map((img, idx) => (
            <div key={idx} className="w-32 h-20 rounded-lg border border-[#323031] bg-white flex items-center justify-center text-[10px] font-mono text-[#323031]/40 shrink-0 shadow-sm">
              Preview {idx + 1}
            </div>
          ))}
        </div>
      )}

      {/* Accordion Expandable Content */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-[#323031]/10 space-y-3 animate-fadeIn">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#084C61] font-bold">Key Engineering Contributions</h4>
          <ul className="space-y-2">
            {project.bulletPoints.map((bullet, idx) => (
              <li key={idx} className="text-xs text-[#323031]/80 flex items-start gap-2">
                <span className="text-[#177E89] font-bold">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer Actions / Links */}
      <div className="flex items-center justify-between pt-4 mt-6 border-t border-[#323031]/10">
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-xs font-bold text-[#084C61] hover:underline">
              Live Demo ↗
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-xs font-bold text-[#323031] hover:underline">
              GitHub ↗
            </a>
          )}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-mono font-bold text-[#177E89] flex items-center gap-1 hover:opacity-80 transition-opacity"
        >
          <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
          <span className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
        </button>
      </div>
    </div>
  );
}