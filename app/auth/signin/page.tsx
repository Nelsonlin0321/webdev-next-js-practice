import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ProviderButton from "../ProviderButton";

export default async function SignIn() {
  const providers = authOptions.providers;
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <ProviderButton
            provider_name={provider.name}
            provider_id={provider.id}
          />
        </div>
      ))}
    </>
  );
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const session = await getServerSession(context.req, context.res, authOptions);

//   // If the user is already logged in, redirect.
//   // Note: Make sure not to redirect to the same page
//   // To avoid an infinite loop!
//   if (session) {
//     return { redirect: { destination: "/" } };
//   }

//   const providers = await getProviders();

//   return {
//     props: { providers: providers ?? [] },
//   };
// }
