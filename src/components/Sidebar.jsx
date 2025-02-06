import { useState, useEffect } from "react";
import avatar from "../assets/avatar.png";
import "../styles/sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("victor");

  const menuItems = [
    { name: "VICTOR", id: "victor" },
    { name: "SOBRE MÍ", id: "sobre-mi" },
    { name: "PORTFOLIO", id: "portfolio" },
    { name: "EDUCACIÓN", id: "educacion" },
    { name: "SKILLS", id: "skills" },
    { name: "CONTACTO", id: "contacto" },
  ];

  // ✅ IntersectionObserver para detectar la sección visible
  useEffect(() => {
    const observerOptions = {
      root: null, // Observa el viewport
      rootMargin: "0px",
      threshold: 0.6, // 60% de la sección visible para activarse
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveItem(entry.target.id); // Cambia la sección activa
        }
      });
    }, observerOptions);

    // Observar cada sección
    menuItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect(); // Limpia el observer al desmontar
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveItem(id);
      setIsOpen(false);
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <button 
        className="menu-toggle" 
        onClick={() => setIsOpen(!isOpen)} 
        aria-expanded={isOpen}
      >
        ☰
      </button>
      
      <img src={avatar} alt="Avatar" className="avatar" />

      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeItem === item.id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.id);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
