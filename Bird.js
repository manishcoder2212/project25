class Bird{
constructor(m,a,n,i){
 this.bird=Bodies.rectangle(m,a,n,i)
 World.add(world,this.bird)

 this.width=n
 this.height=i
}
















display(){
  fill  ("red")  
    rect(this.bird.position.x,this.bird.position.y,this.width,this.height)

}



}