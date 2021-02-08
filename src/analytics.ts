import ReactGA from "react-ga";
export const initGA = () => {
  if (!(window as any).GA_INITIALIZED) {
    ReactGA.initialize(process.env.GA_TRACKING_ID);
    (window as any).GA_INITIALIZED = true;
  }
};
export const logPageView = () => {
  initGA();
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
export const logException = (description = "", fatal = false) => {
  initGA();
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
