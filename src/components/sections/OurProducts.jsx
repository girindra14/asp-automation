import { useEffect, useState } from "react";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { FadeSlider } from "../ui/swiper";
import { X } from "lucide-react";
import IPC1 from "../../assets/images/our-products/ipc/ipc_1.png";
import IPC2 from "../../assets/images/our-products/ipc/ipc_2.png";
import IPC3 from "../../assets/images/our-products/ipc/ipc_3.png";
import IPCDatasheet from "../../assets/images/our-products/ipc/ipc-datasheet.pdf";
import UPS1 from "../../assets/images/our-products/ups/ups_1.png";
import UPS2 from "../../assets/images/our-products/ups/ups_2.png";
import UPS3 from "../../assets/images/our-products/ups/ups_3.png";
import UPSDatasheet from "../../assets/images/our-products/ups/ups-datasheet.pdf";
import CCTV1 from "../../assets/images/our-products/cctv/cctv_1.png";
import CCTV2 from "../../assets/images/our-products/cctv/cctv_2.png";
import CCTV3 from "../../assets/images/our-products/cctv/cctv_3.png";
import AICCTVDatasheet from "../../assets/images/our-products/cctv/ai-cctv-datasheet.pdf";
import FO1 from "../../assets/images/our-products/fo/fo_1.png";
import FODatasheet from "../../assets/images/our-products/fo/fo-datasheet.pdf";
import ISG1 from "../../assets/images/our-products/isg/isg_1.png";
import ISG2 from "../../assets/images/our-products/isg/isg_2.png";
import ISGDatasheet from "../../assets/images/our-products/isg/isg-datasheet.pdf";
import SCADA1 from "../../assets/images/our-products/scada/scada_1.png";
import SCADA2 from "../../assets/images/our-products/scada/scada_2.png";
import SCADA3 from "../../assets/images/our-products/scada/scada_3.png";
import SCADA4 from "../../assets/images/our-products/scada/scada_4.png";

export default function OurProducts({
    headline,
}) {
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const applyStylesToStrongChildren = () => {
            const descriptions = document.querySelectorAll('.service-description strong');

            descriptions.forEach(element => {
                element.style.color = '#002a69';
            });

            const explanations = document.querySelectorAll('.service-explanation strong');

            explanations.forEach(element => {
                element.style.color = '#0759d4';
            });
        };
        applyStylesToStrongChildren();
    });

    const products = [
        {
            title: "Industrial PC",
            imgs: [IPC1, IPC2, IPC3],
            description: "High-performance industrial computing solutions designed for demanding manufacturing and automation environments.",
            keySpecs: [
                "Industrial-Grade Processor & Long Lifecycle",
                "Rugged Design & Operating Conditions",
                "Flexible I/O & Expandability",
                "Reliability & Industrial OS Support"
            ],
            detailedSpecs: [
                {
                    model: "Advantech ACP-4320",
                    features: [
                        "Supports either an ATX motherboard or a PICMG backplane with up to 15 slots",
                        "Supports dual SATA hot-swap HDD trays",
                        "LED indicators and alarm notification for system fault detection",
                        "Low noise system fans",
                        "Built-in Intelligent System Module enabling whole system fan control and remote manageability"
                    ]
                },
                {
                    model: "Advantech PPC-6171C-RTAE",
                    features: [
                        "17\" true-flat PPC with Resistive touch",
                        "Supports certified mini-ITX motherboard up to 65W TDP processor",
                        "Support PCI or PCIe expansion slot",
                        "Front LED indicators for power status",
                        "Front panel is IP66 compliant"
                    ]
                },
                {
                    model: "Advantech UNO-247",
                    features: [
                        "Intel® Processor N97",
                        "Flexible iDoor expansion design with sufficient IO port",
                        "4 x GbE, 2 x USB3.2, 2 x USB2.0, 2 x RS232/422/485, 4 x RS485, 1 x HDMI, 1 x VGA, 2 x GPIO",
                        "Compact size with fanless design",
                        "Optional 4G/GPS/GPRS/Wi-Fi communication",
                        "Wide Operating temperature: -40 ~ 70°C"
                    ]
                },
                {
                    model: "Advantech IPC-510",
                    features: [
                        "Most cost-effective rackmount chassis",
                        "Supports PS/2 single power supply",
                        "Easy-to-install front-accessible drive bays hold 3 x 5.25\" and 2 x 3.5\" drives",
                        "Front-accessible USB and PS/2 interfaces"
                    ]
                },
                {
                    model: "Advantech MIC-7700H-00A2",
                    features: [
                        "Intel® 6th/7th Generation Core i Desktop CPU (LGA1151) with Q170/H110 chipset",
                        "2 x RS-232/422/485 and 4 x RS232 serial ports",
                        "1 x 2.5\" HDD, 1 x CFast, 1x mSATA and 1 mini-PCIe with SIM",
                        "Supports 2 LAN, Isolation COM, 32-bit GPIO modules",
                        "VGA and DVI output",
                        "9 ~ 36 V DC input power range",
                        "Wide operating temperature"
                    ]
                }
            ],
            link: IPCDatasheet
        },
        {
            title: "Uninterruptible Power Supply",
            imgs: [UPS1, UPS2, UPS3],
            description: "Reliable power protection systems ensuring continuous operation and equipment safety in critical industrial applications.",
            keySpecs: [
                "Isolation Transformer for Maximum Protection",
                "Dual Output Voltage Support",
                "High Reliability for Industrial Loads",
                "Clean & Stable Power Quality"
            ],
            detailedSpecs: [
                {
                    model: "Ablerex MS II SSAX",
                    features: [
                        "Simple Parallel Installation",
                        "Full-time Digital Signal Processor Control",
                        "Frequency Converter Operation Mode",
                        "Smart ECO Mode",
                        "LCD Mimic Panel",
                        "Power Range and Runtime Scalability",
                        "Maintenance Bypass Switch Embedded",
                        "Galvanic Isolation Transformer",
                        "Hot Swappable Battery",
                        "Compact Design"
                    ]
                },
                {
                    model: "Ablerex Kronos 40 40KVA / 40KW",
                    features: [
                        "Up to 95% efficiency in online mode",
                        "Built-in high current battery charger (up to 7A standard charger)",
                        "4 poles manual bypass and Breakers",
                        "Generator compatibility with configurable ramp up",
                        "Cold start function included",
                        "Logfile, UPS information downloadable on SD card",
                        "Up to 60 x 9Ah internal battery",
                        "Wide range of battery number per string (26 to 40 pcs)",
                        "Parallelable up to 6 units",
                        "Wide communication: two com slots, RS232, USB, programmable dry contacts"
                    ]
                },
                {
                    model: "ABB Powerscale 3-3",
                    features: [
                        "System power range: 10 kVA – 1000 kVA",
                        "UPS frame rated power: 10/9-15/13.5-20/18-25/22.8-30/27-40/36-50/45 kVA/kW",
                        "UPS output rated PF: 0,9",
                        "Max. parallel frames: Up to 20 units",
                        "Wiring: 3ph + N + PE",
                        "True online double conversion topology"
                    ]
                },
                {
                    model: "ABB ZTx SERIES",
                    features: [
                        "Online double conversion",
                        "Full DSP control",
                        "High power factor",
                        "Optimized battery management",
                        "N+X parallel redundancy",
                        "Wide input adaptability",
                        "Strong overload capability",
                        "LBS synchronization",
                        "Multi-protection",
                        "User-friendly network management"
                    ]
                }
            ],
            link: UPSDatasheet
        },
        {
            title: "AI-Powered CCTV",
            imgs: [CCTV1, CCTV2, CCTV3],
            description: "Advanced surveillance systems with AI analytics, thermal imaging, and intelligent monitoring for industrial security.",
            keySpecs: [
                "AI Video Analytics",
                "Thermal Imaging Capability",
                "High Accuracy & Early Warning",
                "Industrial-Grade Reliability & Integration"
            ],
            detailedSpecs: [
                {
                    model: "Vivotek IB9368HT Bullet Network Camera",
                    features: [
                        "WDR Pro for Unparalleled Visibility",
                        "Built-in IR Illuminators, effective up to 30 Meters",
                        "Weather-proof IP66 & Vandal-proof IK10 Housing",
                        "MicroSD/SDHC/SDXC Card for On-board Storage",
                        "Cyber Protection via Trend Micro IoT Security"
                    ]
                },
                {
                    model: "Vivotek IB9383-HTV Bullet AI Camera",
                    features: [
                        "WDR Pro for Unparalleled Visibility",
                        "Built-in IRs up to 30M with Smart IR III",
                        "AI-powered Smart Motion Detection and Smart VCA",
                        "Cyber Protection via Trend Micro IoT Security",
                        "Signed Firmware and Secure Boot"
                    ]
                },
                {
                    model: "Vivotek TB9333E Thermal Camera",
                    features: [
                        "Bi-spectrum Thermal with 256 x 192 thermal & 4MP",
                        "NETD < 50 mK @ F1.0",
                        "Video Analytics (Intrusion, Line Crossing)",
                        "Object Classification, Trigger by human/vehicle",
                        "Temperature Measurement & Alarms"
                    ]
                },
                {
                    model: "Vivotek IT9380-HV-V2 Turret AI Camera",
                    features: [
                        "Detect people & vehicles with Vision Object Analytics",
                        "Accurate alarm with Smart VCA",
                        "Built-in IRs up to 30M with Smart IR",
                        "Metal housing with IK10 certification",
                        "Cyber protection via Trend Micro IoT Security"
                    ]
                },
                {
                    model: "Vivotek IB9387-LPRV3 License Plate Recognition",
                    features: [
                        "Integrated with VAST2/VSS and 3rd parties",
                        "Various Open APIs Available for Integration",
                        "Supports Wiegand Protocol for Access Control",
                        "Weatherproof and Vandal proof Rated Housing",
                        "Integrated Wiegand Converter"
                    ]
                }
            ],
            link: AICCTVDatasheet
        },
        {
            title: "Fiber Optic",
            imgs: [FO1],
            description: "High-speed fiber optic infrastructure for reliable, long-distance industrial data transmission and networking.",
            keySpecs: [
                "High Bandwidth & Long-Distance Transmission",
                "Immunity to EMI & Electrical Noise",
                "Industrial-Grade Cable & Connector Design",
                "High Reliability & Network Stability"
            ],
            detailedSpecs: [
                {
                    model: "Netviel Fiber Optic Cable",
                    features: [
                        "Fiber Count up to 144",
                        "Strain free fibers in a stranded multi loose tube design",
                        "SZ stranding design allows for easy mid-span access",
                        "Most common and widely used design",
                        "Complies with international standards (ANSI, IEEE, Belcore/Telcordia, TIA/AIA, ISO/IEC)",
                        "Suitable for access and long distance applications"
                    ]
                },
                {
                    model: "Netviel SFP Optical Transceiver",
                    features: [
                        "850nm or 1310nm wavelength",
                        "1Gbps data rate operation",
                        "Compliant with SFP MSA and SFF-8472",
                        "500m transmission with 50/125μm MMF",
                        "275m transmission with 62.5/125μm MMF",
                        "Very low EMI and excellent ESD protection",
                        "+3.3V single power supply",
                        "RoHS compliant",
                        "Operating temperature: 0°C to +70°C"
                    ]
                },
                {
                    model: "Netviel NVL-OTB-WM-24/4-SM-SC-S",
                    features: [
                        "Rugged Case with High Security",
                        "Wall Mounted Style",
                        "Lock & key included",
                        "Accepts two Snap-in Adapter Plate",
                        "24 Ports Fiber Maximum Capacity (36 ports max for LC only)",
                        "Initial installation kit included"
                    ]
                },
                {
                    model: "Netviel NVL-MC-SM100-SC",
                    features: [
                        "Complies with IEEE 802.3 10 Base-T standard",
                        "Complies with IEEE 802.3u 10/100 Base-TX/FX standard",
                        "10/100 Mbps port with full/half duplex autonegotiation",
                        "Back pressure flow control for full/half duplex",
                        "Automatic identification of MDI/MDI-X crossline",
                        "High-performance 155Mbps memory bandwidth",
                        "Complies with FCC, 15 CLASS A, RoHS and CE MARK"
                    ]
                },
                {
                    model: "Yokogawa AQ1000 OTDR",
                    features: [
                        "Wavelengths: 1310 / 1550 nm",
                        "Dynamic ranges: 32 / 30 dB",
                        "Compact size: 185mm × 116mm × 56mm",
                        "Weight: 660g",
                        "Multi-touch touchscreen",
                        "One-button measurement",
                        "Long battery operation time",
                        "Quick boot-up"
                    ]
                },
                {
                    model: "Fujikura Fusion Splicer FSM41S",
                    features: [
                        "Warm Splice Imaging (WSI) loss estimation technology",
                        "Improved real-time arc control for fibers",
                        "Bluetooth enabled cleaver management",
                        "Two camera, active cladding alignment",
                        "5\" touchscreen monitor",
                        "Interchangeable sheath clamps and fiber holders",
                        "Fully ruggedized for shock, moisture and dust resistance",
                        "Extended-life electrodes, 5,000 splices"
                    ]
                }
            ],
            link: FODatasheet
        },
        {
            title: "Industrial Switch",
            imgs: [ISG1, ISG2],
            description: "Rugged network switches designed for harsh industrial environments with advanced management and redundancy features.",
            keySpecs: [
                "Rugged Industrial Design",
                "High Reliability & Redundancy",
                "Flexible Port & PoE Options",
                "Industrial Network Management & Security"
            ],
            detailedSpecs: [
                {
                    model: "Advantech EKI-7710G-2CPI-BE",
                    features: [
                        "8 x IEEE 802.3 af/at PoE Gigabit ports + 2 x Gigabit Copper/SFP combo ports",
                        "SFP socket for Easy and Flexible Fiber Expansion",
                        "Redundancy: Gigabit X-Ring Pro (recovery time < 20 ms), RSTP/STP",
                        "IXM function enables fast deployment",
                        "Security: 802.1x (Port-Based, MD5/TLS/TTLS/PEAP Encryption), RADIUS",
                        "Management: SNMP v1/v2c/v3, WEB, Telnet",
                        "-40 ~ 75°C wide-range operating temperature",
                        "Dual 24~48 V DC power input and 1 relay output"
                    ]
                },
                {
                    model: "Advantech EKI-5729PI-AE",
                    features: [
                        "Full Gigabit Ethernet ports and IEEE 802.3af/at PoE standard",
                        "Communicates with SCADA software via Modbus/TCP",
                        "Communicates with NMS via SNMP",
                        "Port-based QoS for deterministic data transmission",
                        "-40 to 65°C operating temperature range",
                        "IEEE 802.3az Energy Efficient Ethernet (EEE)",
                        "Provides 5/6 Fast Ethernet ports with 8 PoE ports",
                        "Redundant 12V~24V (9V ~ 36V) power input and P-Fail relay"
                    ]
                },
                {
                    model: "Advantech EKI-5525I-AE",
                    features: [
                        "Communicates with SCADA software via Modbus/TCP",
                        "Communicates with NMS via SNMP",
                        "Port-based QoS for deterministic data transmission",
                        "-40~75°C operating temperature range",
                        "8.4~52.8 V DC wide-range power input",
                        "EMS level 3 protection for extreme outdoor environments",
                        "IEEE 802.3az Energy Efficient Ethernet (EEE)",
                        "Redundant 12~48V DC power input and P-Fail relay",
                        "Loop detection"
                    ]
                },
                {
                    model: "Moxa EDS-205",
                    features: [
                        "10/100BaseT(X) (RJ45 connector)",
                        "IEEE802.3/802.3u/802.3x support",
                        "Broadcast storm protection",
                        "DIN-rail mounting ability",
                        "-10 to 60°C operating temperature range"
                    ]
                }
            ],
            link: ISGDatasheet
        },
        {
            title: "Intelligent Connectivity",
            imgs: [ISG1, ISG2],
            description: "Advanced connectivity solutions for seamless industrial device communication and network integration.",
            keySpecs: [
                "Serial to Ethernet Conversion",
                "Wireless & Wired Communication",
                "Protocol Conversion & Gateway",
                "Remote Management & Monitoring"
            ],
            detailedSpecs: [
                {
                    model: "Advantech EKI-1511",
                    features: [
                        "1 x 10/100 Mbps Ethernet port",
                        "COM port redirection (Virtual COM), TCP, and UDP operation modes",
                        "Baud rate: supports up to 230.4 Kbps",
                        "Maximum of five hosts can access one serial port",
                        "Maximum of 16 hosts in TCP client mode",
                        "Built-in 8-kV ESD protection for all serial signals",
                        "Multiple configuration methods: Windows utility and web browser",
                        "L models support RS-232 only"
                    ]
                },
                {
                    model: "Advantech EKI-1528I-DR-AE",
                    features: [
                        "2 x 10/100 Mbps Ethernet ports for LAN redundancy",
                        "COM port redirection (Virtual COM), TCP and UDP modes",
                        "Supports up to 921.6 kbps, and any baud rate setting",
                        "Max. of 5 hosts to access one serial port",
                        "Max. of 16 hosts as TCP client mode",
                        "Built-in 15 KV ESD protection for all serial signals",
                        "Rich configuration methods: Windows utility, Telnet, Web Browser",
                        "Automatic RS-485 data flow control",
                        "Line to line 4 KV, line to ground 8 KV surge protection"
                    ]
                },
                {
                    model: "Advantech EKI-1361",
                    features: [
                        "Link any serial device to IEEE 802.11 a/b/g/n network",
                        "Supports up to 921.6 kbps, and any baud rate setting",
                        "COM port redirection, TCP, UDP, and pair connection modes",
                        "Max. of 5 hosts to access one serial port",
                        "Support 802.11n MIMO 2T2R",
                        "WLAN transmission rate up to 300 Mbps",
                        "Secure access with WEP, WPA/WPA2-Personal, WPA/WPA2-Enterprise",
                        "Web-based configuration and Windows utility"
                    ]
                },
                {
                    model: "Advantech ECU-1051TL-R10AAE",
                    features: [
                        "TI Cortex A8 600MHz CPU with DDR3L 256MB RAM",
                        "Support web service for remote on-line monitoring",
                        "Firmware update by SD card and online update",
                        "Data logger on SD card",
                        "Dual SIM slots for communication redundancy",
                        "Support MQTT Client for cloud communication",
                        "Wide Operating temperature: -40 ~ 70°C"
                    ]
                },
                {
                    model: "Moxa MGATE MB3180",
                    features: [
                        "Auto Device Routing for easy configuration",
                        "Route by TCP port or IP address for flexible deployment",
                        "Converts between Modbus TCP and Modbus RTU/ASCII protocols",
                        "1 Ethernet port and 1, 2, or 4 RS-232/422/485 ports",
                        "16 simultaneous TCP masters with up to 32 requests per master",
                        "Easy hardware setup and configuration"
                    ]
                },
                {
                    model: "Moxa NPort 5150A",
                    features: [
                        "IEEE 802.3af-compliant PoE power device equipment",
                        "Speedy 3-step web-based configuration",
                        "Surge protection for serial, Ethernet, and power",
                        "COM port grouping and UDP multicast applications",
                        "Screw-type power connectors for secure installation",
                        "Real COM and TTY drivers for Windows, Linux, and macOS",
                        "Standard TCP/IP interface and versatile TCP and UDP modes"
                    ]
                }
            ],
            link: "#"
        },
        {
            title: "Supervisory Control and Data Acquisition",
            imgs: [SCADA1, SCADA2, SCADA3, SCADA4],
            description: "Comprehensive SCADA systems for real-time monitoring, control, and data acquisition in industrial operations.",
            keySpecs: [
                "Real-Time Monitoring & Control",
                "Reliable Communication Protocols",
                "High Availability & System Redundancy",
                "Scalability & Cybersecurity"
            ],
            link: "#"
        },
    ];

    return (
        <section
            id="our-products"
            className="bg-jmso-light-blue relative py-8 md:py-12 lg:py-20"
        >
            <div className="relative container flex flex-col items-center z-10">
                <h2 className="jmso-heading text-jmso-dark-blue text-center mb-8 lg:mb-12" dangerouslySetInnerHTML={{ __html: headline }} />
                <div className="w-full max-w-7xl">
                    {/* Custom grid layout: 4 cards in first row, 3 in second row */}
                    <div className="flex flex-col gap-6 lg:gap-8">
                        {/* First row - 4 cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {products.slice(0, 4).map((product, index) => (
                                <div
                                    key={product.title}
                                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                                >
                                    {/* Card Image */}
                                    <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
                                        {product.title === 'Supervisory Control and Data Acquisition'
                                            ? <FadeSlider imgs={product.imgs} imgZoomType="zoom-out" client:load />
                                            : <FadeSlider imgs={product.imgs} imgZoomType="zoom-in" client:load />
                                        }
                                        <div className="absolute inset-0 bg-gradient-to-t from-jmso-dark-blue/75 to-transparent"></div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex-grow">
                                            <h3 className="text-xl font-bold text-jmso-dark-blue mb-3">
                                                {product.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                                {product.description}
                                            </p>

                                            {/* Key Specs */}
                                            <div className="space-y-2">
                                                {product.keySpecs.map((spec, idx) => (
                                                    <div key={idx} className="flex items-start gap-2">
                                                        <CheckCircle
                                                            size={24}
                                                            weight="fill"
                                                            className="text-jmso-tosca mt-1 flex-shrink-0"
                                                        />
                                                        <span className="text-sm text-gray-700">{spec}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA Buttons */}
                                        <div className="mt-6 space-y-3">
                                            {/* Product Info Button - Commented out */}
                                            {/* <a
                                                href={product.title === 'Supervisory Control and Data Acquisition' ? 'https://wa.me/6282139940054' : product.link}
                                                className="block w-full bg-gradient-to-br from-jmso-tosca to-jmso-dark-blue text-white py-3 px-6 rounded-lg font-semibold hover:from-jmso-tosca hover:to-jmso-dark-blue transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-center"
                                            >
                                                {product.title === 'Supervisory Control and Data Acquisition' ? 'Consult Now' : 'Product Info'}
                                            </a> */}

                                            {/* Product Spec Button or Consult Now for SCADA */}
                                            {product.title === 'Supervisory Control and Data Acquisition' ? (
                                                <a
                                                    href="https://wa.me/6282139940054"
                                                    className="block w-full bg-gradient-to-br from-jmso-tosca to-jmso-dark-blue text-white py-3 px-6 rounded-lg font-semibold hover:from-jmso-tosca/90 hover:to-jmso-dark-blue/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-center"
                                                >
                                                    Consult Now
                                                </a>
                                            ) : (
                                                <button
                                                    onClick={() => setSelectedProduct(product)}
                                                    className="w-full bg-white text-jmso-tosca border-2 border-jmso-tosca py-3 px-6 rounded-lg font-semibold hover:bg-jmso-tosca hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                                                >
                                                    Product Spec
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Decorative Corner */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-jmso-dark-blue/10 to-transparent rounded-bl-full"></div>
                                </div>
                            ))}
                        </div>

                        {/* Second row - 3 cards (centered) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto w-full">
                            {products.slice(4, 7).map((product, index) => (
                                <div
                                    key={product.title}
                                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                                >
                                    {/* Card Image */}
                                    <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
                                        {product.title === 'Supervisory Control and Data Acquisition'
                                            ? <FadeSlider imgs={product.imgs} imgZoomType="zoom-out" client:load />
                                            : <FadeSlider imgs={product.imgs} imgZoomType="zoom-in" client:load />
                                        }
                                        <div className="absolute inset-0 bg-gradient-to-t from-jmso-dark-blue/75 to-transparent"></div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex-grow">
                                            <h3 className="text-xl font-bold text-jmso-dark-blue mb-3">
                                                {product.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                                {product.description}
                                            </p>

                                            {/* Key Specs */}
                                            <div className="space-y-2">
                                                {product.keySpecs.map((spec, idx) => (
                                                    <div key={idx} className="flex items-start gap-2">
                                                        <CheckCircle
                                                            size={24}
                                                            weight="fill"
                                                            className="text-jmso-tosca mt-1 flex-shrink-0"
                                                        />
                                                        <span className="text-sm text-gray-700">{spec}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA Buttons */}
                                        <div className="mt-6 space-y-3">
                                            {/* Product Info Button - Commented out */}
                                            {/* <a
                                                href={product.title === 'Supervisory Control and Data Acquisition' ? 'https://wa.me/6282139940054' : product.link}
                                                className="block w-full bg-gradient-to-br from-jmso-tosca to-jmso-dark-blue text-white py-3 px-6 rounded-lg font-semibold hover:from-jmso-tosca hover:to-jmso-dark-blue transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-center"
                                            >
                                                {product.title === 'Supervisory Control and Data Acquisition' ? 'Consult Now' : 'Product Info'}
                                            </a> */}

                                            {/* Product Spec Button or Consult Now for SCADA */}
                                            {product.title === 'Supervisory Control and Data Acquisition' ? (
                                                <a
                                                    href="https://wa.me/6282139940054"
                                                    className="block w-full bg-gradient-to-br from-jmso-tosca to-jmso-dark-blue text-white py-3 px-6 rounded-lg font-semibold hover:from-jmso-tosca/90 hover:to-jmso-dark-blue/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-center"
                                                >
                                                    Consult Now
                                                </a>
                                            ) : (
                                                <button
                                                    onClick={() => setSelectedProduct(product)}
                                                    className="w-full bg-white text-jmso-tosca border-2 border-jmso-tosca py-3 px-6 rounded-lg font-semibold hover:bg-jmso-tosca hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                                                >
                                                    Product Spec
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Decorative Corner */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-jmso-dark-blue/10 to-transparent rounded-bl-full"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal - Updated with 2-column layout */}
            {selectedProduct && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4 animate-fadeIn"
                    onClick={() => setSelectedProduct(null)}
                >
                    <div
                        className="bg-white rounded-t-3xl md:rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden animate-slideUp shadow-2xl flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header - Fixed */}
                        <div className="bg-gradient-to-br from-jmso-tosca to-jmso-dark-blue text-white p-6 rounded-t-3xl md:rounded-t-3xl flex-shrink-0">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">{selectedProduct.title}</h3>
                                    <p className="text-blue-100 text-sm">{selectedProduct.description}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors ml-4 flex-shrink-0"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Content - Scrollable */}
                        <div className="overflow-y-auto flex-1">
                            <div className="p-6 md:p-8">
                                {/* 2-Column Layout for each product variant */}
                                <div className="space-y-8">
                                    {selectedProduct.detailedSpecs?.map((spec, idx) => (
                                        <div 
                                            key={idx} 
                                            className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-jmso-tosca transition-all duration-300 shadow-sm hover:shadow-lg"
                                        >
                                            <div className="grid md:grid-cols-[300px,1fr] gap-0">
                                                {/* Left Column - Image and Model Name */}
                                                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex flex-col items-center justify-center border-r-2 border-gray-200">
                                                    <div className="w-full aspect-square bg-white rounded-xl shadow-md mb-4 flex items-center justify-center overflow-hidden">
                                                        <img 
                                                            src={selectedProduct.imgs[0]} 
                                                            alt={spec.model}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <h4 className="text-lg font-bold text-jmso-dark-blue text-center leading-tight">
                                                        {spec.model}
                                                    </h4>
                                                </div>

                                                {/* Right Column - Specifications */}
                                                <div className="p-6 bg-white">
                                                    <h5 className="text-sm font-bold text-jmso-dark-blue uppercase tracking-wider mb-4 flex items-center gap-2">
                                                        <div className="w-1 h-5 bg-jmso-tosca rounded-full"></div>
                                                        Specifications
                                                    </h5>
                                                    <div className="space-y-3">
                                                        {spec.features.map((feature, featureIdx) => (
                                                            <div key={featureIdx} className="flex items-start gap-3 group">
                                                                <CheckCircle
                                                                    size={20}
                                                                    weight="fill"
                                                                    className="text-jmso-tosca mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                                                                />
                                                                <span className="text-sm text-gray-700 leading-relaxed">
                                                                    {feature}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Contact Sales Button */}
                                <div className="mt-8 pt-6 border-t-2 border-gray-200">
                                    <a
                                        href="https://wa.me/6282139940054"
                                        className="block w-full md:w-auto md:mx-auto md:max-w-md bg-gradient-to-br from-green-500 to-green-600 text-white py-4 px-8 rounded-xl font-bold text-center hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                        </svg>
                                        Contact Sales
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideUp {
                    from { transform: translateY(100%); }
                    to { transform: translateY(0); }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }

                .animate-slideUp {
                    animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
            `}</style>
        </section>
    );
}