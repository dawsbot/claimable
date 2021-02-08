import GHCorner from "react-github-corner";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

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
  min-width: 40%;
`;

const SubscribeButton = styled.button`
  font-weight: bold;
  font-size: 20px;
  padding: 16px 50px;
  background-color: lightpink;
  border-radius: 6px;
  border: 2px solid black;
  margin-top: 20px;
  cursor: pointer;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

const initialResponseData = null;
const initialErrorValue = "";
export default function Home() {
  useEffect(() => {
    logPageView();
  }, []);

  const { width, height } = useWindowSize();
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(initialErrorValue);
  const [responseData, setResponseData] = useState(initialResponseData);

  const handleAddressChange = useCallback(async (e) => {
    const { value } = e.target;
    setAddress(value);
    setError(initialErrorValue);
    setResponseData(initialResponseData);
    if (value.trim().length === 42) {
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
    <div className={styles.container}>
      <header className={styles.header}>
        Want to know when you have new money to claim? &nbsp;
        <a
          href="https://f0294d0e.sibforms.com/serve/MUIEALIgXjIm8XIXXOOoKbW5v87Rao_7T3FOViN4QRx5sD4OfrM0gBAXW8VSAX4WFJnUoCwN-1afQuZEKwxfRJzIp1PW0rxbEfU0hKJogE2YEmHqut6uoPJqSe-0NRfo35CVPzgSjX6H772gQtyuYYqo34nDsPIFpXOVuVacgIas-EmX-rwsxoSPTSXm6mU79GLqk8GoXS9vSl1j"
          style={{ color: "black", fontWeight: "bold" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign-up for free notifications!
        </a>
      </header>
      <GHCorner
        href="https://github.com/dawsbot/claimable"
        size={"calc(8vw + 30px)"}
        bannerColor="lightpink"
      />

      <main className={styles.main}>
        <h1 className={styles.title}>Claimable</h1>
        <p style={{ fontSize: "1.25rem", lineHeight: 1.6 }}>
          A place to see all the free things you can claim. <br />
          Like airdrops and POAPs.
        </p>
        <LabelInput>
          <Label>Ethereum Address:</Label>
          <Input
            value={address}
            placeholder="0x123... (ENS not yet supported)"
            onChange={handleAddressChange}
            disabled={loading}
          />
        </LabelInput>

        {loading && "loading..."}
        {error && <Error>{error}</Error>}
        {responseData && (
          <>
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
        Notice: <b>Some of these may have already been claimed</b>. This UI
        currently shows the initial snapshots.
      </footer>
    </div>
  );
}
