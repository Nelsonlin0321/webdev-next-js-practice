import React from "react";
interface Props {
  params: { slug: string[] };
}

const page = ({ params: { slug } }: Props) => {
  return (
    <div>
      Product Page
      {slug && (
        <ul>
          {slug.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default page;
