import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Analytics } from "@/lib/analytics";

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize analytics on mount
    Analytics.init();
  }, []);

  useEffect(() => {
    // Track page views on route change
    Analytics.trackPageView(location.pathname);
  }, [location.pathname]);

  return {
    trackEvent: Analytics.trackEvent,
  };
};
