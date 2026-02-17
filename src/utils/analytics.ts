import ReactGA from 'react-ga4';

// Replace with your actual Measurement ID from Google Analytics
const MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Replace with your GA4 ID

/**
 * Initialize Google Analytics
 * Call this once when the app starts
 */
export const initGA = () => {
  // Only initialize in production
  if (import.meta.env.PROD) {
    ReactGA.initialize(MEASUREMENT_ID);
    console.log('GA initialized');
  } else {
    console.log('GA not initialized (dev mode)');
  }
};

/**
 * Track page views
 * Call this on route changes
 */
export const logPageView = (path: string, title: string) => {
  if (import.meta.env.PROD) {
    ReactGA.send({ 
      hitType: 'pageview', 
      page: path,
      title: title 
    });
  }
};

/**
 * Track custom events
 * Use for important user interactions
 */
export const logEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
) => {
  if (import.meta.env.PROD) {
    ReactGA.event({
      category,
      action,
      label,
      value
    });
  }
};

/**
 * Track project demo views
 */
export const trackProjectView = (projectTitle: string) => {
  logEvent('Project', 'View', projectTitle);
};

/**
 * Track external link clicks
 */
export const trackExternalLink = (url: string) => {
  logEvent('External Link', 'Click', url);
};

/**
 * Track contact form submissions
 */
export const trackContactSubmit = () => {
  logEvent('Contact', 'Submit', 'Contact Form');
};
