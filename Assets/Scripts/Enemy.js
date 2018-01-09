#pragma strict

//apply forces in unity using rigidbody component
var player : Rigidbody;
var bounceAmount = 10f;
var enemyDeathParticles : Transform;
var deathSound : AudioSource;

var enemyAnim : Animator;
private var centerAnim : Animator;

var colliders : Transform;

var enemyValue = 5;

//awake generally used when referencing other game objects
function Awake () {
	centerAnim = transform.GetComponent ("Animator") as Animator; // we want this GetComponent to turn into an animator
}

function Die () {
	//now can access different forces and parameters within this rigidbody
	//rather than adding force that will compete against ball's orig. velocity, we are going to change the velocity
	GameMaster.currentScore += enemyValue;
	player.GetComponent.<Rigidbody>().velocity.y = bounceAmount;
	Instantiate (enemyDeathParticles, enemyAnim.transform.position, enemyAnim.transform.rotation);
	deathSound.Play();
	enemyAnim.SetTrigger ("Die"); //setting the "Die" trigger that we created in the enemy animation
	centerAnim.SetTrigger ("Stop"); //setting the "Stop" trigger in the enemycenter animation
	//Destroy (gameObject);
	Destroy (colliders.gameObject); //destroying the colliders attached to the enemy
	
}