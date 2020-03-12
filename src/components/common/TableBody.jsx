import React from "react";

function TableBody(props) {
  const {
    lastDetail: { timeString, where, kind }
  } = props;

  return (
    <tbody>
      <tr>
        <td>{timeString || "시간 정보 없음."}</td>
        <td>{where || "현 위치 정보 없음."}</td>
        <td>{kind || "배송 상태 저옵 없음."}</td>
      </tr>
    </tbody>
  );
}

export default TableBody;
