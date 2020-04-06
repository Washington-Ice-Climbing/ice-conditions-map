import {Layout, Menu} from 'antd';
import {Component} from "react";
import {DotChartOutlined, HeatMapOutlined, CloseOutlined} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default class RouteSelectionSidebar extends Component {

    state = {
        collapsed: true
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    onSelect = ({key, item}) => {
        const subMenu = item.props.subMenuKey;
        if (key === "clear") {
            this.props.clearFilters()
            this.setState({collapsed: true})
        }
        else if (subMenu === "difficulty-menu-")
            this.props.filterDifficulty(key)
        else if (subMenu === "region-menu-")
            this.props.filterRegion(key)
    }

    render() {
        const regionItems = this.props.regionKeys.map(k =>
            <Menu.Item key={k}>{k}</Menu.Item>
        )
        const difficultyItems = this.props.difficultyKeys.map(k =>
            <Menu.Item key={k}>{k}</Menu.Item>
        )
        return (
            <Sider
                collapsible
                theme='light'
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}>
                <div className="logo" />
                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" onSelect={this.onSelect}>
                    <Menu.Item key="clear">
                        <CloseOutlined />
                        <span>Clear Filter</span>
                    </Menu.Item>
                    <SubMenu
                        key="region"
                        title={
                            <span>
                                <DotChartOutlined />
                                <span>Region</span>
                            </span>
                        }
                    >
                        {regionItems}
                    </SubMenu>
                    <SubMenu
                        key="difficulty"
                        title={
                            <span>
                                <HeatMapOutlined />
                                <span>Difficulty</span>
                            </span>
                        }
                    >
                        {difficultyItems}
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}