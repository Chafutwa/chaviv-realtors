import Hero from "@/components/home/Hero";
import FeaturedListings from "@/components/home/FeaturedListings";
import Neighborhoods from "@/components/home/Neighborhoods";
// import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";
import LeadPopup from "@/components/LeadPopup";

export default function Home() {
    return (
        <>
            <LeadPopup />

            <Hero />

            <FeaturedListings />

            <Neighborhoods />

            {/* <WhyChooseUs /> */}

            <CTASection />
        </>
    );
}