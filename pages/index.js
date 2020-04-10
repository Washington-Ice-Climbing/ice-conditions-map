import {Layout, Typography, Button, Divider, Row, Col, Collapse} from 'antd';
import Topbar from "../components/Topbar";
import PageFooter from "../components/Footer";
import theme from '../styles/theme';
import FeatureCard from "../components/FeatureCard";
import { useRouter } from 'next/router';
import { getContributors } from "../utils/DataLoader";
import {ContributorObject} from "../objects/ContributorObject";
import React from "react";

const { Content } = Layout;
const { Title } = Typography;
const { Panel } = Collapse;

export default function Index({contributors}) {
    const router = useRouter()
    const contributorObjects = contributors.map(c => new ContributorObject(c))
    const contributorElements = contributorObjects.map(c =>
        <Panel header={c.name} key={c.cid}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{flexGrow: '1', margin: '10px'}}>{c.getAvatar(80)}</div>
                <div style={{flexGrow: '2', margin: '10px'}}>{c.blurb}</div>
            </div>
        </Panel>
    );
    return (
        <div>
            {/*<Topbar title="WA Ice" subTitle="The Elusive Beast"/>*/}
            <Layout style={{minHeight: '100vh'}}>
                <Content style={{padding: '30px', textAlign: 'center', paddingTop: '80px', paddingBottom: '30px', backgroundColor: theme.colors.primary, color: "white"}}>
                    {/*<div style={{textAlign: 'center', paddingTop: '100px', paddingBottom: '0px'}}>*/}
                        <h1 id="title" style={{color: 'white'}}>Washington Ice</h1>
                        <style jsx>{`
                            @media screen and (min-width: 601px) { #title { font-size: 80px;}}
                            @media screen and (max-width: 600px) { #title { font-size: 40px;}}`}
                        </style>
                        <p>
                            Beta, community, and inspiration for ice climbing in the Evergreen State. Sharpen your tools. The hunt is on.
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
                            <Title>The Elusive Beast</Title>
                            <p>
                                The state of Washington is known for many things - winding waterways, rugged mountains, and beautiful forests -
                                but one thing it is not known for is ice climbing. Our wet, maritime climate makes it challenging to
                                find reliable ice climbing conditions. Poor access confines winter recreation to a few distinct areas.
                                A lack of information and up-to-date condition reports makes ice climbing more of a gamble than
                                many feel is worthy for the reward.
                            </p>
                            <p>
                                Although Washington lacks in reliable low elevation water ice, it does have its fair share of
                                adventurous alpine ice climbs. This guide aims to demystify many of these climbs - which are not
                                as remote or impossible as they may seem. Additionally, it seeks to catalog the rich history
                                of alpine climbing in Washington, which continues to evolve. Browse, research, dream, and send!
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
                                        img="icons/mountainSkyline1.png"
                                        color={theme.colors.primary}/>
                                </Col>
                                <Col span={6} lg={6} md={12} sm={24} xs={24} key="2">
                                    <FeatureCard
                                        title="Discover"
                                        description="Interactive map with routes and condition reports."
                                        img="icons/mountainSkyline2.png"
                                        color={theme.colors.link}/>
                                </Col>
                                <Col span={6} lg={6} md={12} sm={24} xs={24} key="3">
                                    <FeatureCard
                                        title="Enhance"
                                        description="Integrated caltopo maps and gpx tracks."
                                        img="icons/mountainSkyline3.png"
                                        color={theme.colors.accent2}/>
                                </Col>
                                <Col span={6} lg={6} md={12} sm={24} xs={24} key="4">
                                    <FeatureCard
                                        title="Inspire"
                                        description="Hear the stories of other climbers."
                                        img="icons/mountainSkyline4.png"
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
                                <Col span={12} lg={12} md={12} sm={24} xs={24} key="1">
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
                                            photos, or stories please email <a>washingtonice1@gmail.com</a> to help out. We are always
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