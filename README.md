# Mapping_Earthquakes

## Project Overview
The purpose of this project is to visually show the differences between the magnitudes of earthquakes all over the world for the last seven days. To illustrate the severity of earthquakes in relation to tectonic plates, an API call to the tectonic plate data is made using d3.json(), and the data is added as an overlay to the map using the L.geoJSON() layer. Each earthquake is visually represented by a circle and color, where a higher magnitude will have a larger diameter.

## Resources
- Data source:
    - [GeoJSON earthquake data from the USGS website for the last 7 days](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)
    - [Tectonic plate boundaries data](https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json)
- Technologies: JavaScript, HTML, Leaflet.js, Mapbox, Visual Studio Code 1.43.1