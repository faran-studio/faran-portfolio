 function Contact() {
  return (
    <main className="contact-page">

      {/* Decorative botanical branches */}
      <div className="contact-botanical contact-botanical-top">
        <span className="stem"></span>
        <span className="leaf leaf-1"></span>
        <span className="leaf leaf-2"></span>
        <span className="leaf leaf-3"></span>
        <span className="leaf leaf-4"></span>
        <span className="leaf leaf-5"></span>
      </div>

      <section className="contact-hero">
        <p className="page-kicker">Contact</p>

        <h1>
          Let’s <span>Talk.</span>
        </h1>

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


      <section className="contact-content">

        {/* Contact Information */}

        <div className="contact-info">

          <article className="contact-item">
            <span className="contact-icon github-icon">
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1.01.08 1.54 1.07 1.54 1.07.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.02-2.75-.1-.26-.44-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.1 9.1 0 0 1 12 7.85c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.54 1.41.2 2.46.1 2.72.63.72 1.02 1.63 1.02 2.75 0 3.94-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9v1.41c0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"
      fill="currentColor"
    />
  </svg>
</span>
            <span className="contact-label">GitHub</span>

            <a
              href="https://github.com/faran-studio"
              target="_blank"
              rel="noreferrer"
            >
              faran-studio
            </a>
          </article>


          <article className="contact-item">
           <span className="contact-icon whatsapp-icon">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 2a9.8 9.8 0 0 0-8.48 14.7L2 22l5.46-1.43A10 10 0 1 0 12 2Zm0 17.8a8 8 0 0 1-4.08-1.12l-.29-.17-3.24.85.87-3.15-.19-.32A8 8 0 1 1 12 19.8Zm4.38-5.97c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.11.15 1.53.09.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
      fill="currentColor"
    />
  </svg>
</span> 
            <span className="contact-label">WhatsApp</span>

            <a href="#">
              WhatsApp
            </a>
          </article>


          <article className="contact-item">
           <span className="contact-icon phone-icon">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M6.6 2.8 9.2 2c.6-.2 1.2.1 1.5.7l1.3 3.1c.2.5.1 1-.3 1.4L10 8.8a14.6 14.6 0 0 0 5.2 5.2l1.6-1.7c.4-.4.9-.5 1.4-.3l3.1 1.3c.6.3.9.9.7 1.5l-.8 2.6c-.2.7-.9 1.2-1.6 1.2C10.7 18.6 5.4 13.3 5.4 6.4c0-.7.5-1.4 1.2-1.6Z"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</span> 
            <span className="contact-label">Phone</span>

            <a href="tel:YOUR_PHONE_NUMBER">
              Your phone number
            </a>
          </article>


          <article className="contact-item">
            <span className="contact-icon">✉</span>
            <span className="contact-label">Email</span>

            <a href="mailto:hello@faran.studio">
              hello@faran.studio
            </a>
          </article>


          <div className="contact-location">

            <div>
              <span className="contact-label">Location</span>
              <strong>Tehran, Iran</strong>
            </div>

            <div className="location-leaf">
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>

        </div>


        {/* Contact Form */}

        <div className="contact-form-card">

          <div className="form-botanical">
            <span className="stem"></span>
            <span className="leaf leaf-1"></span>
            <span className="leaf leaf-2"></span>
            <span className="leaf leaf-3"></span>
            <span className="leaf leaf-4"></span>
          </div>


          <p className="contact-form-kicker">
            Start a Conversation
          </p>

          <h2>
            How Can I <span>Help You?</span>
          </h2>


          <form
            className="contact-form"
            onSubmit={(event) => event.preventDefault()}
          >

            <div className="contact-form-row">

              <label>
                Full Name

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
              </label>


              <label>
                Email Address

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                />
              </label>

            </div>


            <label>
              Subject

              <input
                type="text"
                name="subject"
                placeholder="What is your project about?"
              />
            </label>


            <label>
              Message
 <textarea
                name="message"
                rows={6}
                placeholder="Tell me a little about your idea..."
              ></textarea>
            </label>


            <button
              type="submit"
              className="contact-submit"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

    </main>
  )
}

export default Contact
