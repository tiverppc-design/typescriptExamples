class login {

        loginverfication(username: string, password: string , isActive : boolean): void{
                         
                if (username === "admin" && password === "1234" && isActive )
                {
                        console.log("login sucessfully");

                }
                         else if (!isActive)
                         {
                       console.log("Account is Inactive");
}
                       else {

                        console.log("invalid creds");

                       }
}

}   let logintest = new login();
logintest.loginverfication("admin", "1234", true);
logintest.loginverfication("admin", "1234", false);
