import React from "react";
import "./Form.css";
import OperationForm from "./OperationForm";
import ContactForm from "./ContactForm";

export default function Forms() {
  return (
    <div className="bg-box">
      <div className="bg-img-btm">
        <div className="forms">
          <OperationForm />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
