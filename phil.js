document.querySelector("h1").textContent = "Famous Follicles"
document.querySelector("h2").textContent = "From bald to bold!"

// bron code: chat gpt & hulp van Carmen Zoutendijk
// code bron: ChatGPT: prompt; how do i make a audio loop mute?
document.getElementById("mutemuziek").addEventListener("click",function(){
    let audio = document.getElementById("muziekje");
audio.muted = !audio.muted;
this.textContent = audio.muted ? "unmute" : "mute";
} ) ;
// ----


let huidigeFoto = document.getElementById("character")


const hair1knop = document.querySelector("#hair1")
const hair2knop = document.querySelector("#hair2")
const hair3knop = document.querySelector("#hair3")
const hair4knop = document.querySelector("#hair4")


const showTimephil = document.querySelector("#showtimebtn3")



let hasHair = false




// bron voor endswith code: youtube tutorial voor image slider: https://youtu.be/749ta0nvj8s?si=7MUBc705D6AdI7pY

function veranderHaar1(){
    
    if(huidigeFoto.src.endsWith("rock.png")){
        huidigeFoto.src ="images/haar1-rock.png";
    }
    else if (huidigeFoto.src.endsWith("phil.png")){
        huidigeFoto.src ="images/haar1-phil.png";
    }

    else {
        huidigeFoto.src = "images/haar1-pitt.png";
    }

    hasHair = true

    
}

function veranderHaar2(){
    if(huidigeFoto.src.endsWith("rock.png")){
        huidigeFoto.src ="images/haar2-rock.png";
    }

    else if (huidigeFoto.src.endsWith("phil.png")){
        huidigeFoto.src ="images/haar2-phil.png";
    }
    else {
        huidigeFoto.src = "images/haar2-pitt.png";
    }

    hasHair = true
}

function veranderHaar3(){
    if(huidigeFoto.src.endsWith("rock.png")){
        huidigeFoto.src ="images/haar3-rock.png";
    }
    else if (huidigeFoto.src.endsWith("phil.png")){
        huidigeFoto.src ="images/haar3-phil.png";
    }
    else {
        huidigeFoto.src = "images/haar3-pitt.png";
    }
    hasHair = true
}

function veranderHaar4(){
    if(huidigeFoto.src.endsWith("rock.png")){
        huidigeFoto.src ="images/haar4-rock.png";
    }
    else if (huidigeFoto.src.endsWith("phil.png")){
        huidigeFoto.src ="images/haar4-phil.png";
    }
    else {
        huidigeFoto.src = "images/haar4-pitt.png";
    }
    hasHair = true
    
}
// ----

function showHappyphill(){

    if (hasHair) 
            if(huidigeFoto.src.endsWith("images/haar1-phil.png")){
            huidigeFoto.src ="images/haar1.1-phil.png"
            }
            else if (huidigeFoto.src.endsWith("haar2-phil.png")){
            huidigeFoto.src ="images/haar2.1-phil.png" }

            else if (huidigeFoto.src.endsWith("haar3-phil.png")){
                huidigeFoto.src ="images/haar3.1-phil.png" }
        
            else {
            huidigeFoto.src ="images/haar4.1-phil.png"
            }
            
        }

    
hair1knop.addEventListener("click", veranderHaar1)
hair2knop.addEventListener("click", veranderHaar2)
hair3knop.addEventListener("click", veranderHaar3)
hair4knop.addEventListener("click", veranderHaar4)


showTimephil.addEventListener("click",showHappyphill)









