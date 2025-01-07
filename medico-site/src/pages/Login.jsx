import React from "react";
import PageTitle from "../components/PageTitle";
import LoginForm from "../components/Authentication/LoginForm";

export default function Login() {
  return (
    <div className="overflow-x-hidden">
      {/* Head Title */}
      <PageTitle title="Login" />

      {/* Login Page */}
      <LoginForm />
    </div>
  );
}
