export const Table = (props) => {

  const tableInfo = props.tableInfo;
  return <div>
    {tableInfo.length ? (
      <div className="table-container">
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
                <td>
                  {tableInfo[tableInfo.length - 1].totalPayment.toFixed(2) +
                    " TL"}
                </td>
                <td>
                  {tableInfo[tableInfo.length - 1].totalInterestPayment.toFixed(2) + " TL"}
                </td>
                <td>
                  {tableInfo[tableInfo.length - 1].totalTaxPayment.toFixed(
                    2
                  ) + " TL"}
                </td>
                <td>
                  {tableInfo[tableInfo.length - 1].installment.toFixed(2) +
                    " TL"}
                </td>
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
              const remainingPrincipal = Math.abs(
                item.remainingPrincipal
              ).toFixed(2);
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
  </div>;
};
