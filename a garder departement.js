var departementLayer;
fetch('departementsna.geojson')
    .then(response => response.json())
    .then(data => {
        departementLayer = L.geoJSON(data, {
            color: 'black',
            fillOpacity: 0,
            weight: 1.5,
        }).addTo(map);

        // Ajouter le bouton EasyButton pour afficher/cacher la couche département
        L.easyButton({
            id: 'custom-text-button',
            position: 'topright',
            type: 'replace',
            classes: 'easy-button-container',
            states: [{
                stateName: 'hide-departement',
                icon: '<span class="easy-button-text">Mon Bouton</span>',
                title: 'Cacher les départements',
                onClick: function (control) {
                    map.removeLayer(departementLayer);
                    control.state('show-departement');
                }
            }, {
                stateName: 'show-departement',
                icon: '<span class="easy-button-text">Mon Bouton</span>',
                title: 'Afficher les départements',
                onClick: function (control) {
                    map.addLayer(departementLayer);
                    control.state('hide-departement');
                }
            }]
        }).addTo(map);
    });