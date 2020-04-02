import React, {Component} from "react";
import { Card } from "antd";
import Link from "next/link";

export default class RouteCard extends Component {
    render() {
        const route = this.props.route
        return (
            <Link href="/routes/[rid]" as={`/routes/${route.rid}`}>
                <Card
                    hoverable
                    cover={
                        <img alt="image1" style={{ width: '100%', height: '100%' }} src={route.imgSrc} />
                    }
                    style={{marginTop: '8px', marginBottom: '8px'}}>
                    <Card.Meta
                        title={route.title}
                        description={route.subtitle}
                    />
                </Card>
            </Link>
        )
    }
}