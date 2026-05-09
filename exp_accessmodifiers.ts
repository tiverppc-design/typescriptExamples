class AccessModifiers {
  public name : string = 'Tiversahni';
  private salary  : number = 100000;    
    protected city  : string = 'New York';

    tiversahni() : void {
        console.log("Name: " + this.name);
        console.log("Salary: " + this.salary);
        console.log("City: " + this.city);  
    }                       

}    let accessmodifiers = new AccessModifiers();
accessmodifiers.tiversahni();