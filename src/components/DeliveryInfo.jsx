import React, { Component } from "react";

import InfoTable from "./common/InfoTable";

class DeliveryInfo extends Component {
  render() {
    const {
      deliveryInfo: { senderName, receiverName, invoiceNo, receiverAddr }
    } = this.props;

    return (
      <>
        {this.props.deliveryInfo && (
          <InfoTable
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
