import React from "react";

export default function ObservationExpandable({observation}) {
    return (
        <div style={{paddingLeft: '20px'}}>
            <Detail detail='Region:' value={observation.region.name}/>
            <Detail detail='Condition' value={observation.condition}/>
            <Detail detail='Climbed?' value={observation.climbed}/>
            <Detail detail='Observer:' value={observation.observerText}/>
        </div>
    )
}

function Detail({detail, value}) {
    return (
        <div key={detail}>
            <p>
                <b>{detail}</b> {value}
            </p>
        </div>
    )
}
