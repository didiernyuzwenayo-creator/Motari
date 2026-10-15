# Motari — prototype ya PWA

Iyi ni intangiriro ya website ya Motari. Ifite ikarita ya OpenStreetMap/Leaflet, guhitamo uruhare, na GPS ya telefoni.

## Icyo ikora ubu
- Igaragaza ikarita.
- Igerageza kubona GPS y'uwafunguye urubuga (ugomba kubanza kwemerera location).
- Ishobora gushyirwa kuri telefoni nka PWA iyo iri kuri hosting ifite HTTPS.

## Icyo itarakora
Iyi ni prototype, si serivisi yuzuye: GPS ya buri muntu ntirajya muri database, abamotari ntibaraboneka ku bandi, konti n'ubusabe ntibibikwa, kandi nta ride request nyakuri yoherezwa.

## Kuyigerageza kuri telefoni
1. Fungura iyi ZIP uyikuremo (Extract).
2. Ohereza folder kuri GitHub ukoresheje browser ya telefoni, hanyuma uyishyire kuri hosting ifite HTTPS.
3. Fungura link muri Chrome kandi wemere Location permission.
4. Muri Chrome kanda menu `⋮` > `Add to Home screen` cyangwa `Install app` niba bigaragara.

## Intambwe ikurikira
Huza Firebase Authentication na Firebase Realtime Database kugira ngo konti, online status, GPS updates n'ubusabe bigere ku bandi mu gihe nyacyo. Shyiraho amategeko y'umutekano, kugenzura abamotari, no guhagarika gusangiza location igihe user agiye offline cyangwa urugendo rurangiye.

GPS ikenera uruhushya kandi akenshi HTTPS. Ntugashyire passwords cyangwa secrets muri code rusange. Ikarita ikoresha OpenStreetMap tiles na Leaflet iboneka kuri internet.
