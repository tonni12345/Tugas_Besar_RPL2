mapboxgl.accessToken = "pk.eyJ1IjoidG9ubmk1MSIsImEiOiJjbTNsOTNmYjcwbWI1Mmpvb2V3ZGdmaGUwIn0.NWQcenmvLOVsaB4Qx2XSCw"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLongitude = position.coords.longitude;
          const userLatitude = position.coords.latitude;

          setupMap([userLongitude, userLatitude])
        },
      );
    } 
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}
