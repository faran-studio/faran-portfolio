
function Portfolio() {
  const filters = ['All', 'Web Design', 'Development', 'WordPress']

  return (
    <main className="portfolio-page">

      <section className="portfolio-hero">
        <p className="page-kicker">Portfolio</p>

        <h1>Selected Work</h1>

        <p className="page-intro">
          A collection of websites, experiments and digital experiences
          built with care and purpose.
        </p>
      </section>

      <div className="portfolio-filters">
        {filters.map((filter, index) => (
          <button
            key={filter}
            className={index === 0 ? 'active' : ''}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>

      <section className="portfolio-grid">

        <article className="portfolio-card">
          <div className="portfolio-image">
            <span>Project Image</span>
          </div>

          <div className="portfolio-card-info">
            <span className="portfolio-number">01</span>
            <div>
              <h2>Project One</h2>
              <p>Web Design</p>
            </div>
          </div>
        </article>

        <article className="portfolio-card">
          <div className="portfolio-image">
            <span>Project Image</span>
          </div>

          <div className="portfolio-card-info">
            <span className="portfolio-number">02</span>
            <div>
              <h2>Project Two</h2>
              <p>Development</p>
            </div>
          </div>
        </article>

        <article className="portfolio-card">
          <div className="portfolio-image">
            <span>Project Image</span>
          </div>

          <div className="portfolio-card-info">
            <span className="portfolio-number">03</span>
            <div>
              <h2>Project Three</h2>
              <p>WordPress</p>
            </div>
          </div>
        </article>

        <article className="portfolio-card">
          <div className="portfolio-image">
            <span>Project Image</span>
          </div>

          <div className="portfolio-card-info">
            <span className="portfolio-number">04</span>
            <div>
              <h2>Project Four</h2>
              <p>Creative Lab</p>
            </div>
          </div>
        </article>

      </section>

    </main>
  )
}

export default Portfolio
