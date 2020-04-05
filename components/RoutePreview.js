import { Card, Avatar } from "antd";
import Link from "next/link";
import Stars from "./Stars";

export default function RoutePreview(props) {
    const route = props.route
    return (
        <Link href="/routes/[rid]" as={`/routes/${route.rid}`}>
            <div>
                <Card
                    hoverable
                    cover={
                        <img alt="image1" style={{ width: '100%', height: '100%' }} src={route.coverImg} />
                    }
                    style={{marginTop: '8px', marginBottom: '8px'}}>
                    <Card.Meta
                        title={route.getTitle()}
                        description={route.getSubtitle()}
                        // avatar={<Avatar src="https://icon2.cleanpng.com/20180107/vdw/star-cliparts-5a51b114a5efb5.12680648151530318867979713.jpg" />}
                    />
                </Card>
                <Stars numStars={route.stars} style={{position: 'absolute', bottom: '30px', right: '30px', zIndex: '1'}}/>
            </div>
        </Link>
    )
}