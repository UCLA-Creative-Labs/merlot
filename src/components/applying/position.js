import React from 'react';
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
                
                <div className="positionDescription" >
                    <p>{props.description}</p>
                    
                </div>
                <img className="positionButton" src={require('../../images/Button/Primary/Apply (scale).png')} />
            </div>
        </div>

    );
}

export default PositionComponent;