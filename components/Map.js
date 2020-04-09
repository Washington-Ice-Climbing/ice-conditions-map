import React from "react";
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";
import { getMapboxAPIKey } from "../utils/config";
import MapPopup from "./MapPopup"

const MapGL = ReactMapboxGl({
    accessToken: getMapboxAPIKey()
});

// this will be the image used as the pin for climbs
const image = new Image();
image.src = "/icons/marker.png";
image.height = 30;
image.width = 30;
const images = ['marker', image];

export default class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedRoute : null,
            center : [-121.50124,48.01565],
            zoom : [8]
        }
    }

    markerClick = (route, {feature}) => {
        this.setState({
            selectedRoute : route,
            center : feature.geometry.coordinates,
            zoom : [12]
        })
    }

    onToggleHover = (cursor, {map}) => {
        map.getCanvas().style.cursor = cursor;
    }

    onDrag = () => {
        if(this.state.selectedRoute) {
            this.setState({selectedRoute : null})
        }
    }

    render() {
        const {zoom, center, selectedRoute} = this.state
        const {routes} = this.props
        const markers = routes.map(r =>
            <Feature key={r.rid}
                     coordinates={r.coordinates}
                     onClick={this.markerClick.bind(this, r)}
                     onMouseEnter={this.onToggleHover.bind(this, 'pointer')}
                     onMouseLeave={this.onToggleHover.bind(this, '')}/>
        )
        const popup = selectedRoute ? <MapPopup route={selectedRoute}/> : null;

        return (
            <div style={{height: '100vh'}}>
                <MapGL
                    containerStyle={{
                        height: '100vh',
                        width: '100vw'
                    }}
                    style="mapbox://styles/mapbox/outdoors-v11"
                    center={center}
                    zoom={zoom}
                    onDrag={this.onDrag}
                >
                    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker' }} images={images}>
                        {markers}
                    </Layer>
                    {popup}
                    <ZoomControl position="bottom-right"/>
                </MapGL>
            </div>
        )
    }
}