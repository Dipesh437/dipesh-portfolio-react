const projectsData = [
  {
    title: "Caregiver App",
    desc: "Connecting caregivers with elderly people.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "Quantum AI",
    desc: "Advanced AI prediction system concept.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
  },
  {
    title: "Portfolio",
    desc: "Showcasing skills and projects.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h3>Projects</h3>
      <div className="cards">
        {projectsData.map((project, idx) => (
          <div className="card" key={idx}>
            <img src={project.img} alt={project.title} />
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}