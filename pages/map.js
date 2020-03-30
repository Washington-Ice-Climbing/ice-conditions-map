import {Layout, Menu, Breadcrumb, Col, Row} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;import "../style.less";
import Topbar from "../components/Topbar";
import React, {Component} from "react";
import RouteCard from "../components/RouteCard";

export default class Index extends Component {

    constructor() {
        super();
        this.state = {
            collapsed: false,
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


    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

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
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                    <UserOutlined />
                                    <span>Region</span>
                                </span>
                                }
                            >
                                <Menu.Item key="3">Highway 20</Menu.Item>
                                <Menu.Item key="4">US 2</Menu.Item>
                                <Menu.Item key="5">I90</Menu.Item>
                                <Menu.Item key="5">Highway 542</Menu.Item>
                                <Menu.Item key="5">Mt. Rainier</Menu.Item>
                                <Menu.Item key="5">Mt. Hood</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                    <TeamOutlined />
                                    <span>Difficulty</span>
                                </span>
                                }
                            >
                                <Menu.Item key="6">Easy</Menu.Item>
                                <Menu.Item key="8">Medium</Menu.Item>
                                <Menu.Item key="9">Hard</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={
                                    <span>
                                    <TeamOutlined />
                                    <span>Season</span>
                                </span>
                                }
                            >
                                <Menu.Item key="10">Late Fall</Menu.Item>
                                <Menu.Item key="11">Mid Winter</Menu.Item>
                                <Menu.Item key="12">Early Spring</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
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
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
