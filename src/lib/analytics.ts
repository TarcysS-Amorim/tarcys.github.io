/**
 * Analytics service
 * Supports Google Analytics 4
 * To enable, add VITE_GA_MEASUREMENT_ID to your .env file
 */

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export class Analytics {
  private static initialized = false;

  static init(): void {
    if (!GA_MEASUREMENT_ID || this.initialized) {
      return;
    }

    // Load Google Analytics script
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_path: window.location.pathname,
      });
    `;
    document.head.appendChild(script2);

    this.initialized = true;
  }

  static trackEvent(eventName: string, eventParams?: Record<string, unknown>): void {
    if (!GA_MEASUREMENT_ID || typeof window === "undefined") {
      return;
    }

    if (window.gtag) {
      window.gtag("event", eventName, eventParams);
    }
  }

  static trackPageView(path: string): void {
    if (!GA_MEASUREMENT_ID || typeof window === "undefined") {
      return;
    }

    if (window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: path,
      });
    }
  }
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}
