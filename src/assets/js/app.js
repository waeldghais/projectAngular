
 // on clic show modal 
 var enable = false;
 //create btn Feedback 
 var img = document.createElement('img');
 img.setAttribute('src', 'assets/img/surveyfeedback.png');
 img.setAttribute('height', '100px');
 img.setAttribute('width', '40px');
 img.setAttribute('data-target', '#modelfeed');
 img.setAttribute('data-toggle', 'modelfeed');
 img.setAttribute('id', 'Feedback');
 document.body.appendChild(img);
 
 document.getElementById("Feedback").addEventListener("click", runShowModal);

// specific feedback  show the border
document.getElementById("sections").addEventListener("mouseover", showborder);
document.getElementById("sections").addEventListener("mouseout", showborder);
 function showborder(){
     if(enable){
         TagName=event.target;
         TagName.removeAttribute("href");
         TagName.classList.toggle("mystyle");
         TagName.onclick =function () {
             document.getElementById("MyPopup").style.display="block";    
         };
     }
 }

 function runShowModal() {
    ShowModal('modelfeed',false)
  }

 //Show modal i  click
 function ShowModal(idModal,varb = false) {
    enable=varb;
    document.getElementById("modelfeed").style.display="none";
    if(idModal == "MyPopupSp"){
        document.getElementById("modelfeed").style.display="none";
    }else if (idModal == "MyPopupGn") {
        document.getElementById("MyPopup").style.display="block";
    }else if (idModal == "MyPopupReq"){
        document.getElementById("request-demo").style.display="block";
    }else{
        document.getElementById("modelfeed").style.display="block";
    }
}
 //close MyPopup Modal with clear data on form
function CloseClearModal() {
    enable=false;
    document.getElementById('feedmess').style.display="none";
    document.getElementById("formModal").reset();
    document.getElementById("MyPopup").style.display='none';
    document.getElementById("modelfeed").style.display='none';
    document.getElementById("request-demo").style.display='none'
}


function textf(x){
    console.log(x)
    if(x=="")
        document.getElementById("nfmid").style.display="none";
    else
    {
        document.getElementById("nfmid").style.display="block";
        
    }

}

function textfmess(){
console.log(document.getElementById("dropl").options[document.getElementById("dropl").selectedIndex].value)
e = document.getElementById("dropl").options[document.getElementById("dropl").selectedIndex].value;
if(e=="")
    document.getElementById('feedmess').style.display="none";
else
{
    document.getElementById('feedmess').style.display="block";
    /*document.getElementById('feedmess').style.transition=2;*/
     
    if(e=="compliment")
    document.getElementById("sutifed").innerHTML = "Thanks! What would you like to share with us?";
    else if(e=="suggestion")
    document.getElementById("sutifed").innerHTML = "We're all ears! What would you like to share with us?";
    else if(e=="bug")
    document.getElementById("sutifed").innerHTML = "Thanks for catching that. Please describe the problem to us.";
    else
    document.getElementById("sutifed").innerHTML = "What would you like to share with us?";




}
}
window.onload = () => {
    // On récupère tous les boutons d'ouverture de modelfeede
    const modelfeedButtons = document.querySelectorAll("[data-toggle=modelfeed]");
    
    for(let button of modelfeedButtons){
        button.addEventListener("click", function(e){
            // On empêche la navigation
            e.preventDefault();
            // On récupère le data-target
            let target = this.dataset.target
            
            // On récupère la bonne modelfeede
            let modelfeed = document.querySelector(target);
            // On affiche la modelfeede
            modelfeed.classList.add("show");

            // On récupère les boutons de fermeture
            const modelfeedClose = modelfeed.querySelectorAll("[data-dismiss=dialog]");
            
            for(let close of modelfeedClose){
                close.addEventListener("click", () => {
                    modelfeed.classList.remove("show");
                });
            }

            // On gère la fermeture lors du clic sur la zone grise
            modelfeed.addEventListener("click", function(){
                this.classList.remove("show");
            });
            // On évite la propagation du clic d'un enfant à son parent
            modelfeed.children[0].addEventListener("click", function(e){
                e.stopPropagation();
            })
        });
    }

}


