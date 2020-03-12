import React from "react";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function StateTable({ lastDetail, columns }) {
  if (!lastDetail) {
    return null;
  } else {
    return (
      <div className="stateTable">
        <h1>배송 상태 정보</h1>
        <table>
          <TableHeader columns={columns} />
          <TableBody lastDetail={lastDetail} />
        </table>
      </div>
    );
  }
}

export default StateTable;
