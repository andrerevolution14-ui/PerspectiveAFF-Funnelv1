# Deployment Guide - Perspective Bridge

## Quick Deploy to Vercel (Recommended)

### Step 1: Push to GitHub

```bash
cd perspective-bridge
git init
git add .
git commit -m "Initial commit: Perspective Bridge funnel"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js
5. Click "Deploy"

**Done!** Your site will be live in ~2 minutes.

---

## Environment Variables (Optional)

If you want to add analytics, create a `.env.local` file:

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Facebook Pixel
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXX

# Custom Domain (if using)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Then add these to Vercel:
1. Go to Project Settings → Environment Variables
2. Add each variable
3. Redeploy

---

## Add Analytics Tracking

### Google Analytics 4

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `app/layout.tsx` in the `<head>`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

### Facebook Pixel

Add to `app/layout.tsx` in the `<head>`:

```tsx
<Script id="facebook-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
    fbq('track', 'PageView');
  `}
</Script>
```

---

## Custom Domain Setup

### On Vercel:

1. Go to Project Settings → Domains
2. Add your domain (e.g., `perspectivebridge.com`)
3. Follow DNS instructions from your registrar

### Recommended Domains:
- `perspectivebridge.com`
- `funnelleakcalculator.com`
- `mobilefunnelcheck.com`
- `adspendleak.com`

---

## Performance Optimization

### 1. Add OG Image

Create an Open Graph image (1200x630px) and save as `public/og-image.png`.

**Design Tips:**
- Show the calculator UI
- Include headline: "Calculate Your Revenue Leak"
- Add Perspective logo
- Use brand colors (purple, blue, pink)

### 2. Enable Vercel Analytics

```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 3. Add Speed Insights

```bash
npm install @vercel/speed-insights
```

Add to `app/layout.tsx`:

```tsx
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

---

## SEO Setup

### 1. Create `robots.txt`

Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

### 2. Create `sitemap.xml`

Create `app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://yourdomain.com/#calculator',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
```

### 3. Submit to Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership (Vercel makes this easy)
4. Submit sitemap

---

## Google Ads Setup

### 1. Create Conversion Actions

In Google Ads:
1. Go to Tools → Conversions
2. Create "Calculator Completion" conversion
3. Create "Trial Signup" conversion (if tracking)

### 2. Add Conversion Tracking

Install Google Tag Manager or add conversion code to `lib/analytics.ts`:

```typescript
// In calculatorCompleted function
if (typeof window !== 'undefined' && (window as any).gtag) {
  (window as any).gtag('event', 'conversion', {
    'send_to': 'AW-XXXXXXXXX/XXXXXX', // Your conversion ID
    'value': data.annualGap / 12,
    'currency': 'USD'
  });
}
```

### 3. Launch Campaigns

Use the campaign structure from `content/google-ads-campaigns.md`:
- Start with Campaign 1 (High-Intent Exact Match)
- Budget: $50/day
- Monitor for 7 days
- Optimize and scale

---

## Email Marketing Setup

### Option 1: ConvertKit

1. Create account at [convertkit.com](https://convertkit.com)
2. Create a form (or use API)
3. Add opt-in to calculator results page
4. Import email sequence from `content/email-sequence.md`

### Option 2: ActiveCampaign

1. Create account at [activecampaign.com](https://activecampaign.com)
2. Set up automation
3. Import email templates
4. Connect via API or Zapier

### Option 3: HighLevel

1. Create account at [gohighlevel.com](https://gohighlevel.com)
2. Build automation workflow
3. Use calculator data to personalize emails
4. Connect via webhook

---

## Content Publishing Schedule

### Week 1:
- **Day 1**: Deploy site, set up analytics
- **Day 2**: Launch Google Ads Campaign 1
- **Day 3**: Publish Blog Post 1 (Mobile-First Funnel Builder)
- **Day 4**: Set up email automation
- **Day 5**: Monitor and optimize

### Week 2:
- **Day 1**: Publish Blog Post 2 (Interactive Lead Generation)
- **Day 3**: Launch Google Ads Campaign 2
- **Day 5**: Publish Blog Post 3 (High-Ticket Quiz Funnels)

### Week 3:
- **Day 1**: Publish Blog Post 4 (No-Code Landing Pages)
- **Day 3**: Launch Display Remarketing
- **Day 5**: Publish Blog Post 5 (ClickFunnels Alternative)

### Week 4:
- **Day 1**: Produce VSL video
- **Day 3**: Add VSL to landing page
- **Day 5**: Scale winning campaigns

---

## Monitoring & Optimization

### Key Metrics to Track:

1. **Traffic Metrics:**
   - Organic traffic (Google Search Console)
   - Paid traffic (Google Ads)
   - Traffic sources (GA4)

2. **Engagement Metrics:**
   - Calculator completion rate (target: 60-80%)
   - Time on page (target: 2+ minutes)
   - Scroll depth (target: 75%+)

3. **Conversion Metrics:**
   - Calculator → Trial signup (target: 20-30%)
   - Email open rate (target: 35-45%)
   - Email click rate (target: 8-12%)
   - Trial → Paid (Perspective's data)

4. **Revenue Metrics:**
   - Cost per calculator completion
   - Cost per trial signup
   - Affiliate commission earned
   - ROAS (target: 3x+)

### Weekly Optimization Checklist:

- [ ] Review Google Ads performance
- [ ] Pause underperforming keywords
- [ ] Increase budget on winners
- [ ] A/B test ad copy
- [ ] Check blog post rankings
- [ ] Update email sequences based on data
- [ ] Review calculator inputs (are defaults accurate?)
- [ ] Check affiliate link clicks
- [ ] Monitor page load speed
- [ ] Read user feedback (if collecting)

---

## Troubleshooting

### Site Not Loading?
- Check Vercel deployment logs
- Verify build completed successfully
- Check for TypeScript errors

### Calculator Not Working?
- Open browser console (F12)
- Check for JavaScript errors
- Verify analytics.ts is imported correctly

### Affiliate Link Not Tracking?
- Add UTM parameters: `?utm_source=calculator&utm_medium=cta`
- Check Perspective dashboard for clicks
- Verify link is correct: `https://try.perspective.co/g6bkxte2qkzh`

### Low Conversion Rate?
- Test on real mobile devices
- Check page load speed (target < 2s)
- A/B test calculator defaults
- Simplify CTA copy
- Add social proof / testimonials

---

## Support Resources

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Google Ads Help**: [support.google.com/google-ads](https://support.google.com/google-ads)
- **Perspective Support**: Check their affiliate dashboard

---

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Add custom domain
3. ✅ Set up analytics
4. ✅ Launch Google Ads
5. ✅ Publish first blog post
6. ✅ Set up email automation
7. ✅ Monitor and optimize
8. ✅ Scale what works

**You're ready to launch!** 🚀
