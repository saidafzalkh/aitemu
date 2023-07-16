import { Lightbulb } from "lucide-react";
import { redirect } from "next/navigation";

import CollectionForm from "@/components/forms/create-collection/collection-form";
import H2 from "@/components/typography/h2";
import { LI, OL } from "@/components/typography/list";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getAuthSession } from "@/lib/auth";

const Page = async () => {
  const session = await getAuthSession();

  if (!session?.user) redirect("/sign-in");

  return (
    <div>
      <H2>Create New Collection</H2>

      <CollectionForm user={session.user} />

      <Alert className="mt-10">
        <Lightbulb className="h-5 w-5" />
        <AlertTitle>
          If you wondering how to field form, follow these steps:
        </AlertTitle>
        <AlertDescription>
          <OL>
            <LI>
              Name your collection: Choose a unique and descriptive name for
              your collection that reflects its theme or purpose.
            </LI>
            <LI>
              Describe your collection using the text editor: Write a brief
              description that provides an overview of what your collection is
              about. You can use the text editor options to format your text,
              add headings, lists, and other formatting elements to make it
              visually appealing.
            </LI>
            <LI>
              Choose a topic for your collection: Decide on the central theme or
              topic that your collection will revolve around. It could be
              anything from art, literature, sports memorabilia, vintage
              fashion, or natural history.
            </LI>
            <LI>
              Optional: Upload an image as the collection cover: You can upload
              one image that represents your collection. This image will be
              displayed prominently on the collection page or thumbnail view.
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
    </div>
  );
};

export default Page;
