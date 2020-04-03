import { Tabs, Card } from 'antd';

const { TabPane } = Tabs;

export default function RouteBeta({route}) {
    return (
        <Card style={{margin: "8px 0px"}}>
            <Tabs defaultActiveKey="2" onChange={key => console.log(key)}>
                <TabPane tab="Approach" key="1">
                    <div dangerouslySetInnerHTML={{__html: route.content.beta.approach}}/>
                </TabPane>
                <TabPane tab="Climb" key="2">
                    <div dangerouslySetInnerHTML={{__html: route.content.beta.climb}}/>
                </TabPane>
                <TabPane tab="Descent" key="3">
                    <div dangerouslySetInnerHTML={{__html: route.content.beta.descent}}/>
                </TabPane>
                <TabPane tab="Gear" key="4">
                    <div dangerouslySetInnerHTML={{__html: route.content.beta.gear}}/>
                </TabPane>
                <TabPane tab="Conditions" key="5">
                    <div dangerouslySetInnerHTML={{__html: route.content.beta.conditions}}/>
                </TabPane>
                <TabPane tab="Topos" key="6">
                    Maps and route topos comning soon.
                </TabPane>
            </Tabs>
        </Card>

    )
}