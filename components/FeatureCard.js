import {Card} from 'antd';
import Link from "next/link";

export default function FeatureCard({title, description, color, img, href}) {
    return (
        <div style={{margin: "8px 0px"}}>
            <Link href={href}>
                <Card
                    hoverable
                    cover={<img alt="image4" src={img} style={{backgroundColor: color}} />}>
                    <Card.Meta title={title} description={description} style={{minHeight: "75px"}}/>
                </Card>
            </Link>
        </div>
    )
}