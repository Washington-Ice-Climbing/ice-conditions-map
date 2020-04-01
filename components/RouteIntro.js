import {Card, Layout} from 'antd';

const { Content } = Layout;

export default function RouteIntro(props) {
    return (
        <Card style={{height: '100%'}}>
            <Content>
                <h2>Route Introduction</h2>
                <p>
                    At first glance, the west face of Sloan Peak looks like something out of the Rockies -
                    steep, terraced, and loaded with free hanging ice pillars. This is certainly a unique face in the
                    Cascades, forming massive lines that could be world class, if they were climbed.
                </p>
                <p>
                    Superalpine climbs
                    the weakness on the right side of the face, ascending a thousand feet of ice and steep snow.
                    Compared to other Cascade alpine ice routes, it is rather sustained and full-on from the start.
                    While safe conditions can be tricky to get on this route, your patience will be rewarded with possibly
                    the best moderate ice route on this side of the Rockies.
                </p>
            </Content>
        </Card>
    )
}