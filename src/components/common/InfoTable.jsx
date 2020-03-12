import React from "react";

function InfoTable({ senderName, receiverName, invoiceNo, receiverAddr }) {
  return (
    <table>
      <tbody>
        <tr>
          <td>운송장번호</td>
          <td>{invoiceNo}</td>
        </tr>
        <tr>
          <td>보낸 사람</td>
          <td>{senderName || "보낸이 정보 없음."}</td>
        </tr>
        <tr>
          <td>받는 사람</td>
          <td>{receiverName || "받는이 정보 없음."}</td>
        </tr>
        <tr>
          <td>수령 주소</td>
          <td>{receiverAddr || "주소 정보 없음."}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default InfoTable;
