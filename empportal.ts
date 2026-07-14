class employeeportal {

    emplogin(empname: string, password: string, isActive: boolean, performance: number, salary: number): void {


        if (empname === "Admin") {
            console.log("Emp found");
            if (password === "12345") {
                console.log("Emp login successfully");
                if (isActive) {
                    console.log("User Active");
                    if (performance >= 4) {
                        console.log("Passed")
                        if (salary >= 40000) {

                            console.log("congrats!");

                            console.log("Eligible for bonus");

                        } else {
                            console.log("Not eligible for bonus");
                        }
                    } else {
                        console.log("Rating is low");
                    }
                } else {
                    console.log("User not active");
                }
            } else {

                console.log("Password miss matched");
            }
        } else {
            console.log("Emp not found");
        }
    }

}   let empverify = new employeeportal();

    //empverify.emplogin("Tiver", "Sahni", false, 5 , 50000);
    empverify.emplogin("Admin", "12345", true, 2 , 40000);










