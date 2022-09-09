export function compoundInterestCalculation(principalValue, numberOfPayment, interestRateDuePeriod, kkdf, bsmv) {
  const paymentsList = [];
  const appliedInterestTaxRate = interestRateDuePeriod * (1 + kkdf + bsmv);
  const installment = (appliedInterestTaxRate * principalValue) / (1 - Math.pow(1 + appliedInterestTaxRate, -numberOfPayment));
  let remainingPrincipal = principalValue;
  let totalInterestPayment = 0;
  let totalTaxPayment = 0;
  let totalPayment = 0;

  for (let i = 0; i < numberOfPayment; i++) {
    const periodicInterest = remainingPrincipal * interestRateDuePeriod;
    const periodicKkdf = periodicInterest * kkdf;
    const periodicBsmv = periodicInterest * bsmv;
    const periodicInterestSum = periodicInterest + periodicKkdf + periodicBsmv;
    const periodicPrincipalPayment = installment - periodicInterestSum;
    const paymentNo = i + 1;
    remainingPrincipal -= periodicPrincipalPayment;
    totalInterestPayment += periodicInterest;
    totalTaxPayment += (periodicKkdf + periodicBsmv);
    totalPayment += installment;

    paymentsList.push({
      paymentNo: paymentNo,
      installment: installment,
      principalPayment: periodicPrincipalPayment,
      remainingPrincipal: remainingPrincipal,
      interestPayment: periodicInterest,
      kkdfPayment: periodicKkdf,
      bsmvPayment: periodicBsmv,
      totalInterestPayment: totalInterestPayment,
      totalTaxPayment: totalTaxPayment,
      totalPayment: totalPayment,
    });
  }
  return paymentsList;
}

export function simpleInterestCalculation(principalValue, numberOfPayment, interestRateDuePeriod, kkdf, bsmv) {
  const paymentsList = [];
  let remainingPrincipal = principalValue;
  let totalInterestPayment = 0;
  let totalTaxPayment = 0;
  let totalPayment = 0;

  for (let i = 0; i < numberOfPayment; i++) {

    const periodicPrincipalPayment = principalValue / numberOfPayment;
    const periodicInterest = principalValue * interestRateDuePeriod;
    const periodicKkdf = periodicInterest * kkdf;
    const periodicBsmv = periodicInterest * bsmv;
    const installment = periodicPrincipalPayment + periodicInterest + periodicKkdf + periodicBsmv;

    const paymentNo = i + 1;
    remainingPrincipal -= periodicPrincipalPayment;
    totalInterestPayment += periodicInterest;
    totalTaxPayment += (periodicKkdf + periodicBsmv);
    totalPayment += installment;

    paymentsList.push({
      paymentNo: paymentNo,
      installment: installment,
      principalPayment: periodicPrincipalPayment,
      remainingPrincipal: remainingPrincipal,
      interestPayment: periodicInterest,
      kkdfPayment: periodicKkdf,
      bsmvPayment: periodicBsmv,
      totalInterestPayment: totalInterestPayment,
      totalTaxPayment: totalTaxPayment,
      totalPayment: totalPayment,
    });
  }
  return paymentsList;
}