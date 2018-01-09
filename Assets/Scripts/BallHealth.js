#pragma strict
//we will check the y - position of the ball, (say its -10), meaning that it fell through, 
//then some function will be called, telling it to respawn
//we do this by using transform.position.y of the ball, which checks the y pos of the ball

var maxfallDistance = -10;
private var isRestarting = false;

var gameMaster : GameMaster;

function Update () 
{
	if (transform.position.y <= maxfallDistance)
	{
		//since we haven't made checkpoints yet, we are first going to replay the level
		//Application.LoadLevel("Level01"); //reloading Level01
		
		if (GameMaster.isRestarting == false) {
			if (gameMaster != null) {
				gameMaster.RestartLevel(); //calling RestartLevel function in GM object
			}
		}
		
		//since this is called every time the y position is below maxfallDistance, the audio is played over and over
		//we need to find a way to only play it once, so we create another variable
		//if this doesn't work and it says that you have to assign this level, then
		//add the scene in file < buildsettings and then add current (b/c we only have 1 scene right now)
		//make sure to do this with all your levels
	}
}

