import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="back-button">
      <span className="icon">&#8592;</span> Précédent
    </button>
  );
}

export default BackButton;
