// utils/generateSchema.ts
import { faqs, testimonies } from "./data.ts";

export function getSchema() {
  return [
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Berkah Jasa",
        "url": "https://jasaberkah.id",
        "telephone": "6281249863105",
        "priceRange": "Rp 1.000.000 - Rp 7.500.000",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Revio Space Jln. Kaliwaron Nomor 58 Lantai 3 RT 1 RW 2 Kelurahan Mojo Kecamatan Gubeng, Surabaya, Jawa Timur 60285 – Indonesia",
            "addressLocality": "Surabaya",
            "postalCode": "60285",
            "addressCountry": "ID"
        },
        "image": "https://jasaberkah.id/favicon.webp",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": testimonies.length
        },
        "review": testimonies.map((t) => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": t.title
            },
            "reviewBody": Array.isArray(t.features) ? t.features.join(", ") : t.features,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": t.star,
                "bestRating": 5
            }
        }))
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((f) => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
            }
        }))
    }
  ];
}
