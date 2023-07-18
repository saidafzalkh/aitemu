import H1 from "@/components/typography/h1";

interface Props {
  params: {
    id: string;
  };
}

const Page = ({ params }: Props) => {
  return <H1>{params.id}</H1>;
};

export default Page;
