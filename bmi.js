class BMI {
    constructor(height, wight){
        this.height = height;
        this.wight = wight;
    }

    calculateBMI(){
        let bmi = this.wight/(this.height**2);
        return bmi;
    }
}

let  MyBmi = new BMI(2, 9);
let calculateBMI = MyBmi.calculateBMI();
console.log(calculateBMI);