#pragma strict

var platFallDistance = -5;
var ballControl : BallControl;
var originalYPosition : float;

function Start () {
	originalYPosition = transform.position.y;
}

function Update () {
	if (transform.position.y <= platFallDistance + originalYPosition){
	Debug.Log("I am less than platFallDistance");
	goBacktoSpot();
	//transform.position.y = originalPosition;
	}
}


function goBacktoSpot () {
	//if (BallControl.IsGrounded == false) {
	//function OnCollisionEnter (col : Collision) {
		//if (col.collider.tag != "Player"){
			Debug.Log("I am going back to original position now");
			transform.position.y = originalYPosition;
		}
	//}
//}

