import case1 from "../../assets/images/case_studies/case1.webp";
import case2 from "../../assets/images/case_studies/case2.webp";
import case3 from "../../assets/images/case_studies/case3.webp";

import React from "react";

export default function CaseStudy() {
  const case_studies = [
      {
        name: "Improvement of TIG welding work",
        image: case1,
        type: "for industrial machinery",
        country: "Japan",
        company_size: "US$10.2 million in annual sales",
        issue_request: "Employees tasked with welding for mass production and single items face challenges as aging has diminished the capabilities of veteran welders. The company has been searching for new welders, but experienced candidates are hard to find. Even those available lack the required skills. As a result, projects assigned to other welders have not maintained the same volume and sales, impacting the company's productivity and revenue.",
        solution: "The automatic welding machine has eliminated the need to hire new welders, cutting recruitment expenses. The company's profit margin has improved since even employees with no welding experience can use the machine effectively.",
        product_cost: "US$34,000"
      },
      {
        name: "Improvement of TIG welding work",
        image: case2,
        type: "semiconductor industry",
        country: "Vietnam",
        company_size: "US$340 million in annual sales",
        issue_request: "Mass-produced products had a 10% defect rate due to manual welding. While repairs were possible, corrections with machine tools and re-welding made the process inefficient.",
        solution: "By adopting an automatic welding machine, the defect rate for mass-produced items decreased from 10% to 2%. The reduction in required correction work led to a significant boost in work efficiency.",
        product_cost: "US$68,000"
      },
      {
        name: "Improvement of Laser welding work",
        image: case3,
        type: "for microminiature parts related to fishing tackle",
        country: "Philippines",
        company_size: "US$68 million in annual sales",
        issue_request: "While their existing machine applied the method to set up 30 pieces side by side on the welding table and weld 30 pieces in a row, JMSO's automatic welding machine can weld one piece per about one second while rotating the machine, produce 40 pieces per 1 minute. The repetition of this process has increased production to 13,000 pieces per day.",
        solution: "Utilizing a specialized automatic welding machine priced at US $204,000, the company initially produced 2,000 microminiature fishing parts per day. However, the Covid-19 period saw a dramatic increase in fishing customers, leading to a significant surge in demand. Consequently, the company had to ramp up production to over 10,000 pieces daily to fulfill orders.",
        product_cost: "US$23,800"
      }
  ];
  return (
    <section id="case-study" className="relative py-8 md:py-12 lg:py-20">
      <div className="container">
        <h2 className="jmso-heading text-jmso-dark-blue text-center mb-8 md:mb-12 lg:mb-16">
          Case <span className="text-jmso-tosca">Study</span>
        </h2>
        <div className="flex flex-col gap-4 lg:gap-8 mt-8 lg:mt-16">
          {case_studies.map((item, index) => (
            <div className="relative rounded-xl overflow-hidden border border-[#1792EB] bg-jmso-light-blue/60">
              <div className="flex flex-col lg:flex-row gap-0 lg:gap-8">
                <div className="flex flex-col items-center w-full flex-auto lg:w-1/3">
                  <div className="flex gap-4 w-full items-center bg-gradient-to-br from-jmso-dark-blue-alt to-[#0069B7] from-20% to-80% py-3 lg:py-4 px-3 lg:px-6 lg:rounded-br-xl">
                    <p className="font-heading font-bold text-base lg:text-xl text-white leading-none">
                      Case
                      <br />
                      <span className="text-4xl lg:text-7xl">
                        0{index + 1}
                      </span>
                    </p>
                    <h3 className="text-xl lg:text-2xl text-white">
                      {item.name}
                    </h3>
                  </div>
                  <div className="pr-4 md:pr-0 lg:pr-0 pl-4 md:pl-0 lg:pl-8 py-4 md:py-6 lg:py-8">
                    <img
                      src={item.image.src}
                      alt={item.name}
                      className="w-max rounded-xl h-full object-cover "
                    />
                  </div>
                </div>
                <div className="pl-4 md:pl-6 lg:pl-0 pr-4 md:pr-6 lg:pr-8 py-4 md:py-6 lg:py-8 lg:w-2/3">
                  <h4 className="text-xl lg:text-2xl font-semibold text-jmso-dark-blue-alt">
                    <span className="text-jmso-dark-blue/80">
                      Type:
                    </span>{" "}
                    {item.type}
                    <br />
                    <span className="text-jmso-dark-blue/80">
                      Country:
                    </span>{" "}
                    {item.country} <br />
                    <span className="text-jmso-dark-blue/80">
                      Company size:
                    </span>{" "}
                    {item.company_size}
                  </h4>
                  <div className="mt-4 lg:mt-6">
                    <h5 className="text-white text-base px-3 py-1 bg-jmso-tosca font-semibold rounded w-max mb-2">
                      Issue/Request
                    </h5>
                    <p className="text-jmso-dark-blue text-base lg:text-lg leading-tight" dangerouslySetInnerHTML={{ __html: item.issue_request }} />
                  </div>
                  <div className="mt-4 lg:mt-6">
                    <h5 className="text-white text-base px-3 py-1 bg-jmso-tosca font-semibold rounded w-max mb-2">
                      Solution
                    </h5>
                    <p className="text-jmso-dark-blue text-base lg:text-lg leading-tight" dangerouslySetInnerHTML={{ __html: item.solution }} />
                  </div>
                  <div className="mt-4 lg:mt-6">
                    <h5 className="text-white text-base px-3 py-1 bg-jmso-tosca font-semibold rounded w-max mb-2">
                      Product Cost
                    </h5>
                    <p className="text-jmso-dark-blue text-base lg:text-lg leading-tight">
                      US${item.product_cost.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
