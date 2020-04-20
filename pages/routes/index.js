import {Breadcrumb, Col, Layout, Row, Menu} from 'antd';
import Topbar from "../../components/Topbar";
import PageFooter from "../../components/Footer";
import React from "react";
import RoutePreview from "../../components/RoutePreview";
import RouteSelectionSidebar from "../../components/RouteSelectionSidebar";
import {getRoutes} from "../../utils/DataLoader";
import {RouteObject} from "../../objects/RouteObject";
import NavigationDropdown from "../../components/NavigationDropdown";
import Link from "next/link";
import Head from 'next/head'
import Router from 'next/router';

const { Content } = Layout;

export default class Index extends React.Component {

    constructor(props) {
        super(props)
        const routes = this.props.routes
        this.state = {
            filteredRoutes: routes.map(r => new RouteObject(r))
        }
        this.allRoutes = routes.map(r => new RouteObject(r))
        this.regionKeys = ["Mt. Hood", "Mt. Rainier", "I90", "US2", "Mountain Loop", "Highway 20", "Mt. Baker", "BC"]
        this.difficultyKeys = ["PD","AD","D","TD","ED"]
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
                <Head>
                    <title>Routes | Cascade Ice</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Topbar
                    onTitleClick={() => Router.push('/')}
                    extra={[
                        <NavigationDropdown options={['home', 'map']}/>
                    ]}
                    title="Cascade Ice"
                    subTitle="An Alpine Enigma"/>
                <Layout style={{paddingTop: '55px', minHeight: '100vh'}}>
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
    return { props: { routes : await getRoutes() } }
}

