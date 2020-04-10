import NavigationDropdown from "../../components/NavigationDropdown";
import Topbar from "../../components/Topbar";
import React from "react";
import {getRoutes} from "../../utils/DataLoader";
import {RouteObject} from "../../objects/RouteObject";
import Router from 'next/router';
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
                        <NavigationDropdown options={['home', 'routes']}/>
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