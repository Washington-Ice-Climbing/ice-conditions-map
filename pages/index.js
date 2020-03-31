import {Breadcrumb, Col, Layout, Row} from 'antd';
import "../style.less";
import Topbar from "../components/Topbar";
import React, {Component} from "react";
import RouteCard from "../components/RouteCard";
import RouteSelectionSidebar from "../components/RouteSelectionSidebar";

const { Content, Footer } = Layout;

export default class Index extends Component {

    constructor() {
        super();
        this.state = {
            routes: [
                {
                    imgSrc: "/static/images/sloan.jpg",
                    title: "Superalpine, Sloan Peak",
                    subtitle: "WI3-4, 1000'",
                    stars: 4
                },
                {
                    imgSrc: "/static/images/HotTubbs.jpg",
                    title: "Hot Tubbs, Bryant Peak",
                    subtitle: "WI4-, 500'",
                    stars : 2
                },
                {
                    imgSrc: "/static/images/CosleyHouston.jpg",
                    title: "Cosley-Houston, Colfax Peak",
                    subtitle: "WI4+, 700'",
                    stars: 4
                },
                {
                    imgSrc: "/static/images/NWIceCouloir.jpg",
                    title: "NW Ice Couloir, Eldorado Peak",
                    subtitle: "WI3, 1000'",
                    stars: 3
                },
                {
                    imgSrc: "/static/images/TripleCouloirs.jpg",
                    title: "Triple Couloirs, Dragontail Peak",
                    subtitle: "WI3 M3, 2000'",
                    stars: 3
                },
                {
                    imgSrc: "/static/images/IceCliff.jpg",
                    title: "Ice Cliff Glacier, Mt. Stuart",
                    subtitle: "AI2, 2000'",
                    stars: 1
                }
            ]
        };
    }

    render() {
        const routeCards = this.state.routes.map(r =>
            <Col span={6} md={6} sm={12} xs={24}>
                <RouteCard route={r}/>
            </Col>
        );
        return (
            <div>
                <Topbar/>
                <Layout style={{paddingTop: '64px'}}>
                    <RouteSelectionSidebar />
                    <Layout className="site-layout">
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Routes</Breadcrumb.Item>
                            </Breadcrumb>
                            <Row gutter={16}>
                                {routeCards}
                            </Row>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Created by Kyle McCrohan ©2020</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}