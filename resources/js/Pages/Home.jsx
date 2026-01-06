import Layout from '@/Layouts/DefaultLayout';
import Hero from '@/Components/Hero';
import MarketingCampaign from '@/Components/MarketingCampaign';
import { Head } from '@inertiajs/react';
import Features from '@/Components/Features';
import SixSteps from '@/Components/SixSteps';
import FAQSection from '@/Components/FAQSection';

export default function Home({ seo }) {
    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <meta property="og:image" content={seo.ogImage} />
            </Head>

            <Layout>
                <Hero />
                <MarketingCampaign />
                <Features />
                <SixSteps />
                <FAQSection />
                {/* Add other sections here like Features, Testimonials, FAQ */}
            </Layout>
        </>
    );
}