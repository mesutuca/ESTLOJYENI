<template>
 <GoogleMap
     ref="mapRef"
     api-key="AIzaSyA3DckRGUdNkBfSFBET8DWRJZpeSHEa7Tc"
     style="width: 100%; height: 500px"
     :zoom-control="true"
     :pan-control="true"
     :map-type-control="false"
     :scale-control="true"
     :scrollwheel="true"
     :street-view-control="true"
     :draggable="true"
     :max-zoom="18"
 >
  <MarkerCluster>
   <Marker v-for="(location, i) in locations" :options="{ position: location ,icon:{url:'https://fotogizem.com/public/site1/images/marker2.png', anchor:{x:18,y:60}}}" :key="i">
    <InfoWindow>
     <div id="contet">
      <div id="siteNotice" class="font-bold">Saadetin Bey İöö</div>
      <div id="bodyContent">
       <p>Turgutreis
        4114. Sk. No:23
        33050 Akdeniz/Mersin
        Türkiye</p>
       <a href="https://www.google.com.tr/maps/dir//38.746742,%2035.333582/@38.746742,%2035.333582,17z?hl=tr" target="_blank">Yeni olsun</a>
       <a class="text-blue-600" href="https://maps.google.com/maps?ll=36.791407,34.615007&z=17&t=m&hl=tr&gl=US&mapclient=apiv3&cid=2976810486266539839" target="_blank">
        Google Haritalarda görüntüleyin</a>
      </div>
     </div>
    </InfoWindow>
   </Marker>
  </MarkerCluster>
 </GoogleMap>
</template>

<script setup>
import {onMounted, ref, watch} from 'vue'
import {GoogleMap, Marker, MarkerCluster, InfoWindow} from 'vue3-google-map'

const mapRef = ref(null)

watch(() => mapRef.value?.ready, (ready) => {
     if (!ready) return;
     mapFitBounds(mapRef, locations);
    }
);


// const locations = [
//  {lat: -31.56391, lng: 147.154312},
//  {lat: -33.718234, lng: 150.363181},
//  {lat: -33.727111, lng: 150.371124},
//  {lat: -33.848588, lng: 151.209834},
//  {lat: -33.851702, lng: 151.216968},
//  {lat: -34.671264, lng: 150.863657},
//  {lat: -35.304724, lng: 148.662905},
//  {lat: -36.817685, lng: 175.699196},
//  {lat: -36.828611, lng: 175.790222},
//  {lat: -37.75, lng: 145.116667},
//  {lat: -37.759859, lng: 145.128708},
//  {lat: -37.765015, lng: 145.133858},
//  {lat: -37.770104, lng: 145.143299},
//  {lat: -37.7737, lng: 145.145187},
//  {lat: -37.774785, lng: 145.137978},
//  {lat: -37.819616, lng: 144.968119},
//  {lat: -38.330766, lng: 144.695692},
//  {lat: -39.927193, lng: 175.053218},
//  {lat: -41.330162, lng: 174.865694},
//  {lat: -42.734358, lng: 147.439506},
//  {lat: -42.734358, lng: 147.501315},
//  {lat: -42.735258, lng: 147.438},
//  {lat: -43.999792, lng: 170.463352},
//  {lat: -43.999792, lng: 170.463352},
//  {lat: 36.802619185354146, lng: 34.632311109320085}
// ];
const locations = [
 {lat: 36.792515, lng: 34.612607}
];

function mapFitBounds(mapRef, markers) {
 console.log(markers)
 let bounds;
 const api = mapRef.value.api;
 const map = mapRef.value.map;

 bounds = new api.LatLngBounds();
 for (let i = 0; i < markers.length; i++) {
  bounds.extend(markers[i]);
 }
 map.fitBounds(bounds);
}

onMounted(() => {

});
</script>