"use client";
import React, { useEffect, useState } from "react";

const PageRender = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {isLoading ? (
        <div className={`w-full min-h-screen flex justify-center items-center`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            width="50px"
            height="50px"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#263170"
              stroke-width="10"
              fill="none"
            >
              <animate
                attributeName="stroke-dasharray"
                attributeType="XML"
                from="0 250"
                to="125 125"
                begin="0"
                dur="1.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-dashoffset"
                attributeType="XML"
                from="0"
                to="-250"
                begin="0"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default PageRender;
