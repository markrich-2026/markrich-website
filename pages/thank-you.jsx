import Head from "next/head";
import Link from "next/link";

const ThankYou = () => (
  <>
    <Head>
      <title>Thank You | Markrich Solutions</title>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
    <section className="min-h-[70vh] flex items-center justify-center px-12 py-20 lg:px-4">
      <div className="flex flex-col items-center gap-6 text-center max-w-[640px]">
        <h6 className="text-[#ED3630] font-medium">Message received</h6>
        <h1 className="text-6xl font-semibold tracking-tighter md:text-4xl">
          Thank <span className="text-[#F58A07]">you!</span>
        </h1>
        <p className="text-slate-500">
          Thanks for contacting Markrich Solutions. Our team will get back to
          you shortly.
        </p>
        <Link
          href="/"
          className="rounded-lg bg-[#F58A07] px-8 py-3 font-medium text-white"
        >
          Back to Home
        </Link>
      </div>
    </section>
  </>
);

export default ThankYou;
