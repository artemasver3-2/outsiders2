import { Link } from 'react-router-dom'

function CharacterCard(props) {

    return (
        <div className="character-card"> 
            <h5 className="character-titles">{props.name}</h5>
            <section className="character-info-section">
                <span className="character-card-info">{props.info}</span>
            </section>
            <Link to={props.link}>READ MORE ABOUT {props.name.toUpperCase()}</Link>
        </div>
         );
    }
         
    
    export default CharacterCard;