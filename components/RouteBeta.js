import { Tabs, Card, Row, Col } from 'antd';
import Iframe from 'react-iframe'

const { TabPane } = Tabs;

export default function RouteBeta({route}) {
    return (
        <Card style={{margin: "8px 0px"}}>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Approach" key="1">
                    <Row gutter={16}>
                        <Col span={8} md={8} sm={24} xs={24} style={{margin: '8px 0px'}}>
                            <h3>Approach</h3>
                            <div dangerouslySetInnerHTML={{__html: route.content.beta.approach}}/>
                        </Col>
                        <Col span={8} md={8} sm={24} xs={24} style={{margin: '8px 0px'}} >
                            <h3>Map</h3>
                            <p>
                                <a href={route.map} target="_blank"> Open map in new tab.</a>
                            </p>
                            <Iframe
                                url={route.map}
                                width="100%"
                                height="400px"  // Struggling to get this to work with 100%
                                display="initial"
                                position="relative"
                                // styles={{height: "400px"}}
                            />
                            <p>
                                <b>Note</b>: All tracks are approximate.
                            </p>
                        </Col>
                        <Col span={8} md={8} sm={24} xs={24} style={{margin: '8px 0px'}}>
                            <h3>Descent</h3>
                            <div dangerouslySetInnerHTML={{__html: route.content.beta.descent}}/>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="Climb" key="2">
                    <Row gutter={16}>
                        <Col span={16} md={16} sm={24} xs={24} style={{margin: '8px 0px'}}>
                            <div dangerouslySetInnerHTML={{__html: route.content.beta.climb}}/>
                        </Col>
                        <Col span={8} md={8} sm={24} xs={24} style={{margin: '8px 0px'}}>
                            <img src={route.topoImg} style={{width: "100%"}}/>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="Beta" key="3">
                    <Row gutter={16}>
                        <Col span={8} md={8} sm={24} xs={24} style={{margin: '8px 0px'}}>
                            <h3>Gear</h3>
                            <div dangerouslySetInnerHTML={{__html: route.content.beta.gear}}/>
                        </Col>
                        <Col span={8} md={8} sm={24} xs={24} style={{margin: '8px 0px'}} >
                            <h3>Conditions</h3>
                            <div dangerouslySetInnerHTML={{__html: route.content.beta.conditions}}/>
                        </Col>
                        <Col span={8} md={8} sm={24} xs={24} style={{margin: '8px 0px'}}>
                            <h3>Strategy</h3>
                            <div dangerouslySetInnerHTML={{__html: route.content.beta.strategy}}/>
                        </Col>
                    </Row>
                </TabPane>
            </Tabs>
        </Card>

    )
}