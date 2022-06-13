class movie{
    constructor(tittle,studio,rating='PG'){
        this.tittle=tittle;
        this.studio=studio;
        this.rating=rating;
    }
    getPG(array){
        let newarray=[];
        array.forEach(element=>{
            if(element.rating=="pg"){
                newarray.push(element)
            }
        })
        return newarray;

    }
    
}

Casino_Royale= new movie("Casino Royale","Eon Production","PG13")
console.log(Casino_Royale)

class circle{
    constructor(radius=1.0,color="red"){
        this.radius=radius;
        this.color=color;        
    }
    circle(){
        this.radius=1.0
        this.color="red"
     
    }
    circle(radius){
        this.radius=radius
    }
    circle(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(radius){
        this.radius=radius;
    }
    getColor(){return this.color}
    setColor(color){
        this.color=color;
    }
    toString(){

    }
    getArea(){
        let r= this.radius;
        return 3.14*r*r;   }
}

class person{
    constructor(name,adress,phno,job){
        this.name=name;
        this.address=address;
        this.phno=phno;
        this.job=job;
    }
}

class UberPrice{
    constructor(distance,vechical,price_perKm){
        this.distance=distance;
        this.vechical=vechical;
        this.price_perKm=price_perKm;
    }
    calulate_price(){
        let price=this.distance*this.price_perKm
    }
}