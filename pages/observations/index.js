import Topbar from "../../components/Topbar";
import React from "react";
import { Typography, Divider, Layout, Button } from 'antd';
import { getObservations } from "../../utils/DataLoader";
import ObservationsTable from "../../components/observations/ObservationsTable";
import Router from 'next/router';
import Head from 'next/head'
import { ObservationObject } from "../../objects/ObservationObject";
import PageFooter from "../../components/Footer";
import { RightOutlined } from '@ant-design/icons';
import Link from "next/link";
import BalancedHeader from "../../components/observations/BalancedHeader";

const { Title, Text } = Typography;
const { Content } = Layout;

export default class Index extends React.Component {

    constructor(props) {
        super(props)
        this.observations = this.props.observations.map(o => new ObservationObject(o))
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
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
                    <Content style={{padding: '20px'}}>
                        <BalancedHeader
                            left={<Title level={3} style={{marginTop: '10px'}}>Ice Observations</Title>}
                            right={<Link href="/observations/submit">
                                <Button type="primary" icon={<RightOutlined />} size='medium' >
                                    Submit an Observation
                                </Button>
                            </Link>}/>

                        <Divider style={{backgroundColor: '#BEBEBE'}}/>
                        <Content style={{paddingBottom: '15px', flexGrow: '2'}}>
                            <Text>We depend on community observations. Attempted a route? Saw a cool flow that might
                                go? <Link href="/observations/submit">Share the stoke. </Link>
                                Any observation is helpful.</Text>
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
    return { props: { observations: getObservations()}}
}