// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);
let map = L.map('mapid').setView([40.3214, -96.5708], 5);

//  Add a marker to the map for Los Angeles, California - radius in meters
// L.circle([34.0522, -118.2437], {
// 	color: "black",
// 	fillColor: "yellow",
// 	fillOpacity: 0.2,
// 	radius: 300
//  }).addTo(map);

// Add a circle using circlemaker() - radius in pixels:
//  L.circleMarker([34.0522, -118.2437], {
// 	 color: "black",
// 	 radius: 300,
// 	 fillColor: "#ffffa1"
//  }).addTo(map);

// Coordinates for each point to be used in the polyline.
// let line = [
// 	[33.9416, -118.4085],
// 	[37.6213, -122.3790],
// 	[40.7899, -111.9791],
// 	[42.0591, -74.0912]
// ];

//SKILL DRILL 13.4.3
let line = [
	[37.6213, -122.3790],
	[30.4144, -97.6292],
	[43.6779, -79.6225],
	[41.5923, -72.4098]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
	color: "blue",
	weight: 4,
	dashArray: '6, 8', 
	dashOffset: '0',
	opacity: 0.5
  }).addTo(map);

// Get data from cities.js
// let cityData = cities;

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
// 	console.log(city)
// 	L.circleMarker(city.location, {
// 		radius: city.population/100000
// 	})
// 	.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   	.addTo(map);
// });

// SKILL DRILL
// cityData.forEach(function(city) {
// 	console.log(city)
// 	L.circleMarker(city.location, {
// 		radius: city.population/200000,
// 		color: "orange",
// 		fillColor: "orange",
// 		fillOpacity: 0.2
// 	})
// 	.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   	.addTo(map);
// });


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 4,
	id: "light-v10",
	// id: "satellite-streets-v11",
	// id: "streets-v11",
	// id: "dark-v10",
	accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//SKILL DRILL


