import { useState } from "react";


const App = () => {
    const [principal,setPrincipal] = useState("");
    const [numberOfInstallments,setNumberOfInstallments] = useState("");
    const [interestRate,setInterestRate] = useState("");
    const [installmentFrequency,setInstallmentFrequency] = useState("");

    const FREQUENCY = ["aylık","haftalık","yıllık"];

    return (
        <div>
        <h1>here we go again</h1>
        <form className="user-inputs">
            <label>Anapara(Kredi Tutarı)
                <input
                type="number"
                placeholder="100.000,00 TL"
                min="0"
                step="1"
                value={principal}
                onChange={(e)=>setPrincipal(e.target.value)}
                required
                ></input>
            </label>
            <label>Taksit Sayısı
                <input
                type="number"
                placeholder="0"
                min="0"
                step="1"
                value={numberOfInstallments}
                onChange={(e)=>setNumberOfInstallments(e.target.value)}
                required
                ></input>
            </label>
            <label>Kâr oranı
                <input
                type="number"
                placeholder="%1,28"
                min="0"
                value={interestRate}
                onChange={(e)=>setInterestRate(e.target.value)}
                required
                ></input>
            </label>
            <label>Taksit Aralığı
                <select
                value={installmentFrequency}
                onChange={(e)=>setInstallmentFrequency(e.target.value)}
                onBlur={(e)=>setInstallmentFrequency(e.target.value)}
                >
                    <option/>
                    {FREQUENCY.map((option)=>(
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </label>
        </form>
        </div>
    )
}

export default App;