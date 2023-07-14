import CollectionForm from "@/components/collection-form";
import H3 from "@/components/typography/h3";

const Page = () => {
  return (
    <div className="container">
      <H3>Create New Collection</H3>
      <CollectionForm />
    </div>
  );
};

export default Page;
