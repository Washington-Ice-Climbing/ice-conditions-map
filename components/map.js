// import {Layout, Menu, Breadcrumb, Col, Row} from 'antd';
// import {
//     DesktopOutlined,
//     PieChartOutlined,
//     FileOutlined,
//     TeamOutlined,
//     UserOutlined,
// } from '@ant-design/icons';
//
// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;import "../style.less";
// import Topbar from "../components/Topbar";
// import React, {Component} from "react";
//
//
//     onCollapse = collapsed => {
//         this.setState({ collapsed });
//     };
//
//     render() {
//             <Col span={6} md={6} sm={12} xs={24}>
//                  render() {
//                     <div id="iceMap" style="width:100%;height:400px;"></div>
//
//                       <script>
//                       function myMap() {
//                       var mapProp= {
//                         center:new google.maps.LatLng(51.508742,-0.120850),
//                         zoom:5,
//                       };
//                       var map = new google.maps.Map(document.getElementById("iceMap"),mapProp);
//                       }
//                       </script>
//
//                       <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQWiWkHjNoXdapwYFuiKxoU5dfBXWHq9kY&callback=myMap"></script>
//                     }
//             </Col>
//
//         return (
//             <div>
//                 <Topbar/>
//                 <Layout style={{paddingTop: '64px'}}>
//                     <Sider
//                         collapsible
//                         collapsed={this.state.collapsed}
//                         onCollapse={this.onCollapse}>
//                         <div className="logo" />
//                         <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
//
//                             <SubMenu
//                                 key="sub1"
//                                 title={
//                                     <span>
//                                     <UserOutlined />
//                                     <span>Region</span>
//                                 </span>
//                                 }
//                             >
//                                 <Menu.Item key="3">Highway 20</Menu.Item>
//                                 <Menu.Item key="4">US 2</Menu.Item>
//                                 <Menu.Item key="5">I90</Menu.Item>
//                                 <Menu.Item key="5">Highway 542</Menu.Item>
//                                 <Menu.Item key="5">Mt. Rainier</Menu.Item>
//                                 <Menu.Item key="5">Mt. Hood</Menu.Item>
//                             </SubMenu>
//                             <SubMenu
//                                 key="sub2"
//                                 title={
//                                     <span>
//                                     <TeamOutlined />
//                                     <span>Difficulty</span>
//                                 </span>
//                                 }
//                             >
//                                 <Menu.Item key="6">Easy</Menu.Item>
//                                 <Menu.Item key="8">Medium</Menu.Item>
//                                 <Menu.Item key="9">Hard</Menu.Item>
//                             </SubMenu>
//                             <SubMenu
//                                 key="sub3"
//                                 title={
//                                     <span>
//                                     <TeamOutlined />
//                                     <span>Season</span>
//                                 </span>
//                                 }
//                             >
//                                 <Menu.Item key="10">Late Fall</Menu.Item>
//                                 <Menu.Item key="11">Mid Winter</Menu.Item>
//                                 <Menu.Item key="12">Early Spring</Menu.Item>
//                             </SubMenu>
//                         </Menu>
//                     </Sider>
//                     <Layout className="site-layout">
//                         <Content style={{ margin: '0 16px' }}>
//                             <Breadcrumb style={{ margin: '16px 0' }}>
//                                 <Breadcrumb.Item>Routes</Breadcrumb.Item>
//                             </Breadcrumb>
//                             <Row gutter={16}>
//                                 {routeCards}
//                             </Row>
//                         </Content>
//                         <Footer style={{ textAlign: 'center' }}>Created by Kyle McCrohan ©2020</Footer>
//                     </Layout>
//                 </Layout>
//             </div>
//         )
//     }
// }

