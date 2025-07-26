import { Finance } from "./finance";
import { UserManagement } from "./userManagement";


//Задание 1
import "./stringUtils"

//Задание 2
const myLoanPayment = new Finance.LoanCalculator(10000, 10, 60);
console.log(`My monthly loan payment: ${myLoanPayment.getMonthlyPayment()}`);

console.log(`My income tax: ${Finance.TaxCalculator.getTheTaxAmount(60000, 12)}`);

//Задание 3
const admin = new UserManagement.Admin.AdminUser("Yuli", "yuli@gmail.com")

admin.addSuperAdmin()
admin.userInfo()
admin.toggleSuperAdmin()
admin.userInfo()

//Задание 4
import "./sequenceUtils"