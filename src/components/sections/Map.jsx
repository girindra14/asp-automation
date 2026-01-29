import map from "../../../assets/images/map.svg";

export default function Map({
    country_coverage_headline,
    country_coverage_description
}) {
    return (
        <section
            id="locations"
            className="pt-8 md:pt-12 lg:pt-20 bg-gradient-to-b from-jmso-light-blue to-white"
        >
            <div className="container flex flex-col items-center justify-center">
                <h2 className="jmso-heading text-jmso-dark-blue text-center mb-8 lg:mb-12" dangerouslySetInnerHTML={{ __html: country_coverage_headline }} />
                <p className="feature-description text-center text-gray-600 text-lg lg:text-2xl leading-tight max-w-[1080px]" dangerouslySetInnerHTML={{ __html: country_coverage_description }} />
                <div className="py-8 lg:py-16">
                    <img
                        src={map}
                        alt="Locations"
                        className="w-full h-auto object-contain"
                    />
                </div>
                <p className="text-center text-sm lg:text-base text-jmso-dark-blue-alt max-w-4xl">Australia • USA • UAE • Singapore • Thailand • Vietnam • Indonesia • Malaysia • Philippines • China • Hong Kong • Canada • Germany • India • Italy • Korea • Saudi Arabia • Taiwan</p>
            </div>
        </section>
    );
}
