#pragma strict

//special function unity calls whenever an object enters the trigger
//whenever something collides with our object, we create a new var, call it enemy, 
//set it to enemy component we have attached to our enemy center, then call function Die
//first checks itself, then checks its parents
function OnTriggerEnter () {
	var enemy = transform.GetComponentsInParent (Enemy)[0] as Enemy;
	//communicating between different scripts (this is a func. from Enemy.js)
	enemy.Die();
}