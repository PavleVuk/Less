function racunanje(){
    const e1 = document.getElementById("tip");
    const e2 = document.getElementById("kvar");
    const texte1= e1.options[e1.selectedIndex].text;
    const texte2= e2.options[e2.selectedIndex].text;

    const displej = "Displej ne radi";
    const laptop = "Laptop";
    const racunar = "Računar";
    const upali = "Neće da se upali";
    const puni = "Neće da se puni";
    const sistem = "Reinstalacija sistema";
    const sporo = "Sporo radi";
    const cena = "cena";
    const virus = "Čišćenje virusa";
        
    if(texte1 == laptop && texte2 == displej){
        vrednost(cena,"50-200 evra");
    }
    else if(texte1 == laptop && texte2 == puni){
        vrednost(cena,"10-50 evra");
    }
    else if(texte1 == laptop && texte2 == upali){
        vrednost(cena,"50-80 evra");
    }
    else if(texte1 == laptop && texte2 == sporo){
        vrednost(cena,"20-80 evra");
    }
    else if(texte1 == laptop && texte2 == sistem){
        vrednost(cena,"25 evra");
    }
    if(texte1 == laptop && texte2 == virus){
        vrednost(cena,"10-20 evra");
    }
    else if(texte1 == racunar && texte2 == displej){
        vrednost(cena,"40-100 evra");
    }
    else if(texte1 == racunar && texte2 == upali){
        vrednost(cena,"20-50 evra");
    }
    else if(texte1 == racunar && texte2 == sporo){
        vrednost(cena,"20-80 evra");
    }
    else if(texte1 == racunar && texte2 == sistem){
        vrednost(cena,"25 evra");
    }
    if(texte1 == racunar && texte2 == virus){
        vrednost(cena,"10-20 evra");
    }
}
function vrednost(element, vrednost){
    document.getElementById(element).setAttribute('value',vrednost);
}


