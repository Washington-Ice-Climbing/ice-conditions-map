import {Card} from 'antd';

export default function FeatureCard({title, description, color, img}) {
    return (
        <div style={{margin: "8px 0px"}}>
            <Card
                hoverable
                cover={<img alt="image4" src={img} style={{backgroundColor: color}} />}>
                <Card.Meta title={title} description={description} style={{minHeight: "75px"}}/>
            </Card>
        </div>
    )
}