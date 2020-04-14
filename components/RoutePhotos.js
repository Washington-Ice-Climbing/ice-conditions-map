import { Card, Carousel } from 'antd';

export default function RoutePhotos({route, onPhotoClick}) {
    const imgs = route.imgs.map((img, index) =>
        <div key={img.src} onClick={() => onPhotoClick(index)}>
            <img alt={img.caption} style={{ width: '100%', height: '100%' }} src={img.src} />
        </div>
    )
    return (
        <Card style={{height: '100%'}}>
            <Carousel autoplay >
                {imgs}
            </Carousel>
        </Card>
    )
}