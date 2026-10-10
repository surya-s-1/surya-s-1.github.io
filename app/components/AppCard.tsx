'use client';

import { useState } from 'react';
import { SquareArrowOutUpRight, ArrowRight, ArrowUp } from 'lucide-react';
import { AppProject, TECH_ICONS } from '../data/apps';

interface AppCardProps {
  app: AppProject;
  defaultExpanded?: boolean;
}

export function AppCard({ app, defaultExpanded = false }: AppCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={`app-card ${isExpanded ? 'is-expanded' : ''}`} id={`app-${app.id}`}>
      {/* Top Header Row */}
      <div
        className="card-header"
        onClick={toggleExpand}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleExpand();
          }
        }}
        aria-expanded={isExpanded}
      >
        <span className="app-title">{app.title}</span>

        <div className="card-header-actions">
          {/* Open Link Button (text only when expanded) */}
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`open-link-btn ${isExpanded ? 'with-text' : 'icon-only'}`}
            onClick={(e) => e.stopPropagation()}
            title={`Open ${app.title}`}
          >
            {isExpanded && <span>Open</span>}
            <SquareArrowOutUpRight size={17} strokeWidth={2.4} />
          </a>

          {/* Toggle Button */}
          <button
            type="button"
            className="toggle-arrow-btn"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
            onClick={(e) => {
              e.stopPropagation();
              toggleExpand();
            }}
          >
            {isExpanded ? (
              <ArrowUp size={16} strokeWidth={2.5} />
            ) : (
              <ArrowRight size={16} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="card-body">
          <div className="description-container">
            <h3 className="description-label">Description</h3>
            <p className="description-text">{app.description}</p>
          </div>

          <div className="tech-stack-container">
            <div className="tech-badges-row">
              {app.techStack.map((tech) => {
                const iconSrc = TECH_ICONS[tech];
                return (
                  <span key={tech} className="tech-badge">
                    {iconSrc && (
                      <img
                        src={iconSrc}
                        alt={`${tech} logo`}
                        className="tech-badge-icon"
                        width={17}
                        height={17}
                      />
                    )}
                    <span>{tech}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
