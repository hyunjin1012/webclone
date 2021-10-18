import Head from 'next/head'
import Cta from "../components/cta";
import Faq from "../components/faq";
import Footer from "../components/footer";
import Pricing from "../components/pricing";
import SectionTitle from "../components/sectionTitle";
import Testimonials from "../components/testimonials";

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Pricing | embed.so</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Pricing />
      <SectionTitle title="What our lovely users said">
        We are loved by YC startups, eCommerce merchants, marketing agencies,
        even Fortune 500 companies, and many more.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
