export default function Hero() {
  const showAlert = () => {
    alert("This is my first year project.🚀")
  }

  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h2>Building Future Tech 🚀</h2>
        <p>Creating powerful applications in AI, blockchain, and web technologies.</p>
        <button className="btn" onClick={showAlert}>Get Started</button>
      </div>
      <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" alt="tech" />
    </section>
  )
}