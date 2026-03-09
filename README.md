# Bright Smile - Teeth Whitening Brussels

Professional brochure website for a teeth whitening agency in Brussels, Belgium. Conversion-focused, SEO-optimized, and ready to deploy.

## Tech Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4**
- **Framer Motion** — scroll animations
- **Lucide React** — icons
- **Zod** — form validation
- **Resend** — production email (optional)
- **react-calendly** — booking embed

## Getting Started

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd bright-smile

# 2. Copy environment variables
cp .env.example .env.local

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open http://localhost:3000
```

## Configuration

### Editing Content

All business content is in `src/data/`:

| File | What to edit |
|------|-------------|
| `site.ts` | Brand name, phone, email, address, social links, opening hours |
| `services.ts` | Service descriptions, durations, prices, inclusions |
| `pricing.ts` | Pricing tiers, features, notes |
| `testimonials.ts` | Client testimonials |
| `faq.ts` | FAQ questions and answers |
| `before-after.ts` | Before/after gallery cases |
| `metadata.ts` | Per-page SEO titles and descriptions |
| `navigation.ts` | Navigation menu links |

### Placeholders to Replace

Search the codebase for these placeholders and replace with real values:

- `[BRAND_NAME]` — Your business name
- `[PHONE]` — Phone number
- `[EMAIL]` — Contact email
- `[ADDRESS]` — Physical address in Brussels
- `[WHATSAPP_LINK]` — WhatsApp click-to-chat URL
- `[CALENDLY_LINK]` — Calendly scheduling page URL
- `[OPENING_HOURS]` — Business hours
- `[INSTAGRAM]` — Instagram profile URL
- `[TIKTOK]` — TikTok profile URL

### Contact Form

The contact form has two modes:

- **Demo mode** (default): Submissions are logged to the server console. No configuration needed.
- **Production mode**: Set `RESEND_API_KEY` and `CONTACT_EMAIL` in `.env.local` to send real emails via [Resend](https://resend.com).

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=hello@yourbusiness.com
```

### Analytics

To enable tracking, add your IDs to `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=1234567890
```

Leave empty to disable (no tracking scripts will be loaded).

### Calendly Booking

Set your Calendly link in `.env.local`:

```env
NEXT_PUBLIC_CALENDLY_LINK=https://calendly.com/your-name/whitening
```

Without this, a placeholder message is shown instead of the booking widget.

## Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Deploy to Vercel (Recommended)

1. Push your repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Set environment variables in the Vercel dashboard
4. Deploy

### Deploy to Netlify

1. Push your repo to GitHub
2. Import at [app.netlify.com](https://app.netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Set environment variables in Netlify dashboard

## Project Structure

```
src/
├── app/           # Pages and API routes (Next.js App Router)
├── components/    # Reusable React components
│   ├── layout/    # Header, Footer
│   ├── ui/        # Button, SectionHeading, AnimateOnScroll
│   ├── home/      # Home page sections
│   ├── shared/    # CTABlock, WhatsAppButton, SchemaOrg
│   └── ...        # Page-specific components
├── data/          # Editable content (services, pricing, FAQ, etc.)
├── lib/           # Utilities (validation, email, rate limiting)
└── types/         # TypeScript type definitions
```

## Pages

| Path | Description |
|------|-------------|
| `/` | Home page with all key sections |
| `/services` | Detailed service descriptions |
| `/pricing` | Pricing table |
| `/before-after` | Before/after gallery |
| `/faq` | Full FAQ page |
| `/about` | About the business |
| `/contact` | Contact form + Calendly booking |
| `/legal` | Legal notice |
| `/privacy` | Privacy policy |
