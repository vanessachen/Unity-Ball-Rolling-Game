#pragma strict

import UnityEngine.UI;

var scoreText : Text;

function Update () {
	//this used to be "COINS COLLECTED:"
	scoreText.text = "SCORE:" + GameMaster.currentScore;
}