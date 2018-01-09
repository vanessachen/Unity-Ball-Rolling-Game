#pragma strict
//will access GM object in EndLevel scene, then change text (final score) component that we reference
//need to access static var finalScore
import UnityEngine.UI; //this way Unity can recognize text type 
var scoreText : Text; //reference point for the final score text 

function Start () {
	scoreText.text = "SCORE:" + GameMaster.finalScore; //the text string is set as "SCORE:" + finalScore integer
}
