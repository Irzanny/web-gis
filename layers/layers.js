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
var format_tandasempadan_2 = new ol.format.GeoJSON();
var features_tandasempadan_2 = format_tandasempadan_2.readFeatures(json_tandasempadan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tandasempadan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tandasempadan_2.addFeatures(features_tandasempadan_2);
var lyr_tandasempadan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tandasempadan_2, 
                style: style_tandasempadan_2,
                popuplayertitle: 'tanda sempadan',
                interactive: true,
                title: '<img src="styles/legend/tandasempadan_2.png" /> tanda sempadan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_mergelot_1.setVisible(true);lyr_tandasempadan_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_mergelot_1,lyr_tandasempadan_2];
lyr_mergelot_1.set('fieldAliases', {'fid': 'fid', 'no.lot': 'no.lot', 'luas': 'luas', 'tsp — hakm': 'tsp — hakm', 'tsp — ha_1': 'tsp — ha_1', 'tsp — pemi': 'tsp — pemi', 'layer': 'layer', 'path': 'path', });
lyr_tandasempadan_2.set('fieldAliases', {'fid': 'fid', 'no.lot': 'no.lot', 'luas': 'luas', 'tsp — hakm': 'tsp — hakm', 'tsp — ha_1': 'tsp — ha_1', 'tsp — pemi': 'tsp — pemi', 'layer': 'layer', 'path': 'path', 'vertex_ind': 'vertex_ind', 'vertex_par': 'vertex_par', 'vertex_p_1': 'vertex_p_1', 'vertex_p_2': 'vertex_p_2', 'distance': 'distance', 'angle': 'angle', });
lyr_mergelot_1.set('fieldImages', {'fid': 'TextEdit', 'no.lot': 'TextEdit', 'luas': 'TextEdit', 'tsp — hakm': 'TextEdit', 'tsp — ha_1': 'TextEdit', 'tsp — pemi': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_tandasempadan_2.set('fieldImages', {'fid': '', 'no.lot': '', 'luas': '', 'tsp — hakm': '', 'tsp — ha_1': '', 'tsp — pemi': '', 'layer': '', 'path': '', 'vertex_ind': '', 'vertex_par': '', 'vertex_p_1': '', 'vertex_p_2': '', 'distance': '', 'angle': '', });
lyr_mergelot_1.set('fieldLabels', {'fid': 'hidden field', 'no.lot': 'header label - visible with data', 'luas': 'header label - visible with data', 'tsp — hakm': 'no label', 'tsp — ha_1': 'no label', 'tsp — pemi': 'no label', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_tandasempadan_2.set('fieldLabels', {'fid': 'no label', 'no.lot': 'no label', 'luas': 'no label', 'tsp — hakm': 'no label', 'tsp — ha_1': 'no label', 'tsp — pemi': 'no label', 'layer': 'no label', 'path': 'no label', 'vertex_ind': 'no label', 'vertex_par': 'no label', 'vertex_p_1': 'no label', 'vertex_p_2': 'no label', 'distance': 'no label', 'angle': 'no label', });
lyr_tandasempadan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});