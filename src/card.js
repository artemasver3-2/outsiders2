function Card(props) {

    return (
        <div className="main-card"> 
            <h3 className="title">{props.title}</h3>{'\n'}
            <h4 className="subtitle">{props.subtitle}</h4>{'\n'}
            <section className="card-info-section">
            <span className="info">{props.info}</span>
            </section>
        </div>
        
         );
    }
         
    
    export default Card;