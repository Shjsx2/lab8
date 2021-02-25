function initMap() {
	// add your code here
	L.mapquest.key = 'TnvU7anU2aOuT1jRoNrZpRW5OlsIT18D'
	var map = L.mapquest.map('map' , {
		center: [32.882 , -117.234], 
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});
	L.marker([32.882 , -117.234]).addTo(map);
}