#pragma strict

var music : AudioSource;

function QuitGame () {
	Debug.Log ("Game is quiting...");
	Application.Quit ();
}

//we're going to hotkey this, to load different levels with same function
//var name : type (string) -- name will be made with this string level
function StartGame (level : String) {
	//Application.LoadLevel("Level01");
	Application.LoadLevel(level);
}
//if you load a level in unity, you have to add it to the build settings
//box will appear to type in name of level you want

//storing volume as a number
function SetGameVolume (vol : float) {
	music.volume = vol;
}

