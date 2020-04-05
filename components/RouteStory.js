import { Layout, Card } from 'antd';
const { Content } = Layout;

export default function RouteStory({route}) {
    return (
        <Card style={{height: '100%'}}>
            <Content>
                <h2>Words of a Climber</h2>
                <div dangerouslySetInnerHTML={{__html: route.content.extra.story}}/>
            </Content>
        </Card>
    )
}