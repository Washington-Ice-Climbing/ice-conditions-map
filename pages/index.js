import {Layout, Typography, Button, Divider, Row, Col, Card} from 'antd';
import Topbar from "../components/Topbar";
import PageFooter from "../components/Footer";
import Link from 'next/link';
import theme from '../styles/theme'

const { Content } = Layout;
const { Title } = Typography;

export default function Index() {
    return (
        <div>
            <Topbar title="WA Ice" subTitle="The Elusive Beast"/>
            <Layout style={{paddingTop: '64px', minHeight: '100vh'}}>
                <Content style={{padding: '30px', textAlign: 'center', paddingTop: '100px', paddingBottom: '40px', backgroundColor: theme.colors.primary, color: "white"}}>
                    {/*<div style={{textAlign: 'center', paddingTop: '100px', paddingBottom: '0px'}}>*/}
                        <h1 style={{fontSize: '500%', color: 'white'}}>Washington Ice</h1>
                        <p>
                            Beta, community, and inspiration for ice climbing in the Evergreen State. Sharpen your tools. The hunt is on.
                        </p>
                        <div style={{margin: "40px"}}>
                            <Link href="/routes">
                                <Button size="large" style={{width: "200px", margin: "10px", backgroundColor: theme.colors.accent}}>
                                    Browse Routes
                                </Button>
                            </Link>
                            <Button size="large" style={{width: "200px", margin: "10px"}}>
                                View Map
                            </Button>
                        </div>
                    {/*</div>*/}

                </Content>
                <Content style={{backgroundColor: 'white', padding: '30px'}}>
                    <Content style={{maxWidth: '1200px', margin: '0 auto', padding: '20px'}}>
                        <Content>
                            <Title>The Elusive Beast</Title>
                            <p>
                                The state of Washington is known for many things - winding waterways, rugged mountains, beautiful forests -
                                but one thing it is not known for is ice climbing. Our wet, maritime climate makes it challenging to
                                find reliable ice climbing conditions. Poor access confines winter recreation to a few distinct areas.
                                A lack of information and up-to-date condition reports makes ice climbing more of a gamble than
                                many feel is worthy for the reward.
                            </p>
                            <p>
                                Although Washington lacks in reliable low elevation water ice, it does have it fair share of
                                rugged alpine ice climbs. This guide aims to demystify many of these climbs - which are not
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
                                    <Card
                                        hoverable
                                        style={{marginTop: '8px', marginBottom: '8px', border: "1px solid #ededed"}}
                                        cover={<img alt="image1" src="icons/mountainSkyline1.png" style={{backgroundColor: theme.colors.primary}} />}>
                                        <Card.Meta title="Browse" description="Filter by region and difficulty." style={{minHeight: "75px"}}/>
                                    </Card>
                                </Col>
                                <Col span={6} lg={6} md={12} sm={24} xs={24} key="2">
                                    <Card
                                        hoverable
                                        style={{marginTop: '8px', marginBottom: '8px', border: "1px solid #ededed"}}
                                        cover={<img alt="image2" src="icons/mountainSkyline2.png" style={{backgroundColor: theme.colors.link}} />}>
                                        <Card.Meta title="Discover" description="Interactive map with routes and condition reports." style={{minHeight: "75px"}}/>
                                    </Card>
                                </Col>
                                <Col span={6} lg={6} md={12} sm={24} xs={24} key="3">
                                    <Card
                                        hoverable
                                        style={{marginTop: '8px', marginBottom: '8px', border: "1px solid #ededed"}}
                                        cover={<img alt="image3" src="icons/mountainSkyline3.png" style={{backgroundColor: theme.colors.accent2}} />}>
                                        <Card.Meta title="Enhance" description="Integrated caltopo maps and gpx tracks." style={{minHeight: "75px"}}/>
                                    </Card>
                                </Col>
                                <Col span={6} lg={6} md={12} sm={24} xs={24} key="4">
                                    <Card
                                        hoverable
                                        style={{marginTop: '8px', marginBottom: '8px', border: "1px solid #ededed"}}
                                        cover={<img alt="image4" src="icons/mountainSkyline4.png" style={{backgroundColor: theme.colors.accent}} />}>
                                        <Card.Meta title="Inspire" description="Hear the stories of other climbers." style={{minHeight: "75px"}}/>
                                    </Card>
                                </Col>
                            </Row>
                        </Content>
                    </Content>
                </Content>
                <PageFooter/>
            </Layout>
        </div>
    )
}