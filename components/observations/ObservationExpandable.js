import { Layout } from "antd";

export default function ObservationExpandable({observation}) {
    return (
        <div style={{paddingLeft: '20px'}}>
            <Detail detail='Region:' value={observation.region}/>
            <Detail detail='Ice Found?' value={observation.iceFoundText}/>
            <Detail detail='Ice Climbed?' value={observation.iceClimbedText}/>
            <Detail detail='Observer:' value={observation.observerText}/>
        </div>
    )
}

function Detail({detail, value}) {
    return (
        <p key={detail}>
            <b>{detail}</b> {value}
        </p>
    )
}
