"use client";
import React from "react";
import _ from "lodash";

const HeavyComponent = () => {
  return (
    <>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [
            { name: "A", age: 1 },
            { name: "B", age: 3 },
            { name: "C", age: 2 },
            { name: "D", age: 44 },
          ];

          const sortedUsers = _.orderBy(users, ["age"]);
          console.log(sortedUsers);
        }}
        className="btn"
      >
        Show
      </button>
    </>
  );
};

export default HeavyComponent;
