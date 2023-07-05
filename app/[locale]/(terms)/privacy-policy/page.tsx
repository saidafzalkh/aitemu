import { ReactElement } from "react";

import H1 from "@/components/typography/h1";
import H2 from "@/components/typography/h2";
import { LI, UL } from "@/components/typography/list";
import P from "@/components/typography/p";
import { Button } from "@/components/ui/button";

const Page = (): ReactElement => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <H1 className="my-6">Privacy Policy</H1>

        <P>
          Your privacy is important to us. It is our policy at Aitemu to respect
          your privacy regarding any information we may collect from you through
          our website, Aitemu.com, and other related sites and services.
        </P>
      </div>

      <div>
        <H2 className="my-6">Information We Collect</H2>

        <P>
          We only collect personal information that is relevant to the purpose
          of our website. This includes:
        </P>

        <UL>
          <LI>Basic user profile information (name, email address, etc.)</LI>
          <LI>Collection information provided by users</LI>
          <LI>Comments and feedback submitted by users</LI>
        </UL>
      </div>

      <div>
        <H2 className="my-6">How We Use Your Information</H2>

        <P>We use the information we collect in various ways, including:</P>

        <UL>
          <LI>To provide, operate, and maintain the Aitemu website</LI>
          <LI>To personalize your experience on our website</LI>
          <LI>To understand and analyze how you use our website</LI>
          <LI>To communicate with you and respond to your inquiries</LI>
          <LI>To develop and improve our website</LI>
        </UL>
      </div>

      <div>
        <H2 className="my-6">Sharing Your Information</H2>

        <P>
          We do not sell, rent, or lease your personal information to third
          parties. We may share generic aggregated demographic information not
          linked to any personal identification information regarding visitors
          and users with our business partners, trusted affiliates, and
          advertisers for the purposes outlined above.
        </P>
      </div>

      <div>
        <H2 className="my-6">Security</H2>

        <P>
          We are committed to ensuring that your information is secure. We
          follow industry-standard practices to protect the information
          collected from you, including the use of encryption and secure socket
          layer (SSL) technology.
        </P>
      </div>

      <div>
        <H2 className="my-6">Changes to This Privacy Policy</H2>

        <P>
          We reserve the right to update or change our privacy policy at any
          time. Any changes will be posted on this page with an updated date.
        </P>
      </div>

      <div>
        <H2 className="my-6">Contact Information</H2>

        <P>
          If you have any questions about this privacy policy, please contact us
          at{" "}
          <Button asChild variant="link">
            <a href="mailto:saidafzal1209@gmail.com" target="_blank">
              saidafzal1209@gmail.com
            </a>
          </Button>
        </P>
      </div>
    </div>
  );
};

export default Page;
