import { useState } from 'react'

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = [
    'All',
    'Web Design',
    'Web Development',
    'UI / UX',
    'Creative',
  ]

  const projects = [
    {
      number: '01',
      title: 'Project One',
      category: 'Web Design',
    },
    {
      number: '02',
      title: 'Project Two',
      category: 'Web Development',
    },
    {
      number: '03',
      title: 'Project Three',
      category: 'UI / UX',
    },
    {
      number: '04',
      title: 'Project Four',
      category: 'Creative',
    },
    {
      number: '05',
      title: 'Project Five',
      category: 'Web Design',
    },
    {
      number: '06',
      title: 'Project Six',
      category: 'Web Development',
    },
  ]

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        )

  return (
    <main className="portfolio-page">

      <header className="portfolio-header">
        <p className="portfolio-kicker">Selected Work</p>

        <h1>Portfolio</h1>

        <p className="portfolio-intro">
          A collection of websites, digital experiences,
          and creative work built through design and development.
        </p>
      </header>

      <nav
        className="portfolio-filters"
        aria-label="Portfolio filters"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={activeFilter === filter ? 'active' : ''}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </nav>

      <section className="portfolio-grid">

        {filteredProjects.map((project) => (
          <article
            className="portfolio-card"
            key={project.number}
          >
            <div className="portfolio-card-image">
              <span>{project.number}</span>
            </div>

            <div className="portfolio-card-info">
              <div>
                <p>{project.category}</p>
                <h2>{project.title}</h2>
              </div>

              <span className="portfolio-card-arrow">
                ↗
              </span>
            </div>
          </article>
        ))}

      </section>

    </main>
  )
}

export default Portfolio

