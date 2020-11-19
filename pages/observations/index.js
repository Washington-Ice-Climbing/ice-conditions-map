import NavigationDropdown from "../../components/NavigationDropdown";
import Topbar from "../../components/Topbar";
import React from "react";
import { Typography, Divider, Layout } from 'antd';
import {getRoutes} from "../../utils/DataLoader";
import ObservationsTable from "../../components/observations/ObservationsTable";
import Router from 'next/router';
import dynamic from 'next/dynamic';
import Head from 'next/head'
import {ObservationObject} from "../../objects/ObservationObject";
import PageFooter from "../../components/Footer";

const { Title, Text } = Typography;
const { Content } = Layout;

// const Map = dynamic(() => import('../../components/Map'),  { ssr: false })

export default class Index extends React.Component {

    constructor(props) {
        super(props)
        this.observations = this.props.observations.map(o => new ObservationObject(o))
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', height:'100vh'}}>
                <Head>
                    <title>Observations | Cascade Ice</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Topbar
                    onTitleClick={() => Router.push('/')}
                    extra={[
                        <NavigationDropdown options={['home', 'routes']}/>
                    ]}
                    title="Cascade Ice"
                    subTitle="An Alpine Enigma"
                />
                <Layout style={{paddingTop: '55px'}}>
                    <Content style={{padding: '20px'}}>
                        <Title level={3}>Ice Observations</Title>
                        <Divider style={{backgroundColor: '#BEBEBE'}}/>
                        <Content style={{paddingBottom: '15px', flexGrow: '2'}}>
                            <Text>We depend on community observations. Attempted a route? Saw a cool flow that might go?
                                Share the stoke. Any observation is helpful. To submit an observation, click here.</Text>
                        </Content>
                        <ObservationsTable observations={this.observations}/>
                    </Content>
                    <PageFooter/>
                </Layout>
            </div>
        )
    }
}

export async function getStaticProps() {
    return { props: { observations : [
                {
                    id: 1,
                    date: "2020-11-10",
                    route: "Chair Peak NE Buttress",
                    region: "SP",
                    iceFound: true,
                    iceClimbed: true,
                    notes: "NE Buttress was fun climb",
                    link: "climberkyle.com",
                    observer: "Kyle 2.0"
                },
                {
                    id: 2,
                    date: "2020-11-12",
                    route: "undocumented 1 mile NE of Alpental Falls",
                    region: "SP",
                    iceFound: true,
                    iceClimbed: false,
                    link: "found this cool climb near Alpental",
                    observer: "Kyle 1.0"
                },
                {
                    id: 4,
                    date: "2020-11-04",
                    route: "Heliotrope Water Ice",
                    region: "NCW",
                    iceFound: false,
                    iceClimbed: false,
                    notes: "Warm weather killed it",
                },
                {
                    id: 3,
                    date: "2020-10-27",
                    route: "Heliotrope Water Ice",
                    region: "NCW",
                    iceFound: true,
                    iceClimbed: true,
                    notes: "Heliotrope Ice looking good",
                    observer: "Super long last name"
                }
            ]
    }}
}

// export async function getStaticProps() {
//     return { props: { routes : await getRoutes() } }
// }