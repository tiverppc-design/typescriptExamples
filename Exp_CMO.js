export class markss {
    checkresults() {
        let markse = 100;
        if (markse >= 90 && markse <= 100) {
            console.log("Grade: A");
        }
        else if (markse >= 80 && markse < 90) {
            console.log("Grade: B");
        }
        else if (markse >= 70 && markse < 80) {
            console.log("Grade: C");
        }
        else if (markse >= 60 && markse < 70) {
            console.log("Grade: D");
        }
        else if (markse >= 0 && markse < 60) {
            console.log("Grade: F");
        }
        else {
            console.log("Invalid marks: " + markse);
        }
    }
    checktemp() {
        let temp = 35;
        if (temp > 30) {
            console.log("It's a hot day");
        }
        else if (temp >= 20 && temp <= 30) {
            console.log("It's a pleasant day");
        }
        else if (temp >= 10 && temp < 20) {
            console.log("It's a cool day");
        }
        else if (temp >= 0 && temp < 10) {
            console.log("It's a cold day");
        }
        else {
            console.log("Invalid temperature: " + temp);
        }
    }
    checkwebsiteaccess() {
        let isLoggedIn = false;
        if (isLoggedIn) {
            console.log("Access granted");
        }
        else {
            console.log("Access denied");
        }
    }
}
export const m5 = new markss();
m5.checkresults();
m5.checktemp();
