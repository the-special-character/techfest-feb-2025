import React from "react";

type Props = {};

const Test = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const slug = (await params).slug;
  console.log(slug);

  return (
    <div>
      {slug.map((x) => (
        <p key={x}>{x}</p>
      ))}
    </div>
  );
};

export default Test;
