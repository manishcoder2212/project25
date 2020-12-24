class Pig{
    constructor(m,a,n,i){
     this.pig=Bodies.rectangle(m,a,n,i)
     World.add(world,this.pig)
    
     this.width=n
     this.height=i
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    display(){
        strokeWeight(4)
        stroke("orange")
        fill  ("green")  
        rect(this.pig.position.x,this.pig.position.y,this.width,this.height)
    
    }
    
    
    
    }