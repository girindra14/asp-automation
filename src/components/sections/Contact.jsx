import { useState } from "react";
import {
    MapPin,
    Envelope,
    Phone,
    WhatsappLogo,
    PaperPlaneTilt,
} from "@phosphor-icons/react/dist/ssr";

export default function ContactWithFooter() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, company, message } = formData;
        const mailtoLink = `mailto:sales@asp-automation.com?subject=Contact from ${name} - ${company}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0ACompany: ${company}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        window.location.href = mailtoLink;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const companyInfo = {
        address: "Jl Tuban II No.26, Surabaya",
        email: "sales@asp-automation.com",
        phone: "(+62) 31-3535656",
        whatsapp: "(+62) 821-3994-0054",
        whatsappNumber: "6282139940054",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.3831358965845!2d112.73686707499758!3d-7.313652171832582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb7c2e21f3bf%3A0x3c8e6e9c3e8c8e8e!2sJl.%20Tuban%20II%20No.26%2C%20Surabaya!5e0!3m2!1sen!2sid!4v1234567890",
    };

    return (
        <>
            {/* Contact Section */}
            <section
                id="contact-us"
                className="relative py-8 md:py-12 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white"
            >
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Header */}
                    <div className="text-center mb-8 lg:mb-16">
                        <h2 className="jmso-heading text-jmso-dark-blue text-center mb-8 lg:mb-10">Get In Touch</h2>
                        <p className="text-jmso-dark-blue/80 text-lg max-w-2xl mx-auto">
                            Let us discuss your automation needs and how we can support your industrial projects.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-6 md:p-8 rounded-lg border border-jmso-dark-blue/10 shadow-sm">
                            <h3 className="text-2xl font-semibold text-jmso-dark-blue mb-6">
                                Consult With Us
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-jmso-dark-blue mb-2"
                                    >
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-jmso-dark-blue/20 rounded-md focus:outline-none focus:ring-2 focus:ring-jmso-tosca focus:border-transparent transition-all"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-jmso-dark-blue mb-2"
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-jmso-dark-blue/20 rounded-md focus:outline-none focus:ring-2 focus:ring-jmso-tosca focus:border-transparent transition-all"
                                        placeholder="your.email@company.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="company"
                                        className="block text-sm font-medium text-jmso-dark-blue mb-2"
                                    >
                                        Company Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        required
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-jmso-dark-blue/20 rounded-md focus:outline-none focus:ring-2 focus:ring-jmso-tosca focus:border-transparent transition-all"
                                        placeholder="Your company name"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-jmso-dark-blue mb-2"
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-jmso-dark-blue/20 rounded-md focus:outline-none focus:ring-2 focus:ring-jmso-tosca focus:border-transparent transition-all resize-none"
                                        placeholder="Tell us about your project or inquiry..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-jmso-tosca hover:bg-jmso-tosca/90 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center gap-2 group"
                                >
                                    <span>Send Message</span>
                                    <PaperPlaneTilt
                                        size={20}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </button>
                            </form>
                        </div>

                        {/* Google Maps */}
                        <div className="bg-white p-4 rounded-lg border border-jmso-dark-blue/10 shadow-sm overflow-hidden h-fit">
                            <h3 className="text-xl font-semibold text-jmso-dark-blue mb-4">
                                Our Location
                            </h3>
                            <div className="aspect-video rounded-md overflow-hidden">
                                <iframe
                                    src={companyInfo.mapEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                    title="ASP Automation Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer (Previously Contact Information) */}
            <footer className="bg-jmso-dark-blue py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Company Info Header */}
                    <div className="text-center mb-10 lg:mb-12">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                            ASP Automation
                        </h3>
                        <p className="text-white/70 text-base lg:text-lg">
                            Your Industrial Automation Partner
                        </p>
                    </div>

                    {/* Contact Information Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-10">
                        {/* Address */}
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-jmso-tosca/20 rounded-full mb-4 group-hover:bg-jmso-tosca/30 transition-all duration-300">
                                <MapPin size={28} className="text-jmso-tosca" />
                            </div>
                            <h4 className="font-semibold text-white mb-3 text-sm tracking-wider">
                                Address
                            </h4>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Jl Tuban II No.26<br />
                                Surabaya, Indonesia
                            </p>
                        </div>

                        {/* Email */}
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-jmso-tosca/20 rounded-full mb-4 group-hover:bg-jmso-tosca/30 transition-all duration-300">
                                <Envelope size={28} className="text-jmso-tosca" />
                            </div>
                            <h4 className="font-semibold text-white mb-3 text-sm tracking-wider">
                                Email
                            </h4>
                            <a
                                href={`mailto:${companyInfo.email}`}
                                className="text-white/70 hover:text-jmso-tosca transition-colors text-sm block break-words"
                            >
                                {companyInfo.email}
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-jmso-tosca/20 rounded-full mb-4 group-hover:bg-jmso-tosca/30 transition-all duration-300">
                                <Phone size={28} className="text-jmso-tosca" />
                            </div>
                            <h4 className="font-semibold text-white mb-3 text-sm tracking-wider">
                                Phone
                            </h4>
                            <a
                                href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, "")}`}
                                className="text-white/70 hover:text-jmso-tosca transition-colors text-sm block"
                            >
                                {companyInfo.phone}
                            </a>
                        </div>

                        {/* WhatsApp */}
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-green-500/20 rounded-full mb-4 group-hover:bg-green-500/30 transition-all duration-300">
                                <WhatsappLogo size={28} weight="fill" className="text-green-400" />
                            </div>
                            <h4 className="font-semibold text-white mb-3 text-sm tracking-wider">
                                WhatsApp
                            </h4>
                            <a
                                href={`https://wa.me/${companyInfo.whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-300 text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                <WhatsappLogo size={18} weight="fill" />
                                <span className="whitespace-nowrap">{companyInfo.whatsapp}</span>
                            </a>
                        </div>
                    </div>

                    {/* Divider Line */}
                    <div className="border-t border-white/10 my-8 lg:my-10"></div>

                    {/* Bottom Copyright Section */}
                    <div className="text-center space-y-2">
                        <p className="text-white/60 text-sm">© 2026 ASP Automation. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}