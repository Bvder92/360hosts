import React from 'react';
import {useNavigate} from 'react-router-dom';
import {regions} from '../data/regions';
import BackButton from './BackButton';

function SelectionRegion() {
  const navigate = useNavigate();
  const handleRegionClick = (region) =>{
    navigate(`/departements/${region}`);
  };
  return (
    <div>
        <div className="selection-region-container">
        
        <h1>Choisissez votre région</h1>
        <div className="region-grid">
        {Object.keys(regions).map(region => (
          <div key={region} className="region-card" onClick={() => handleRegionClick(region)}>
            {region}
            </div>
            ))}
        </div>
        <BackButton/>
    </div>

    </div>
    
  );
}

export default SelectionRegion;
