import visibilityDilemma from "../assets/images/visibility-dilemma.jpg";
import engagementGap from "../assets/images/engagement-gap.jpg";
import resultsInHibernation from "../assets/images/results-in-hibernation.jpg";
import testimoni1 from "../assets/images/testimoni1.png";
import testimoni2 from "../assets/images/testimoni2.png";
import testimoni3 from "../assets/images/testimoni3.png";
import testimoni4 from "../assets/images/testimoni4.png";
import testimoni5 from "../assets/images/testimoni5.png";
import testimoni6 from "../assets/images/testimoni6.png";

const testimonies = [
  {
    title: "Adit Firmansyah",
    star: "⭐⭐⭐⭐⭐",
    features: [
      "Pelayanan Bagus",
      "Harga Bagus",
      "Hasil Bagus",
      "Lancar Tanpa Masalah",
      "Anti Ribet, Tau Beres"
    ],
    icon: testimoni1,
    link: "https://www.google.com/maps/contrib/115817238128517098713/reviews?hl=en-GB"
  },
  {
    title: "Sayuti",
    star: "⭐⭐⭐⭐⭐",
    features: [
      "Berkah Selalu",
      "Alhamdulillah Lancar",
      "Proses Cepat",
      "Biarkan Bintang Yang Jadi Saksi🥰"
    ],
    icon: testimoni2,
    link: "https://www.google.com/maps/contrib/106242027134866729198/reviews?hl=en-GB"
  },
  {
    title: "Dini Puspita Sari",
    star: "⭐⭐⭐⭐⭐",
    features: [
      "Harga Murah",
      "Proses Cepat",
      "Terima Kasih, Lancar Selalu🥰"
    ],
    icon: testimoni3,
    link: "https://www.google.com/maps/contrib/118315404532748638068/reviews?hl=en-GB"
  },
  {
    title: "Nalita Alvis",
    star: "⭐⭐⭐⭐⭐",
    features: [
      "Terima Kasih Banyak untuk Berkah Jasa",
      "Sangat Amanah Sekali",
      "Biarkan Bintangku Jadi Saksi"
    ],
    icon: testimoni4,
    link: "https://www.google.com/maps/contrib/111184786605743360372/reviews?hl=en-GB"
  },
  {
    title: "Dwi Asmanto",
    star: "⭐⭐⭐⭐⭐",
    features: [
      "proses cepat",
      "Gak Pakai Ribet",
      "Lancar Terus Usahanya"
    ],
    icon: testimoni5,
    link: "https://www.google.com/maps/contrib/103939054530389189894/reviews?hl=en-GB"
  },
  {
    title: "Safari Umrah & Haji Travel",
    star: "⭐⭐⭐⭐⭐",
    features: [
      "Harga Murah",
      "Proses Cepat",
      "Sukses Selalu Berkah Jasa",
    ],
    icon: testimoni6,
    link: "https://www.google.com/maps/contrib/112674763053972811979/reviews?hl=en-GB"
  },
];

const priorities = [
  {
    title: "Pendirian CV",
    price: "Mulai dari Rp2.200.000",
    features: [
      "Proses Cek Nama CV",
      "Akte Notaris",
      "SK Kementerian Hukum & HAM",
      "File Pendaftaran NPWP Perusahaan",
      "Sertifikat Standar (KBLI risiko menengah rendah / menengah tinggi)",
      "NIB (Nomor Induk Berusaha)",
      "Akun OSS"
    ],
    img: visibilityDilemma,
    pricelist: [
      "CV wilayah Surabaya Rp2.200.000",
      "CV wilayah Sidoarjo Rp2.400.000",
      "CV wilayah Gresik Rp2.500.000",
      "CV wilayah Jawa Timur Lainnya Rp3.000.000",
      "CV wilayah Jabodetabek Rp3.500.000"
    ],
  },
  {
    title: "Pendirian PT",
    price: "Mulai dari Rp7.500.000",
    features: [
      "Proses Cek Nama PT",
      "Akte Notaris",
      "SK Kementerian Hukum & HAM",
      "File Pendaftaran NPWP Perusahaan",
      "Sertifikat Standar (KBLI risiko menengah rendah / menengah tinggi)",
      "NIB (Nomor Induk Berusaha)",
      "Akun OSS"
    ],
    img: engagementGap,
    pricelist: [
      "PT wilayah Surabaya Rp7.500.000",
      "PT wilayah Sidoarjo Rp7.500.000",
      "PT wilayah Gresik Rp7.500.000",
      "PT wilayah Jawa Timur Lainnya Rp8.000.000",
      "PT wilayah Jabodetabek Rp8.500.000"
    ],
  },
  {
    title: "Pembuatan NIB",
    price: "Mulai dari Rp1.000.000",
    features: [
      "Sertifikat Standar (KBLI risiko menengah rendah / menengah tinggi)",
      "NIB (Nomor Induk Berusaha)"
    ],
    img: resultsInHibernation,
    pricelist: [
      "NIB seluruh Indonesia Rp1.000.000",
    ],
  },
];

const faqs = [
  {
    question: "How can social media marketing benefit my business?",
    answer:
      "Social media marketing can significantly benefit your business by increasing brand awareness, engaging your target audience, driving website traffic, and generating leads. It also allows for direct interaction with your customers, fostering brand loyalty and providing valuable insights into consumer behavior.",
  },
  {
    question: "What sets your agency apart from others?",
    answer:
      "Our agency stands out through a combination of tailored strategies, data-driven decision-making, and a commitment to client collaboration. We prioritize understanding your unique business goals and offer personalized solutions that deliver measurable results.",
  },
  {
    question: "How do you measure the success of social media campaigns?",
    answer:
      "We employ a comprehensive approach to measure campaign success. This includes tracking key performance indicators (KPIs) such as engagement metrics, conversion rates, reach, and customer feedback. Our goal is to provide you with transparent and actionable insights into the effectiveness of your social media efforts.",
  },
  {
    question:
      "Can you give examples of your successful social media campaigns?",
    answer:
      "Certainly! We have a portfolio of successful campaigns across various industries. Check out our Case Studies to see how we've helped businesses like yours achieve their social media goals.",
  },
  {
    question: "Do you offer customized social media strategies?",
    answer:
      "Absolutely. Our team specializes in creating customized strategies tailored to your brand, industry, and target audience. We believe in the power of uniqueness, and our strategies reflect your specific goals and aspirations.",
  },
  {
    question: "How do you handle negative comments or reviews on social media?",
    answer:
      "We have a proactive approach to managing online reputation. Our social listening tools help us monitor brand mentions in real-time. In case of negative comments, we respond promptly with empathy and seek resolutions. We believe in turning challenges into opportunities for improvement.",
  },
  {
    question: "What social media platforms do you work with?",
    answer:
      "We work with a wide range of social media platforms, including but not limited to Facebook, Instagram, Twitter, LinkedIn, Pinterest, and TikTok. Our strategies are adaptable to the platforms most relevant to your target audience.",
  },
  {
    question:
      "How often will I receive reports on the performance of my social media campaigns?",
    answer:
      "We provide regular and detailed reports on the performance of your social media campaigns. The frequency of reporting can be customized based on your preferences, with options for weekly, bi-weekly, or monthly updates.",
  },
  {
    question:
      "Is there ongoing support if I have questions or need adjustments to my strategy?",
    answer:
      "Absolutely. We offer ongoing support to address any questions or concerns you may have. Our team is readily available to assist you and can make adjustments to your strategy as needed to ensure it aligns with your evolving business goals.",
  },
  {
    question:
      "Can I see a demo or get a consultation before deciding to work with your agency?",
    answer:
      "Certainly! We offer free consultations and personalized demos to showcase our approach, discuss your needs, and determine how we can best support your business. Contact us to schedule a consultation.",
  },
];

export { testimonies, priorities, faqs };
