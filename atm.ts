class atm {

    static accountBalance = 50000.657;
    static withdrwalAmount = 6000.678;
    static depositeAmount = 20000.43215;


    static updatebalance(): number {

        let updatebalancef = this.accountBalance + this.depositeAmount;
        updatebalancef = Number(updatebalancef.toFixed(2))
        console.log("Update Balance = ", updatebalancef);
        return updatebalancef;
    }
    //==========================================

    static RAmountAW(): number {
     let updatebal = this.updatebalance();
        let remaningamount = updatebal - this.withdrwalAmount;

        remaningamount = Number(remaningamount.toFixed(2))
        console.log("Remaining Balance = ", remaningamount);
        return remaningamount;

    }
    //==========================================

    static doubleW(): number {

        let doubleW = this.withdrwalAmount * 2
        doubleW = Number(doubleW.toFixed(2));
        console.log("DoulbeW =", doubleW);
        return doubleW;

    }
    //==========================================

    static finalAmount(): number {

        let finalAmount =
            this.RAmountAW() - this.doubleW();

        finalAmount = this.twoFix(finalAmount);

        console.log("Final Amount =", finalAmount);

        return finalAmount;
    }

    //==========================================

    static dividefinalamount(): void {
        let divideamount = this.finalAmount() / 5;
        divideamount = this.twoFix(divideamount);
        console.log("Divide Amount in 5 = " + divideamount);
    }

      private static twoFix(amount : number) : number{
     
        return Number(amount.toFixed(2));

      } 

}

atm.dividefinalamount();

