'use client';

export default function PainEducation() {
    const painPoints = [
        {
            icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "The Attention Span Crisis",
            problem: "Your visitors leave in <3 seconds",
            explanation: "In 2026, mobile users have the attention span of a goldfish on espresso. They scroll, they judge, they bounce. Your traditional landing page with walls of text and slow load times? Dead on arrival.",
            stat: "73% of mobile users abandon sites that take longer than 3 seconds to load",
            solution: "Mobile-native funnels load instantly and engage users with interactive micro-steps that feel like a conversation, not a chore."
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.751-1-2.406l-.547-.547z" />
                </svg>
            ),
            title: "The AI Intelligence Gap",
            problem: "Static forms are 'dumb' and blind",
            explanation: "Your current website doesn't know WHO is visiting. AI-powered funnels analyze behavior in real-time, adapting the questions and content to the user's specific intent. If you're not using AI to qualify your leads, you're 2 years behind.",
            stat: "AI-optimized funnels see a 47% increase in qualified lead quality",
            solution: "Modern funnels use branching logic and AI-driven qualification to ensure you only talk to high-intent buyers."
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            title: "The Mobile Friction Trap",
            problem: "Desktop sites shrunk for mobile = Lead Killers",
            explanation: "You built your site on a 27-inch monitor. Your users are viewing it on a 6-inch screen while standing in line at Starbucks. Tiny buttons and forms that require a PhD to fill out? That's not a landing page—it's a graveyard.",
            stat: "87% of users will NEVER return to a site with a bad mobile experience",
            solution: "Native mobile architecture designed for thumbs, not cursors. It's not responsive—it's native."
        }
    ];

    return (
        <section id="pain-section" className="py-24 px-4 bg-muted/30" data-section="pain-education">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
                        <span className="text-sm font-medium text-accent">The Diagnosis</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Why Your Visitors are <span className="text-accent">Ghosting</span> You
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        In 2026, it's not enough to be "responsive." You are fighting for seconds in a world of
                        infinite distractions. If your page looks like a website, you've already lost.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {painPoints.map((point, index) => (
                        <div
                            key={index}
                            className="glass-card group hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            {/* Icon */}
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary p-4 mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                                {point.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold mb-3">{point.title}</h3>

                            {/* Problem Statement */}
                            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-4">
                                <p className="text-sm font-semibold text-accent">{point.problem}</p>
                            </div>

                            {/* Explanation */}
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {point.explanation}
                            </p>

                            {/* Stat */}
                            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6">
                                <p className="text-sm font-medium text-primary">
                                    📊 {point.stat}
                                </p>
                            </div>

                            {/* Solution */}
                            <div className="border-t border-muted pt-4 mb-6">
                                <p className="text-sm font-medium mb-2 text-secondary">The Modern Solution:</p>
                                <p className="text-sm text-muted-foreground">
                                    {point.solution}
                                </p>
                            </div>

                            <button
                                onClick={() => document.getElementById('vsl-section')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full py-3 rounded-xl bg-background border border-muted-foreground/20 text-xs font-bold uppercase tracking-wider hover:bg-muted transition-colors flex items-center justify-center gap-2"
                            >
                                How can I fix this?
                                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="inline-block glass-card max-w-2xl">
                        <p className="text-lg mb-6">
                            <span className="font-bold text-accent italic">Here is the real truth:</span> Every day you stick with
                            your current landing page, you're choosing to lose money. The calculator above isn't exaggerating—
                            it's the reality of modern mobile traffic.
                        </p>
                        <a
                            href="#vsl-section"
                            className="btn-primary inline-block px-12 py-4 text-xl"
                        >
                            Learn to fix this now →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
