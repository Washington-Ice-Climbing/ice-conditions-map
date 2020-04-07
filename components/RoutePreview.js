import { Card } from "antd";
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
                        //<div style={{paddingBottom: '90%', height: '0px', display: 'block'}}>
                        <img alt="image1" style={{  width: '100%', height: '100%' }} src={route.coverImg} />
                        // </div>
                    }
                    style={{marginTop: '8px', marginBottom: '8px'}}>
                    <Card.Meta
                        title={route.getTitle()}
                        description={route.getSubtitle()}
                    />
                </Card>
                <Stars numStars={route.stars} style={{position: 'absolute', bottom: '30px', right: '30px', zIndex: '1'}}/>
            </div>
        </Link>
    )
}