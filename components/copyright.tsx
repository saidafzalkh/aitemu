import Link from "next/link";
import { ReactElement } from "react";

import Small from "./typography/small";
import { Button } from "./ui/button";

const Copyright = (): ReactElement => {
  return (
    <Small className="text-justify">
      <span className="font-bold mb-1 text-secondary-foreground block">
        Copyright (c) {new Date().getFullYear()}
      </span>
      Aitemu Permission is hereby granted, free of charge, to any person
      obtaining a copy of this software and associated documentation files (the
      &quot;Software&quot;), to deal in the Software without restriction,
      including without limitation the rights to use, copy, modify, merge,
      publish, distribute, sublicense, and/or sell copies of the Software. For
      more information about the application and its open-source license, please
      refer to the{" "}
      <Button variant="link" size="sm" className="!h-0 !p-0">
        <Link href="#">project repository.</Link>
      </Button>
    </Small>
  );
};

export default Copyright;
