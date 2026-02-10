import ContactForm from "@/components/ui/contact-form";

import bg_faq from "../../../assets/images/faq-bg.png";
import React from "react";

export default function Contact({
  contact_form_one_liner,
  lp_type,
  lp_name,
  baseUrl,
  slug
}) {
  const inquiry = {
    section_title: "Inquiry Form",
    section_description:
      contact_form_one_liner,
    forms: {
      name: {
        label: "Name",
        placeholder: "Enter Your Name",
        err_msg: "You must enter your name",
      },
      email: {
        label: "Email Address",
        placeholder: "Enter Your Email Address",
        err_msg: "You must enter your email",
      },
      country: {
        label: "Country",
        placeholder: "Select a Country",
        no_country: "No Country Found",
        err_msg: "You must enter a country",
      },
      company: {
        label: "Company",
        placeholder: "Enter Company Name",
        err_msg: "You must enter your company name",
      },
      message: {
        label: "Message",
        placeholder: `Example:\nWe are a manufacturer of parts for semiconductor manufacturing equipment.\nThe defect rate in the welding process has remained high, and we are considering the automation of the process. We are still in the process of considering automation, but we would like to receive a quotation for the best method with a view to introducing an automated machine.`,
        err_msg: "You must enter the message",
      },
      agreement: {
        label: "I agree with the Privacy Policy.",
        err_msg: "You must agree with our terms and conditions",
      },
      lp_type: lp_type,
      lp_name: lp_name,
      submit: {
        label: "Submit",
        sending: "Sending Message...",
        inquiry_success: "Message is sent successfully",
        inquiry_failed:
          " Message is failed to send. Please contact us directly through <a href='mailto:support@jmso-m.com'>support@jmso-m.com</a>",
      },
      notice: "*Listed prices are as of January 2024, are subject to change depending on exchange rates.",
      privacy_policy: {
        title: "Privacy Policy",
        content: `
        <ol className="list-decimal">
                <li>
                  Basic Policy
                  <br />
                  Japan Manufacturing Support Organization (located at 3-6-6
                  Minamihonmachi, Chuo-ku, Osaka, Japan, Representative
                  Director: Kazuya Matsumura, hereinafter referred to as "we")
                  recognizes the importance of handling personal information,
                  complies with relevant laws, and protects your personal
                  information under a strict management system.
                </li>
                <li>
                  Definition of Personal Information
                  <br />
                  In this Privacy Policy, "personal information" refers to
                  information defined in Article 2, Paragraph 1 of the Japanese
                  Act on the Protection of Personal Information. Also, in this
                  Privacy Policy, "personal data" refers to information defined
                  in Article 16, Paragraph 3 of the Act on the Protection of
                  Personal Information.
                </li>
                <li>
                  Collection of Personal Information
                  <br />
                  When we request the provision of personal information, we will
                  clearly specify the purpose of use and the scope of third
                  parties to whom personal data will be provided and obtain your
                  consent. The provision of personal information is at your
                  discretion and we do not compel it. However, not providing
                  personal information may result in some services of ours not
                  being available for your use.
                </li>
                <li>
                  Use of Personal Information <br />
                  We will use the personal information obtained from you for the
                  following purposes:
                  <ol>
                    <li>
                      (1) To provide our services (hereinafter referred to as
                      "this service").
                    </li>
                    <li>
                      (2) To improve and enhance the content of this service or
                      develop new services.
                    </li>
                    <li>
                      (3) For notifications of new features of this service,
                      updates, campaigns, and other services (including sending
                      emails, flyers, and other direct mail).
                    </li>
                    <li>
                      (4) For necessary contact such as maintenance and
                      important notices.
                    </li>
                    <li>
                      (5) To respond to opinionscomments, inquiries, etc., from
                      users regarding this service (including identity
                      verification).
                    </li>
                    <li>
                      (6) To report the usage status of this service to users.
                    </li>
                    <li>
                      (7) To request cooperation in surveys, interviews, etc.,
                      related to this service, and to report the results,
                      confirm participation in various events, and more....
                    </li>
                    <li>
                      (8) To investigate and analyze the usage history of this
                      service and use the results for the improvement and
                      development of this service and for advertising delivery,
                      (including by email).
                    </li>
                    <li>
                      (9) To provide personal information to companies
                      participating in events organized or sponsored by us based
                      on user consent or application.
                    </li>
                    <li>
                      (10) To identify users who violate the terms and
                      conditions or who attempt to use this service for
                      fraudulent or unjust purposes, and to refuse the use of
                      this service.
                    </li>
                    <li>
                      (11) For the use and disclosure of statistical information
                      that cannot identify individuals.
                    </li>
                    <li>
                      (12) For other purposes for which you have individually
                      given consent.
                    </li>
                    <li>
                      (13) (Personal information of job applicants) For the
                      recruitment selection of employees.
                    </li>
                    <li>
                      (14) (Personal information of employees) For the
                      employment management of employees.
                    </li>
                  </ol>
                </li>
                <li>
                  Management of Personal Information
                  <br/>
                  We will appropriately and
                  carefully manage your personal information, and under a
                  necessary and appropriate level of security measures, we will
                  strive to prevent leakage, misuse, alteration, unauthorized
                  access, etc. of personal information.
                  <ol>
                    <li>
                      (1) Technical protective measures
                      <br />
                      We will implement measures to protect personal information
                      from unauthorized access from external sources, (such as
                      using SSL security, introducing antivirus software, etc.).
                    </li>
                    <li>
                      (2) Organizational protective measures
                      <br />
                      We conduct regular training for employees on the
                      management of personal information. We make employees
                      aware of matters related to confidentiality through
                      employment rules.
                    </li>
                  </ol>
                </li>
                <li>
                  Provision of Personal Information to Third Parties
                  <br />
                  We will not provide personal information to third parties
                  without obtaining your prior consent. However, this does not
                  apply if it is necessary and falls under any of the following:
                  <ol>
                    <li>
                      (1) When outsourcing the handling of all or part of
                      personal information within the scope necessary to achieve
                      the purpose of use to a business consignee with whom we
                      have concluded a contract, including a confidentiality
                      clause. In this case, we will establish certain criteria
                      for the selection of business consignees, conduct reviews,
                      and appropriately manage and supervise business
                      consignees.
                    </li>
                    <li>
                      (2) When it is necessary to cooperate with a national
                      institution in Japan, local public entity, or a person
                      entrusted by them in the performance of duties prescribed
                      by law, and obtaining the consent of the user may hinder
                      the performance of the duties.
                    </li>
                    <li>
                      (3) When providing information such as attribute
                      information and behavioral history. To provide services
                      and advertising content that are more suitable for
                      individuals, we may acquire and use or provide to third
                      parties non-personally identifiable information, such as
                      cookies, accessed URLs, and behavioral history. We will
                      confirm with the information recipient whether they have
                      obtained the user's consent for our provided information
                      to be acquired as personal data at the information
                      recipient's location or whether the information recipient
                      has provided the necessary information to the user.
                    </li>
                    <li>
                      (4) In other cases where the provision of personal
                      information is permitted by the Japanese Act on the
                      Protection of Personal Information or other laws.
                    </li>
                  </ol>
                </li>
                <li>
                  Records When Providing or Receiving Personal Information
                  <br />
                  When providing personal information to a third party
                  (excluding national institutions in Japan, local public
                  entities, independent administrative agencies, etc., referred
                  to similarly in this section) or receiving personal
                  information from a third party, we will create records as
                  required by the Personal Information Protection Act in Japan
                  and keep them for the period specified in the Personal
                  Information Protection Committee Regulations.
                </li>
                <li>
                  About SSL Security
                  <br />
                  On the pages of our website related to your personal
                  information, we use SSL to prevent third parties from reading,
                  tampering with, or intercepting your important information.
                  SSL (Secure Socket Layer) is a security feature that encrypts
                  data for secure communication. By encrypting with SSL, we can
                  protect your personal information from hackers and crackers,
                  allowing you to transmit information safely.
                </li>
                <li>
                  About Cookies
                  <br />
                  Cookies are small text files sent to your computer's hard
                  drive by websites for the purpose of holding records. Cookies
                  can record information about your preferences for a specific
                  site, making web use more beneficial. While your computer is
                  identified by cookies, it does not identify your personal
                  identity. Users can choose to use cookies. Most computer
                  browsers are set to accept cookies, but if you are
                  uncomfortable with information collection using such cookies,
                  you can set your browser to refuse to accept cookies. However,
                  please note that if you refuse cookies, some services and
                  features of our website may not work correctly.
                  <br />
                  Our website may use cookies in the following cases:
                  <br />
                  To provide customized services, cookies may be used to make it
                  convenient for users to use customized pages. This cookie is
                  set when users access customized pages or log in. It may be
                  used to count the number of users of our website.
                </li>
                <li>
                  Notes
                  <br />
                  Some social networking services (SNS) may automatically send
                  information about users, such as user IDs and accessed site
                  information, to SNS without pressing "buttons" on websites
                  that have SNS "buttons" installed when browsing. Please see
                  the "Notes to SNS users" (Personal Information Protection
                  Committee HP:
                  <a href="https://www.ppc.go.jp/en/" target="_blank">
                    https://www.ppc.go.jp/en/
                  </a>
                  ) for details. The privacy policies of the social media and
                  other services used on this site can be found on the
                  respective operator's site, etc.
                </li>
                <li>
                  Procedure for Disclosure of Personal Information
                  <br />
                  We accept requests from individuals for the disclosure of
                  personal information (including records of third-party
                  provision). When there is a request for disclosure from the
                  individual, we will disclose it promptly by providing a
                  written document or electronic record. However, we may not
                  disclose all or part of it if it falls under any of the
                  following items. In addition, if it is difficult to disclose
                  by the method specified by the individual, such as when the
                  disclosure method specified by the individual requires a large
                  amount of expenses, we will disclose it in writing:
                  <ol>
                    <li>
                      ①If there is a risk of harming the life, body, property,
                      or other rights and interests of the individual or a third
                      party
                    </li>
                    <li>
                      ②If there is a risk of significantly hindering the proper
                      implementation of our business
                    </li>
                    <li>
                      ③In other cases where disclosure would violate laws and
                      regulations
                    </li>
                    <li>
                      ④If disclosure is excluded from the obligation to disclose
                      by laws and regulations
                      <ol>
                        <li>
                          (1) Contact for requests for disclosure, etc.
                          <br />
                          Please send the necessary documents to the following
                          address.
                          <br />
                          Japan Manufacturing Support Organization Personal
                          Information Consultation Desk 3-6-6 Minamihonmachi,
                          Chuo-ku, Osaka 541-0054 TEL: 06-6281-1191
                        </li>
                        <br />
                        <li>
                          (2) Documents to be submitted One of the following ①,
                          ②, ③, and ④, ⑤
                          <ol>
                            <li>
                              ① Notification and disclosure request form for the
                              purpose of using personal information
                            </li>
                            <li>② Personal information correction invoice</li>
                            <li>
                              ③ Personal information use suspension invoice
                            </li>
                            <li>
                              ④ Documents for personal identification (driver's
                              license, passport, etc.)
                            </li>
                            <li>
                              ⑤ If the legal representative, in addition to ④,
                              documents confirming that the legal representative
                              has legal representation
                            </li>
                          </ol>
                        </li>
                        <li>
                          (3) Fee For requests for disclosure and requests for
                          notification of the purpose of use, a fee of JPY 1,000
                          will be charged for each request, so please understand
                          in advance.
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  Procedures for Correction of Personal Information, etc.
                  <br />
                  We accept requests from individuals for the correction,
                  addition, or deletion of personal information (the request
                  procedure and fees are in accordance with Article 11). In such
                  cases, we promptly investigate, and if it is found that the
                  content of the personal information is contrary to the facts
                  or that the handling is not appropriate, we promptly correct,
                  add, or delete it and notify the individual concerned.
                  Additionally, if we receive a request from the individual for
                  the suspension of use, deletion, or suspension of third-party
                  provision of personal information (hereinafter referred to as
                  "suspension of use, etc.,") and the request procedure and fees
                  are in accordance with Article 11, we promptly conduct the
                  necessary investigation. Based on the results, we promptly
                  suspend the use of personal information to the necessary
                  extent and notify the individual concerned. However, in cases
                  where suspension of use, etc., requires a significant amount
                  of expenses or is otherwise difficult to implement, and if
                  alternative measures that are necessary to protect the rights
                  and interests of the individual can be taken, we will take
                  such alternative measures.
                  <br />
                  Cases falling under the following items when personal
                  information is requested to be corrected, added, or deleted:
                  <ol className="list-decimal">
                    <li>
                      When it is handled beyond the scope of the purpose of use.
                    </li>
                    <li>When it is acquired by fraudulent means.</li>
                    <li>When illegal third-party provision is made.</li>
                    <li>When inappropriate use is made.</li>
                    <li>
                      When it is no longer necessary for us to use the personal
                      information.
                    </li>
                    <li>
                      When, due to legal requirements, a situation arises where
                      we are required to report to the Personal Information
                      Protection Commission due to the leakage of personal
                      information.
                    </li>
                    <li>
                      When there is a risk of harming the rights or legitimate
                      interests of the individual concerned in other cases.
                    </li>
                  </ol>
                </li>
                <li>
                  Inquiries and Complaints Regarding the Handling of Personal
                  Information
                  <br />
                  For inquiries or complaints regarding the handling of personal
                  information by our company, please contact the following
                  office:
                  <br />
                  <span className="font-semibold">
                    ＜Japan Manufacturing Support Organization Personal
                    Information Consultation Office＞
                    <br />
                    3-6-6 Minamihonmachi, Chuo-ku, Osaka, 541-0054, Japan
                    <br />
                    Japan Manufacturing Support Organization
                    <br />
                    Personal Information Disclosure Consultation Office
                    <br />
                    TEL: 06-6281-1191
                  </span>
                </li>
                <li>
                  Procedure for Changes to the Privacy Policy
                  <br />
                  We may change this policy as necessary. In the event of a
                  change, we will publicize the effective date and content of
                  the revised policy on our website and through other
                  appropriate means or notify customers.
                </li>
              </ol>
        `,
      },
    },
  };
  return (
    <section
      id="contact-us"
      className="bg-gradient-to-b from-white via-white to-jmso-light-blue/50 relative pb-8 md:pb-12 lg:pb-20"
    >
      <img
        src={bg_faq}
        alt="FAQ"
        className="absolute bottom-0 inset-x-0 rotate-180 select-none pointer-events-none"
      />
      <div className="container relative">
        <div className="flex flex-col items-center mb-6 lg:mb-12">
          <h2 className="jmso-subheading text-jmso-dark-blue leading-none text-center mb-4">
            {inquiry.section_title}
          </h2>
          <p className="text-base lg:text-xl text-gray-600 text-center max-w-3xl" dangerouslySetInnerHTML={{ __html: inquiry.section_description }} />
        </div>
        <div className="max-w-3xl mx-auto">
          <ContactForm
            baseUrl={baseUrl}
            slug={slug}
            fields={inquiry.forms}
            lang={"en"}
          />
        </div>
      </div>
    </section>
  );
}
