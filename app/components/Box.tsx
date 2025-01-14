"use client";

import { PropsWithChildren } from "react";

type Props = {
  title?: string;
};

const Box = ({ title, children }: PropsWithChildren<Props>) => (
  <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-4">
    {title ? <h2 className="text-md font-semibold text-gray-600 uppercase mb-4">{title}</h2> : null}
    {children}
  </div>
);

export default Box;
