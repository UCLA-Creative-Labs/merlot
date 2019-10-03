import React from 'react';
import { Link } from 'gatsby';
import "../../scss/main.scss";
import "../../images/Button/Primary/Apply (scale).png"

function PositionComponent(props) {
    return ( 
        <div className="pos_component">
            <div className="pos_card">
                
                <div className="positionTitle">
                    <h2>{props.title}</h2>
                </div> 

                <div className="appDeadline">
                    <p>Closes: {props.deadline}</p>
                </div>
                <br/>
                <div className="positionDescription" >
                    <p className="body1" >{props.description}</p>
                    
                </div>
                <a href={props.appLink}>
                    <img className="positionButton" src={require('../../images/Button/Primary/Apply (scale).png')} />
                </a>
            </div>
        </div>

    );
}

export default PositionComponent;