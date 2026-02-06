'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToCalculator = () => {
        document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl float-animation" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '4s' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-in-down">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                    </span>
                    <span className="text-sm font-bold text-accent tracking-wide uppercase">Mobile Leak Detection: Active</span>
                </div>

                {/* Main Headline */}
                <h1 className="mb-6 animate-fade-in-up">
                    Stop Burning Your Ad Budget on a Landing Page That Was <span className="text-white">Built for 2015</span>
                </h1>

                {/* Sub-headline */}
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
                    80% of your traffic is mobile, but your conversion rate is trapped on desktop.
                    Most businesses are losing <span className="text-white font-bold underline decoration-accent/50">thousands in invisible revenue</span>
                    due to outdated architecture.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up [animation-delay:400ms]">
                    <button
                        onClick={scrollToCalculator}
                        className="btn-primary px-10 py-5 text-xl shimmer shadow-accent/20"
                    >
                        Detect My Revenue Leak →
                    </button>
                    <button
                        onClick={() => document.getElementById('pain-section')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn-secondary px-8 py-5 text-lg border-white/5 hover:border-white/20"
                    >
                        See Why This Happens
                    </button>
                </div>

                {/* Stats Bar */}
                <div
                    className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <div className="glass-card text-center">
                        <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">3x</div>
                        <div className="text-sm text-muted-foreground">Average Conversion Rate Increase</div>
                    </div>
                    <div className="glass-card text-center">
                        <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">&lt;3s</div>
                        <div className="text-sm text-muted-foreground">Average Time to Abandonment</div>
                    </div>
                    <div className="glass-card text-center">
                        <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">80%</div>
                        <div className="text-sm text-muted-foreground">Of Traffic is Mobile in 2026</div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <button
                        onClick={scrollToCalculator}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Scroll to calculator"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
