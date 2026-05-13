class sli {

a8 =10; 
a9 =20;

      tiver() : void 

        {
        console.log(" Tiver example");
        console.log("a8: " + this.a8);
        console.log("a9: " + this.a9);

        }

    }


class b  extends sli{

    x = 30;
    y = 40;

      tiver2() : void 

        {
        console.log("b example");
        console.log("x: " + this.x);
        console.log("y: " + this.y);

        }



}


class c  extends b{


      tiver3() : void 

        {
        console.log("this.a8 + this.a9: " + (this.a8 + this.a9));
        console.log("this.x + this.y: " + (this.x + this.y));

        }



}let c1 = new c();
c1.tiver();
c1.tiver2();
c1.tiver3();