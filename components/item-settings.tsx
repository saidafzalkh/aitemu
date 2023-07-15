"use client";

import { Minus, Plus } from "lucide-react";
import { ReactNode, useState } from "react";

import { ItemField } from "./item-field";
import { Button } from "./ui/button";

const ItemSettings = () => {
  const [fields, setFields] = useState<ReactNode[]>([]);

  const addField = () => {
    setFields((c) => [...c, <ItemField key={c.length} />]);
  };

  const deleteField = (index: number) => {
    setFields((c) => {
      return c.filter((_, i) => i !== index);
    });
  };

  return (
    <div>
      <p className="font-semibold text-sm">Fields</p>
      <p className="text-sm text-muted-foreground">
        Set up custom fields for your items
      </p>
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex gap-2">
          <ItemField disabled={true} name="id" value="number" />
          <Button disabled type="button" variant="outline">
            <Minus className="w-4 h-4 fill-secondary" />
          </Button>
        </div>
        <div className="flex gap-2">
          <ItemField disabled={true} name="name" value="string" />
          <Button disabled type="button" variant="outline">
            <Minus className="w-4 h-4 fill-secondary" />
          </Button>
        </div>
        <div className="flex gap-2">
          <ItemField disabled={true} name="tags" value="text" />
          <Button disabled type="button" variant="outline">
            <Minus className="w-4 h-4 fill-secondary" />
          </Button>
        </div>

        {fields.map((e, i) => (
          <div key={i} className="flex gap-2">
            {e}
            <Button
              onClick={() => deleteField(i)}
              type="button"
              variant="outline"
            >
              <Minus className="w-4 h-4 fill-secondary" />
            </Button>
          </div>
        ))}
      </div>
      <Button
        onClick={addField}
        type="button"
        variant="outline"
        className="w-full mt-2"
      >
        <Plus className="w-4 h-4 fill-secondary" />
      </Button>
    </div>
  );
};

export default ItemSettings;
