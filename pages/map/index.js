import { Menu } from 'antd';
import Topbar from "../../components/Topbar";
import React from "react";
import {getRoutes} from "../../utils/RouteUtil";
import {RouteObject} from "../../objects/RouteObject";
import Router from 'next/router';
import theme from '../../styles/theme';
import Link from "next/link";
import dynamic from 'next/dynamic';
import MoreDropdown from "../../components/MoreDropdown";

const Map = dynamic(() => import('../../components/Map'),  { ssr: false })

const dropdownMenu = (
    <Menu>
        <Menu.Item key="1">
            <Link href="/routes" as={`/routes`}>
                <a>Browse Routes</a>
            </Link>
        </Menu.Item>
    </Menu>
)

export default class Index extends React.Component {

    constructor(props) {
        super(props)
        const routes = this.props.routes
        this.routes = routes.map(r => new RouteObject(r))
    }

    render() {
        return (
            <div>
                <Topbar
                    onBack={() => Router.back()}
                    extra={[
                        <MoreDropdown key="1" menu={dropdownMenu}/>
                    ]}
                    title="WA Ice"
                    subTitle="The Elusive Beast"/>
                <Map routes={this.routes}/>
            </div>
        )
    }
}

export async function getStaticProps() {
    return { props: { routes : getRoutes() } }
}