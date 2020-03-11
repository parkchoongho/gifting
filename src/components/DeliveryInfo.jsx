import React, { Component } from "react";

import Table from "./common/Table";

class DeliveryInfo extends Component {
  render() {
    const {
      deliveryInfo: { senderName, receiverName, invoiceNo, receiverAddr }
    } = this.props;

    return (
      <>
        {this.props.deliveryInfo && (
          <Table
            senderName={senderName}
            receiverName={receiverName}
            invoiceNo={invoiceNo}
            receiverAddr={receiverAddr}
          />
        )}
      </>
    );
  }
}

export default DeliveryInfo;
