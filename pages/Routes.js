import {Breadcrumb, Col, Layout, Row} from 'antd';
import Topbar from "../components/Topbar";
import PageFooter from "../components/Footer";
import React from "react";
import Link from "next/link";
import RoutePreview from "../components/RoutePreview";
import RouteSelectionSidebar from "../components/RouteSelectionSidebar";
import {getRoutes} from "../utils/RouteUtil";
import {RouteObject} from "../objects/RouteObject";
import Router from 'next/router';

const { Content } = Layout;

export default class Routes extends React.Component {

    constructor(props) {
        super(props)
        const routes = this.props.routes
        this.state = {
            filteredRoutes: routes.map(r => new RouteObject(r))
        }
        this.allRoutes = routes.map(r => new RouteObject(r))
        this.regionKeys = [...new Set(routes.map(r => r.region))]
        this.difficultyKeys = [...new Set(routes.map(r => r.difficulty))]
    }

    filterRegion = region => {
        this.setState({filteredRoutes: this.allRoutes.filter(r => r.region === region)})
    }

    filterDifficulty = diff => {
        this.setState({filteredRoutes: this.allRoutes.filter(r => r.difficulty === diff)})
    }

    clearFilters = () => { this.setState({filteredRoutes: this.allRoutes})}

    render() {
        const routeCards = this.state.filteredRoutes.map(r =>
            <Col span={6} lg={6} md={12} sm={24} xs={24} key={r.rid}>
                <RoutePreview route={r}/>
            </Col>
        );
        return (
            <div>
                <Topbar onBack={() => Router.back()} title="WA Ice" subTitle="The Elusive Beast"/>
                <Layout style={{paddingTop: '64px', minHeight: '100vh'}}>
                    <RouteSelectionSidebar
                        regionKeys={this.regionKeys}
                        difficultyKeys={this.difficultyKeys}
                        filterRegion={this.filterRegion}
                        filterDifficulty={this.filterDifficulty}
                        clearFilters={this.clearFilters}
                    />
                    <Layout className="site-layout">
                        <Content style={{ padding: '0 16px' }}>
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
}

export async function getStaticProps() {
    return { props: { routes : getRoutes() } }
}

