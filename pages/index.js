import {Breadcrumb, Col, Layout, Row} from 'antd';
import "../style.less";
import Topbar from "../components/Topbar";
import PageFooter from "../components/Footer";
import React from "react";
import Link from "next/link";
import RoutePreview from "../components/RoutePreview";
import RouteSelectionSidebar from "../components/RouteSelectionSidebar";
import {getRoutes} from "../utils/RouteUtil";
import {RouteObject} from "../objects/RouteObject";

const { Content } = Layout;

export default function Index(params) {

    const routes = params.routes.map(r => new RouteObject(r))
    const routeCards = routes.map(r =>
        <Col span={6} md={6} sm={12} xs={24} key={r.rid}>
            <RoutePreview route={r}/>
        </Col>
    );
    return (
        <div>
            <Topbar title="WA Ice" subTitle="The Elusive Beast"/>
            <Layout style={{paddingTop: '64px'}}>
                <RouteSelectionSidebar />
                <Layout className="site-layout">
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item><Link href="/"><a>Home</a></Link></Breadcrumb.Item>
                            <Breadcrumb.Item>Routes</Breadcrumb.Item>
                        </Breadcrumb>
                        <Row gutter={16}>
                            {routeCards}
                        </Row>
                    </Content>
                    <PageFooter/>
                </Layout>
            </Layout>
        </div>
    )

}

export async function getStaticProps() {
    return { props: { routes : getRoutes() } }
}

