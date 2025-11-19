import React, { useState } from 'react';
import './DevelopmentModal.css'; // Importa el CSS para el estilo del modal

const DevelopmentModal = () => {
  // Inicializamos el estado para que el modal se muestre (true) la primera vez.
  const [isOpen, setIsOpen] = useState(true);

  // Función para cerrar el modal al hacer clic en el botón
  const handleClose = () => {
    setIsOpen(false);
  };

  // Si el modal está cerrado, no renderizamos nada.
  if (!isOpen) {
    return null;
  }

  return (
    // Overlay (Fondo oscuro y desenfocado que cubre la pantalla)
    <div className="modal-overlay">
      {/* Contenedor principal del Modal */}
      <div className="modal-content">
        
        <h3>Sitio en Desarrollo Activo </h3>
        <p>
          Bienvenido(a) a mi portafolio. Este sitio aún se encuentra en desarrollo. 
          Algunas secciones o funcionalidades pueden no estar completas o contener errores.
          ¡Disculpa las molestias :c!
        </p>
        <button onClick={handleClose} className="modal-button">
          Entendido, continuar
        </button>
      </div>
    </div>
  );
};

export default DevelopmentModal;