import { Layout, Card } from 'antd';
const { Content } = Layout;

export default function RouteHistory({route}) {
    return (
        <Card style={{height: '100%'}}>
            <Content>
                <h2>History</h2>
                <div dangerouslySetInnerHTML={{__html: route.content.extra.history}}/>
            </Content>
        </Card>
    )
}