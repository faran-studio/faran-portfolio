 import { useState } from 'react'

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

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
      title: 'NOOR',
      category: 'Web Design',
      style: 'one',
    },
    {
      number: '02',
      title: 'Real Estate',
      category: 'Web Development',
      style: 'two',
    },
    {
      number: '03',
      title: 'Jewelry',
      category: 'UI / UX',
      style: 'three',
    },
    {
      number: '04',
      title: 'Saharrta',
      category: 'Creative',
      style: 'four',
    },
    {
      number: '05',
      title: "SARA's English World",
      category: 'Web Design',
      style: 'five',
    },
  ]

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(function (project) {
          return project.category === activeFilter
        })

  const mainProjects = filteredProjects.filter(function (project) {
    return ['01', '02', '03', '04'].includes(project.number)
  })

  const standaloneProjects = filteredProjects.filter(function (project) {
    return project.number === '05'
  })

  const selected = projects.find(function (project) {
    return project.number === selectedProject
  })

  function handleFilter(filter: string) {
    setActiveFilter(filter)
    setSelectedProject(null)
  }

  function handleOpen(projectNumber: string) {
    setSelectedProject(projectNumber)
  }

  function handleClose() {
    setSelectedProject(null)
  }

  function getCardSide(number: string) {
    if (number === '01' || number === '03') {
      return 'left'
    }

    return 'right'
  }

  return (
    <main
      className={
        'portfolio-page ' +
        (selectedProject ? 'portfolio-projects-open' : '')
      }
    >
      <header className="portfolio-header">
        <p className="portfolio-kicker">Selected Work</p>

        <h1>
          My <span>Portfolio.</span>
        </h1>

        <p className="portfolio-intro">
          A collection of websites, digital experiences,
          and creative work built through design and development.
        </p>
      </header>

      <nav
        className="portfolio-filters"
        aria-label="Portfolio filters"
      >
        {filters.map(function (filter) {
          const filterClass =
            'portfolio-filter ' +
            (filter === activeFilter ? 'active' : '')

          return (
            <button
              key={filter}
              type="button"
              className={filterClass}
              onClick={function () {
                handleFilter(filter)
              }}
            >
              {filter}
            </button>
          )
        })}
      </nav>

      <section className="portfolio-projects-area">
        <div className="portfolio-main-grid">
          {mainProjects.map(function (project) {
            const side = getCardSide(project.number)

        

            return (
              <article
                key={project.number}
                className={
                  'portfolio-card ' +
                  'portfolio-card-' +
                  project.style +
                  ' ' +
                  'portfolio-card-' +
                  side
                }
                onClick={function () {
                  handleOpen(project.number)
                }}
              >
                <div className="portfolio-card-image">
                  <span className="portfolio-card-number">
                    {project.number}
                  </span>
 <span className="portfolio-shape shape-one" />
                  <span className="portfolio-shape shape-two" />
                  <span className="portfolio-shape shape-three" />
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
            )
          })}
        </div>

        {standaloneProjects.length > 0 && (
          <div className="portfolio-standalone-area">
            {standaloneProjects.map(function (project) {
              return (
                <article
                  key={project.number}
                  className={
                    'portfolio-card ' +
                    'portfolio-standalone-card ' +
                    'portfolio-card-' +
                    project.style
                  }
                  onClick={function () {
                    handleOpen(project.number)
                  }}
                >
                  <div className="portfolio-card-image">
                    <span className="portfolio-card-number">
                      {project.number}
                    </span>

                    <span className="portfolio-shape shape-one" />
                    <span className="portfolio-shape shape-two" />
                    <span className="portfolio-shape shape-three" />
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
              )
            })}
          </div>
        )}
      </section>

      {selectedProject && selected && (
        <section className="portfolio-full-showcase">
          <button
            type="button"
            className="portfolio-showcase-close"
            onClick={handleClose}
            aria-label="Close project showcase"
          >
            ×
          </button>

          <div className="portfolio-project-title">
            <span>{selected.number}</span>

            <div>
              <p>{selected.category}</p>
              <h1>{selected.title}</h1>
            </div>
          </div>

          <div className="portfolio-showcase-preview">
            <div
              className={
                'project-site-preview preview-' +
                selected.style
              }
            >
              <section className="preview-section preview-hero">
                <span>
                  PROJECT {selected.number}
                </span>

                <h3>{selected.title}</h3>

                <p>Website Showcase</p>
              </section>

              <section className="preview-section preview-section-light">
                <span>01</span>

                <h3>Visual Direction</h3>

                <div className="preview-lines">
                  <i />
                  <i />
                  <i />
                </div>
              </section>

              <section className="preview-section preview-section-dark">
                <span>02</span>

                <h3>Selected Sections</h3>

                <div className="preview-blocks">
                  <div />
                  <div />
                </div>
              </section>

              <section className="preview-section preview-section-accent">
                <span>03</span>

                <h3>Digital Experience</h3>

                <p>
                  A visual preview of the project's design,
                  layout, typography, and overall experience.
                </p>
              </section>
 <section className="preview-section preview-ending">
                <span>04</span>

                <h3>End of Showcase</h3>
              </section>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

export default Portfolio