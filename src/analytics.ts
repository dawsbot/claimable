import ReactGA from "react-ga";
export const initGA = () => {
  console.log("initGA with id ", process.env.GA_TRACKING_ID);
  ReactGA.initialize(process.env.GA_TRACKING_ID);
};
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
export const logSuccess = (address: string) => {
  ReactGA.event({
    category: "eth-address",
    action: "submission",
    label: address,
  });
};
export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
