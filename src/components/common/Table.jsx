import React from "react";

function Table({ senderName, receiverName, invoiceNo, receiverAddr }) {
  return (
    <table>
      <tbody>
        <tr>
          <td>운송장번호</td>
          <td>{invoiceNo}</td>
        </tr>
        <tr>
          <td>보낸 사람</td>
          <td>{senderName || "보낸이"}</td>
        </tr>
        <tr>
          <td>받는 사람</td>
          <td>{receiverName || "받는이"}</td>
        </tr>
        <tr>
          <td>수령 주소</td>
          <td>{receiverAddr || "주소가 없음"}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
