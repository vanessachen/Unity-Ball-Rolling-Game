#pragma strict

var ballRigidbody : Rigidbody;
var ballCollider : SphereCollider;
var piecesParent : Transform;//when we spawn in the pieces
var piecesPrefab : Transform; 
var wholeBall : GameObject;

function Destruct () { // referrencing different parts of the ball and setting things
//spawning the pieces of the ball when dying
	ballRigidbody.isKinematic = true;
	ballCollider.enabled = false;
	var clone = Instantiate(piecesPrefab, piecesParent.position, piecesParent.rotation); // clone is the reference to the pieces
	//clone.parent = piecesParent; we will not parent this so that the pieces are independent after respawning
	Destroy (clone.gameObject, 10f);
	wholeBall.SetActive(false);
}

//reversing the code above for when the ball respawns
function DeDestruct () {
	ballRigidbody.isKinematic = false;
	ballCollider.enabled = true;
	wholeBall.SetActive(true);
}