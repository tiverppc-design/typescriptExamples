class operators {

      a = 20;   //assignment operator
      b = 40;
      c = "40";

      //arthmetic operator

      arith(): void {
            console.log(this.a + this.b);
            console.log(this.a * this.b);
            console.log(this.b - this.a);
            console.log(this.a / this.b);
      }

      compare(): void {

            console.log(this.a >= this.b);   //False
            console.log(this.a <= this.b);   //True
            console.log(this.b == Number(this.c));  //True
            console.log(this.b === Number(this.c));  //False
            console.log(this.a != Number(this.c));     //True  
            console.log(this.b !== Number(this.c));   //False
      }

      logical(): void {

            if (this.b >= 40 && this.a <= 10) {

                  console.log("And operator working ");

            }
            else {

                  console.log("not working");
            }

            if (this.a >= 30 || this.b <= 6) {
                  console.log("or operator working");
            }

            else {

                  console.log("or operator not working");

            }

      }


      ternory(): void {

            let result = this.a >= 18 ? "Ture" : "False";

            console.log("Result : " + result);

      }

      uniary(): void {

             this.a++;
            ++this.b;

            console.log("a = ", this.a);
            console.log("b = ", this.b);



      }

} const opera = new operators();
//opera.arith();
//opera.compare();
//opera.logical();
//opera.ternory();
opera.uniary();