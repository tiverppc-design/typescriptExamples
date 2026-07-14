class userbonus {

    userdetail(username: string, password: string, loginattempts: number, isActive: boolean, age: number, salary: number, creditscore: number,): void {

        if (loginattempts > 3) {

            console.log("You are not autorized to login");

        }

        else if (!isActive) {
            console.log("You are not active user");


        }
        else if (username !== "Admin" || password !== "12345") {
            console.log("Not a Valid details");

        }
        else if (age <= 18) {
            console.log("you age is not eligible to proceed");

        }

        else if (salary >= 50000) {
            console.log("Bonus is appicable");

        }
        else if (creditscore <= 750) {
            console.log("Loan is not applicable");

        }
        else {
            console.log("Eligible for bonus and loan");

        }




    }

}  const userb = new userbonus();

    userb.userdetail("Admin", "4567", 3, false, 12, 35000, 650)
    userb.userdetail("Admin", "12345", 3, true, 12, 35000, 650)
    userb.userdetail("Admin", "12345", 4, true, 12, 35000, 650)
    userb.userdetail("Admin", "12345", 1, true, 30, 35000, 650)
    userb.userdetail("Admin", "12345", 1, true, 30, 50000, 650)
    userb.userdetail("Admin", "12345", 1 ,true, 30, 30000, 800)