const projects = [
  {
    title: "MyFinance [ANDROID]",
    stack: "React Native",
    summary: "Aplicacion de finanzas desarrollada en React Native para Android.",
    repo: "https://github.com/Sebastian-Retana27/MyFinance-ANDROID-"
  },
  {
    title: "MultiTool Web",
    stack: "React",
    summary: "Proyecto web de utilidades con multiples herramientas integradas.",
    repo: "https://github.com/Sebastian-Retana27/multitool-web"
  }
];

const gameProjects = [
  {
    title: "SyLeN: Children of Deckaris",
    stack: "Godot, GDScript",
    summary: "Terror psicologico y misterio en 2D.",
    demo: "https://codezerodev.itch.io/sylen-children-of-deckaris"
  },
  {
    title: "SyLeN: The Servants of the Lord",
    stack: "RenPy, Python",
    summary: "Novela visual con combate por turnos y multiples finales, estilo pixel art.",
    status: "En desarrollo"
  },
  {
    title: "ReMiN: Remnats",
    stack: "RenPy, Python",
    summary: "Novela visual con multiples finales.",
    status: "En desarrollo"
  },
  {
    title: "LuMeN: Across the Stars",
    stack: "Godot, GDScript, Blender",
    summary: "Aventura, Sandbox y Supervivencia en 3D.",
    status: "Proximamente"
  }
];

const fullStackSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Node.js",
  "REST APIs",
  "SQL",
  ".NET",
  "Python",
  "Git",
  "TailwindCSS",
  "HTML",
  "CSS",
  "C#",
  "C++"
];

const gameDevSkills = [
  "Godot",
  "GDScript",
  "Ren'Py",
  "Gameplay Programming",
  "Game Systems Design",
  "UI in Games"
];

const workExperience = [
  {
    role: "Full-Stack Software Developer",
    company: "Freelance",
    period: "2024 - Presente",
    bullets: [
      "Diseñé y desarrollé aplicaciones web full-stack (React, Node.js, .NET, Python, SQL).",
      "Construí y mantuve APIs RESTful con autenticación y operaciones CRUD.",
      "Arquitecté sistemas escalables y realicé debugging, optimización y mantenimiento a largo plazo."
    ]
  },
  {
    role: "Desarrollador de IA",
    company: "Agentyze (Contrato)",
    period: "Ago 2025 - Feb 2026",
    bullets: [
      "Desarrolle agentes de automatizacion con IA usando Google Gemini API para automatizacion de procesos de negocio.",
      "Disene prompts estructurados y pipelines de validacion.",
      "Desarrolle y desplegue el sitio web de la empresa.",
      "Integre sistemas de IA en entornos de negocio listos para produccion."
    ]
  },
  {
    role: "Software & IT Technician",
    company: "Freelance",
    period: "2023 - Presente",
    bullets: [
      "Brindé soporte técnico y resolución de problemas de software para clientes.",
      "Diagnostiqué y resolví incidencias de sistema, configuración y rendimiento.",
      "Comuniqué conceptos técnicos de forma clara a usuarios no técnicos."
    ]
  },
  {
    role: "Game Developer",
    company: "Proyectos independientes (CodeZero)",
    period: "2019 - Presente",
    bullets: [
      "Diseñé e implementé sistemas de gameplay y mecánicas interactivas.",
      "Desarrollé arquitecturas modulares para componentes reutilizables de juego.",
      "Implementé sistemas de progresión, combate y estructuras modulares reutilizables.",
      "Optimicé rendimiento y arquitectura para proyectos 2D y 3D.",
      "Publiqué proyectos originales bajo la marca CodeZero (2025 - Presente)."
    ]
  }
];

function handleChipMouseMove(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  event.currentTarget.style.setProperty("--mx", `${x}px`);
  event.currentTarget.style.setProperty("--my", `${y}px`);
}

function handleChipMouseLeave(event) {
  event.currentTarget.style.removeProperty("--mx");
  event.currentTarget.style.removeProperty("--my");
}

function App() {
  return (
    <div className="page">
      <div className="background-scene" aria-hidden="true">
        <iframe
          className="background-scene__frame"
          src="/glowing_flowers/index.html"
          title="Glowing flowers background"
        />
      </div>

      <header className="hero">
        <nav className="nav">
          <span className="logo">
            <span className="logo-brace">{"{"}</span>
            Sebastian Retana
            <span className="logo-brace">{"}"}</span>
          </span>
          <div className="nav-links">
            <a href="#proyectos" className="nav-link">
              Proyectos
            </a>
            <a
              href="https://www.linkedin.com/in/sebastian-retana-5060b42ba/"
              target="_blank"
              rel="noreferrer"
              className="nav-link"
            >
              LinkedIn
            </a>
            <a
              href="/cv/Sebastian_Retana_Full-Stack_Developer.pdf"
              className="nav-link"
              download
            >
              Descargar CV
            </a>
            <a
              href="mailto:sebasretana27@gmail.com?subject=Contacto%20desde%20tu%20portfolio&body=Hola%20Sebastian,%20me%20interesa%20hablar%20contigo%20sobre%20un%20proyecto."
              className="nav-link"
            >
              Contactame
            </a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="availability-badge">Disponible para nuevas oportunidades</p>
          <p className="tag">Full-Stack Software Developer · Game Developer</p>
          <h1>
            Hey, soy <span className="name-gradient">Sebastian Retana.</span>
            <br />
            Me gusta construir experiencias digitales.
          </h1>
          <p className="lead">
            Desarrollador full-stack con experiencia creando aplicaciones web con React, Node.js,
            .NET, Python y SQL. Además, desarrollo videojuegos y experiencias interactivas,
            aplicando diseño de sistemas, optimización y atención al detalle. Aprendo rápido y me
            adapto con facilidad a nuevas tecnologías.
          </p>
          <p className="hero-subline">
            Proyectos creativos publicados bajo <span className="brand-blue">CodeZero</span>.
          </p>
        </div>
      </header>

      <main>
        <section id="sobre-mi" className="section section-light">
          <div className="about-layout">
            <div className="about-main">
              <h2>Sobre mi</h2>
              <p>
                Soy desarrollador full-stack con enfoque en arquitectura de software y diseño de
                sistemas. Trabajo tanto en aplicaciones web como en videojuegos, aplicando
                principios de ingeniería, optimización y experiencia de usuario para crear
                productos escalables y mantenibles.
              </p>
              <p>
                Me interesa desarrollar soluciones de alto impacto, desde la idea inicial hasta la
                implementación final.
              </p>
            </div>

            <aside className="about-aside">
              <article className="info-card">
                <h3>Aspectos profesionales</h3>
                <ul className="info-list">
                  <li>
                    <span className="info-dot" />
                    He construido y mantenido multiples proyectos de software.
                  </li>
                  <li>
                    <span className="info-dot" />
                    Fuerte capacidad de resolucion de problemas y comunicacion.
                  </li>
                  <li>
                    <span className="info-dot" />
                    Aprendizaje rapido con gran adaptabilidad.
                  </li>
                </ul>
                <div className="info-divider" />
                <p className="info-label">Idiomas</p>
                <div className="language-chips">
                  <span
                    className="language-chip"
                    onMouseMove={handleChipMouseMove}
                    onMouseLeave={handleChipMouseLeave}
                  >
                    Español: Nativo
                  </span>
                  <span
                    className="language-chip"
                    onMouseMove={handleChipMouseMove}
                    onMouseLeave={handleChipMouseLeave}
                  >
                    Ingles: Avanzado
                  </span>
                </div>
              </article>

              <article className="info-card">
                <p className="info-label">Educacion</p>
                <h3>Bachillerato en Educacion Media</h3>
                <p className="education-meta">2024 - Costa Rica</p>
              </article>
            </aside>
          </div>
        </section>

        <section className="section section-light">
          <div className="section-head">
            <h2>Habilidades</h2>
          </div>
          <div className="skills-groups">
            <div className="skills-group">
              <h3>Full-Stack</h3>
              <ul className="skills">
                {fullStackSkills.map((skill) => (
                  <li key={skill} onMouseMove={handleChipMouseMove} onMouseLeave={handleChipMouseLeave}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="skills-group">
              <h3>Game Development</h3>
              <ul className="skills">
                {gameDevSkills.map((skill) => (
                  <li key={skill} onMouseMove={handleChipMouseMove} onMouseLeave={handleChipMouseLeave}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="proyectos" className="section">
          <div className="section-head">
            <h2>Proyectos destacados</h2>
            <p>Algunos ejemplos de soluciones que puedo construir.</p>
            <a
              href="https://github.com/Sebastian-Retana27"
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              Ver mi GitHub
            </a>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="card" key={project.title}>
                <h3>{project.title}</h3>
                <p className="stack">{project.stack}</p>
                <p>{project.summary}</p>
                <a href={project.repo} target="_blank" rel="noreferrer" className="card-link">
                  Ver repositorio
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="videojuegos" className="section section-light">
          <div className="section-head">
            <h2>Videojuegos y prototipos</h2>
            <p>
              Experimentos y proyectos interactivos publicados bajo{" "}
              <span className="brand-blue">CodeZero</span>.
            </p>
            <a
              href="https://codezerodev.itch.io/"
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              Ver mi Itch.io
            </a>
          </div>
          <div className="project-grid">
            {gameProjects.map((project) => (
              <article className="card" key={project.title}>
                <h3>{project.title}</h3>
                <p className="stack">{project.stack}</p>
                <p>{project.summary}</p>
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="card-link">
                    Probar demo
                  </a>
                ) : (
                  project.status ? <p className="card-link card-link-muted">{project.status}</p> : null
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="en-progreso" className="section section-light">
          <div className="section-head">
            <h2>Actualmente estoy trabajando en</h2>
          </div>
          <div className="work-now-grid">
            <article className="card">
              <h3>Videojuegos</h3>
              <p className="stack">CodeZero</p>
              <ul className="work-now-list">
                <li>
                  <strong>SyLeN: Children of Deckaris</strong> (Godot + GDScript), enfocándome en
                  arquitectura narrativa y sistema Point-and-Click.
                </li>
                <li>
                  <strong>SyLeN: The Servants of the Lord</strong> (RenPy + Python), enfocándome
                  en arquitectura narrativa y sistema de combate por turnos.
                </li>
                <li>
                  <strong>ReMiN: Remnants</strong> (RenPy + Python), enfocándome en sistema de
                  finales múltiples según decisiones del jugador.
                </li>
              </ul>
            </article>
            <article className="card">
              <h3>Aplicaciones</h3>
              <p className="stack">React Native</p>
              <ul className="work-now-list">
                <li>
                  <strong>Productivity</strong>: app de organización y productividad con
                  planificador de tareas, distintas áreas, metas, hábitos ligados a un área,
                  interfaz intuitiva y sistema anti-burnout.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section id="experiencia" className="section">
          <div className="section-head">
            <h2>Experiencia laboral</h2>
          </div>
          <div className="timeline">
            {workExperience.map((job, index) => (
              <div
                className={`timeline-item ${index % 2 === 0 ? "timeline-item-right" : "timeline-item-left"}`}
                key={`${job.role}-${job.period}`}
              >
                <span className="timeline-dot" aria-hidden="true" />
                <article className="timeline-card">
                  <div className="timeline-card-header">
                    <h3>{job.role}</h3>
                    <span className="timeline-period">{job.period}</span>
                  </div>
                  <p className="timeline-company">{job.company}</p>
                  <ul className="timeline-points">
                    {job.bullets.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contacto" className="footer">
        <h2>Trabajemos juntos</h2>
        <p>
          Construyamos algo grande.
          <br />
          Desde aplicaciones web hasta videojuegos y sistemas interactivos.
        </p>
        <a className="email" href="mailto:sebasretana27@gmail.com">
          sebasretana27@gmail.com
        </a>
      </footer>
    </div>
  );
}

export default App;

