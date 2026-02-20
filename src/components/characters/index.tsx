import './style.css'
import type { CharacterT } from '../../types';

export const Character = ({ character }: { character: CharacterT }) => {
    
    return (
        
        <div className="characterContainer">
            <h3>{character.name}</h3>
            <p>Género: {character.gender}</p>
            <p>Año nacimiento: {character.birth_year}</p>
        </div>
    );
};
