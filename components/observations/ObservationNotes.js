import React from "react";
import { Typography, Divider } from 'antd';

const { Title } = Typography;

export default function ObservationNotes({observation}) {

    if (observation.notes == null && observation.link == null)
        return null;

    const obNotes = observation.notes ? observation.notes : "No notes submitted.";
    const tripReport = observation.link ?
        <p>
            <b>Trip Report</b>: <a href={observation.link}>{observation.link}</a>
        </p> : null;

    return (
        <div>
            <Title level={4} style={{paddingTop: '15px'}}>Notes</Title>
            <Divider style={{backgroundColor: '#BEBEBE'}}/>
            <p>{obNotes}</p>
            {tripReport}
        </div>
    )
}