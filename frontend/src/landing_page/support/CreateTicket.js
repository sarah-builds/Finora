
import React from "react";

const topics = [
  {
    title: "Account Opening",
    icon: "fa-user-plus",
    links: [
      "Open an Online Account",
      "Documents Required",
      "Account Opening Status",
      "KYC Verification",
      "Account Opening Charges",
      "NRI Account Opening",
    ],
  },
  {
    title: "Your Finora Account",
    icon: "fa-user",
    links: [
      "Login and Password Issues",
      "Update Profile Details",
      "Change Mobile Number or Email",
      "Manage Nominee Details",
      "Account Statements",
      "Close Your Account",
    ],
  },
  {
    title: "Funds & Payments",
    icon: "fa-wallet",
    links: [
      "Add Funds to Account",
      "Withdraw Funds",
      "Failed Fund Transfers",
      "Link Bank Account",
      "Fund Transfer Status",
      "Charges and Payments",
    ],
  },
  {
    title: "Trading & Investments",
    icon: "fa-chart-line",
    links: [
      "Buy and Sell Stocks",
      "Order Types and Status",
      "Mutual Funds",
      "IPO Applications",
      "Trading Timings",
      "Stock Market Holidays",
    ],
  },
  {
    title: "Demat & Holdings",
    icon: "fa-building-columns",
    links: [
      "View Your Holdings",
      "Transfer Shares",
      "Pledge and Unpledge Shares",
      "Corporate Actions",
      "Demat Account Charges",
      "Download Holdings Statement",
    ],
  },
  {
    title: "Platforms & Technical Support",
    icon: "fa-mobile-screen-button",
    links: [
      "Finora Web Platform",
      "Finora Mobile App",
      "App Login Issues",
      "Charts and Watchlists",
      "Technical Errors",
      "Downloads and Resources",
    ],
  },
];

export default function TicketTopics() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">

        <h1 className="fs-2 mb-4">
          To get help, select a relevant Finora topic
        </h1>

        {topics.map((topic, index) => (
          <div className="col-4 p-5 mt-2 mb-2" key={index}>

            <h4 className="mb-4">
              <i className={`fa-solid ${topic.icon} me-2`}></i>
              {topic.title}
            </h4>

            {topic.links.map((link, i) => (
              <a
                href="#"
                key={i}
                className="d-block mb-3 text-decoration-none"
                style={{ lineHeight: "1.5" }}
              >
                {link}
              </a>
            ))}

          </div>
        ))}

      </div>
    </div>
  );
}
