import React from "react";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function StateTable({ lastDetail, columns }) {
  if (!lastDetail) {
    return null;
  } else {
    return (
      <table>
        <TableHeader columns={columns} />
        <TableBody lastDetail={lastDetail} />
      </table>
    );
  }
}

export default StateTable;
