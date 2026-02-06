// Analytics tracking utilities
// Add your analytics platform here (Google Analytics, Facebook Pixel, etc.)

export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventName, eventData);
    }

    // Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', eventName, eventData);
    }

    // Console log for development
    if (process.env.NODE_ENV === 'development') {
        console.log('📊 Analytics Event:', eventName, eventData);
    }
};

// Predefined events for the funnel
export const analytics = {
    // Calculator events
    calculatorViewed: () => {
        trackEvent('calculator_viewed', {
            event_category: 'engagement',
            event_label: 'Calculator Section Viewed'
        });
    },

    calculatorCompleted: (data: {
        adSpend: number;
        currentCR: number;
        mobileTraffic: number;
        leadValue: number;
        annualGap: number;
    }) => {
        trackEvent('calculator_completed', {
            event_category: 'conversion',
            event_label: 'Calculator Completed',
            value: data.annualGap,
            ad_spend: data.adSpend,
            conversion_rate: data.currentCR,
            mobile_traffic: data.mobileTraffic,
            lead_value: data.leadValue
        });
    },

    // CTA clicks
    ctaClicked: (location: string, ctaText: string) => {
        trackEvent('cta_clicked', {
            event_category: 'conversion',
            event_label: `CTA Clicked: ${location}`,
            cta_text: ctaText,
            cta_location: location
        });
    },

    affiliateLinkClicked: (source: string) => {
        // Track as a high-value conversion for Google Ads / Meta
        trackEvent('conversion', {
            send_to: 'AW-17936797026',
            event_category: 'conversion',
            event_label: 'Perspective Affiliate Alpha',
            source: source,
            value: 250.00, // High weight value to train the algorithm for high-intent users
            currency: 'USD'
        });

        // Also track as a custom event for other platforms
        trackEvent('affiliate_link_clicked', {
            source: source,
            value: 250.00
        });
    },

    // Scroll depth
    scrollDepth: (percentage: number) => {
        trackEvent('scroll_depth', {
            event_category: 'engagement',
            event_label: `Scrolled ${percentage}%`,
            value: percentage
        });
    },

    // Section views
    sectionViewed: (sectionName: string) => {
        trackEvent('section_viewed', {
            event_category: 'engagement',
            event_label: `Section Viewed: ${sectionName}`,
            section: sectionName
        });
    },

    // Email opt-in (if you add one)
    emailOptIn: (email: string, source: string) => {
        trackEvent('email_opt_in', {
            event_category: 'conversion',
            event_label: 'Email Captured',
            source: source
        });
    }
};

// Scroll depth tracker
export const initScrollTracking = () => {
    if (typeof window === 'undefined') return;

    let maxScroll = 0;
    const milestones = [25, 50, 75, 100];
    const tracked = new Set<number>();

    const handleScroll = () => {
        const scrollPercentage = Math.round(
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );

        if (scrollPercentage > maxScroll) {
            maxScroll = scrollPercentage;

            milestones.forEach(milestone => {
                if (scrollPercentage >= milestone && !tracked.has(milestone)) {
                    tracked.add(milestone);
                    analytics.scrollDepth(milestone);
                }
            });
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
};

// Intersection Observer for section tracking
export const initSectionTracking = () => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionName = entry.target.getAttribute('data-section');
                    if (sectionName) {
                        analytics.sectionViewed(sectionName);
                    }
                }
            });
        },
        { threshold: 0.5 }
    );

    // Observe all sections with data-section attribute
    document.querySelectorAll('[data-section]').forEach(section => {
        observer.observe(section);
    });

    return () => {
        observer.disconnect();
    };
};
