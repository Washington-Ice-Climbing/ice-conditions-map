import React, {Component} from "react";
import { Card } from "antd";

export default class MapContainer extends Component {
    render() {
    <div id="iceMap" style="width:100%;height:400px;"></div>

      <script>
      function myMap() {
      var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
      };
      var map = new google.maps.Map(document.getElementById("iceMap"),mapProp);
      }
      </script>

      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQWiWkHjNoXdapwYFuiKxoU5dfBXWHq9kY&callback=myMap"></script>
    }
}
