import React from "react";

export default function SupportSteps() {
    const steps = [
        {
            title: "Enquiry",
            description:
                "Please feel free to contact us if your issue is not clear.",
        },
        {
            title: "Share your company's challenges with us",
            description:
                "We will identify your concerns and help streamline your processes for enhancement.",
        },
        {
            title: "Sample creation and proposal of a plan",
            description:
                "After actual processing, we will identify the best plan, including automation. We develop a cost-effective plan with no excesses or deficiencies.",
        },
        {
            title: "Contact processing",
            description:
                "Once you are satisfied with our plan, please place an order.",
        },
        {
            title: "Production and delivery",
            description:
                "We customize and develop automatic machines in-house. (in case of automatic machine installation)",
        },
        {
            title: "Installation support and technical guidance",
            description:
                "After installation, skilled welders will visit your site and provide technical guidance.",
        },
    ];
    return (
        <section
            id="support-delivery-steps"
            className="relative py-8 md:py-12 lg:py-20"
        >
            <div className="container">
                <h2 className="jmso-heading text-jmso-dark-blue text-center mb-8 lg:mb-12">
                    Support & Deliver{" "}
                    <span className="text-jmso-tosca">Steps</span>
                </h2>
                <div>
                    <ol
                        role="list"
                        className="overflow-hidden relative max-w-screen-lg mx-auto"
                    >
                        <div
                            className="absolute top-4 left-4 w-1 h-[84%] md:h-[89%] bg-gradient-to-b from-jmso-tosca to-[#0759D4]"
                            aria-hidden="true"
                        ></div>
                        {steps.map((step, index) => (
                            <li
                                key={index}
                                className={`relative ${
                                    index === steps.length - 1
                                        ? "pb-0"
                                        : "pb-6 md:pb-12"
                                }`}
                            >
                                <div className="flex items-start">
                                    <span className="flex items-center">
                                        <span className="relative flex items-center justify-center w-9 h-9 font-heading font-bold text-lg md:text-2xl text-white bg-jmso-tosca border-2 border-white rounded-full drop-shadow">
                                            {index + 1}
                                        </span>
                                    </span>
                                    <div className="ml-4 lg:ml-8 space-y-1 text-base font-medium list-disc">
                                        <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold text-jmso-dark-blue">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm lg:text-xl">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
