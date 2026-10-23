# MOTARI — Website ihuza abamotari n'abagenzi

Website ya MOTARI iboneka kuri: https://didiernyuzwenayo-creator.github.io/Motari/

## Ibyakozwe
- Kwiyandikisha no kwinjira ukoresheje Supabase Auth (email n'ijambo ry'ibanga).
- Profili z'umugenzi n'umumotari.
- Ikarita ya Leaflet/OpenStreetMap na GPS ya telefoni.
- Umumotari ashobora gusangiza GPS ye igihe ari online; location ishaje irahishwa nyuma y'iminota 2.
- Umugenzi ashobora kubona abamotari bari online n'aho bari.
- Umugenzi ashobora gusaba moto, kureba ubusabe bwe no guhagarika ubusabe butaremerwa.
- Umumotari ashobora kubona ubusabe bw'abagenzi, kubwemera no gushyira urugendo kuri rwarangiye.
- Supabase Realtime kuri location n'ubusabe; website ivugurura amakuru buri masegonda 10 nk'uburyo bw'inyongera.
- RLS policies zigena ko buri mukoresha abona amakuru yemerewe gusa.
- Manifest na service worker byo gutuma website ishobora gushyirwa kuri home screen.

## Icyitonderwa
Ibi byakozwe kandi schema/policies byagenzuwe muri Supabase. Ariko ntitwashoboye gukora end-to-end test dukoresheje konti nyayo y'umugenzi n'iy'umumotari, GPS y'ibikoresho bibiri, no kwemeza email. Mbere yo gukoresha MOTARI mu kazi nyako, banza ugerageze ukoresheje konti ebyiri zitandukanye. GPS ikenera HTTPS n'uruhushya rwa browser. Supabase Publishable key iri muri frontend igenewe gukoreshwa ku ruhande rwa browser; ntushyire service-role/secret key muri code.

## Uko wayigerageza
1. Fungura website kuri Chrome.
2. Iyandikishe nka **Umumotari** ukoresheje email yawe.
3. Emera GPS hanyuma ukande **Sangiza MOTARI aho ndi**.
4. Ku yindi telefoni cyangwa browser, iyandikishe nka **Umugenzi**.
5. Emera GPS; reba niba pin y'umumotari igaragara.
6. Saba moto, hanyuma kuri konti y'umumotari urebe ubusabe, ubyemere.
7. Nyuma y'urugendo, umumotari akande **Shyira urugendo kuri rwarangiye**.

## Iby'ingenzi
- Abamotari n'abagenzi bagomba gukoresha konti zitandukanye.
- Umumotari agomba kuguma afunguye kuri website kandi GPS ikora kugira ngo akomeze kugaragara online.
- Ikarita n'ubutumwa bya Supabase bisaba internet.
