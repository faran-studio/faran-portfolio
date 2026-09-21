const navigationItems = [
  {
    id: 'home',
    label: 'Home',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.5 10.5 12 3.5l8.5 7" />
        <path d="M5.5 9.5V20h13V9.5" />
        <path d="M9.5 20v-6h5v6" />
      </svg>
    ),
  },
  {
    id: 'about',
    label: 'About',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5.5 20c.8-3.4 3-5.5 6.5-5.5s5.7 2.1 6.5 5.5" />
      </svg>
    ),
  },
  {
    id: 'resume',
    label: 'Resume',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="3.5" width="14" height="17" rx="1.5" />
        <path d="M8.5 8h7M8.5 12h7M8.5 16h4" />
      </svg>
    ),
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="6.5" height="6.5" rx="1" />
        <rect x="13.5" y="4" width="6.5" height="6.5" rx="1" />
        <rect x="4" y="13.5" width="6.5" height="6.5" rx="1" />
        <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1" />
      </svg>
    ),
  },
  {
    id: 'experiments',
    label: 'Experiments',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 3.5h6" />
        <path d="M10 3.5v6L5.5 17a2.5 2.5 0 0 0 2.2 3.5h8.6a2.5 2.5 0 0 0 2.2-3.5L14 9.5v-6" />
        <path d="M7.5 16h9" />
      </svg>
    ),
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="14" rx="2" />
        <path d="m4.5 6.5 7.5 6 7.5-6" />
      </svg>
    ),
  },
]

function Navigation({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="navigation-wrapper">
      <nav className="navigation">
        {navigationItems.map((item) => (
          <button
           key={item.id} 
          type="button" onClick={() =>  onNavigate(item.id)}>
            <span className="navigation-label">
              {item.label}
            </span>

            <span className="navigation-icon">
              {item.icon}
            </span>
          </button>
        ))}
      </nav>

      <div className="navigation-controls">
        <button type="button" aria-label="Previous">
          ‹
        </button>

        <button type="button" aria-label="Next">
          ›
        </button>
      </div>
    </div>
  )
}

export default Navigation

