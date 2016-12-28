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
        	let mymap = L.map('mapid').setView([0, 0], 1);
        	L.tileLayer('https://{s}.be-mobile.biz/s/1fd03a7a/{z}/{x}/{y}.png', {
				attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(mymap);

        }
    }
</script>
