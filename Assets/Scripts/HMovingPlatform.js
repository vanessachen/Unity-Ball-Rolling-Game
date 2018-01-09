#pragma strict


var ballControl : BallControl;
var ballRigidbody : Rigidbody;
var player : Transform;

var playerIsOnPlatform = false;

	function OnCollisionEnter (col: Collision){
		Debug.Log("Something has entered platform collider");
		if (col.gameObject.tag == "Player"){
			ballRigidbody.isKinematic = true;
			playerIsOnPlatform = true;
			Debug.Log("Player has entered");
		}
	}	

function Update () {
	if (Input.GetKeyDown(KeyCode.W) /*&& ballControl.IsGrounded()*/){
		ballRigidbody.isKinematic = false;
				//transform.position.x = null;
		Debug.Log("player not kinematic");
		playerIsOnPlatform = false;
	}
			
	if (playerIsOnPlatform == true) {
		player.position = transform.position + Vector3.up * 2.0F;
		Debug.Log ("I am moving with the platform");
	}
}
