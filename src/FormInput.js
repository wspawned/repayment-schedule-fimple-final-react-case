import { useState } from "react";
import { compoundInterestCalculation, simpleInterestCalculation } from "./financialUtil";

const FormInput = (props) => {
    const [principal, setPrincipal] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [paymentPeriod, setPaymentPeriod] = useState("");
    const [interestType,setInterestType] = useState("");
    const [numberOfInstallments, setNumberOfInstallments] = useState("");
    const [kkdfTax, setKkdfTax] = useState("");
    const [bsmvTax, setBsmvTax] = useState("");

    const setTableInfo = props.setTableInfo;

    const PAYMENT_FREQUENCY = ["Aylık", "Yıllık", "Haftalık"];
    const INTEREST_TYPE = ["Bileşik Faiz","Basit Faiz"];

    const compute = () => {
      const monthlyInterestRate = Number(interestRate) / 100;
      const numberOfPayment = Number(numberOfInstallments);
      const principalValue = Number(principal);
      const kkdf = Number(kkdfTax) / 100;
      const bsmv = Number(bsmvTax) / 100;
  
      let interestRateDuePeriod = 0;
      if(paymentPeriod==="Haftalık") interestRateDuePeriod = monthlyInterestRate/4;
      else if(paymentPeriod==="Yıllık") interestRateDuePeriod = monthlyInterestRate*12;
      else interestRateDuePeriod = monthlyInterestRate;
      
      let paymentsList = [];
      
      if(interestType==="Basit Faiz") {
        paymentsList = simpleInterestCalculation(principalValue, numberOfPayment, interestRateDuePeriod, kkdf, bsmv);
      } else {
        paymentsList = compoundInterestCalculation( principalValue, numberOfPayment, interestRateDuePeriod, kkdf, bsmv);
      }
      return(paymentsList);
    };

    return (
      <div className="home-page">
        <h1>
          Kredi Ödeme Planı <br />
          Hesaplama
        </h1>
        <form
          className="user-inputs"
          onSubmit={(e) => {
            e.preventDefault();
            setTableInfo(compute());
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
              <option />
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
              <option />
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
          <button type="submit" >Hesapla</button>
        </form>
      </div>
    );
}

export default FormInput;