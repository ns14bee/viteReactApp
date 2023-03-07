import axios from "axios";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const displayRazorPay = async (id, price) => {
  try {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const data = {
      amount: price * 100,
      currency: "INR",
      receipt: "Ns_14",
    };
    // new order
    const result = await axios.post(
      "http://localhost:8000/api/v1/payment/createOrder",
      data
    );
    console.log(result);

    if (result.status !== 200) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data.order;
    const options = {
      key: "rzp_test_I9aNCvcHROKBFM",
      amount: amount.toString(),
      currency: currency,
      name: "Bee Hive Corp.",
      description: "Test Transaction",
      order_id: order_id,
      handler: async (response) => {
        const config = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
          amount: amount,
        };

        const result = await axios.post(
          "http://localhost:8000/api/v1/payment/success",
          config
        );

        alert(result.data.msg);
      },
      prefill: {
        name: "Niraj Surati",
        email: "bee21@yopmail.com",
        contact: "9999999999",
      },
      notes: {
        address: "BeeHive Corp office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  } catch (err) {
    console.log(err);
  }
};
