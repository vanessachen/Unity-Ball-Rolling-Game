#pragma strict

var cameraTarget : Transform; 
var cameraDistance = -10; //or else positive will be away from the ball
var cameraLift = 1.5; //on the y-axis

function LateUpdate () //LateUpdate is same as Update, but this function is called after all the other game objects are called
{
	//position of the object  (camera) is now the target's position
	transform.position = cameraTarget.position + Vector3 (0,cameraLift,cameraDistance); //vector3 controls it in 3 dimensions, so this is in reference of the ball, not at ball
	transform.LookAt (cameraTarget); 
	//this is something unity made so that it is easy for one object to look at another
}