import PageFooter from "../../components/Footer";
import Head from 'next/head';
import React from "react";
import { Typography, Divider, Layout, Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import Link from "next/link";
import BalancedHeader from "../../components/observations/BalancedHeader";
import Topbar from "../../components/Topbar";
import Router from 'next/router';

const { Title, Text } = Typography;
const { Content } = Layout;

export default class Submit extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Submit Observation | Cascade Ice</title>
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
                            right={<Title level={3} style={{marginTop: '10px'}}>Submit Observation</Title>}/>
                        <Divider style={{backgroundColor: '#BEBEBE'}}/>
                        <Content style={{paddingBottom: '15px'}}>
                            <p>
                                We depend on community observations. An observation can be ticking a classic route,
                                getting eyes on a climb, or discovering some random flow out in the wilderness that others
                                could get after. The more observations we have, the more ice we'll all get on.
                                Cascade ice isn't easy. But if we work together and share knowledge, it'll be that much easier.
                            </p>
                        </Content>
                        <Title level={4} style={{paddingTop: '15px'}}>How to Submit an Observation</Title>
                        <Divider style={{backgroundColor: '#BEBEBE'}}/>
                        <Content style={{paddingBottom: '15px'}}>
                            <p>
                                In the future, we hope to provide a form for submitting an observation, but for now, we ask that you
                                email <a href="mailto:cascadeiceguide@gmail.com">cascadeiceguide@gmail.com</a> with
                                the following information:
                            </p>
                            <ul>
                                <li>
                                    <b>Name (optional)</b>
                                </li>
                                <li>
                                    <b>Date of observation</b>
                                </li>
                                <li>
                                    <b>Route</b> - if the route has no name, generally describe the location
                                    (e.g. "Undocumented line N Face Red Mountain").
                                </li>
                                <li>
                                    <b>Condition</b> - How was the ice? Thin? Fat? Non-existent? Sopping wet?
                                </li>
                                <li>
                                    <b>Did you climb it?</b> Attempted? Sent? Just looking?
                                </li>
                                <li>
                                    <b>Photos (encouraged)</b> - a picture is worth a thousand words they say...
                                </li>
                                <li>
                                    <b>Location</b> - if you have location data enabled with your camera app, then the location
                                    is imbedded in the photo metadata, so we can just grab that.
                                    If not, please send us as detailed location as possible. GPS coordinates (decimal)
                                    are ideal. A map with an approximate pin is acceptable. If location is really unknown, indicate that.
                                </li>
                                <li>
                                    <b>Notes (optional)</b> - from a few words to sentences about the approach,
                                    climb, hazards, whatever you find important.
                                </li>
                                <li>
                                    <b>Trip report link (optional)</b> - link to an external trip report on your blog or CC or wherever.
                                </li>
                            </ul>
                            <p>
                                Thank you for your contributions!
                            </p>
                        </Content>
                    </Content>
                    <PageFooter/>
                </Layout>
            </div>
        )
    }
}