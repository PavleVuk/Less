 var procesori =
 {
   "1": {
         "ID": 1,
         "Naziv": "AMD Ryzen 1600AF",
         "Cena": 13500
        },
   "2": {
         "ID": 2,
         "Naziv": "AMD Ryzen 3600",
         "Cena": 22000
        },
     "3": {
         "ID": 3,
         "Naziv": "Intel I5-10600k",
         "Cena": 25000
        },
     "4": {
         "ID": 4,
         "Naziv": "Intel i3-9100F",
         "Cena": 19000
        }      
 };
 var select1 = document.getElementById("cpu");
 Object.keys(procesori).forEach(function(key) {// moralo je object.keys foreach jer je procesori objekat a ne niz
   var proc = procesori[key]; //var proc je varijabla koja ima vrednost ključa objekta procesori
   select1.options[select1.options.length] = new Option(proc.Naziv, proc.Cena);
   //options je interfejs za options HTML elemente, select1.options.length vraća broj elemenata u trenutnoj kolekciji, i pravi se nova opcija sa tekstom proc.Naziv i value proc.Cena
 });
 
 var matične =
 {
   "1": {
         "ID": 1,
         "Naziv": "Gigabyte B450M-DS3H",
         "Cena": 9000
        },
   "2": {
         "ID": 2,
         "Naziv": "MSI B450 Tomahawk",
         "Cena": 14000
        },
     "3": {
         "ID": 3,
         "Naziv": "Asus PRIME B360M-K",
         "Cena": 8400
        },
     "4": {
         "ID": 4,
         "Naziv": "Asus PRIME B460-PLUS",
         "Cena": 17000
        }      
 };
 var select2 = document.getElementById("matična");
 Object.keys(matične).forEach(function(key) {
   var mat = matične[key];
   select2.options[select2.options.length] = new Option(mat.Naziv, mat.Cena);
 });
 
 var ram =
 {
   "1": {
         "ID": 1,
         "Naziv": "Kingston HyperX Fury 2x8GB DDR4 3200MHz",
         "Cena": 12000
        },
   "2": {
         "ID": 2,
         "Naziv": "Corsair Vengeance LPX 2x8GB DDR4 3000MHZ",
         "Cena": 11000
        },
     "3": {
         "ID": 3,
         "Naziv": "Kingston HyperX Fury 2x16GB DDR4 3200MHz",
         "Cena": 20000
        },
     "4": {
         "ID": 4,
         "Naziv": "Corsair Vengeance LPX 2x16GB DDR4 3000MHz",
         "Cena": 18000
        }      
 };
 var select3 = document.getElementById("ram");
 Object.keys(ram).forEach(function(key) {
   var ramm = ram[key];
   select3.options[select3.options.length] = new Option(ramm.Naziv, ramm.Cena);
 });

 var memorija =
 {
   "1": {
         "ID": 1,
         "Naziv": "Samsung 860 EV0 250GB",
         "Cena": 8500
        },
   "2": {
         "ID": 2,
         "Naziv": "Intel 545s 256GB",
         "Cena": 7000
        },
     "3": {
         "ID": 3,
         "Naziv": "Kingston A2000 NVME M.2 250GB",
         "Cena": 6500
        },
     "4": {
         "ID": 4,
         "Naziv": "Samsung 970 EVO 250GB M.2 NVME",
         "Cena": 9000
        }      
 };
 var select4 = document.getElementById("mem");
 Object.keys(memorija).forEach(function(key) {
   var mem = memorija[key];
   select4.options[select4.options.length] = new Option(mem.Naziv, mem.Cena);
 });

 var napajanje =
 {
   "1": {
         "ID": 1,
         "Naziv": "SeaSonic Bronze SIII 520W",
         "Cena": 7000
        },
   "2": {
         "ID": 2,
         "Naziv": "Thermaltake SMART SE 530W",
         "Cena": 6000
        },
     "3": {
         "ID": 3,
         "Naziv": "Cooler Master MWE 600W",
         "Cena": 8000
        },
     "4": {
         "ID": 4,
         "Naziv": "Sama Armor 650W",
         "Cena": 7200
        }      
 };
 var select5 = document.getElementById("psu");
 Object.keys(napajanje).forEach(function(key) { 
 var psu = napajanje[key];
 select5.options[select5.options.length] = new Option(psu.Naziv, psu.Cena);
});
 var kuciste =
 {
   "1": {
         "ID": 1,
         "Naziv": "MS Industrial Prism",
         "Cena": 4500
        },
   "2": {
         "ID": 2,
         "Naziv": "MS Industrial Cyclops V",
         "Cena": 4000
        },
     "3": {
         "ID": 3,
         "Naziv": "Thermaltake Versa N26",
         "Cena": 5400
        },
     "4": {
         "ID": 4,
         "Naziv": "Cooler Master Masterbox E500L",
         "Cena": 5900
        }      
 };
 var select6 = document.getElementById("case");
  Object.keys(kuciste).forEach(function(key) { 
  var kuc = kuciste[key];
  select6.options[select6.options.length] = new Option(kuc.Naziv, kuc.Cena);
});

var grafičke =
 {
   "1": {
         "ID": 1,
         "Naziv": "AMD RX 580 8GB",
         "Cena": 25000
        },
   "2": {
         "ID": 2,
         "Naziv": "AMD RX 570 4GB",
         "Cena": 20000
        },
     "3": {
         "ID": 3,
         "Naziv": "NVIDIA GTX 1060 6GB",
         "Cena": 23000
        },
     "4": {
         "ID": 4,
         "Naziv": "NVIDIA GTX 1050 4GB",
         "Cena": 18000
        }      
 };
 var select7 = document.getElementById("gpu");
 Object.keys(grafičke).forEach(function(key) {
   var grafa = grafičke[key];
   select7.options[select7.options.length] = new Option(grafa.Naziv, grafa.Cena);
 });


 function racunanje(){
 
  var pNaziv = select1.options[select1.selectedIndex].text; 
  var pCena = select1.options[select1.selectedIndex].value;
  var pCenaint = parseInt(pCena);

  var mNaziv = select2.options[select2.selectedIndex].text;
  var mCena = select2.options[select2.selectedIndex].value;
  var mCenaint = parseInt(mCena);

  var rNaziv = select3.options[select3.selectedIndex].text;
  var rCena = select3.options[select3.selectedIndex].value;
  var rCenaint = parseInt(rCena);

  var mNaziv = select4.options[select4.selectedIndex].text;
  var memCena = select4.options[select4.selectedIndex].value;
  var memCenaint = parseInt(memCena);

  var nNaziv = select5.options[select5.selectedIndex].text;
  var nCena = select5.options[select5.selectedIndex].value;
  var nCenaint = parseInt(nCena);

  var kNaziv = select6.options[select6.selectedIndex].text;
  var kCena = select6.options[select6.selectedIndex].value;
  var kCenaint = parseInt(kCena);

  var gNaziv = select7.options[select7.selectedIndex].text;
  var gCena = select7.options[select7.selectedIndex].value;
  var gCenaint = parseInt(gCena);

  izabrane = [pNaziv, mNaziv, rNaziv, mNaziv, nNaziv, kNaziv, gNaziv];
 
  ukupnacena = pCenaint + mCenaint + rCenaint + memCenaint+ nCenaint + kCenaint + gCenaint;

  cena("cpucena",pCenaint);
  cena("matičnacena",mCenaint);
  cena("ramcena", rCenaint);
  cena("memcena",memCenaint);
  cena("psucena",nCenaint);
  cena("casecena",kCenaint);
  cena("gpucena",gCenaint);
  cena("cena",ukupnacena);
  console.log(izabrane.reverse());
 }
 
 function cena(id, cena){
  document.getElementById(id).value= cena +",00 din." ;
 }

 