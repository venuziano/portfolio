import { useEffect } from "react";
import ReactGA from "react-ga4";

export interface IRecordGAReturnProperties {
  category: string
  action: string
}

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

export const useGA = () => {
  useEffect(() => {
    if (GA_TRACKING_ID) {
      ReactGA.initialize(GA_TRACKING_ID, {
        gaOptions: {
          cookieDomain: 'none',
          transport: 'xhr', // Send data via the API route instead of direct GA servers
        }
      });
    } else {
      console.warn("Google Analytics tracking ID is not set or running on the server.");
    }
  }, []);

  const logPageView = async (url: string): Promise<void> => {
    try {
      await fetch('/api/monitoring', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: "page_view",
          page: url,
        }),
      });
    } catch (error) {
      console.error('GA Pageview Error:', error);
    }
  };

  const recordGa = async (properties: IRecordGAReturnProperties): Promise<void> => {
    try {
      await fetch('/api/monitoring', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category: properties.category,
          action: properties.action,
        }),
      });
    } catch (error) {
      console.error('GA Event Error:', error);
    }
  };

  return { logPageView, recordGa };
};