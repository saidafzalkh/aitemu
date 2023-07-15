import { Lightbulb } from "lucide-react";
import { redirect } from "next/navigation";

import CollectionForm from "@/components/collection-form";
import H3 from "@/components/typography/h3";
import { LI, OL } from "@/components/typography/list";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getAuthSession } from "@/lib/auth";

const Page = async () => {
  const session = await getAuthSession();

  if (!session?.user) redirect("/sign-in");

  return (
    <div>
      <H3>Create New Collection</H3>

      <Alert className="mt-5">
        <Lightbulb className="h-5 w-5" />
        <AlertTitle>To create a collection, follow these steps:</AlertTitle>
        <AlertDescription>
          <OL>
            <LI>
              Name your collection: Choose a unique and descriptive name for
              your collection that reflects its theme or purpose.
            </LI>
            <LI>
              Describe your collection: Write a brief description that provides
              an overview of what your collection is about. Include key details
              such as the significance, historical context, or artistic value of
              the items in your collection.
            </LI>
            <LI>
              Choose a topic for your collection: Decide on the central theme or
              topic that your collection will revolve around. It could be
              anything from art, literature, sports memorabilia, vintage
              fashion, or natural history.
            </LI>
            <LI>
              Set up custom fields for your items table: Determine the specific
              information you want to capture for each item in your collection.
              Consider creating custom fields that are relevant to your chosen
              topic. For example, if your collection is about vintage fashion,
              you might include fields like designer, era, fabric, and
              condition.
            </LI>
          </OL>
        </AlertDescription>
      </Alert>

      <CollectionForm />
    </div>
  );
};

export default Page;
