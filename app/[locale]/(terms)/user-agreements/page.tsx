import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ReactElement } from "react";

import H1 from "@/components/typography/h1";
import H2 from "@/components/typography/h2";
import P from "@/components/typography/p";
import { Button } from "@/components/ui/button";

const Page = (): ReactElement => {
  return (
    <>
      <Button className="self-start mb-20" size="sm" variant="ghost" asChild>
        <Link href="/">
          <ChevronLeft size={16} className="mr-2" />
          Home
        </Link>
      </Button>
      <H1 className="mb-6">Terms of Service - User Agreement</H1>

      <div>
        <H2 className="my-6">1. Acceptance of Terms</H2>
        <P>Welcome to aitemu, an open-source collection management tool.</P>
        <P>
          By using aitemu, you agree to be bound by the terms and conditions set
          forth in this User Agreement.
        </P>
      </div>

      <div>
        <H2 className="my-6">2. User Responsibilities</H2>
        <P>
          2.1 You are solely responsible for the collections and items you
          create on aitemu.
        </P>
        <P>
          2.2 You agree not to use aitemu for any illegal or unauthorized
          purpose.
        </P>
        <P>
          2.3 You agree not to upload or share any content that violates
          intellectual property rights or contains offensive or harmful
          material.
        </P>
      </div>

      <div>
        <H2 className="my-6">3. Privacy</H2>
        <P>
          3.1 Your privacy is important to us. Please review our Privacy Policy
          to understand how we collect, use, and disclose your personal
          information.
        </P>
      </div>

      <div>
        <H2 className="my-6">4. Intellectual Property</H2>
        <P>
          4.1 You retain ownership of the collections and items you create on
          aitemu.
        </P>
        <P>
          4.2 By using aitemu, you grant us a non-exclusive, royalty-free
          license to display, reproduce, and distribute your content solely for
          the purpose of operating and improving the service.
        </P>
        <P>
          4.3 You agree not to infringe upon the intellectual property rights of
          others when using aitemu.
        </P>
      </div>

      <div>
        <H2 className="my-6">5. Limitation of Liability</H2>
        <P>
          5.1 We strive to provide a reliable service, but we do not guarantee
          that aitemu will be error-free or accessible at all times.
        </P>
        <P>
          5.2 We shall not be liable for any direct, indirect, incidental, or
          consequential damages resulting from your use of aitemu.
        </P>
      </div>

      <div>
        <H2 className="my-6">6. Termination</H2>
        <P>
          We reserve the right to terminate or suspend your access to aitemu at
          any time, with or without cause, and without prior notice.
        </P>
      </div>

      <div>
        <H2 className="my-6">7. Modifications</H2>
        <P>
          We may modify this User Agreement from time to time. Your continued
          use of aitemu after any changes indicates your acceptance of the
          modified terms.
        </P>
      </div>

      <div>
        <H2 className="my-6">8. Contact Information</H2>
        <P>
          If you have any questions or concerns regarding this User Agreement,
          please contact us at{" "}
          <Button asChild variant="link">
            <a href="mailto:saidafzal1209@gmail.com" target="_blank">
              saidafzal1209@gmail.com
            </a>
          </Button>
        </P>
      </div>
    </>
  );
};

export default Page;
