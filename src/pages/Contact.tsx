
function Contact() {
  return (
    <main className="contact-page">

      <section className="contact-hero">
        <p className="page-kicker">Contact</p>

        <h1>Let’s Talk.</h1>

        <p className="contact-intro">
          Have a project in mind, an idea to explore,
          or simply want to say hello?
        </p>
      </section>

      <div className="contact-divider">
        <span></span>
        <span>❧</span>
        <span></span>
      </div>

      <section className="contact-details">

        <article className="contact-item">
          <span className="contact-label">Email</span>
          <p>hello@faran.studio</p>
        </article>

        <article className="contact-item">
          <span className="contact-label">Location</span>
          <p>Tehran, Iran</p>
        </article>

        <article className="contact-item">
          <span className="contact-label">Available for</span>
          <p>Web Design &amp; Development</p>
        </article>

      </section>

    </main>
  )
}

export default Contact
