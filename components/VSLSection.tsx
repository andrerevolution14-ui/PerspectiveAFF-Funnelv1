'use client';

import { useState } from 'react';

export default function VSLSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    const affiliateLink = "https://try.perspective.co/g6bkxte2qkzh";

    return (
        <section id="vsl-section" className="py-24 px-4 bg-background relative overflow-hidden">
            <div className="max-w-5xl mx-auto text-center">
                {/* Social Proof Header */}
                <div className="mb-24">
                    <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center uppercase tracking-widest text-muted-foreground">
                        Real Results. <span className="text-white">Real People.</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl group hover:border-primary/50 transition-colors">
                            <img src="/testimonial-1.png" alt="Testimonial 1" className="w-full h-auto" />
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl group hover:border-primary/50 transition-colors">
                            <img src="/testimonial-2.png" alt="Testimonial 2" className="w-full h-auto" />
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl group hover:border-primary/50 transition-colors">
                            <img src="/testimonial-3.png" alt="Testimonial 3" className="w-full h-auto" />
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl group hover:border-primary/50 transition-colors">
                            <img src="/testimonial-4.png" alt="Testimonial 4" className="w-full h-auto" />
                        </div>
                    </div>
                </div>

                {/* VSL Header */}
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
                    <span className="text-sm font-medium text-primary">Limited Time Masterclass: The Multi-Million Dollar Agency Framework</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                    See How This Agency Website Made Over <span className="text-gradient font-black">$2.4M in Revenue</span>
                </h2>

                <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto italic">
                    "Watch until the very end. At the end of this video, anyone will be able to generate high-intent leads at an amazing price using this exact system."
                </p>

                {/* Video Container */}
                <div
                    className="relative aspect-video rounded-3xl overflow-hidden glass-card border-primary/20 shadow-[0_0_60px_rgba(168,85,247,0.2)] group cursor-pointer mb-12"
                    onClick={() => setIsPlaying(true)}
                >
                    {!isPlaying ? (
                        <>
                            <div className="absolute inset-0 bg-black/10 z-10 transition-colors group-hover:bg-black/0" />
                            <img
                                src="/vsl-thumb.png"
                                alt="Agency Revenue Case Study"
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-110 contrast-[1.05] saturate-[1.1]"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent border-4 border-white/30 backdrop-blur-sm">
                                    <svg className="w-10 h-10 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <div className="mt-8 px-8 py-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-2xl">
                                    <span className="text-white font-bold tracking-wide">CLICK TO WATCH CASE STUDY (34:12)</span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="absolute inset-0 bg-black flex items-center justify-center">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/4vVIyVZC9Ps?autoplay=1"
                                title="Case Study: $2.4M in Revenue"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    )}
                </div>

                {/* Exclusive CTA below VSL */}
                <div className="max-w-2xl mx-auto">
                    <a
                        href={affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full py-6 text-2xl shadow-accent/40 block mb-4 shimmer"
                    >
                        Get My Offer Only With This Link →
                    </a>
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        1 Month 100% Free + Bonus Templates Enabled
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto border-t border-muted pt-12 text-muted-foreground/80">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 text-xs">✓</div>
                        <span className="text-sm">Master the low-cost lead system</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 text-xs">✓</div>
                        <span className="text-sm">Scale from $0 to $100k+ monthly</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 text-xs">✓</div>
                        <span className="text-sm">Exclusive "High-Intent" Templates</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
