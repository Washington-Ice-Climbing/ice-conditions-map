import React, {Component} from "react";
import { Card } from "antd";

export default class RouteCard extends Component {
    render() {
        const route = this.props.route
        return (
            <Card
                hoverable
                cover={
                    <img alt="image1" style={{ width: '100%', height: '100%' }} src={route.imgSrc} />
                }
                style={{marginTop: '8px', marginBottom: '8px'}}
            >
                <Card.Meta
                    title={route.title}
                    description={route.subtitle}
                />
            </Card>
        )
    }
}