import bg_faq from "../../assets/images/faq-bg.png";
import FAQAccordion from "../ui/faq-accordion";
import React from "react";

export default function FAQ() {
    const faqs = [
        {
            q: "Do I need welding experience to use the automatic machine?",
            a: "No welding experience is required. We will carefully train even non-professional staff to be able to use the automatic machine.",
        },
        {
            q: "How much is the initial investment?",
            a: "The cost of a single-function machine starts at US$10,000, and the cost of a multi-function machine starts at US$50,000. The cost of the technical training is usually US$3,500- per month. <br/><span className='text-xs'>＊Transportation fee is required.</span>",
        },
        {
            q: "Is it possible to make a space-saving automatic machine?",
            a: "Yes. We can customize and design an automatic machine to seamlessly integrate into limited spaces.",
        },
        {
            q: "What is the difference between JMSO's automated machines and those of other companies?",
            a: "Since JMSO extracts and automates only the necessary processes, we create automatic machines without excesses or deficiencies. Our automatic machines  are also less prone to breakage, which reduces the cost of maintenance and upkeep.",
        },
        {
            q: "We are having trouble with the high cost of jigs on our existing automated machines. How can we save on costs?",
            a: "JMSO's jigs are designed to be unbreakable, minimizing the need for frequent equipment replacement and kept down the running costs. In addition, since all jigs are manufactured in-house, we can also provide training on the jig production method.",
        },
    ];
    return (
        <section
            id="faq"
            className="relative pt-8 md:pt-12 lg:pt-20 bg-jmso-light-blue"
        >
            <img
                src={bg_faq.src}
                alt="FAQ"
                className="absolute top-0 inset-x-0 select-none pointer-events-none"
            />
            <div className="relative">
                <div className="container">
                    <h2 className="jmso-heading text-jmso-dark-blue text-center mb-8 lg:mb-12">
                        FAQ
                    </h2>
                    <div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </div>
            </div>
        </section>
    );
}
