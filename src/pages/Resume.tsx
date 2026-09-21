
import Navigation from '../components/navigation/Navigation'

function Resume({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <main className="resume-page">
      <section className="resume-section">
        <p className="page-kicker">Resume</p>

        <h1>My Resume</h1>

        <p className="page-intro">
          A brief overview of my experience, skills and professional journey.
        </p>
      </section>

      <Navigation onNavigate={onNavigate} />
    </main>
  )
}

export default Resume

