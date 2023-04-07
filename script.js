var refPop=null;
// Initialise les variables globales
function init()
{
    console.log("Fonction init");
	refPop = document.getElementById("lettredemotiv"); 
}

//Zoom sur la photo
function zoomIn (element) 
{
    element.style.transform = "scale(1.1)";
}
 
//Dezoom de la photo
function zoomOut(element) 
{
    element.style.transform = "scale(1)";
}

//changement du nom du boutton et affichage de la lettre de motivation selon la situation
function toggle_popup(button)
{			
	//refPop.style.display = "block"; //affiche ou cache le popup
	if(refPop.style.display=="none")
	{
		button.value="cacher la lettre de motivation";
		refPop.style.display="block";
	}
	else 
	{
		button.value="afficher la lettre de motivation";
		refPop.style.display="none";
	}
}

