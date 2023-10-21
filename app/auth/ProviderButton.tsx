"use client";
import React from "react";
import { signIn } from "next-auth/react";
interface Props {
  provider_name: string;
  provider_id: string;
}

const ProviderButton = ({ provider_name, provider_id }: Props) => {
  return (
    <button onClick={() => signIn(provider_id)}>
      Sign in with the provider {provider_name}
    </button>
  );
};

export default ProviderButton;
