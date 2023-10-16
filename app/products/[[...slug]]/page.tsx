import React from "react";
interface Props {
  params: { slug: string[] };
  searchParams: { OrderBy: string };
}

const page = ({ params: { slug }, searchParams: { OrderBy } }: Props) => {
  return (
    <div>
      Product Page
      <div>{OrderBy}</div>
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
