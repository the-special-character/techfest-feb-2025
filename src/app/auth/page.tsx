import React from "react";
import Link from "next/link";

type Props = {};

const Auth = (props: Props) => {
  return (
    <div>
      Auth
      <Link href="/auth/register">Register</Link>
    </div>
  );
};

export default Auth;
