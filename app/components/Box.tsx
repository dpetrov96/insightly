"use client";

import { PropsWithChildren } from "react";

type Props = {
  title?: string;
  isLoading?: boolean;
};

const Box = ({ title, isLoading, children }: PropsWithChildren<Props>) => (
  <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-4">
    {title ? (
      <h2 className="text-md font-semibold text-gray-600 uppercase mb-4">
        {title}
      </h2>
    ) : null}
    <div className="overflow-y-auto" style={{ maxHeight: "400px" }}>
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <div className="w-24 h-24 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
        </div>
      ) : (
        children
      )}
    </div>
  </div>
);

export default Box;
