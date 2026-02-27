import { Button } from "../ui/button";

export default function CTA({
    message,
    feature_quote,
    machine_quote,
    case_study_quote
}) {
    return (
        <section id="cta" className="container relative z-10">
            <a href="#contact-us">
                <div className="shadow-md">
                    <div className="rounded-xl relative overflow-hidden bg-jmso-dark-blue">
                        {/* <img
                            src={ctaBg.src}
                            alt="Contact Us"
                            className="absolute w-full h-full inset-0 select-none pointer-events-none object-cover"
                        /> */}
                        <div className="relative z-20 flex flex-col lg:flex-row gap-4 lg:gap-8 justify-between items-center p-6 md:p-8 lg:p-12">
                            <h2
                                className="text-xl md:text-3xl font-semibold text-white text-center lg:text-left"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        message === 1
                                            ? feature_quote
                                            : message === 2
                                                ? machine_quote
                                                : message === 3
                                                    ? case_study_quote
                                                    : '',
                                }}
                            />
                            <Button
                                variant="secondary"
                                className="duration-300 ease-out bg-jmso-tosca text-jmso-dark-blue border-2 border-white"
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </a>
        </section>
    );
}
