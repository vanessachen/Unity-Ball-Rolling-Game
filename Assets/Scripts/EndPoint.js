#pragma strict

var gameMaster : GameMaster; //reference to GameMaster script e
//collect colider info 
function OnTriggerEnter (colInfo : Collider) {
	//checking if the tag of the object entering the collider is "Player"
	if (colInfo.tag == "Player"){
	//want to call a method stored on gameMaster (the load next level)
		gameMaster.LoadNextLevel(); // referencing function in GameMaster Script
	}
}