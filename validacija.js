const PRAZNO = "";
const PROVERA_GRESKA = "Morate uneti ";
const PROVERA_DUZINE_LOZINKE = "Lozinka ne sme biti kraća od 8 karaktera";
const DUZINE_LOZINKE = 8;
const ISTE_LOZINKE_GRESKE = "Lozinke moraju biti iste";

function validacija (){
    var greska = document.getElementById("greska");
    var ime = document.getElementById("ime").value;
    var lozinka0 = document.getElementById("lozinka0").value;
    var lozinka1 = document.getElementById("lozinka1").value;
    var email = document.getElementById("email").value;
    var ispis = () => "Uneli ste parametre: " +  " " + "Ime:" + " " + niz[0] + " " +  "Lozinka:"+ " " +niz[1]  + " "+ "Email:" + " " + " " +niz[2]; 
    var imeError = false;
    var lozinkaError = false;
    var emailLozinkaError = false;
    greska.innerHTML="";
    try{
        imeError = proveraImena(ime);
        lozinkaError = proveraLozinke(lozinka0, lozinka1);
        emailLozinkaError = proveraEmail(email);
        
        if (!imeError, !lozinkaError, !emailLozinkaError) {
            var niz = [ime, lozinka0,  email];
            alert(ispis());
            throw "Uspešno ste se registrovali!";   
        }
    } catch(error){
        greska.innerHTML=error;
    } 
}

function proveraImena(ime){
    var throwGreska = false;
    try{
     if(ime == PRAZNO){ 
         throwGreska = true;
         throw greska.innerHTML = PROVERA_GRESKA + "ime";
        }
    } finally {
        if (!throwGreska) {
            return throwGreska;
        }
    }
}
function proveraLozinke(lozinka1, lozinka2) {
    var throwGreska = false;
    try {
        if (lozinka1 != PRAZNO && lozinka2 != PRAZNO) {
            if (lozinka1.length >= DUZINE_LOZINKE && lozinka2.length >= DUZINE_LOZINKE) {
                if (lozinka1 != lozinka2) {
                    throwGreska = true;
                    throw greska.innerHTML = ISTE_LOZINKE_GRESKE;
                }
            } else if (lozinka1.length >= DUZINE_LOZINKE && lozinka2.length < DUZINE_LOZINKE) {
                throwGreska = true;
                throw greska.innerHTML = ISTE_LOZINKE_GRESKE;
            } else {
                throwGreska = true;
                throw greska.innerHTML = PROVERA_DUZINE_LOZINKE;
            }
        } else if (lozinka1 != PRAZNO && lozinka2 == PRAZNO) {
            if (lozinka1.length < DUZINE_LOZINKE) {
                throwGreska = true;
                throw greska.innerHTML = PROVERA_DUZINE_LOZINKE;
            } else {
                throwGreska = true;
                throw greska.innerHTML = ISTE_LOZINKE_GRESKE;
            }
        } else if (lozinka2 != PRAZNO && lozinka1 == PRAZNO) {
            if (lozinka2.length < DUZINE_LOZINKE) {
                throwGreska = true;
                throw greska.innerHTML = PROVERA_DUZINE_LOZINKE;
            }
        } else {
            throwGreska = true;
            throw greska.innerHTML = PROVERA_GRESKA + "lozinku";
        }
    } finally {
        if (!throwGreska) {
            return throwGreska;
        }
    }
}
function proveraEmail(email) {
    var throwGreska = false;
    try {
        if(email == PRAZNO){
            throwGreska = true;
            throw greska.innerHTML = PROVERA_GRESKA + "email";
        }
    } finally {
        if (!throwGreska) {
            return throwGreska;
        }
    }
}
