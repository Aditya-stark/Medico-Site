import React from "react";
import PageTitle from "../components/PageTitle";
import ForgotPasswordForm from "../components/Authentication/ForgotPasswordForm";

export default function Login() {
  return (
    <div className="overflow-x-hidden">
      {/* Head Title */}
      <PageTitle title="Forgot Password" />

      {/* Login Page */}
      <ForgotPasswordForm />
    </div>
  );
}
