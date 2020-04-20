import {Layout, Typography, Button, Divider, Row, Col, Collapse} from 'antd';
import PageFooter from "../components/Footer";
import theme from '../styles/theme';
import FeatureCard from "../components/FeatureCard";
import { useRouter } from 'next/router';
import { getContributors } from "../utils/DataLoader";
import {ContributorObject} from "../objects/ContributorObject";
import React from "react";
import Head from 'next/head'

const { Content } = Layout;
const { Title } = Typography;
const { Panel } = Collapse;

export default function Index({contributors}) {
    const router = useRouter()
    const contributorObjects = contributors.map(c => new ContributorObject(c))
    const contributorElements = contributorObjects.map(c =>
        <Panel header={c.name} key={c.cid}>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <div style={{flexGrow: '0', margin: '10px'}}>{c.getAvatar(90)}</div>
                <div style={{flexGrow: '1', margin: '10px', flexBasis: '250px', flexShrink: '0'}}>{c.blurb}</div>
            </div>
        </Panel>
    );
    return (
        <div>
            <Head>
                <title>Cascade Ice</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Layout style={{minHeight: '100vh'}}>
                <Content style={{padding: '30px', textAlign: 'center', paddingTop: '80px', paddingBottom: '30px', backgroundColor: theme.colors.primary, color: "white"}}>
                    {/*<div style={{textAlign: 'center', paddingTop: '100px', paddingBottom: '0px'}}>*/}
                        <h1 id="title" style={{color: 'white'}}>Cascade Ice</h1>
                        <style jsx>{`
                            @media screen and (min-width: 601px) { #title { font-size: 80px;}}
                            @media screen and (max-width: 600px) { #title { font-size: 50px;}}`}
                        </style>
                        <p>
                            {/*Beta, community, and inspiration for ice climbing in the Evergreen State. Sharpen your tools. The hunt is on.*/}
                            Close to Home. Far Flung Odds. Endless Adventure.
                        </p>
                        <div style={{margin: "30px"}}>
                            <Button
                                size="large"
                                style={{width: "200px", margin: "10px", backgroundColor: theme.colors.accent}}
                                onClick={() => router.push("/routes")}>
                                Browse Routes
                            </Button>
                            <Button
                                size="large"
                                style={{width: "200px", margin: "10px"}}
                                onClick={() => router.push("/map")}>
                                View Map
                            </Button>
                        </div>
                    {/*</div>*/}

                </Content>
                <Content style={{backgroundColor: 'white'}}>
                    <Content style={{maxWidth: '1200px', margin: '0 auto', padding: '30px'}}>
                        <Content style={{paddingTop: "20px"}}>
                            <Title>An Alpine Enigma</Title>
                            <p>
                                The majestic Cascade Mountains Range is known for many things - rugged peaks, sprawling glaciers, and beautiful forests -
                                but one thing it is not known for is ice climbing. Its maritime climate, poor winter access,
                                and lack of up-to-date conditions all contribute to the challenges of ice climbing in the Cascades.
                                The rational Cascade Climber swaps their tools for skis. But the hopeful climber
                                pulls out a map, monitors conditions, and sharpens their tools: the hunt is on.
                            </p>
                            <p>
                                For the rugged, patient alpinist willing to brave the wet, the brush, the mystery, and the disappointment of failure,
                                Cascade ice climbing can prove rewarding like no other experience.
                                Buried in the internet archives and local lore lies a treasure trove of
                                adventurous alpine ice climbs.  This guide aims to demystify many of these climbs - which are not
                                as remote or impossible as they may seem. Browse, research, dream, train, and send!
                            </p>
                        </Content>
                        <Divider/>
                        <Content>
                            <Title>The Modern Guidebook</Title>
                            <p>
                                Technology is changing. Climbing is evolving. Guidebooks should too.
                            </p>
                            <Row gutter={16} type="flex">
                                <Col span={6} lg={6} md={12} sm={24} xs={24} key="1">
                                    <FeatureCard
                                        title="Browse"
                                        description="Filter by region and difficulty."
                                        img="icons/xdream.png"
                                        color={theme.colors.primary}/>
                                </Col>
                                <Col span={6} lg={6} md={12} sm={24} xs={24} key="2">
                                    <FeatureCard
                                        title="Discover"
                                        description="Interactive map with routes and condition reports."
                                        img="icons/icescrew.png"
                                        color={theme.colors.link}/>
                                </Col>
                                <Col span={6} lg={6} md={12} sm={24} xs={24} key="3">
                                    <FeatureCard
                                        title="Enhance"
                                        description="Integrated caltopo maps and gpx tracks."
                                        img="icons/boot.png"
                                        color={theme.colors.accent2}/>
                                </Col>
                                <Col span={6} lg={6} md={12} sm={24} xs={24} key="4">
                                    <FeatureCard
                                        title="Inspire"
                                        description="Hear the stories of other climbers."
                                        img="icons/rope.png"
                                        color={theme.colors.accent}/>
                                </Col>
                            </Row>
                        </Content>
                        <Divider/>
                        <Content>
                            <Row gutter={16} type="flex">
                                <Col span={12} lg={12} md={12} sm={24} xs={24} key="1">
                                    <div className="textBlock">
                                    <Title>What's New</Title>
                                        <ul>
                                            <li>Routes: Superalpine, Hot Tubbs</li>
                                            <li>Browsing routes</li>
                                            <li>Caltopo maps imbedded in approach description</li>
                                            <li>Map with pins marking routes</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col span={12} lg={12} md={12} sm={24} xs={24} key="2">
                                    <div className="textBlock">
                                        <Title>What's Coming</Title>
                                        <ul>
                                            <li>More routes!</li>
                                            <li>Submit condition reports / beta photos from the field</li>
                                            <li>Visualize crowd sourced data on map</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Content>
                        <Divider/>
                        <Content>
                            <Row gutter={16} type="flex">
                                <Col span={12} lg={12} md={12} sm={24} xs={24} key="1">
                                    <div className="textBlock">
                                        <Title>Can I Contribute?</Title>
                                        <p>
                                            It takes a community to put together a guide like this. If you have route beta,
                                            photos, or stories please email <a href="mailto:cascadeiceguide@gmail.com">cascadeiceguide@gmail.com</a>
                                            to help out. We are always
                                            looking for more routes to include, so please send them our way!
                                        </p>
                                        <p>
                                            If you would like to contribute to development, please email (insert email here).
                                            Our code is open source
                                            on <a href="https://github.com/Washington-Ice-Climbing/ice-conditions-map">Github.com</a>.
                                        </p>
                                    </div>
                                </Col>
                                <Col span={12} lg={12} md={12} sm={24} xs={24} key="2">
                                    <div className="textBlock">
                                        <Title>Contributors</Title>
                                        <Collapse accordion>
                                            {contributorElements}
                                        </Collapse>
                                    </div>
                                </Col>
                                <style jsx>{`
                                .textBlock {
                                  margin: 8px;
                                }
                              `}</style>
                            </Row>
                        </Content>
                        <Divider/>
                        <Content>
                            <Title>Disclaimer</Title>
                            <p>
                                <i>
                                    Ice climbing is a very dangerous activity. This guide assumes no responsibility for accidents
                                    or losses resulting from these activities. This guide is not a replacement for professional
                                    training. One should seek professional advice or guidance before climbing these routes.
                                </i>
                            </p>
                        </Content>
                    </Content>
                </Content>
                <PageFooter/>
            </Layout>
        </div>
    )
}

export async function getStaticProps() {
    return { props: { contributors : getContributors() } }
}