import { Card, Carousel } from 'antd';

export default function RoutePhotos({route}) {
    const imgs = route.imgs.map(imgSrc =>
        <div key={imgSrc}>
            <img alt="image1" style={{ width: '100%', height: '100%' }} src={imgSrc} />
        </div>
    )
    return (
        <Card style={{height: '100%'}}>
            <Carousel autoplay>
                {imgs}
            </Carousel>
        </Card>
    )
}