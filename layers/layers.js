var wms_layers = [];

var lyr_lycee_2022_georeftif_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2022_georef.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2022_georeftif_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_informationhaie_1 = new ol.format.GeoJSON();
var features_informationhaie_1 = format_informationhaie_1.readFeatures(json_informationhaie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_informationhaie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_informationhaie_1.addFeatures(features_informationhaie_1);
var lyr_informationhaie_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_informationhaie_1, 
                style: style_informationhaie_1,
                interactive: true,
                title: '<img src="styles/legend/informationhaie_1.png" /> information haie'
            });

lyr_lycee_2022_georeftif_0.setVisible(true);lyr_informationhaie_1.setVisible(true);
var layersList = [lyr_lycee_2022_georeftif_0,lyr_informationhaie_1];
lyr_informationhaie_1.set('fieldAliases', {'n° haie': 'n° haie', 'compositio': 'compositio', 'fruitier': 'fruitier', 'fleurs': 'fleurs', 'naturemort': 'naturemort', 'enviro.': 'enviro.', 'valeur éco': 'valeur éco', });
lyr_informationhaie_1.set('fieldImages', {'n° haie': '', 'compositio': '', 'fruitier': '', 'fleurs': '', 'naturemort': '', 'enviro.': '', 'valeur éco': '', });
lyr_informationhaie_1.set('fieldLabels', {'n° haie': 'inline label', 'compositio': 'inline label', 'fruitier': 'inline label', 'fleurs': 'inline label', 'naturemort': 'inline label', 'enviro.': 'inline label', 'valeur éco': 'inline label', });
lyr_informationhaie_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});