import React, { useEffect, useState } from "react";
import "../styles/gitContent.css";
import "../styles/content.css";

const GITHUB_USERNAME = "viityy";
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

function MainContent() {
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState({});

  const headers = {
    Authorization: `token ${TOKEN}`,
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
          { headers }
        );
        const data = await response.json();
        setRepos(data);

        const languagesData = {};
        await Promise.all(
          data.map(async (repo) => {
            const langResponse = await fetch(repo.languages_url, { headers });
            const langData = await langResponse.json();
            languagesData[repo.id] = Object.keys(langData);
          })
        );

        setLanguages(languagesData);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/CV_Victor_Martin_Fuentes.pdf";
    link.download = "CV_Victor_Martin_Fuentes.pdf";
    link.click();
  };

  return (
    <main className="content">
      <section id="victor">
        <hr className="divider0" />
        <header className="header">
          <h1>
            <span className="victor">VICTOR</span>{" "}
            <span className="martin">MARTIN</span>
          </h1>
        </header>
        <p className="presentacion">Esta es mi carta de presentación.</p>
        <p className="blue-gray-text_title">
          BIENVENENIDX A MI PORTFOLIO COMO iOS DEVELOPER.
        </p>
        <p className="blue-gray-text">
          Si quieres ponerte en contacto conmigo escríbeme a{" "}
          <a href="mailto:vic.mfmf@gmail.com" className="email-link">
            vic.mfmf@gmail.com
          </a>
        </p>
        <button className="cv-button" onClick={handleDownload}>
          Descarga mi CV
        </button>
        <div className="social-icons">
          <a
            href="https://github.com/viityy"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <img src="/src/assets/githublogo.png" alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/victormartinfuentes/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <img src="/src/assets/linkedinlogo.png" alt="LinkedIn" />
          </a>
        </div>
      </section>

      {/* Sección Sobre Mi */}
      <section id="sobre-mi">
        <hr className="divider" />
        <header className="header">
          <h1>
            <span className="victor">SOBRE MI</span>
          </h1>
        </header>
        <p className="blue-gray-text">
          Cuento experiencia en el desarrollo y diseño de
          aplicaciones iOS, trabajando con Swift y UIKit. Durante mi
          trayectoria, he aplicado de forma constante la arquitectura MVVM,
          gestionado datos con Core Data e integrado dependencias mediante
          CocoaPods. Además, he ampliado mis habilidades en el desarrollo
          backend utilizando Node.js y TypeScript, trabajando con bases de datos
          SQL y NoSQL, e implementando soluciones escalables. También tengo
          experiencia en el despliegue de aplicaciones en servidores con PM2, el
          control de versiones con Git siguiendo el flujo de trabajo Gitflow, y
          la gestión de proyectos con Jira. Mi trayectoria refleja un enfoque en
          el aprendizaje continuo y la mejora de mis capacidades tanto en el
          desarrollo móvil como en el backend, buscando siempre la eficiencia y
          la calidad en cada proyecto.
        </p>
        <p className="about-me-text">
          ACTUALMENTE ESTUDIO Y BUSCO AMPLIAR MI CAMPO LABORAL EN EL MUNDO DEL
          DESARROLLO DE APLICACIONES MOVILES.
        </p>
        <p className="blue-gray-text">
          Si quieres ponerte en contacto conmigo escríbeme a{" "}
          <a href="mailto:vic.mfmf@gmail.com" className="email-link">
            vic.mfmf@gmail.com
          </a>
        </p>
        <p className="blue-gray-text">
          Mira mi experiencia laboral en detalle en{" "}
          <a
            href="https://www.linkedin.com/in/victormartinfuentes/"
            className="email-link"
          >
            LinkedIn
          </a>
        </p>
      </section>

      <section id="portfolio">
        <hr className="divider" />
        <header className="header">
          <h1>
            <span className="victor">PORTFOLIO</span>
          </h1>
        </header>

        <div className="github-projects">
          {repos.length > 0 ? (
            repos.map((repo) => (
              <div key={repo.id} className="repo">
                <h2>{repo.name}</h2>
                <p>{repo.description}</p>

                <div className="languages">
                  {languages[repo.id]?.map((lang) => (
                    <span key={lang} className="language-tag">
                      {lang}
                    </span>
                  ))}
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-link"
                >
                  Ver proyecto
                </a>
              </div>
            ))
          ) : (
            <p>Cargando proyectos...</p>
          )}
        </div>
      </section>

      {/* Sección Educación */}
      <section id="educacion">
        <hr className="divider" />
        <header className="header">
          <h1>
            <span className="victor">EDUCACIÓN</span>
          </h1>
        </header>
        <p className="blue-gray-text">
          Aquí va el contenido de tu educación. Puedes incluir información sobre tu formación académica.
        </p>
      </section>

      {/* Sección Skills */}
      <section id="skills">
        <hr className="divider" />
        <header className="header">
          <h1>
            <span className="victor">SKILLS</span>
          </h1>
        </header>
        <ul className="skills-list">
          <li>Swift</li>
          <li>UIKit</li>
          <li>Node.js</li>
          <li>TypeScript</li>
          <li>Git</li>
          <li>PM2</li>
          <li>Jira</li>
        </ul>
      </section>

      <section id="contacto">
        <hr className="divider" />
        <header className="header">
          <h1>
            <span className="victor">CONTACTO</span>
          </h1>
        </header>
        <p className="blue-gray-text">
          Si quieres ponerte en contacto conmigo, escríbeme a{" "}
          <a href="mailto:vic.mfmf@gmail.com" className="email-link">
            vic.mfmf@gmail.com
          </a>
        </p>
      </section>

      <hr className="divider" />
    </main>
  );
}

export default MainContent;
