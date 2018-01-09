#pragma strict

var gameMaster : GameMaster;

function OnTriggerEnter (colInfo : Collider) { //var = colinfo (Collider colinfo)
	if (GameMaster.isRestarting == false) {
		if (colInfo.tag == "Player" ) {
		//can have script attached to the ball handelling all the stuff for us, then when restarting, destroy the script
		//get the destruct component
			var destructible : Destructible = colInfo.GetComponent ("Destructible") as Destructible;
			destructible.Destruct(); // get a reference, then call destruct method, way of calling public functions
		}
		gameMaster.RestartLevel();
	}
}