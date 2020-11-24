import React from "react";
import { getObservations, getObservation } from "../../utils/DataLoader";
import { ObservationObject } from "../../objects/ObservationObject";
import PageFooter from "../../components/Footer";
import Head from 'next/head'
import { Typography, Divider, Layout, Button } from 'antd';
import Topbar from "../../components/Topbar";
import Router from 'next/router';
import { LeftOutlined } from '@ant-design/icons';
import Link from "next/link";
import ObservationDetails from "../../components/observations/ObservationDetails";
import ObservationNotes from "../../components/observations/ObservationNotes";
import dynamic from 'next/dynamic';
import ObservationPhotos from "../../components/observations/ObservationPhotos";
import BalancedHeader from "../../components/observations/BalancedHeader";

const Location = dynamic(() => import("../../components/observations/ObservationLocation"),  { ssr: false })

const { Title, Text } = Typography;
const { Content } = Layout;

export default class Observation extends React.Component {

    constructor(props) {
        super(props);
        this.observation = new ObservationObject(this.props.observation)
    }

    render() {

        return (
            <div>
                <Head>
                    <title>Observations | Cascade Ice</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Topbar
                    onTitleClick={() => Router.push('/')}
                    title="Cascade Ice"
                    subTitle="An Alpine Enigma"
                />
                <Layout style={{paddingTop: '55px'}}>
                    <Content style={{padding: '20px', maxWidth: '1500px', margin: "0 auto"}}>
                        <BalancedHeader
                            left={<Link href="/observations" as={`/observations`}>
                                <Button type="primary" icon={<LeftOutlined />} size='medium'>
                                    Back to Observations
                                </Button>
                            </Link>}
                            right={<Title level={3} style={{marginTop: '10px'}}>Ice Observation</Title>}/>
                        <Divider style={{backgroundColor: '#BEBEBE'}}/>
                        <Content style={{paddingBottom: '15px', flexGrow: '2'}}>
                            <ObservationDetails observation={this.observation}/>
                            <ObservationNotes observation={this.observation}/>
                            <ObservationPhotos images={this.observation.images}/>
                            <Location coordinates={this.observation.coordinates}/>
                        </Content>
                    </Content>
                    <PageFooter/>
                </Layout>
            </div>
        )
    }
}

// Props created at build time for static rendering.
export async function getStaticProps({ params }) {
    return {
        props: { observation: await getObservation(params.oid)}
    }
}

// Define which paths will be statically build at build time.
export async function getStaticPaths() {
    return {
        paths: getObservations().map(ob => ({ params: { oid: String(ob.id) } })), // param must be a string according to next.js
        fallback: false // show 404 error if route page not found
    };
}