import { Card, Carousel } from 'antd';

export default function RoutePhotos(props) {
    return (
        <Card style={{height: '100%'}}>
            <Carousel autoplay>
                <div>
                    <img alt="image1" style={{ width: '100%', height: '100%' }} src="/static/routes/superalpine/cover.jpg" />
                </div>
                <div>
                    <img alt="image2" style={{ width: '100%', height: '100%' }} src="/static/routes/ice-cliff/cover.jpg" />
                </div>
                <div>
                    <img alt="image2" style={{ width: '100%', height: '100%' }} src="/static/routes/cosley-houston/cover.jpg" />
                </div>
            </Carousel>
        </Card>
    )
}