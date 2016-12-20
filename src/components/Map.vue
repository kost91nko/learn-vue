<template>
    <div id="mapid"></div>
</template>
<style>
	#mapid { height: 500px; }
</style>
<script>
	import L from 'leaflet';

    export default{
        mounted: function () {
        	var mymap = L.map('mapid').setView([51.505, -0.09], 13);
        	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
				attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(mymap);

			L.marker([51.5, -0.09]).addTo(mymap)
				.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
				.openPopup();

			L.polygon([
				[51.509, -0.08],
				[51.503, -0.06],
				[51.51, -0.047],
				[51.154, -0.05]
			]).addTo(mymap);
        }
    }
</script>
