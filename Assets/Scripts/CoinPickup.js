#pragma strict

var coinEffect : Transform; //transform type is when you need to spawn something
var coinValue = 1;
//this is something Unity made
//it will be called when something enters the trigger on the coin
function OnTriggerEnter (info : Collider) //something to remember for collisions
{
	if (info.tag == "Player") //for multiplayers and such, so tag each player with tag player
	{
		//we can do this since it is a static variable
		GameMaster.currentScore += coinValue; 
		var effect = Instantiate (coinEffect, transform.position, transform.rotation);
		Destroy(effect.gameObject, 3);
		Destroy(gameObject); //destroys object script is sitting on
	}
}