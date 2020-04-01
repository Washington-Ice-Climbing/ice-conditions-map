import {Card, Layout} from 'antd';

const { Content } = Layout;

export default function RouteStats(props) {
    return (
        <Card style={{height: '100%'}}>
            <Content>
                <h2>Route Stats</h2>
                <p><b>Difficulty</b>: Moderate</p>
                <p><b>Technical Grade</b>: WI3-4</p>
                <p><b>Length</b>: 1000'</p>
                <p><b>Commitment</b>: Moderate</p>
                <p><b>Avalanche Hazard</b>: High</p>
                <p><b>Approach</b>: 4-6 hours</p>
                <p><b>Region</b>: Mountain Loop Highway</p>
                <p><b>Season</b>: December-March</p>
                <p><b>FA</b>: Porter McMichael, Kyle McCrohan, Tavish Hansen, February 2020</p>
            </Content>
        </Card>
    )
}