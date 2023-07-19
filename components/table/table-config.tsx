import { formatString } from "@/helpers/format-string";
import { ColumnDef } from "@tanstack/react-table";

export type field = {
  name: string;
  type: string;
};

export const generateDynamicColumns = (fields: any) => {
  const columns = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "tags", header: "Tags" },
  ];

  fields.map((field: field) =>
    columns.push({
      accessorKey: formatString(field.name),
      header: field.name,
    })
  );

  return columns;
};
