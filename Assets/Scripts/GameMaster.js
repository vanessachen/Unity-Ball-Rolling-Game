#pragma strict
//static meaning we can access it from all scripts
//need to change score in coinPickup Script

static var currentScore : int = 0; 
static var finalScore : int = 0;
static var isRestarting = false;

//var offsetY : float = 40;
//var sizeX : float = 100;
//var sizeY : float = 40;

var musicPrefab : Transform;
var GameOverSound : AudioClip;

var player : Transform;

//static variables are invisible & we need to know when its changing (see in inspector)
//function Update () {
	//test = currentScore;
//}

//this is what is set when the game is loaded (however it will also change the score if you switch levels)
function Start () {
	currentScore = 0;
	//dont want musicPrefab to spawn in each time a scene is loaded - make it continuous throughout scene
	//don't destroy or create when scene is created, so using tag to find it
	//exclamation means cannot find
	if (!GameObject.FindGameObjectWithTag("MM")) {
	//spawns in the object with no rotation, unity adds it into hierarchy with name 'clone'
		var mManager = Instantiate (musicPrefab, transform.position, Quaternion.identity);
	//want it to not be destroyed when new object is loaded
		mManager.name = musicPrefab.name;
		DontDestroyOnLoad (mManager);
	}
}

//every GUI element is made on the OnGui Function
//function OnGUI() {
	//GUI.Box (new Rect (Screen.width/2-sizeX/2, offsetY, sizeX, sizeY), "Score: " + currentScore);
//}

//delay the loading of the level until the sound is done playing -- cant delay in update function 
function RestartLevel (){
	isRestarting = true;
	GetComponent.<AudioSource>().pitch = 1;
	GetComponent.<AudioSource>().clip = GameOverSound;
	GetComponent.<AudioSource>().Play(); //can add string, but this will play the first audio clip attached
	yield WaitForSeconds (GetComponent.<AudioSource>().clip.length);
	//Application.LoadLevel("Level01");
	//setting ball's position to the checkpoint position
	player.position = CheckPoint.ReachedPoint; // accessing the ball from GM object
	
	var destructible : Destructible = player.GetComponent ("Destructible") as Destructible; //we are getting the destructible from the player
	destructible.DeDestruct();
	currentScore = currentScore - 5;
	isRestarting = false;
}

function LoadNextLevel(){
	finalScore += currentScore; // this way, final score can be stored btw levels
	//loading next level in build settings, based on the current level + 1
	//we will have complete control of what level is loaded in file --> buildsettings (it will follow that order)
	Application.LoadLevel(Application.loadedLevel + 1);
}