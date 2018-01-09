#pragma strict
//static variable = global variable that all objects can access

//(0,2,0) fixes the fact that before a checkpoint has been reached. our ball is set at ReachedPoint, wich is (0,0,0) which makes us fall through the platform
static var ReachedPoint : Vector3 = Vector3 (0,2,0);

//storing info that has entered collider, then calling it something- located in parenthesis
//collider type stores lots of info - position, name, tag, transform, etc.
function OnTriggerEnter (col : Collider) {
	if (col.tag == "Player"){
		//look up array or list for more advanced checkpoint mechanics
		//if our checkpoint's position > the point we reached
		if (transform.position.x > ReachedPoint.x){
	//set reached point as the current point of the checkpoint
			ReachedPoint = transform.position;
		}
	}
}