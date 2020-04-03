import {Card, Layout} from 'antd';

const { Content } = Layout;

export default function RouteIntro({route}) {
    return (
        <Card style={{height: '100%'}}>
            <Content>
                <h2>Route Introduction</h2>
                <div dangerouslySetInnerHTML={{__html: route.content.intro}}/>
            </Content>
        </Card>
    )
}