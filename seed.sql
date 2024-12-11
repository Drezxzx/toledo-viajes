-- Active: 1733338162101@@127.0.0.1@3306
CREATE TABLE users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL
);

CREATE TABLE hotels (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    image TEXT NOT NULL
);
CREATE TABLE itinerary (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    idHotel INTEGER NOT NULL,
    day INTEGER NOT NULL,
    place TEXT NOT NULL,
    time TEXT NOT NULL,
    image TEXT NOT NULL,
    visited INTEGER NOT NULL,
    FOREIGN KEY(idHotel) REFERENCES hotels(id)
);

CREATE TABLE visitedPlaces(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    idPlace INTEGER NOT NULL,
    idUser INTEGER NOT NULL,
    visited INTEGER NOT NULL,
    FOREIGN KEY(idPlace) REFERENCES itinerary(id),
    FOREIGN KEY(idUser) REFERENCES users(id)
);



--consulta para solicitar lugares
-- SELECT itinerary.id, day, place, hotels.name as hotel, hotels.image as hotelImage, itinerary.time as imagePlace, itinerary.image as timePlace, vp.visited FROM itinerary
-- INNER JOIN hotels ON itinerary.idHotel = hotels.id
-- INNER JOIN "visitedPlaces" as vp on vp."idPlace" = itinerary.id
-- WHERE vp."idUser" = 5
-- ;

-- --Al crear un nuevo usuario, se crean las visitas de sus itinerarios
-- INSERT INTO "visitedPlaces" ("idPlace", "idUser", visited) 
-- SELECT id, (SELECT id FROM users WHERE email = ?), 0 FROM itinerary;

-- UPDATE "visitedPlaces" set visited = 1
-- WHERE "idPlace" = ? AND "idUser" = (SELECT id FROM users WHERE email = ?);


INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Eugenia de montijo.'), '1', 'Plaza de Zocodover.', '09:30 - 10:30', 'https://www.freetour-toledo.es/wp-content/uploads/plaza-de-zocodover-1.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Eugenia de montijo.'), '1', 'Catedral Primada de Toledo.', '10:45 - 12:15', 'https://turismo.toledo.es/images/recursos/grandes/10b349bb65f8e2dc1b454e03e501d202.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Eugenia de montijo.'), '1', 'Alcázar de Toledo.', '12:30 - 13:30', 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT5ymJIsoUona3se3najR7WhcvYOEUIhuzL3zPO1GHIjOdosv4F3jf7sWcQd3UgXqE10PdRC6R9murvwYGqpI0XnXRJatIVIQ3cnGTYBQ', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Eugenia de montijo.'), '1', 'Mezquita del Cristo de la Luz.', '13:45 - 14:15', 'https://www.paseartetoledo.es/wp-content/uploads/el-cristo-de-la-luz.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Eugenia de montijo.'), '1', 'Puertas y puentes históricos (Puerta de Bisagra y Puente de Alcántara).', '14:30 - 15:00', 'https://www.spain.info/.content/imagenes/cabeceras-grandes/castilla-mancha/puente-alcantara-toledo-s111810692.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Eugenia de montijo.'), '1', 'Casco Histórico y la Judería.', '15:15 - 16:00', 'https://imagenes.cmmedia.es/files/og_thumbnail/uploads/2024/07/27/66a542aa6cc37.jpeg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Eugenia de montijo.'), '1', 'Iglesia de Santo Tomé.', '16:15 - 17:00', 'https://santotome.org/wp-content/uploads/elementor/thumbs/Santo-Tome-89-qgczowu6nevlu8wiy5x7sh1m45qcpvlawyh0wh1g20.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Eugenia de montijo.'), '1', 'Museo del Greco.', '17:15 - 18:00', 'https://repositorio.turismocastillalamancha.com/miscelanea/178491/36/df40/museo-de-el-greco-2.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Eugenia de montijo.'), '1', 'Cena en Adolfo Restaurante.', '18:30', 'https://www.restaurantesdebuenamesa.com/uploads/galerias/Adolfo002.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Parador de toledo'), '2', 'Mirador del Valle (vistas panorámicas).', '09:30 - 10:30', 'https://www.leyendasdetoledo.com/wp-content/uploads/2021/06/196485967_483647479416823_7278981829014094989_n.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Parador de toledo'), '2', 'Monasterio de San Juan de los Reyes.', '10:45 - 12:00', 'https://repositorio.turismocastillalamancha.com/patrimonio/179167/36/4f0d/san-juan-de-los-reyes-portada.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Parador de toledo'), '2', 'Puente de San Martín.', '12:15 - 12:45', 'https://www.paseartetoledo.es/wp-content/uploads/Puente-San-Martin-e1593504191848.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Parador de toledo'), '2', 'Almuerzo en Venta de Aires.', '13:00', 'https://turismo.toledo.es/images/recursos/e0b51356c2bf835eb2ceb01afc9d30ff.jpeg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Casa rural la almazara de hontanar.'), '3', 'Navahermosa.', '09:00 - 09:45', 'https://www.turismoprovinciatoledo.es/wp-content/uploads/2021/07/navahermosa-ermita-de-la-milagra.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Casa rural la almazara de hontanar.'), '3', 'Hontanar.', '10:00 - 10:45', 'https://toledodiario.es/wp-content/uploads/2020/08/1a9a4a62-17c6-4d97-8ed1-891d18d881a9_16-9-aspect-ratio_default_0.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Casa rural la almazara de hontanar.'), '3', 'Villarejo de Montalbán (Castillo de Montalbán).', '11:00 - 12:00', 'https://www.castillosnet.org/datos/espana/toledo/TO-CAS-005/TO-CAS-005-0010001.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Casa rural la almazara de hontanar.'), '3', 'San Martín de Montalbán.', '12:15 - 13:00', 'https://i.ytimg.com/vi/5rUI6Ao3KyI/maxresdefault.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Casa rural la almazara de hontanar.'), '3', 'Almuerzo en El Castillo en Villarejo.', '13:30', 'https://repositorio.turismocastillalamancha.com/miscelanea/175615/49/673c/molino-de-agua--villarejo-de-montalban.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Casa rural doña elvira en alcaudete de la jara.'), '4', 'Alcaudete de la Jara.', '09:00 - 09:45', 'https://s1.elespanol.com/2023/01/31/reportajes/737936893_230548123_1706x1280.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Casa rural doña elvira en alcaudete de la jara.'), '4', 'Belvís de la Jara.', '10:00 - 10:45', 'https://www.guiarepsol.com/content/dam/repsol-guia/guia-cf/ubicacion/localidad/imagenes/media-filer_public-4d-e4-4de4e12a-b046-4bb0-bda2-0448f6ceeb4e-okrobledillo_toledo.jpg.transform/rp-rendition-xs/image.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Casa rural doña elvira en alcaudete de la jara.'), '4', 'Robledo del Mazo.', '11:00 - 11:45', 'https://repositorio.turismocastillalamancha.com/patrimonio/4570/49/e16c/ermita-de-piedraescrita-robledo-del-mazo.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Casa rural doña elvira en alcaudete de la jara.'), '4', 'Navalcán.', '12:00 - 13:00', 'https://www.covertalavera.com//wp-content/uploads/2022/11/Navalcan-Iglesia-Nuestra-Senora-del-Monte-DavidDaguerro.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Casa rural doña elvira en alcaudete de la jara.'), '4', 'Almuerzo en El Candil en Belvís de la Jara.', '13:30', 'https://www.hotelpintorelgreco.com/cache/78/ac/78ac5e73bebf249e3fcf8b2ac8156625.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Hospedería el molino en los yébenes.'), '5', 'Ventas con Peña Aguilera.', '09:00 - 09:45', 'https://repositorio.turismocastillalamancha.com/miscelanea/173723/36/37ab/las-ventas-con-pena-aguilera.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Hospedería el molino en los yébenes.'), '5', 'Los Yébenes.', '10:00 - 10:45', 'https://repositorio.turismocastillalamancha.com/miscelanea/173728/49/9fcf/los-yebenes.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Hospedería el molino en los yébenes.'), '5', 'Almuerzo en Restaurante Casa Parrilla', '11:00', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/c4/cd/2e/photo0jpg.jpg?w=1200&h=900&s=1', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Parador de oropesa.'), '6', 'Lagartera.', '09:00 - 09:45', 'https://repositorio.turismocastillalamancha.com/miscelanea/169973/49/45ce/corpus-christi-de-lagartera.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Parador de oropesa.'), '6', 'Oropesa (castillo y parador).', '10:00 - 11:00', 'https://repositorio.turismocastillalamancha.com/miscelanea/172646/36/00e7/castillo-de-oropesa.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Parador de oropesa.'), '6', 'Puente del Arzobispo.', '11:30 - 12:30', 'https://media.traveler.es/photos/665f1a3ab617fdb87171e71a/16:9/w_2560%2Cc_limit/2W9HMW3%2520(1).jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Parador de oropesa.'), '6', 'Almuerzo en Parador de Oropesa.', '13:00', 'https://paradores.es/sites/default/files/2022-09/Parador%20de%20Oropesa%20193%20tartar%20de%20corzo%20y%20costillar%20de%20jabal%C3%AD.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Hotel a posada en tembleque.'), '7', 'Tembleque (Plaza Mayor).', '09:00 - 10:00', 'https://img.europapress.es/fotoweb/fotonoticia_20210721124242_1200.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Hotel a posada en tembleque.'), '7', 'El Romeral (molinos de viento).', '10:15 - 11:15', 'https://repositorio.turismocastillalamancha.com/miscelanea/172139/36/15ac/molinos-de-viento--el-romeral.jpg', 0 );
INSERT INTO itinerary(idHotel, day, place, image, time, visited)VALUES((SELECT id FROM hotels where name = 'Hotel a posada en tembleque.'), '7', 'Almuerzo en Las Cuevas en Tembleque.', '12:00', 'https://entomelloso.com/wp-content/uploads/2024/11/restaurante-con-cueva-en-toledo-la-cave-toledo-2024-11-15_11-43.jpg', 0 );
INSERT INTO hotels(name, image)
VALUES(
        'Eugenia de montijo.',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/477850319.jpg?k=965f64ccbe9038d89b1fd0c864aef5f7e50455a2396d607cea6502f0e114a201&o=&hp=1'
    );
INSERT INTO hotels(name, image)
VALUES(
        'Parador de toledo',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/158474166.jpg?k=d9a88eb9720f2bca5caf01e9560735c62b9a63319ef3af0855fc9031bc907e94&o=&hp=1'
    );
INSERT INTO hotels(name, image)
VALUES(
        'Casa rural la almazara de hontanar.',
        'https://webp.er2.co/es/toledo/55d4ad3900537/750/561e6cef1530e.webp'
    );
INSERT INTO hotels(name, image)
VALUES(
        'Casa rural doña elvira en alcaudete de la jara.',
        'https://www.casasruraleselvira.es/images/all/1.jpg'
    );
INSERT INTO hotels(name, image)
VALUES(
        'Hospedería el molino en los yébenes.',
        'https://images.trvl-media.com/lodging/50000000/49030000/49028700/49028628/092520d3.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill'
    );
INSERT INTO hotels(name, image)
VALUES(
        'Parador de oropesa.',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/15521064.jpg?k=c7a3917d98e8ec3df54b6b4f6e200a45c4f1264d0c797336d0be992a53976b78&o=&hp=1'
    );
INSERT INTO hotels(name, image)
VALUES(
        'Hotel a posada en tembleque.',
        'https://images.trvl-media.com/lodging/5000000/4610000/4603200/4603130/d5b7c1a0.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill'
    );