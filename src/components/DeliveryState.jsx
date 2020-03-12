import React, { Component } from "react";

import StateTable from "./common/StateTable";

class DeliveryState extends Component {
  columns = [
    { key: "time", label: "시간" },
    { key: "presentPosition", label: "현재위치" },
    { key: "deliveryStatus", label: "배송상태" }
  ];

  render() {
    const {
      deliveryInfo: { lastDetail }
    } = this.props;
    const { columns } = this;
    return (
      <>
        {this.props.deliveryInfo && (
          <StateTable lastDetail={lastDetail} columns={columns} />
        )}
      </>
    );
  }
}

export default DeliveryState;
