import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {regions} from '../data/regions';
import BackButton from './BackButton';

function Departements(){
    const { region } = useParams(); 
    const navigate = useNavigate();
    const departements = regions[region];

    const handleDepartementClick = (departement) => {
        navigate(`/contact/${region}/${departement}`);
    };

    return (
        <div>
            <div className="selection-region-container">
                <h1>Choisir un département en {region}</h1>
                    <div className="region-grid">
                        {departements.map(departement => (
                            <div key={departement} className='region-card' onClick={() => handleDepartementClick(departement)} >
                                {departement}
                            </div>
                        ))} 
                    </div>
                    <BackButton />
            </div>
                
        </div>
            
    )
}

export default Departements;