import { useState } from "react";


const App = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [paymentPeriod, setPaymentPeriod] = useState("");
  const [interestType,setInterestType] = useState("");
  const [numberOfInstallments, setNumberOfInstallments] = useState("");
  const [kkdfTax, setKkdfTax] = useState("");
  const [bsmvTax, setBsmvTax] = useState("");
  const [tableInfo, setTableInfo] = useState([]);

  const PAYMENT_FREQUENCY = ["aylık", "yıllık", "haftalık"];
  const INTEREST_TYPE = ["bileşik","basit"];

  

  const compute = () => {
    const monthlyInterestRate = Number(interestRate) / 100;
    const numberOfPayment = Number(numberOfInstallments);
    const principalValue = Number(principal);
    const kkdf = Number(kkdfTax) / 100;
    const bsmv = Number(bsmvTax) / 100;

    let interestRateDuePeriod = 0;
    if(paymentPeriod==="haftalık") interestRateDuePeriod = monthlyInterestRate/4;
    else if(paymentPeriod==="yıllık") interestRateDuePeriod = monthlyInterestRate*12;
    else interestRateDuePeriod = monthlyInterestRate;
    
    const appliedInterestTaxRate = interestRateDuePeriod * (1 + kkdf + bsmv);
    
    const paymentsList = [];
    
    (interestType==="basit")?
    simpleInterestCalculation(principalValue, numberOfPayment, interestRateDuePeriod, kkdf, bsmv, paymentsList) :
    compoundInterestCalculation(appliedInterestTaxRate, principalValue, numberOfPayment, interestRateDuePeriod, kkdf, bsmv, paymentsList);
    
    setTableInfo(paymentsList);
  };

  return (
    <div>
      <h1>Kredi Ödeme Planı Hesaplama</h1>
      <form
        className="user-inputs"
        onSubmit={(e) => {
          e.preventDefault();
          compute();
        }}
      >
        <label>
          Kredi Tutarı (Anapara)
          <input
            type="number"
            placeholder="100.000,00 TL"
            min="0"
            step="1"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            required
          ></input>
        </label>
        <label>
          Aylık Faiz Oranı (%)
          <input
            type="number"
            placeholder="%2,28"
            min="0"
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            required
          ></input>
        </label>
        <label>
          Taksit Aralığı
          <select
            value={paymentPeriod}
            onChange={(e) => setPaymentPeriod(e.target.value)}
            onBlur={(e) => setPaymentPeriod(e.target.value)}
            required
          >
            <option/>
            {PAYMENT_FREQUENCY.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label>
          Faiz Türü
          <select
            value={interestType}
            onChange={(e) => setInterestType(e.target.value)}
            onBlur={(e) => setInterestType(e.target.value)}
            required
          >
            <option/>
            {INTEREST_TYPE.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label>
          Taksit Sayısı
          <input
            type="number"
            placeholder="12"
            min="0"
            step="1"
            value={numberOfInstallments}
            onChange={(e) => setNumberOfInstallments(e.target.value)}
            required
          ></input>
        </label>
        <div className="taxes">
          <label>
            KKDF (%)
            <input
              type="number"
              placeholder="%15"
              min="0"
              step="0.01"
              value={kkdfTax}
              onChange={(e) => setKkdfTax(e.target.value)}
              required
            ></input>
          </label>
          <label>
            BSMV (%)
            <input
              type="number"
              placeholder="%10"
              min="0"
              step="0.01"
              value={bsmvTax}
              onChange={(e) => setBsmvTax(e.target.value)}
              required
            ></input>
          </label>
        </div>
        <button type="submit">Hesapla</button>
      </form>
      
      {tableInfo.length ? (

        <div className="table">
          <div>
            <table>
              <tbody>
              <tr>
                <th>Toplam Maliyet</th>
                <th>Toplam Faiz</th>
                <th>Toplam Vergi</th>
                <th>Taksit</th>
              </tr>
              
                <tr>
                  <td>{tableInfo[tableInfo.length-1].totalPayment.toFixed(2)+" TL"}</td>
                  <td>{tableInfo[tableInfo.length-1].totalInterestPayment.toFixed(2)+" TL"}</td>
                  <td>{tableInfo[tableInfo.length-1].totalTaxPayment.toFixed(2)+" TL"}</td>
                  <td>{tableInfo[tableInfo.length-1].installment.toFixed(2)+" TL"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>GERİ ÖDEME PLANI TABLOSU</h2>
          <table>
            <tbody>
            <tr>
              <th>Taksit No</th>
              <th>Taksit Tutarı</th>
              <th>Anapara</th>
              <th>Kalan Anapara</th>
              <th>Kar Tutarı</th>
              <th>KKDF</th>
              <th>BSMV</th>
            </tr>

            {tableInfo.map((item) => {
              const key = item.paymentNo;
              const paymentNo = item.paymentNo;
              const installment = item.installment.toFixed(2);
              const principalPayment = item.principalPayment.toFixed(2);
              const remainingPrincipal = Math.abs(item.remainingPrincipal).toFixed(2);
              const interestPayment = item.interestPayment.toFixed(2);
              const kkdfPayment = item.kkdfPayment.toFixed(2);
              const bsmvPayment = item.bsmvPayment.toFixed(2);

              return (
                <tr key={key}>
                  <td>{paymentNo}</td>
                  <td>{installment}</td>
                  <td>{principalPayment}</td>
                  <td>{remainingPrincipal}</td>
                  <td>{interestPayment}</td>
                  <td>{kkdfPayment}</td>
                  <td>{bsmvPayment}</td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default App;

function compoundInterestCalculation(appliedInterestTaxRate, principalValue, numberOfPayment, interestRateDuePeriod, kkdf, bsmv, paymentsList) {
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
}

function simpleInterestCalculation(principalValue, numberOfPayment, interestRateDuePeriod, kkdf, bsmv, paymentsList) {
  let remainingPrincipal = principalValue;
  let totalInterestPayment = 0;
  let totalTaxPayment = 0;
  let totalPayment = 0;

  for (let i = 0; i < numberOfPayment; i++) {

    const periodicPrincipalPayment = principalValue/numberOfPayment;
    const periodicInterest = principalValue*interestRateDuePeriod;
    const periodicKkdf = periodicInterest * kkdf;
    const periodicBsmv = periodicInterest * bsmv;
    const installment = periodicPrincipalPayment + periodicInterest + periodicKkdf + periodicBsmv ;

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
    } );
  }
}