import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { getMapboxAPIKey } from "../utils/config";

const MapGL = ReactMapboxGl({
    accessToken: getMapboxAPIKey()
});

export default class Map extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{paddingTop: '64px', height: '100vh'}}>
                <MapGL
                    containerStyle={{
                        height: '100vh',
                        width: '100vw'
                    }}
                    style="mapbox://styles/mapbox/outdoors-v10"
                    center={[-121.50124,48.01565]}
                    zoom={[8]}
                />
            </div>
        )
    }
}