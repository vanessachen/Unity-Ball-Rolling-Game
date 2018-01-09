#pragma strict

//function Start () {
//this function is called only when the game starts, like find the player
//}

var rotationSpeed = 100;
var jumpHeight = 8;

var distToGround : float;

var Hit01 : AudioClip;
var Hit02 : AudioClip;
var Hit03 : AudioClip;

var ballRigidbody : Rigidbody;
var HMovePlatform : Transform;

function Start () {
//getting distance from center of object to outer boundaries of collider
//checks (by sending out a ray downwards)if this line hits something in our collider
//determines how far we are from the ground -- distance from center to ground
	distToGround = GetComponent.<Collider>().bounds.extents.y;
}

//called every time the computer draws a frame
function Update () {
	//Handle ball rotation
	var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;
	rotation *= Time.deltaTime; //makes sure the ball rotates and keep rotating in the same amount depending on your frame rate
	GetComponent.<Rigidbody>().AddRelativeTorque (Vector3.back * rotation);
	
	//if the key 'w' is pressed (called only when you pressed it) and isFalling is false
	//this makes it so that you can't jump if you are already in the air
	if (Input.GetKeyDown(KeyCode.W) && IsGrounded())
	{
		GetComponent.<Rigidbody>().velocity.y = jumpHeight;
	}
	//player.position = CheckPoint.ReachedPoint; // accessing the ball from GM object	
}

/*
function OnTriggerEnter (col: Collider){
	if (col.tag == "HMove Platform"){
		ballRigidbody.isKinematic = true;
		transform.position.x = HMovePlatform.position;
			
		if (Input.GetKeyDown(KeyCode.W) && IsGrounded()){
			ballRigidbody.isKinematic = false;
			HMovePlatform.position = null;
		}
	}
}
*/
//hi

function IsGrounded () : boolean {
//check if we are grounded by calling this function
//sending a line down from the center of the ball -- checking if where it hits is inside the boundaries
	return Physics.Raycast(transform.position, -Vector3.up, distToGround + 0.1);
}

//something unity created for us to see if something has collided with something else


//to get the audio delay out of the way

function OnCollisionEnter () {
		var theHit = Random.Range(0,3);
		if (theHit == 0){
			GetComponent.<AudioSource>().clip = Hit01;
		}
		else if (theHit == 1){
			GetComponent.<AudioSource>().clip = Hit02;
		}
		else {
			GetComponent.<AudioSource>().clip = Hit03;
		}
		GetComponent.<AudioSource>().pitch = Random.Range (0.9,1.1);
//plays the set audio clip
		GetComponent.<AudioSource>().Play();
}

