
import Navigation from '../components/navigation/Navigation'

function Portfolio({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <main className="portfolio-page">
      <section className="portfolio-section">
        <p className="page-kicker">Portfolio</p>

        <h1>My Portfolio</h1>

        <p className="page-intro">
          A collection of my web design and development projects.
        </p>
      </section>

      <Navigation onNavigate={onNavigate} />
    </main>
  )
}

export default Portfolio

