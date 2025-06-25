import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminHeader.css";

const AdminHeader = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const handleEditar = () => {
    alert("Redirigiendo a edición de perfil...");
  };

  const handleCerrarSesion = () => {
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const usuario = localStorage.getItem("usuario") || "Admin";

  return (
    <div className="admin-header">
      <div className="admin-header-logo">
        <img src="/img/logo.jpg" alt="logo" />
        <h2>Familia Smart</h2>
      </div>

      <div className="admin-header-menu" ref={menuRef}>
        <span className="admin-name">{usuario}</span>
        <button className="admin-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        {menuOpen && (
          <div className="admin-dropdown">
            <button onClick={handleEditar}>Editar perfil</button>
            <button onClick={handleCerrarSesion}>Cerrar sesión</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminHeader;
