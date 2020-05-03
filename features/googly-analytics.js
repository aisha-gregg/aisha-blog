export const GA_TRACKING_ID = "UA-165391650-1";

export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};
