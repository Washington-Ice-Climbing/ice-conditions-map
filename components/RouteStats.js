import {Card, Layout} from 'antd';
import Stars from "./Stars";

const { Content } = Layout;

export default function RouteStats({route}) {
    return (
        <Card style={{height: '100%'}}>
            <Content>
                <h2>Route Stats</h2>
                <Stars numStars={route.stars} style={{position: 'absolute', top: '30px', right: '30px', zIndex: '1'}}/>
                <p><b>Difficulty</b>: {route.difficulty}</p>
                <p><b>Technical Grade</b>: {route.grade}</p>
                <p><b>Length</b>: {route.length}</p>
                <p><b>Commitment</b>: {route.commitment}</p>
                <p><b>Avalanche Hazard</b>: {route.avalanche}</p>
                <p><b>Approach</b>: {route.approachTime}</p>
                <p><b>Region</b>: {route.region}</p>
                <p><b>Season</b>: {route.season}</p>
                <p><b>FA</b>: {route.fa}</p>
                <p>{route.contributor.getAvatar('large')}  <i>Contributed by {route.contributor.name}</i></p>
            </Content>
        </Card>
    )
}