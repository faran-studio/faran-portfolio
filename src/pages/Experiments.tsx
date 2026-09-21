import Navigation from '../components/navigation/Navigation'
function Experiments({ onNavigate }: { onNavigate: (page: string) => void }) {
  const experiments = [
    {
      number: '01',
      title: 'Motion & Transitions',
      description:
        'Exploring elegant page transitions and directional movement.',
    },
    {
      number: '02',
      title: 'Hover Effects',
      description:
        'Small interactions that make interfaces feel alive.',
    },
    {
      number: '03',
      title: '3D & Perspective',
      description:
        'Experiments with depth, perspective and layered interfaces.',
    },
    {
      number: '04',
      title: 'Image Reveals',
      description:
        'Creative ways to reveal and transform visual content.',
    },
    {
      number: '05',
      title: 'Micro Interactions',
      description:
        'Tiny details that improve the feeling of an interface.',
    },
    {
      number: '06',
      title: 'UI Experiments',
      description:
        'Small ideas and interface studies built from scratch.',
    },
  ]

  return (
    <section className="experiments-page">
      <div className="experiments-header">
        <span className="experiments-label">CREATIVE LAB</span>

        <h2>Experiments</h2>

        <p>
          A collection of small experiments in motion, interaction,
          visual effects and creative interface design.
        </p>
      </div>

      <div className="experiments-grid">
        {experiments.map((experiment) => (
          <article
            className="experiment-card"
            key={experiment.number}
          >
            <span className="experiment-number">
              {experiment.number}
            </span>

            <div>
              <h3>{experiment.title}</h3>
              <p>{experiment.description}</p>
            </div>

            <span className="experiment-arrow">↗</span>
          </article>
        ))}
      </div>
     <Navigation onNavigate={onNavigate} /> 
    </section>
  )
}

export default Experiments
