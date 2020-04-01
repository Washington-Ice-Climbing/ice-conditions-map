import { Layout, Card } from 'antd';
const { Content } = Layout;

export default function RouteLinks(props) {
    return (
        <Card style={{height: '100%'}}>
            <Content>
                <h2>Relevant Links</h2>
                <ul>
                    <li><a href="https://climberkyle.com/2020/02/28/fa-sloan-peak-superalpine-wi3-4-1000/">First Ascent Trip Report and Accident Story</a></li>
                    <li><a href="https://cascadeclimbers.com/forum/topic/103355-tr-sloan-peak-superalpine-03152020/">Second Ascent Trip Report</a></li>
                    <li><a href="https://cascadeclimbers.com/forum/topic/84198-tr-sloan-peak-west-face-12102011/">Full Moon Fever, a route on the NW Face</a></li>
                </ul>
            </Content>
        </Card>
    )
}