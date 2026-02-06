'use client';

import { useState } from 'react';
import { analytics } from '@/lib/analytics';

export default function SolutionReveal() {
    const [activeTab, setActiveTab] = useState<'traditional' | 'interactive'>('traditional');
    const [copied, setCopied] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);

    const affiliateLink = "https://try.perspective.co/g6bkxte2qkzh";

    const handleAffiliateClick = () => {
        analytics.affiliateLinkClicked('solution_reveal');
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(affiliateLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleBookmark = () => {
        if (typeof window !== 'undefined') {
            const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
            const key = isMac ? 'Command + D' : 'Ctrl + D';
            alert(`To save this offer, please press ${key} on your keyboard.`);
            setBookmarked(true);
        }
    };

    const comparisonData = {
        traditional: {
            title: "Traditional Landing Page",
            loadTime: "5.2s",
            steps: "1 (Form Overload)",
            engagement: "12% scroll depth",
            mobile: "Desktop-first (shrunk)",
            friction: "High",
            conversionRate: "2.3%",
            features: [
                "❌ Slow load times (5+ seconds)",
                "❌ Wall of text nobody reads",
                "❌ 15-field contact form",
                "❌ Multiple navigation options (leaks)",
                "❌ Tiny buttons on mobile",
                "❌ Generic experience",
                "❌ No engagement tracking",
                "❌ Lead ghosting"
            ]
        },
        interactive: {
            title: "Interactive Mobile Funnel",
            loadTime: "0.8s",
            steps: "5-7 (Micro-commitments)",
            engagement: "87% completion rate",
            mobile: "Mobile-native",
            friction: "Zero",
            conversionRate: "7.1%",
            features: [
                "✅ Instant load (< 1 second)",
                "✅ AI-driven pathways",
                "✅ One simple question at a time",
                "✅ No distractions",
                "✅ Thumb-friendly design",
                "✅ Personalized logic",
                "✅ Real-time analytics",
                "✅ High-intent leads"
            ]
        }
    };

    const current = comparisonData[activeTab];

    return (
        <section id="solution-section" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background to-card/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6">
                        <span className="text-sm font-medium text-secondary">The Evolution</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        The Shift from <span className="text-muted-foreground">Pages</span> to <span className="text-gradient">Conversations</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        In 2026, visitors don't want to "browse." They want a guided path to a solution.
                        AI-powered funnels bridge the gap between curiosity and conversion.
                    </p>
                </div>

                {/* Comparison Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex glass-card p-2">
                        <button
                            onClick={() => setActiveTab('traditional')}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === 'traditional'
                                ? 'bg-muted text-white shadow-lg'
                                : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            The Old Way
                        </button>
                        <button
                            onClick={() => setActiveTab('interactive')}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === 'interactive'
                                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                                : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            The Future Way
                        </button>
                    </div>
                </div>

                {/* Comparison Content */}
                <div className="grid md:grid-cols-2 gap-8 mb-24">
                    {/* Stats Card */}
                    <div className="glass-card">
                        <h3 className="text-2xl font-bold mb-6 uppercase tracking-wider text-sm text-muted-foreground">{current.title}</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-4 rounded-lg bg-background/50">
                                <span className="text-muted-foreground text-sm">Load Time:</span>
                                <span className={`font-bold ${activeTab === 'interactive' ? 'text-primary' : 'text-accent'}`}>
                                    {current.loadTime}
                                </span>
                            </div>
                            <div className="flex justify-between items-center p-4 rounded-lg bg-background/50">
                                <span className="text-muted-foreground text-sm">User Engagement:</span>
                                <span className={`font-bold ${activeTab === 'interactive' ? 'text-primary' : 'text-accent'}`}>
                                    {current.engagement}
                                </span>
                            </div>
                            <div className="flex justify-between items-center p-4 rounded-lg bg-background/50">
                                <span className="text-muted-foreground text-sm">Friction Level:</span>
                                <span className={`font-bold ${activeTab === 'interactive' ? 'text-primary' : 'text-accent'}`}>
                                    {current.friction}
                                </span>
                            </div>
                            <div className="flex justify-between items-center p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30">
                                <span className="font-medium">Avg. Conversion Rate:</span>
                                <span className="text-2xl font-bold text-gradient">{current.conversionRate}</span>
                            </div>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="glass-card">
                        <h3 className="text-2xl font-bold mb-6 uppercase tracking-wider text-sm text-muted-foreground">Efficiency Breakdown</h3>
                        <ul className="space-y-3">
                            {current.features.map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors"
                                >
                                    <span className="text-lg flex-shrink-0">{feature.split(' ')[0]}</span>
                                    <span className="text-muted-foreground text-sm">{feature.substring(feature.indexOf(' ') + 1)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* The Final CTA */}
                <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
                    <div className="relative glass-card border-primary/50 bg-card/80 max-w-4xl mx-auto overflow-hidden p-12 text-center">
                        <div className="inline-block px-3 py-1 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-widest mb-6">
                            Exclusive Deal: 1 Month 100% FREE
                        </div>
                        <h3 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                            The "Done-For-You" <span className="text-gradient underline decoration-primary/30">Fast Pass</span>
                        </h3>
                        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                            This is the **only link** that grants you 1 Full Month FREE plus access to our exclusive
                            **Done-For-You Setups and Templates**. Skip the learning curve and start scaling today.
                        </p>

                        <div className="space-y-6 max-w-lg mx-auto">
                            <ul className="space-y-4 mb-8 text-left">
                                <li className="flex items-center gap-3 text-lg text-white">
                                    <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 flex-shrink-0">✓</span>
                                    1 Month 100% Free Subscription
                                </li>
                                <li className="flex items-center gap-3 text-lg text-white">
                                    <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 flex-shrink-0">✓</span>
                                    Copy-Paste "High-Lead" Templates
                                </li>
                                <li className="flex items-center gap-3 text-lg text-white">
                                    <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 flex-shrink-0">✓</span>
                                    AI Logic Pre-Configured
                                </li>
                            </ul>

                            <a
                                href={affiliateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleAffiliateClick}
                                className="btn-primary w-full py-6 text-2xl shimmer flex items-center justify-center gap-2 shadow-accent/40"
                            >
                                Claim My 1-Month Free & Bonus →
                            </a>

                            <div className="flex gap-4">
                                <button
                                    onClick={copyToClipboard}
                                    className="flex-1 px-4 py-4 rounded-xl bg-muted border border-muted-foreground/20 text-sm font-medium hover:bg-muted/80 transition-colors flex items-center justify-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                    </svg>
                                    {copied ? 'Link Copied!' : 'Copy Link for Later'}
                                </button>
                                <button
                                    onClick={handleBookmark}
                                    className="px-6 py-4 rounded-xl bg-muted border border-muted-foreground/20 text-sm font-medium hover:bg-muted/80 transition-colors flex items-center justify-center gap-2"
                                    title="Bookmark this page"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                                    </svg>
                                </button>
                            </div>

                            <p className="text-xs text-muted-foreground">
                                Offer only valid via the Perspective Bridge link. <br />
                                100% Secure • Cancel Anytime • No Hidden Fees
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
