import GHCorner from "react-github-corner";
import Confetti from "react-confetti";
import useResizeObserver from "use-resize-observer";

import styles from "../styles/Home.module.css";
import styled from "styled-components";
import React, { useCallback, useEffect, useState } from "react";
import { ClaimPretty } from "../src/components/ClaimPretty";
import { logPageView } from "../src/analytics";

const Label = styled.label`
  font-weight: bold;
  font-size: 1.1rem;
  text-align: left;
  line-height: 3;
`;
const Input = styled.input`
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 6px;
  border: 1px solid black;
  font-family: monospace;
  text-align: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Error = styled.p`
  color: red;
  font-weight: bold;
`;

const LabelInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 700px;
  margin-top: 10px;
`;

const SubscribeButton = styled.button`
  font-weight: bold;
  font-size: 20px;
  padding: 16px 50px;
  background-color: lightpink;
  border-radius: 6px;
  border: 2px solid black;
  margin-top: 30px;
  cursor: pointer;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

const initialResponseData = null;
const initialErrorValue = "";
const validTlds = [".eth", ".xyz", ".ceo", ".kred", ".art", ".luxe"]; // source: https://app.ens.domains/name/[root]/subdomains
const isValidEns = (value: String) =>
  Boolean(validTlds.find((tld) => value.endsWith(tld)));

// document.body.offsetHeight
export default function Home() {
  useEffect(() => {
    logPageView();
  }, []);

  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(initialErrorValue);
  const [responseData, setResponseData] = useState(initialResponseData);

  const handleAddressChange = useCallback(async (e) => {
    const value = e.target.value.trim();
    setAddress(value);
    setError(initialErrorValue);
    setResponseData(initialResponseData);
    if (isValidEns(value) || value.trim().length === 42) {
      setLoading(true);
      await fetch(`/api/claimable/${value}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            setError(
              "There are no claimable tokens nor POAPs for this address. Are you sure this is the address you want to check? ",
            );
            return;
          }
        })
        .then((res) => {
          // Confetti here
          setResponseData(res);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <div className={styles.container} ref={ref}>
      <header className={styles.header}>
        <a
          href="https://f0294d0e.sibforms.com/serve/MUIEALIgXjIm8XIXXOOoKbW5v87Rao_7T3FOViN4QRx5sD4OfrM0gBAXW8VSAX4WFJnUoCwN-1afQuZEKwxfRJzIp1PW0rxbEfU0hKJogE2YEmHqut6uoPJqSe-0NRfo35CVPzgSjX6H772gQtyuYYqo34nDsPIFpXOVuVacgIas-EmX-rwsxoSPTSXm6mU79GLqk8GoXS9vSl1j"
          style={{ color: "black", fontWeight: "bold", zIndex: 1 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Notify me of new airdrops!
        </a>
      </header>
      <GHCorner
        href="https://github.com/dawsbot/claimable"
        // size={"calc(8vw + 30px)"}
        size={"150px"}
        bannerColor="lightpink"
      />

      <main className={styles.main}>
        <h1 className={styles.title}>Claimable</h1>
        <p style={{ fontSize: "1.25rem", lineHeight: 1.6, margin: "10px" }}>
          A place to find free things you can claim.
          <br />
          Like airdrops and POAPs.
        </p>
        <LabelInput>
          <Label>Ethereum Address:</Label>
          <Input
            value={address}
            placeholder="0x123... or yourname.eth"
            onChange={handleAddressChange}
            disabled={loading}
          />
        </LabelInput>

        {loading && <div style={{ marginTop: "10px" }}>loading...</div>}
        {error && <Error>{error}</Error>}
        {responseData && (
          <>
            {/* <Confetti width={width} height={height} /> */}
            <Confetti width={width} height={height} />
            <ClaimPretty claimables={responseData} />
          </>
        )}
        <a
          href="https://f0294d0e.sibforms.com/serve/MUIEALIgXjIm8XIXXOOoKbW5v87Rao_7T3FOViN4QRx5sD4OfrM0gBAXW8VSAX4WFJnUoCwN-1afQuZEKwxfRJzIp1PW0rxbEfU0hKJogE2YEmHqut6uoPJqSe-0NRfo35CVPzgSjX6H772gQtyuYYqo34nDsPIFpXOVuVacgIas-EmX-rwsxoSPTSXm6mU79GLqk8GoXS9vSl1j"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SubscribeButton>Tell me about new airdrops</SubscribeButton>
        </a>
      </main>

      <footer className={styles.footer}>
        Say thanks by donating to{" "}
        <a
          href={
            "https://etherscan.io/address/0xc0deaf6bd3f0c6574a6a625ef2f22f62a5150eab"
          }
          style={{
            textDecoration: "underline",
            color: "black",
            fontWeight: "bold",
          }}
        >
          dawsbot.eth
        </a>
        Notice: Claimed items will still show
      </footer>
    </div>
  );
}
