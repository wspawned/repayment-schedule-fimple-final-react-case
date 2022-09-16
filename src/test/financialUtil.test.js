import { compoundInterestCalculation, rateDerivation, simpleInterestCalculation } from "../financialUtil";
import { compoundCalculationResult, simpleCalculationResult } from "./testConst";

test("returns unmodified monthly interest rate for derivation", () => {
  const paymentPeriod = "Aylık";
  const monthlyInterestRate = 1.0;
  expect(rateDerivation(paymentPeriod, monthlyInterestRate)).toBe(
    monthlyInterestRate
  );
});

test("returns divided interest rate for weekly derivation", () => {
  const paymentPeriod = "Haftalık";
  const monthlyInterestRate = 1.0;
  expect(rateDerivation(paymentPeriod, monthlyInterestRate)).toBe(
    monthlyInterestRate / 4
  );
});

test("returns multiplied interest rate for yearly derivation", () => {
  const paymentPeriod = "Yıllık";
  const monthlyInterestRate = 1.0;
  expect(rateDerivation(paymentPeriod, monthlyInterestRate)).toBe(
    monthlyInterestRate * 12
  );
});


test("calculation for 12 months compound interest", () => {
    const principalValue = 100000;
    const numberOfPayment = 12;
    const interestRateDuePeriod = 0.022799999999999997;
    const kkdf = 0.15;
    const bsmv = 0.10;
    const calculationResult = compoundInterestCalculation(principalValue, numberOfPayment, interestRateDuePeriod, kkdf, bsmv);
    expect(calculationResult).toStrictEqual(compoundCalculationResult);
});

test("calculation for 5 years simple interest", () => {
    const principalValue = 1000;
    const numberOfPayment = 5;
    const interestRateDuePeriod = 0.8400000000000001;
    const kkdf = 0.15;
    const bsmv = 0.10;
    const calculationResult = simpleInterestCalculation(principalValue, numberOfPayment, interestRateDuePeriod, kkdf, bsmv);
    expect(calculationResult).toStrictEqual(simpleCalculationResult);
});
