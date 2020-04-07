import { Button } from 'antd';
import Topbar from "../../components/Topbar";
import React from "react";
import {getRoutes} from "../../utils/RouteUtil";
import {RouteObject} from "../../objects/RouteObject";
import Router from 'next/router';
import theme from '../../styles/theme';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../../components/Map'),  { ssr: false })

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
                        <Button key="1" style={{backgroundColor: theme.colors.accent}} onClick={() => Router.push("/routes")}>
                            Browse Routes
                        </Button>,
                    ]}
                    title="WA Ice"
                    subTitle="The Elusive Beast"/>
                <Map/>
            </div>
        )
    }
}

export async function getStaticProps() {
    return { props: { routes : getRoutes() } }
}