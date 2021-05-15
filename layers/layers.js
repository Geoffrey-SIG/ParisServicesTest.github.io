var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_espaces_verts_1 = new ol.format.GeoJSON();
var features_espaces_verts_1 = format_espaces_verts_1.readFeatures(json_espaces_verts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_espaces_verts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_espaces_verts_1.addFeatures(features_espaces_verts_1);
var lyr_espaces_verts_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_espaces_verts_1, 
                style: style_espaces_verts_1,
                interactive: false,
                title: '<img src="styles/legend/espaces_verts_1.png" /> espaces_verts'
            });
var format_LaboratoirestestHIV_2 = new ol.format.GeoJSON();
var features_LaboratoirestestHIV_2 = format_LaboratoirestestHIV_2.readFeatures(json_LaboratoirestestHIV_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaboratoirestestHIV_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaboratoirestestHIV_2.addFeatures(features_LaboratoirestestHIV_2);
var lyr_LaboratoirestestHIV_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LaboratoirestestHIV_2, 
                style: style_LaboratoirestestHIV_2,
                interactive: true,
                title: '<img src="styles/legend/LaboratoirestestHIV_2.png" /> Laboratoires (test HIV)'
            });
var format_Fontaineeau_3 = new ol.format.GeoJSON();
var features_Fontaineeau_3 = format_Fontaineeau_3.readFeatures(json_Fontaineeau_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fontaineeau_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fontaineeau_3.addFeatures(features_Fontaineeau_3);
var lyr_Fontaineeau_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fontaineeau_3,
maxResolution:280.0446615226196,
 
                style: style_Fontaineeau_3,
                interactive: true,
                title: '<img src="styles/legend/Fontaineeau_3.png" /> Fontaine à eau'
            });
var format_Toilettespubliques_4 = new ol.format.GeoJSON();
var features_Toilettespubliques_4 = format_Toilettespubliques_4.readFeatures(json_Toilettespubliques_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toilettespubliques_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toilettespubliques_4.addFeatures(features_Toilettespubliques_4);
var lyr_Toilettespubliques_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Toilettespubliques_4,
maxResolution:28004.466152261964,
 
                style: style_Toilettespubliques_4,
                interactive: true,
                title: '<img src="styles/legend/Toilettespubliques_4.png" /> Toilettes publiques'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_espaces_verts_1.setVisible(true);lyr_LaboratoirestestHIV_2.setVisible(true);lyr_Fontaineeau_3.setVisible(true);lyr_Toilettespubliques_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_espaces_verts_1,lyr_LaboratoirestestHIV_2,lyr_Fontaineeau_3,lyr_Toilettespubliques_4];
lyr_espaces_verts_1.set('fieldAliases', {'nsq_espace_': 'nsq_espace_', 'nom_ev': 'nom_ev', 'type_ev': 'type_ev', 'categorie': 'categorie', 'adresse_num': 'adresse_num', 'adresse_com': 'adresse_com', 'adresse_typ': 'adresse_typ', 'adresse_lib': 'adresse_lib', 'adresse_cod': 'adresse_cod', 'poly_area': 'poly_area', 'surface_tot': 'surface_tot', 'surface_hor': 'surface_hor', 'presence_cl': 'presence_cl', 'perimeter': 'perimeter', 'annee_ouver': 'annee_ouver', 'annee_renov': 'annee_renov', 'ancien_nom_': 'ancien_nom_', 'annee_chang': 'annee_chang', 'nb_entites': 'nb_entites', 'ouvert_ferm': 'ouvert_ferm', 'id_division': 'id_division', 'id_atelier_': 'id_atelier_', 'ida3d_enb': 'ida3d_enb', 'site_villes': 'site_villes', 'id_eqpt': 'id_eqpt', 'competence': 'competence', 'url_plan': 'url_plan', });
lyr_LaboratoirestestHIV_2.set('fieldAliases', {'code_cpam': 'code_cpam', 'num_finess': 'num_finess', 'liste': 'liste', 'laboratoire': 'laboratoire', 'adresse': 'adresse', 'code_postal': 'code_postal', 'ville': 'ville', 'telephone': 'telephone', 'horaires': 'horaires', });
lyr_Fontaineeau_3.set('fieldAliases', {'gid': 'gid', 'type_objet': 'type_objet', 'modele': 'modele', 'no_voirie_p': 'no_voirie_p', 'no_voirie_i': 'no_voirie_i', 'voie': 'voie', 'commune': 'commune', 'dispo': 'dispo', 'debut_ind': 'debut_ind', 'fin_ind': 'fin_ind', 'motif_ind': 'motif_ind', });
lyr_Toilettespubliques_4.set('fieldAliases', {'type': 'type', 'statut': 'statut', 'adresse': 'adresse', 'arrondissem': 'arrondissem', 'horaire': 'horaire', 'acces_pmr': 'acces_pmr', 'relais_bebe': 'relais_bebe', 'url_fiche_e': 'url_fiche_e', });
lyr_espaces_verts_1.set('fieldImages', {'nsq_espace_': 'TextEdit', 'nom_ev': 'TextEdit', 'type_ev': 'TextEdit', 'categorie': 'TextEdit', 'adresse_num': 'TextEdit', 'adresse_com': 'TextEdit', 'adresse_typ': 'TextEdit', 'adresse_lib': 'TextEdit', 'adresse_cod': 'TextEdit', 'poly_area': 'TextEdit', 'surface_tot': 'TextEdit', 'surface_hor': 'TextEdit', 'presence_cl': 'TextEdit', 'perimeter': 'TextEdit', 'annee_ouver': 'TextEdit', 'annee_renov': 'TextEdit', 'ancien_nom_': 'TextEdit', 'annee_chang': 'TextEdit', 'nb_entites': 'TextEdit', 'ouvert_ferm': 'TextEdit', 'id_division': 'TextEdit', 'id_atelier_': 'TextEdit', 'ida3d_enb': 'TextEdit', 'site_villes': 'TextEdit', 'id_eqpt': 'TextEdit', 'competence': 'TextEdit', 'url_plan': 'TextEdit', });
lyr_LaboratoirestestHIV_2.set('fieldImages', {'code_cpam': 'TextEdit', 'num_finess': 'TextEdit', 'liste': 'TextEdit', 'laboratoire': 'TextEdit', 'adresse': 'TextEdit', 'code_postal': 'TextEdit', 'ville': 'TextEdit', 'telephone': 'TextEdit', 'horaires': 'TextEdit', });
lyr_Fontaineeau_3.set('fieldImages', {'gid': 'TextEdit', 'type_objet': 'TextEdit', 'modele': 'TextEdit', 'no_voirie_p': 'TextEdit', 'no_voirie_i': 'TextEdit', 'voie': 'TextEdit', 'commune': 'TextEdit', 'dispo': 'TextEdit', 'debut_ind': 'TextEdit', 'fin_ind': 'TextEdit', 'motif_ind': 'TextEdit', });
lyr_Toilettespubliques_4.set('fieldImages', {'type': 'TextEdit', 'statut': 'TextEdit', 'adresse': 'TextEdit', 'arrondissem': 'TextEdit', 'horaire': 'TextEdit', 'acces_pmr': 'TextEdit', 'relais_bebe': 'TextEdit', 'url_fiche_e': 'TextEdit', });
lyr_espaces_verts_1.set('fieldLabels', {'nsq_espace_': 'no label', 'nom_ev': 'no label', 'type_ev': 'no label', 'categorie': 'no label', 'adresse_num': 'no label', 'adresse_com': 'no label', 'adresse_typ': 'no label', 'adresse_lib': 'no label', 'adresse_cod': 'no label', 'poly_area': 'no label', 'surface_tot': 'no label', 'surface_hor': 'no label', 'presence_cl': 'no label', 'perimeter': 'no label', 'annee_ouver': 'no label', 'annee_renov': 'no label', 'ancien_nom_': 'no label', 'annee_chang': 'no label', 'nb_entites': 'no label', 'ouvert_ferm': 'no label', 'id_division': 'no label', 'id_atelier_': 'no label', 'ida3d_enb': 'no label', 'site_villes': 'no label', 'id_eqpt': 'no label', 'competence': 'no label', 'url_plan': 'no label', });
lyr_LaboratoirestestHIV_2.set('fieldLabels', {'code_cpam': 'no label', 'num_finess': 'no label', 'liste': 'no label', 'laboratoire': 'no label', 'adresse': 'no label', 'code_postal': 'no label', 'ville': 'no label', 'telephone': 'inline label', 'horaires': 'no label', });
lyr_Fontaineeau_3.set('fieldLabels', {'gid': 'no label', 'type_objet': 'no label', 'modele': 'no label', 'no_voirie_p': 'no label', 'no_voirie_i': 'no label', 'voie': 'no label', 'commune': 'no label', 'dispo': 'no label', 'debut_ind': 'no label', 'fin_ind': 'no label', 'motif_ind': 'no label', });
lyr_Toilettespubliques_4.set('fieldLabels', {'type': 'no label', 'statut': 'no label', 'adresse': 'no label', 'arrondissem': 'no label', 'horaire': 'no label', 'acces_pmr': 'no label', 'relais_bebe': 'no label', 'url_fiche_e': 'no label', });
lyr_Toilettespubliques_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});