var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_mergelot_1 = new ol.format.GeoJSON();
var features_mergelot_1 = format_mergelot_1.readFeatures(json_mergelot_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mergelot_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mergelot_1.addFeatures(features_mergelot_1);
var lyr_mergelot_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mergelot_1, 
                style: style_mergelot_1,
                popuplayertitle: 'merge lot',
                interactive: true,
                title: '<img src="styles/legend/mergelot_1.png" /> merge lot'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_mergelot_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_mergelot_1];
lyr_mergelot_1.set('fieldAliases', {'fid': 'fid', 'no.lot': 'no.lot', 'luas': 'luas', 'tsp — hakm': 'tsp — hakm', 'tsp — ha_1': 'tsp — ha_1', 'tsp — pemi': 'tsp — pemi', 'layer': 'layer', 'path': 'path', });
lyr_mergelot_1.set('fieldImages', {'fid': '', 'no.lot': '', 'luas': '', 'tsp — hakm': '', 'tsp — ha_1': '', 'tsp — pemi': '', 'layer': '', 'path': '', });
lyr_mergelot_1.set('fieldLabels', {'fid': 'no label', 'no.lot': 'header label - visible with data', 'luas': 'header label - visible with data', 'tsp — hakm': 'header label - visible with data', 'tsp — ha_1': 'header label - visible with data', 'tsp — pemi': 'header label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_mergelot_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});