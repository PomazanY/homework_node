
export namespace Finance {
  export class LoanCalculator {
    
    private loanAmount: number;
    private interestRate: number;
    private months: number;

    constructor(loanAmount: number, interestRate: number, months: number) {
      this.loanAmount = loanAmount;
      this.interestRate = interestRate;
      this.months = months;
    }
    getMonthlyPayment(): number {
      const monthRate = this.interestRate / 12 / 100;
      return Math.floor(
        (this.loanAmount * (monthRate * Math.pow(1 + monthRate, this.months))) /
          (Math.pow(1 + monthRate, this.months) - 1)
      );
    }
  }

  export class TaxCalculator {
    static getTheTaxAmount(income: number, rate: number): number {
      return income * (rate / 100);
    }
  }
}