import Head from "next/head";
import "../styles/globals.css";

const title = "Ethereum Claimable Helper";
const description =
  "Everipedia brings real-world information onto the blockchain with our innovative OraQle product. Try it on Ethereum today.";
// const previewImageSrc = `https://c48bdc683519.ngrok.io${electionMetaImageSrc}`;
// const previewImageSrc = `https://${process.env.NEXT_PUBLIC_FRONTEND_LOCATION_ORIGIN}${electionMetaImageSrc}`;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="og:title" key="og:title" content={title} />
        <meta name="twitter:title" key="twitter:title" content={title} />
        <meta name="description" key="description" content={description} />
        <meta
          name="og:description"
          key="og:description"
          content={description}
        />
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/flag-for-united-states_1f1fa-1f1f8.png"
        />
        <meta
          name="twitter:description"
          key="twitter:description"
          content={description}
        />
        {/* <meta name="twitter:image" key="twitter:image" content={previewImageSrc} /> */}
        {/* <meta name="twitter:card" key="twitter:card" content="summary_large_image" /> */}
        {/* <meta name="og:image" key="og:image" content={`https://everipedia.org${previewImageSrc}`} /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
