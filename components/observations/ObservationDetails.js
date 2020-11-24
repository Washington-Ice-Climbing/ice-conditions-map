import { Row, Col } from 'antd';
import React from "react";

export default function ObservationDetails({observation}) {

    return (
        <Row gutter={16} style={{paddingTop: '8px'}}>
            <Detail detail="Date:" value={observation.dateString}/>
            <Detail detail="Observer:" value={observation.observerText}/>
            <Detail detail="Route:" value={observation.route}/>
            <Detail detail="Condition:" value={observation.condition}/>
            <Detail detail="Region:" value={observation.region.name}/>
            <Detail detail="Climbed?" value={observation.climbed}/>
        </Row>
    )
}

function Detail({detail, value}) {
    return (
        <Col span={6} md={12} sm={24} xs={24} style={{margin: '8px 0px'}}>
            <b>{detail}</b> {value}
        </Col>
    )
}