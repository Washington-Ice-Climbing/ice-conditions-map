import { Layout, Card } from 'antd';
const { Content } = Layout;

export default function RouteLinks({route}) {
    return (
        <Card style={{height: '100%'}}>
            <Content>
                <h2>Relevant Links</h2>
                <div dangerouslySetInnerHTML={{__html: route.content.extra.links}}/>
            </Content>
        </Card>
    )
}