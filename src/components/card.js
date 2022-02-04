function Card(props) {
    return(
        <div className="BCard">
            <div className="cardmatchscorehigh">
                <h2>{props.MatchScore}</h2>
            </div>
            <img src = {props.pfp} className="cardpfp"/>
            <div className="cardtextcontainer">
                       <h2>{props.Name}</h2>     
                       <p>Seeking <b>{props.Seeking}</b></p>
                       <p className="roundclass">{props.Round}</p>
                       <p className="bottomcardp">Posted By: {props.Posted}</p>
            </div>
            <img src = {props.background} className="cardbackground"/>
        </div>
    )
}

export default Card;