import Head from "next/head";
import "../styles/globals.css";

const title = "Claimable | Eth Tool";
const description =
  "Claimable helps Ethereum users find free money. We aggregate all known airdrops and POAP tokens on one page. Enter your public address and see if you have anything waiting to claim!";
const previewImageSrc = "https://claimable.vercel.app/images/screenshot-v0.jpg";

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
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/helicopter_1f681.png"
        />
        <meta
          name="twitter:description"
          key="twitter:description"
          content={description}
        />
        <meta
          name="twitter:image"
          key="twitter:image"
          content={previewImageSrc}
        />
        <meta
          name="twitter:card"
          key="twitter:card"
          content="summary_large_image"
        />
        <meta name="og:image" key="og:image" content={previewImageSrc} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
