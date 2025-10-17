var wms_layers = [];


        var lyr_TopoOpen_0 = new ol.layer.Tile({
            'title': 'Topo Open',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_Batas_Administrasi_Lowokwaru_1 = new ol.format.GeoJSON();
var features_Batas_Administrasi_Lowokwaru_1 = format_Batas_Administrasi_Lowokwaru_1.readFeatures(json_Batas_Administrasi_Lowokwaru_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_Lowokwaru_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_Lowokwaru_1.addFeatures(features_Batas_Administrasi_Lowokwaru_1);
var lyr_Batas_Administrasi_Lowokwaru_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Administrasi_Lowokwaru_1, 
                style: style_Batas_Administrasi_Lowokwaru_1,
                popuplayertitle: 'Batas_Administrasi_Lowokwaru',
                interactive: true,
                title: '<img src="styles/legend/Batas_Administrasi_Lowokwaru_1.png" /> Batas_Administrasi_Lowokwaru'
            });
var format_Jaringan_Jalan_Lowokwaru_2 = new ol.format.GeoJSON();
var features_Jaringan_Jalan_Lowokwaru_2 = format_Jaringan_Jalan_Lowokwaru_2.readFeatures(json_Jaringan_Jalan_Lowokwaru_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaringan_Jalan_Lowokwaru_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Jalan_Lowokwaru_2.addFeatures(features_Jaringan_Jalan_Lowokwaru_2);
var lyr_Jaringan_Jalan_Lowokwaru_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jaringan_Jalan_Lowokwaru_2, 
                style: style_Jaringan_Jalan_Lowokwaru_2,
                popuplayertitle: 'Jaringan_Jalan_Lowokwaru',
                interactive: true,
                title: '<img src="styles/legend/Jaringan_Jalan_Lowokwaru_2.png" /> Jaringan_Jalan_Lowokwaru'
            });
var format_fixbgt_3 = new ol.format.GeoJSON();
var features_fixbgt_3 = format_fixbgt_3.readFeatures(json_fixbgt_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fixbgt_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fixbgt_3.addFeatures(features_fixbgt_3);
var lyr_fixbgt_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fixbgt_3, 
                style: style_fixbgt_3,
                popuplayertitle: 'fixbgt',
                interactive: true,
                title: '<img src="styles/legend/fixbgt_3.png" /> fixbgt'
            });

lyr_TopoOpen_0.setVisible(true);lyr_Batas_Administrasi_Lowokwaru_1.setVisible(true);lyr_Jaringan_Jalan_Lowokwaru_2.setVisible(true);lyr_fixbgt_3.setVisible(true);
var layersList = [lyr_TopoOpen_0,lyr_Batas_Administrasi_Lowokwaru_1,lyr_Jaringan_Jalan_Lowokwaru_2,lyr_fixbgt_3];
lyr_Batas_Administrasi_Lowokwaru_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Kecamatan': 'Kecamatan', });
lyr_Jaringan_Jalan_Lowokwaru_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Fungsi': 'Fungsi', 'Nama_Jalan': 'Nama_Jalan', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', });
lyr_fixbgt_3.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'Perusahaan': 'Perusahaan', 'Jenis_bang': 'Jenis_bang', 'X': 'X', 'Y': 'Y', 'Jalan': 'Jalan', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Jam_Operas': 'Jam_Operas', 'Kota': 'Kota', });
lyr_Batas_Administrasi_Lowokwaru_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_Jaringan_Jalan_Lowokwaru_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Fungsi': 'TextEdit', 'Nama_Jalan': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', });
lyr_fixbgt_3.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'Perusahaan': 'TextEdit', 'Jenis_bang': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Jalan': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Jam_Operas': 'TextEdit', 'Kota': 'TextEdit', });
lyr_Batas_Administrasi_Lowokwaru_1.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Kecamatan': 'no label', });
lyr_Jaringan_Jalan_Lowokwaru_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Fungsi': 'no label', 'Nama_Jalan': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', });
lyr_fixbgt_3.set('fieldLabels', {'Name': 'inline label - visible with data', 'FolderPath': 'inline label - visible with data', 'Perusahaan': 'inline label - visible with data', 'Jenis_bang': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Jalan': 'inline label - visible with data', 'Kecamatan': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'Jam_Operas': 'inline label - visible with data', 'Kota': 'inline label - always visible', });
lyr_fixbgt_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});