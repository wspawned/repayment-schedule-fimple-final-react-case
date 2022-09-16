import { useRef } from "react";
import Table from "./Table";

const Payments = (props) => {
  const tableInfo = props.tableInfo;
  const tableRef = useRef();

  const handleClick = () => {
    tableRef.current.scroll();
  };

  return (
    <div>
      {tableInfo.length ? (
        <div className="result-container">
          <div className="total-values">
            <table className="total-table">
              <tbody>
                <tr>
                  <th>Toplam Maliyet</th>
                  <th>Toplam Faiz</th>
                  <th>Toplam Vergi</th>
                  <th>Taksit</th>
                  <th>
                    <button className="table-maker" onClick={handleClick}>
                      Tabloya git
                    </button>
                  </th>
                </tr>

                <tr>
                  <td>
                    {tableInfo[tableInfo.length - 1].totalPayment.toFixed(2) + " TL"}
                  </td>
                  <td>
                    {tableInfo[tableInfo.length - 1].totalInterestPayment.toFixed(2) + " TL"}
                  </td>
                  <td>
                    {tableInfo[tableInfo.length - 1].totalTaxPayment.toFixed(2) + " TL"}
                  </td>
                  <td>
                    {tableInfo[tableInfo.length - 1].installment.toFixed(2) + " TL"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Table tableInfo={tableInfo} ref={tableRef} />
        </div>
      ) : null}
    </div>
  );
};

export default Payments;