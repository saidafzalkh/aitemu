"use client";

import dynamic from "next/dynamic";

const Output = dynamic(
  async () => (await import("editorjs-react-renderer")).default,
  { ssr: false }
);

const CustomCodeRenderer = ({ data }: any) => {
  data;

  return (
    <pre className="bg-gray-800 rounded-md p-4">
      <code className="text-gray-100 text-sm">{data.code}</code>
    </pre>
  );
};

const renderers = {
  code: CustomCodeRenderer,
};

const style = {
  paragraph: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
};

const DescriptionRender = ({ content }: { content: any }) => {
  return (
    <div className="prose dark:prose-invert">
      <Output style={style} data={content} renderers={renderers} />
    </div>
  );
};

export default DescriptionRender;
