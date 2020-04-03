import {Card, Layout} from 'antd';

const { Content } = Layout;

export default function RouteStats({route}) {
    return (
        <Card style={{height: '100%'}}>
            <Content>
                <h2>Route Stats</h2>
                <p><b>Difficulty</b>: {route.difficulty}</p>
                <p><b>Technical Grade</b>: {route.grade}</p>
                <p><b>Length</b>: {route.length}</p>
                <p><b>Commitment</b>: {route.commitment}</p>
                <p><b>Avalanche Hazard</b>: {route.avalanche}</p>
                <p><b>Approach</b>: {route.approachTime}</p>
                <p><b>Region</b>: {route.region}</p>
                <p><b>Season</b>: {route.season}</p>
                <p><b>FA</b>: {route.fa}</p>
            </Content>
        </Card>
    )
}