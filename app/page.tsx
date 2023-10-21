import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import banner from "@/public/images/BANNER-IMAGE-13.jpg";
import Image from "next/image";
import { Metadata } from "next";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      <h1 className="font-poppins">
        Hello {session && <span>{session.user!.name}</span>}
      </h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="banner"
        fill={true}
        // style={{
        //   objectFit: "cover", // obtain
        // }}
        className="object-cover"
        sizes="(max-width: 480px)  100vw, (max-width: 768px) 50vw, 33vw"
        quality={50}
        priority
      ></Image> */}
    </main>
  );
}

// export const metadata: Metadata = {
//   title: "...",
//   description: "...",
// };

export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch("");
  return {
    title: "product.name",
    description: "",
  };
}
