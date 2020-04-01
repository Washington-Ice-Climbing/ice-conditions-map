import { Tabs, Card } from 'antd';

const { TabPane } = Tabs;

export default function RouteBeta(props) {
    return (
        <Card style={{margin: "8px 0px"}}>
            <Tabs defaultActiveKey="2" onChange={key => console.log(key)}>
                <TabPane tab="Approach" key="1">
                    <p>
                        Usually, the approach begins where the Mountain Loop Highway intersects Forest Service Road 4096
                        around an elevation of 1400ft. The road isn't gated to this point, but it also is not plowed,
                        so hopefully some Darrington locals have driven it and packed down snow. It is a good idea to bring
                        along a saw.
                    </p>
                    <p>
                        Skin up the road then up the valley to the base of the west face.
                    </p>
                </TabPane>
                <TabPane tab="Climb" key="2">
                    <p>
                        There are a few different alternatives for the first pitch. The main goal is to get to the
                        base of the obvious ice gully on the right side of the face.
                    </p>
                    <p>
                        <b>Pitch 2:</b> Climb 60m of sustained WI3 starting on the left side of the gully and moving center.
                        This is the money pitch. Belay from screws.
                    </p>
                    <p>
                        <b>Pitch 3:</b> This pitch(es) is about 100m and features steep snow with easier ice steps. Many teams
                        might simul climb this. Near the end, you will see a snow ramp heading out left, which gives you the option
                        of skipping the final technical step and moving onto the upper face.
                    </p>
                    <p>
                        <b>Pitch 4:</b> The final WI3+ pitch climbs a short steep curtain. Belay from screws in a flow off
                        to the right above.
                    </p>
                    <p>
                        <b>Pitch 5+:</b> Keep climbing steep, exposed snow for another 600 ft to the summit.
                    </p>

                </TabPane>
                <TabPane tab="Descent" key="3">
                    Rap the route or descend the corkscrew route.
                </TabPane>
                <TabPane tab="Gear" key="4">
                    Screws and skis! Oh, maybe tools and crampons also.
                </TabPane>
                <TabPane tab="Conditions" key="5">
                    Fickle. watch for avalanches.
                </TabPane>
                <TabPane tab="Topos" key="6">
                    Maps and route topos.
                </TabPane>
            </Tabs>
        </Card>

    )
}