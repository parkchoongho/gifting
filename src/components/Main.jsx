import React, { Component } from "react";

import Form from "./Form";
import DeliveryInfo from "./DeliveryInfo";
import DeliveryState from "./DeliveryState";

import { findTracking } from "../services/trackingInfo";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sendingData: { code: "", invoice: "" },
      deliveryInfo: "",
      errors: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const { sendingData } = this.state;
      const { data } = await findTracking(
        sendingData.code,
        sendingData.invoice
      );

      if (data.msg) {
        this.setState({ errors: data.msg, deliveryInfo: "" });
        return;
      }

      const trackingInfo = data;

      this.setState({ deliveryInfo: trackingInfo, errors: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const sendingData = { ...this.state.sendingData };
    sendingData[input.name] = input.value;

    this.setState({ sendingData });
  };

  render() {
    const { deliveryInfo, sendingData, errors } = this.state;
    return (
      <>
        <Form
          sendingData={sendingData}
          onChange={e => this.handleChange(e)}
          onSubmit={e => this.handleSubmit(e)}
        />
        {errors ||
          (deliveryInfo && (
            <>
              <DeliveryInfo deliveryInfo={deliveryInfo} />
              <DeliveryState deliveryInfo={deliveryInfo} />
            </>
          ))}
      </>
    );
  }
}

export default Main;
