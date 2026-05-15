export default function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        name: "Chaviv Realtors",
        description: "Premium real estate agency specializing in luxury homes, apartments, and investment properties in Nairobi's finest neighborhoods.",
        url: "https://chavivrealtors.co.ke",
        logo: "https://chavivrealtors.co.ke/logo.png",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Kilimani, Nairobi",
            addressLocality: "Nairobi",
            addressCountry: "KE"
        },
        telephone: "+254 718 493 239",
        email: "chavivrealtors@gmail.com",
        sameAs: [
            "https://facebook.com/chavivrealtors",
            "https://instagram.com/https://www.instagram.com/chavivrealtors?igsh=MWN0enJldno2dHNw&utm_source=qr",
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
    );
}