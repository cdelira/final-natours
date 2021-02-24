export const displayMap = (locations) =>{
    
mapboxgl.accessToken = 'pk.eyJ1IjoiY2RlbGlyYSIsImEiOiJja2xicjl4dTkybzY5MnZwZThkNGI3eXI0In0.rRDZz2nVIa08cfJILEPNpg';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/cdelira/cklcpyq5p1kjj17nzm9wybt4c',
    scrollZoom: false
    //interactive: false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
    //add marker 
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
        element: el, 
        anchor: 'bottom'
    }).setLngLat(loc.coordinates).addTo(map);

    new mapboxgl.Popup({
        offset: 30
    }).setLngLat(loc.coordinates).setHTML(`<p> Day ${loc.day}: ${loc.description} </p>`).addTo(map);
    
    bounds.extend(loc.coordinates);
}); 

map.fitBounds(bounds,{
    padding:{

        top:200,
        bottom:150, 
        left: 100,
        right: 100
    }
}); 
}
