import { CookieConsent } from "react-cookie-consent";
import { Button } from "@/components/ui/button";

interface CookieContent {
  title: string;
  description: string;
  button_label: string;
}

interface CookieProps {
  content: CookieContent;
}

export default function Cookie({ content }: CookieProps) {
  return (
    <div className="bg-white">
      <CookieConsent
        location="bottom"
        cookieName="consent"
        ButtonComponent={Button}
        buttonText={content.button_label}
        disableStyles
        contentClasses="flex flex-col"
        containerClasses="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 bg-white py-4 container"
        buttonClasses="min-w-max"
      >
        <h2 className="text-xl mb-1 font-semibold text-palm-800">
          {content.title}
        </h2>
        <p
          className="mb-2"
          dangerouslySetInnerHTML={{ __html: content.description }}
        ></p>
      </CookieConsent>
    </div>
  );
}
