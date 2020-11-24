import React from "react";
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";
import { getMapboxAPIKey } from "../../utils/config";
import { Typography, Divider } from 'antd';

const { Title } = Typography;

const MapGL = ReactMapboxGl({
    accessToken: getMapboxAPIKey()
});

// this will be the image used as the pin
const image = new Image();
image.src = "/icons/marker.png";
image.height = 30;
image.width = 30;
const images = ['marker', image];

export default class ObservationLocation extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.coordinates == null)
            return null;

        const coordinates = [...this.props.coordinates].reverse(); // google maps expects [lng, lat]

        return (
            <div>
                <Title level={4} style={{paddingTop: '15px'}}>Location</Title>
                <Divider style={{backgroundColor: '#BEBEBE'}}/>
                <p><b>({coordinates[1]} N, {coordinates[0]} W)</b> - <i>Location of observation is approximate.</i></p>
                <div>
                    <MapGL
                        containerStyle={{
                            height: '350px',
                            width: '100%'
                        }}
                        style="mapbox://styles/mapbox/outdoors-v11"
                        center={coordinates}
                        zoom={[14]}
                    >
                        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker' }} images={images}>
                            <Feature key="pin" coordinates={coordinates}/>
                        </Layer>
                        <ZoomControl position="bottom-right" zoomDiff={2}/>
                    </MapGL>
                </div>
            </div>
        )
    }
}