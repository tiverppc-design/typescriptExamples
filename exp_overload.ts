class overload{

//method intialization can be multiple times with different parameters but the name of the method should be same

add5(a:number,b:number):number;
add5(a:number,b:number, c:number):number;

//method implementation should be only one time. 
add5(a:number,b:number, c:number=0 ) : number 
{

     //console.log(a+b);
   console.log(a+b+c);
   return a+b+c;
  
}
    }       
    let overload1 = new overload();
    overload1.add5(10,20, 0);
    overload1.add5(10,20,30);


