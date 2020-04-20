import NavigationDropdown from "../../components/NavigationDropdown";
import Topbar from "../../components/Topbar";
import React from "react";
import {getRoutes} from "../../utils/DataLoader";
import {RouteObject} from "../../objects/RouteObject";
import Router from 'next/router';
import dynamic from 'next/dynamic';
import Head from 'next/head'

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
                <Head>
                    <title>Map | Cascade Ice</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Topbar
                    onTitleClick={() => Router.push('/')}
                    extra={[
                        <NavigationDropdown options={['home', 'routes']}/>
                    ]}
                    title="Cascade Ice"
                    subTitle="An Alpine Enigma"/>
                <Map routes={this.routes}/>
            </div>
        )
    }
}

export async function getStaticProps() {
    return { props: { routes : await getRoutes() } }
}