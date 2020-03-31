import {Layout, Menu} from 'antd';
import {Component} from "react";
import {TeamOutlined, UserOutlined,} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default class RouteSelectionSidebar extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: true,
        }
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        return (
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
                        <Menu.Item key="1">Highway 20</Menu.Item>
                        <Menu.Item key="2">US 2</Menu.Item>
                        <Menu.Item key="3">I90</Menu.Item>
                        <Menu.Item key="4">Highway 542</Menu.Item>
                        <Menu.Item key="5">Mt. Rainier</Menu.Item>
                        <Menu.Item key="6">Mt. Hood</Menu.Item>
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
                        <Menu.Item key="7">Easy</Menu.Item>
                        <Menu.Item key="8">Medium</Menu.Item>
                        <Menu.Item key="9">Hard</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}