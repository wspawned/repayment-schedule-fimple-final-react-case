import { useState } from "react";


const App = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [paymentPeriod, setPaymentPeriod] = useState("");
  const [numberOfInstallments, setNumberOfInstallments] = useState("");
  const [kkdfTax, setKkdfTax] = useState("");
  const [bsmvTax, setBsmvTax] = useState("");
  const [tableInfo, setTableInfo] = useState([]);

  const FREQUENCY = ["aylık", "yıllık", "haftalık"];

  const compute = () => {
    const rate = Number(interestRate) / 100;
    const numberOfPayment = Number(numberOfInstallments);
    const principalValue = Number(principal);
    const kkdf = Number(kkdfTax) / 100;
    const bsmv = Number(bsmvTax) / 100;

    const appliedInterestRate = rate * (1 + kkdf + bsmv);

    const installment =
      (appliedInterestRate * principalValue) /
      (1 - Math.pow(1 + appliedInterestRate, -numberOfPayment));

    const paymentsList = [];
    let remainingPrincipal = principalValue;
    for (let i = 0; i < numberOfPayment; i++) {
      const periodicInterest = remainingPrincipal * rate;
      const periodicKkdf = periodicInterest * kkdf;
      const periodicBsmv = periodicInterest * bsmv;
      const periodicInterestSum =
        periodicInterest + periodicKkdf + periodicBsmv;
      const periodicPrincipalPayment = installment - periodicInterestSum;
      const paymentNo = i + 1;
      remainingPrincipal = remainingPrincipal - periodicPrincipalPayment;
      paymentsList.push({
        paymentNo: paymentNo,
        installment: installment,
        principalPayment: periodicPrincipalPayment,
        remainingPrincipal: remainingPrincipal,
        interestPayment: periodicInterest,
        kkdfPayment: periodicKkdf,
        bsmvPayment: periodicBsmv,
      });
    }
    setTableInfo(paymentsList);
  };

  return (
    <div>
      <h1>Kredi Ödeme Planı Hesaplayıcı</h1>
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
          Faiz Oranı (%)
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
          >
            {FREQUENCY.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <br />
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
          <h2>GERİ ÖDEME PLANI TABLOSU</h2>
          <table>
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
              const remainingPrincipal = item.remainingPrincipal.toFixed(2);
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
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default App;