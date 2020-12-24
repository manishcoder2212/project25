class Box{
constructor(m,a){
    this.box=Bodies.rectangle(m,a,100,100);
    World.add(world,this.box);
    
}




display(){
                   rectMode(CENTER)
                   fill  ("blue")  
                   rect(this.box.position.x,this.box.position.y,100,100);
}





}
