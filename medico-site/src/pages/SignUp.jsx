import react from "react";
import PageTitle from "../components/PageTitle";
import SignUpForm from "../components/Authentication/SignUpForm";

export default function SignUp() {
  return (
    <div className="overflow-x-hidden">
      {/* Head Title */}
      <PageTitle title="Sign Up" />

      {/* SignUp Page */}
      <SignUpForm />
    </div>
  );
}
