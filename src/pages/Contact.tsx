
import Navigation from '../components/navigation/Navigation'

function Contact({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <main className="contact-page">
      <section className="contact-section">
        <p className="page-kicker">Contact</p>

        <h1>Get In Touch</h1>

        <p className="page-intro">
          Let’s talk about a project, an idea or a creative collaboration.
        </p>
      </section>

      <Navigation onNavigate={onNavigate} />
    </main>
  )
}

export default Contact
