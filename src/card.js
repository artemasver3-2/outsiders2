function Card(props) {

    return (
        <div className="main-card"> 
            <h3 className="title">{props.title}</h3>{'\n'}
            <h4 className="subtitle">{props.subtitle}</h4>{'\n'}
            <span className="info">{props.info}</span>
        </div>
        
         );
    }
         
    
    export default Card;