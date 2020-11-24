import React from "react";
import { Typography, Divider, Card, Row, Col } from 'antd';

const { Title } = Typography;

export default function ObservationPhotos({images, onPhotoClick}) {
    if (images == null || images.length == 0)
        return null;

    const photos = images.map((src, index) => <Photo src={src} key={index} onClick={() => onPhotoClick(index)}/>)

    return (
        <div>
            <Title level={4} style={{paddingTop: '15px'}}>Photos</Title>
            <Divider style={{backgroundColor: '#BEBEBE'}}/>
            <Row gutter={16} style={{paddingTop: '8px'}}>
                {photos}
            </Row>
        </div>
    )
}

function Photo({src, onClick}) {
    return (
        <Col span={6} md={6} sm={12} xs={24} style={{margin: '8px 0px'}}>
            <div onClick={onClick}>
                <img src={src} style={{width: '100%'}}/>
            </div>
        </Col>
    )
}