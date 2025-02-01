import React from "react";

function MainContent() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/CV_Victor_Martin_Fuentes.pdf";
    link.download = "CV_Victor_Martin_Fuentes.pdf";
    link.click();
  };

  return (
    <main className="content">
      {/* Sección Victor Martin */}
      <section id="victor">
        {/* Línea divisoria */}
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

      {/* Sección Porfolio */}
      <section id="sobre-mi">

      {/* Línea divisoria */}
      <hr className="divider" />

        <header className="header">
          <h1>
            <span className="victor">SOBRE MI</span>
          </h1>
        </header>
        <p className="blue-gray-text">
          Este es mi resumen, Este es mi resumen, Este es mi resumen, Este es mi
          resumen...
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

      {/* Sección Porfolio */}
      <section id="portfolio">

        {/* Línea divisoria */}
      <hr className="divider" />

        <header className="header">
          <h1>
            <span className="victor">SOBRE MI</span>
          </h1>
        </header>
        <p className="blue-gray-text">
          Este es mi resumen, Este es mi resumen, Este es mi resumen, Este es mi
          resumen...
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


      {/* Sección Educación */}
      <section id="educacion">

        {/* Línea divisoria */}
      <hr className="divider" />

        <header className="header">
          <h1>
            <span className="victor">SOBRE MI</span>
          </h1>
        </header>
        <p className="blue-gray-text">
          Este es mi resumen, Este es mi resumen, Este es mi resumen, Este es mi
          resumen...
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


      {/* Sección Skills */}
      <section id="skills">

        {/* Línea divisoria */}
      <hr className="divider" />

        <header className="header">
          <h1>
            <span className="victor">SOBRE MI</span>
          </h1>
        </header>
        <p className="blue-gray-text">
          Este es mi resumen, Este es mi resumen, Este es mi resumen, Este es mi
          resumen...
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


      {/* Sección contacto */}
      <section id="contacto">

        {/* Línea divisoria */}
      <hr className="divider" />

        <header className="header">
          <h1>
            <span className="victor">SOBRE MI</span>
          </h1>
        </header>
        <p className="blue-gray-text">
          Este es mi resumen, Este es mi resumen, Este es mi resumen, Este es mi
          resumen...
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

      {/* Línea divisoria */}
      <hr className="divider" />

    </main>
  );
}

export default MainContent;
