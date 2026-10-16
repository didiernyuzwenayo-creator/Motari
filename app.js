const map=L.map("map").setView([-1.9441,30.0619],12);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
let currentRole="passenger",currentMarker=null,accuracyCircle=null,watchId=null;
const locationStatus=document.getElementById("locationStatus"),requestStatus=document.getElementById("requestStatus");
document.getElementById("year").textContent=new Date().getFullYear();
document.querySelectorAll(".role").forEach(button=>button.addEventListener("click",()=>{
 currentRole=button.dataset.role;document.querySelectorAll(".role").forEach(b=>b.classList.toggle("active",b===button));
 const rider=currentRole==="rider";
 document.getElementById("actionTitle").textContent=rider?"Shaka abagenzi bari hafi":"Shaka umumotari uri hafi";
 document.getElementById("actionDesc").textContent=rider?"Emera location kugira ngo abagenzi bakubone uri online.":"Emera location kugira ngo tubone aho uri.";
 document.getElementById("requestTitle").textContent=rider?"Jya kuri Online":"Saba moto";
 document.getElementById("requestDesc").textContent=rider?"Umumotari azajya agaragara ku bagenzi igihe backend izaba yashyizwemo.":"Ohereza ubusabe ku mumotari uri hafi nyuma yo guhuza backend.";
 document.getElementById("requestBtn").textContent=rider?"Jya kuri Online":"Ohereza ubusabe";
 requestStatus.textContent="Iyi ni prototype: konti n'ubusabe nyakuri biracyakeneye backend.";
}));
document.getElementById("locationBtn").addEventListener("click",()=>{
 if(!("geolocation"in navigator)){locationStatus.textContent="Browser ntishyigikira GPS location.";locationStatus.classList.add("error");return;}
 locationStatus.classList.remove("error");locationStatus.textContent="Turimo gushaka aho uri... Emera uruhushya rwa location.";
 if(watchId!==null)navigator.geolocation.clearWatch(watchId);
 watchId=navigator.geolocation.watchPosition(position=>{
  const {latitude,longitude,accuracy}=position.coords,point=[latitude,longitude];map.setView(point,16);showLocationName(latitude, longitude);
  if(!currentMarker)currentMarker=L.marker(point).addTo(map).bindPopup("Aho uri ubu");else currentMarker.setLatLng(point);
  if(accuracyCircle)accuracyCircle.remove();accuracyCircle=L.circle(point,{radius:accuracy,color:"#0f766e",fillOpacity:.08}).addTo(map);
  locationStatus.textContent=`Location yabonetse. GPS accuracy hafi ya ${Math.round(accuracy)} m. Iyi telefoni ni yo igaragara kuri iyi browser gusa kugeza backend ihujwe.`;
 },error=>{const messages={1:"Wanze uruhushya rwa location. Jya muri browser settings urwemerere.",2:"Location ntibonetse. Reba niba GPS ifunguye.",3:"Igihe cyo kubona location kirangiye. Ongera ugerageze."};locationStatus.textContent=messages[error.code]||"Habaye ikibazo mu kubona location.";locationStatus.classList.add("error");},{enableHighAccuracy:true,maximumAge:5000,timeout:15000});
});
document.getElementById("requestBtn").addEventListener("click",()=>{
 const phone=document.getElementById("phone").value.trim();if(!phone){requestStatus.textContent="Banza wandike nimero ya telefoni.";requestStatus.classList.add("error");document.getElementById("phone").focus();return;}
 requestStatus.classList.remove("error");requestStatus.textContent=currentRole==="rider"?"Iyi ni demo gusa: Online status ntirabikwa cyangwa ngo igaragare ku bandi kugeza backend ihujwe.":"Iyi ni demo gusa: ubusabe ntibwoherejwe ku mumotari nyakuri. Intambwe ikurikira ni uguhuza Firebase.";
});
