# My Useless Buddy (MUB) Social Platform
## Specification Sheet

**Version:** 0.1 (Initial Draft)  
**Date:** 2026-06-21  
**Status:** Draft for review and iteration  
**GitHub:** SpencerAmazon  
**Project location:** `/Users/spencelu/mub-social`  
**Brand site:** https://myuselessbuddy.com  
**Tagline alignment:** "Only Human. Under the Same Sun™"

---

## 1. Executive Summary & Vision

My Useless Buddy (MUB) is an early-stage lifestyle brand built around celebrating the funny, awkward, chaotic, relatable, and heartfelt moments that make us human.

The current website functions primarily as a **content collection funnel**:
- Users submit "MUB Moments" through Google Forms, email (myuselessbuddy@gmail.com), or DMs.
- The brand team reviews, edits, and selectively shares content on social channels and the site.
- Merch (apparel, beachwear) is planned but deliberately secondary to "building the story first."

**The goal of this project** is to create a dedicated social media platform that allows users to **directly post, discover, react to, and build community** around MUB Moments.

This platform becomes the living heart of the brand:
- User-generated content at scale fuels the main site, social channels, and future storytelling.
- The platform experience itself embodies the brand values.
- It transforms one-way submissions into two-way community.

**Core promise:** A place where people share (and find) the real, messy, funny, "only human" stuff that makes them say "I do that too", "that's my buddy", or "that is so MUB".

---

## 2. Brand Alignment & Guardrails (Non-Negotiable)

From site content (direct quotes/paraphrases):

- "MUB is a reminder that none of us are as polished as we pretend to be."
- "We all have weird habits, awkward saves, questionable choices, loyal friends, funny stories, and moments that prove we're only human."
- "MUB is about laughing at and being o.k. with just being human — not tearing people down."
- "Raw footage is fine. Imperfect is cool. Authentic is the point."
- "If it makes someone say 'I do that too!' 'that's my friend' or 'that is sooo human' it probably belongs here."
- Origin: Navy ship friendship between John Lunsford and Murray Schultz ("My Useless Buddy"). Dedicated to Murray.

**Brand principles the platform must protect:**
- Positive, connective humor (self-deprecating + appreciative of others)
- Empathy and "we're all in this together"
- Celebrate people ("That's My MUB"), never shame or bully
- Imperfection and authenticity over polish
- Universal human experience ("Under the Same Sun")

Any feature or moderation decision that risks violating these must be escalated.

---

## 3. Current State → Desired State

| Aspect              | Current (Website)                  | Desired (Social Platform)                     |
|---------------------|------------------------------------|-----------------------------------------------|
| Submission          | Google Forms + email + DMs        | Self-serve in-app posting                     |
| Moderation          | Manual review before any use      | Post-first with clear guidelines + reactive moderation |
| Discovery           | None (curated to brand channels)  | Public feeds, categories, search, profiles    |
| Interaction         | Limited (brand socials)           | Likes/reactions, comments, "That's My MUB" highlights |
| Community           | Passive submitters                | Follow, profile, repeat posters, "crews" later|
| Content ownership   | Brand-curated                     | User-owned posts with clear license           |
| Speed               | Slow (form → review → post)       | Instant gratification with safety nets        |

---

## 4. Target Users & Personas

**Primary (MVP focus)**
- **Relatable Sharer**: Loves posting small human truths and awkward moments. Wants quick posting + validation ("me too" energy).
- **Chaos Appreciator / Consumer**: Scrolls for laughs and relatability. Rarely posts but drives engagement.
- **"That's My MUB" Nominator**: Celebrates friends/family. Wants easy ways to tag or dedicate posts.

**Secondary**
- Brand team / curators (need strong admin tools)
- Future: Merch customers, seasonal (summer beach crowd)

---

## 5. Features

### 5.1 MVP Scope (Ship smallest valuable thing)

**Must have for launch:**
- Authentication (email + password, magic links; Google/Apple optional)
- User profiles (handle, bio, avatar, basic stats)
- Post creation
  - Text/caption (required)
  - Single photo or short video (or text-only)
  - Category selection (primary): Human Truths, Peak MUB Behavior, That's My MUB, MUB Reflections (+ Summer overlay when active)
  - Optional: tags, "this is about" (me / my buddy / general)
- Public feed (reverse chrono by default, with "hot" option later)
- Category browsing & filtering
- Basic search (caption + tags)
- Reactions (❤️ + "That's My MUB" special reaction)
- Comments (threaded or flat, 1-level replies MVP)
- Post detail pages with shareable URLs + good OG images
- Simple reporting flow
- Basic admin/moderation dashboard (hide, review queue, notes)
- Consent + guidelines UI at post time
- Mobile-first responsive web (PWA installable)
- Rate limiting + basic spam prevention

**Explicitly out of MVP:**
- Native iOS/Android apps (PWA first)
- Advanced recommendation algorithm
- Private groups or DMs
- Stories / ephemeral content
- Following feed (add in Phase 1)
- Rich media (carousels, long videos)
- Notifications (add early Phase 1)
- Payments / monetization
- Deep merch integration

### 5.2 Phase 1 (post-MVP, 4-8 weeks after launch)
- Following + personalized feed ("My Sun" or "Buddies feed")
- Notifications (replies, reactions, mentions)
- Post editing (limited window)
- Media carousels + video trimming hints
- User "crews" (lightweight friend groups)
- "Nominate a buddy" flow that creates or links a post
- Better discovery (trending per category, seasonal spotlights)
- Improved admin tooling + audit logs

### 5.3 Future (after product-market fit signals)
- Native apps
- Challenges / prompts (e.g. "Summer MUB Moments" weekly)
- API / embed widgets for main site
- Creator tools / verified badges
- Merch drop tie-ins
- "MUB of the week" or community highlights

---

## 6. User Stories (MVP)

1. As a visitor, I can sign up with email in <30 seconds so I can start sharing immediately.
2. As a new user, I see 3-5 example MUB Moments and category explanations during onboarding so I understand the vibe.
3. As a user, I can create a post with photo/video + caption + select the right MUB category so my moment is discoverable.
4. As a user, I can post text-only "Human Truths" quickly when I don't have media.
5. As a user, I can browse a global feed and filter by category so I find relatable content fast.
6. As a user, I can react with ❤️ or "That's My MUB" on a post so the poster knows their moment landed.
7. As a user, I can comment on a post (and reply) so conversations happen around the moments.
8. As a poster, I see reactions and comments on my posts in my profile.
9. As a user, I can report a post that feels off-brand so the team can review.
10. As a brand admin, I can view a moderation queue and hide/publish posts that violate guidelines.
11. As a user, I can view a public profile of another user and see their posts.
12. As a user, I can share any post via link or native share sheet so it spreads outside the platform.
13. As a user, I see clear "Only Human" consent language before posting media of other people.

---

## 7. Key User Flows (MVP)

### 7.1 First Post Flow
Visitor → Sign up (email) → Quick profile setup (handle, optional bio/avatar) → "Share a MUB Moment" CTA → Category picker with short examples → Media upload or text → Caption → Consent checkboxes → Preview → Publish (status = published or pending_review depending on risk signals).

### 7.2 Browsing & Engaging
Home/Feed → Tabs or sidebar: All | Human Truths | Peak MUB Behavior | That's My MUB | MUB Reflections | Summer  
Card view (image/video preview + caption snippet + reaction counts) → Tap → Full post + comments + reactions.

### 7.3 Reporting & Moderation
User clicks "..." → "Report" → Select reason (off-brand, hateful, no consent, spam, other) + optional note → Post hidden from public immediately + enters review queue.  
Admin: list of reported + recent posts → View full context → Action: keep / hide / delete + internal note.

---

## 8. Data Model (MVP)

### Core Tables (Supabase/Postgres style)

**users**
- id (uuid, pk)
- handle (text, unique, lowercase, 3-30 chars)
- email (text, unique)
- display_name (text, nullable)
- bio (text, nullable, max 280)
- avatar_url (text, nullable)
- created_at
- last_active_at
- role (user | moderator | admin)
- consent_accepted_at

**posts**
- id (uuid, pk)
- user_id (fk → users)
- caption (text)
- category (enum: human_truth, peak_mub, thats_my_mub, mub_reflection)
- tags (text[])
- media_urls (text[])   -- 0, 1, or small number
- media_types (text[])  -- 'image' | 'video'
- visibility (public | unlisted)  -- MVP mostly public
- status (published | hidden | deleted)
- moderated_at, moderated_by (nullable)
- created_at, updated_at
- reaction_counts (jsonb or separate table for speed)

**reactions**
- id
- post_id
- user_id
- type (heart | thats_my_mub | ...)
- created_at
- unique(post_id, user_id, type)

**comments**
- id
- post_id
- user_id
- parent_comment_id (nullable for replies MVP)
- body (text)
- created_at
- status (visible | hidden)

**reports**
- id
- post_id
- reporter_user_id
- reason (enum)
- note (text)
- status (open | reviewed)
- reviewed_by, reviewed_at
- created_at

**follows** (Phase 1+)
- follower_id, followed_id, created_at

Additional: user_sessions, rate_limits, admin_audit_log, etc.

**Storage buckets** (Supabase or S3):
- user-avatars
- post-media (raw + processed variants)

---

## 9. Recommended Architecture (MVP)

### Stack
- **Frontend + API**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS + a small set of fun, warm components (consider shadcn/ui + custom theme)
- **Database + Auth + Storage + Realtime**: Supabase (Postgres + Row Level Security + Auth + Storage)
- **Hosting**: Vercel (preview deploys + production)
- **Media delivery**: Supabase CDN or Cloudflare R2 + CDN for lower cost at scale
- **Video**: Direct upload + progressive playback (HLS optional later)
- **Image handling**: Supabase transforms or a lightweight service (ImageKit / Thumbor) for thumbnails + blur placeholders

### Why this stack?
- Fastest path from zero to working social MVP.
- Excellent auth + storage built-in.
- Great developer experience.
- Easy to add realtime comments.
- Low ops burden early.
- Easy to migrate pieces later if needed.

**Alternatives considered**
- Firebase (similar but different pricing/lock-in)
- Remix + Fly + Prisma + Postgres (more control, more work)
- tRPC + Prisma inside Next (good if you dislike REST)
- Separate backend (NestJS) + Next frontend (overkill for MVP)

### High-Level Components
```
┌─────────────────────┐
│   Next.js Frontend  │  (pages: feed, post, profile, submit, admin)
│   (PWA capable)     │
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│  Next API Routes    │  (or Server Actions)
│  + tRPC (optional)  │
└──────────┬──────────┘
           │
┌──────────▼──────────┐       ┌────────────────────┐
│     Supabase        │◄─────▶│   Storage (media)  │
│  (Postgres + Auth)  │       └────────────────────┘
└─────────────────────┘
           │
     Moderation queue (internal admin UI)
```

**Data flow (post creation)**
1. Client requests signed upload URL (or uses Supabase direct).
2. Media uploads directly to storage.
3. Client sends post metadata + media keys.
4. Server validates, creates DB row (status=published or pending).
5. Realtime or polling updates feed.

**Feed strategy (MVP)**
- Simple: `SELECT * FROM posts WHERE status='published' ORDER BY created_at DESC LIMIT 20` with cursor pagination.
- Category filter adds `WHERE category = ?`
- Add basic "hot" score (reactions + recency / log) in Phase 1.

---

## 10. Media Handling (Critical for UX)

**Constraints (MVP)**
- Images: JPEG/PNG/WebP, max 10 MB, recommend < 3000px
- Videos: MP4/MOV, max 60 seconds, max 50 MB
- One primary media item per post (Phase 1: small carousels)

**Upload UX**
- Drag & drop or camera capture
- Progress indicator
- Client-side compression hints (use browser APIs)
- Direct-to-storage (avoid proxying through server)

**Post-processing**
- Generate 1-2 thumbnail sizes + blur placeholder
- Extract first frame for video posters
- Basic orientation fix
- Virus/malware scan (via storage provider or post-processing lambda)

**Delivery**
- CDN URLs with cache headers
- Responsive `<img srcset>` or Supabase transform params
- Video: native `<video>` with controls, preload="metadata"

---

## 11. Moderation, Safety & Brand Guardrails (Most Important Section)

**Philosophy**: Post fast, but protect the vibe ruthlessly.

**In-product protections**
- At posting time:
  - "I confirm everyone in this media has given permission"
  - "I understand this follows MUB guidelines (link)"
  - Category guidance + "not sure?" tip
- Rate limits: 5 posts / hour per user initially, higher for trusted
- Keyword / pattern filters for obvious hate (flexible allow-list for humor)

**Post lifecycle**
- published (default for clean posts)
- hidden (reported or auto-flagged, not visible in feeds)
- deleted (user or admin)

**Report flow**
Reasons aligned with brand:
- Doesn't feel like a MUB Moment (off-vibe)
- Hateful, cruel, or bullying
- Someone in the post didn't consent
- Spam or repetitive
- Other

Reports immediately hide the post from public view (pending review).

**Admin tooling (MVP)**
- Simple internal page (protected route or separate app)
- List of recent + reported posts
- View full post + media + comments + reporter notes
- Actions: Approve / Hide / Delete + internal note
- Basic audit log (who did what)

**Longer term**
- Trusted user tier (lower friction)
- AI-assisted flagging (tone classifiers) — always with human review for edge cases
- Appeal process for users

**Legal / policy**
- Updated terms + privacy policy covering user-generated content
- Clear license grant (user retains ownership, grants MUB broad license to display, promote, use in merch storytelling — similar to current release language)
- Age gate (13+ or 16+ TBD)

---

## 12. Integration with myuselessbuddy.com

**MVP**: None required (platform can stand alone).

**Phase 1+ ideas**:
- Public "Featured Moments" API or RSS/JSON feed that the main site can consume.
- "Submit on MUB Social" buttons that deep-link with category pre-selected.
- Embeddable post cards for the blog or marketing pages.
- Shared user identity or SSO later.

Domain plan (to discuss):
- app.myuselessbuddy.com
- Or social.myuselessbuddy.com
- Or a clean separate domain if preferred

---

## 13. Non-Functional Requirements (MVP targets)

- **Performance**: Feed loads < 1.5s on 4G; post creation < 3s (media upload dominates).
- **Mobile**: Excellent experience on iOS/Android browsers; PWA installable.
- **Accessibility**: WCAG 2.1 AA basics (contrast, labels, keyboard, alt text for media where possible).
- **SEO**: Public posts have good title/description/OG images; category pages indexable.
- **Reliability**: Supabase + Vercel should be sufficient early.
- **Cost**: Target <$50-100/month at low volume (storage + bandwidth will be main variable).
- **Privacy**: Minimal data collection. Clear data deletion story.

---

## 14. Security & Privacy

- Supabase Row Level Security (RLS) — users can only modify their own posts/comments.
- No storing raw passwords (handled by Auth provider).
- Signed URLs for private media paths if needed.
- Input sanitization + output escaping.
- Regular dependency updates.
- Basic CORS and rate limiting.
- GDPR / CCPA friendly (export + delete account flows).

---

## 15. Analytics & Success Metrics (MVP)

**Leading indicators**
- Daily / weekly active users
- Posts per day
- % of posts with media vs text
- Category distribution
- Time to first post after signup

**Engagement**
- Reactions + comments per post (median)
- % of posts that get at least one reaction
- Return visit rate (D1, D7)

**Brand health**
- Reports per 1000 posts (target very low)
- % of posts that match "human truth / peak / celebration" tone (sampled)

**Infrastructure**
- Error rate, upload success rate, median feed load time

---

## 16. Risks, Assumptions & Open Questions

**Risks**
- Brand dilution if low-quality or mean content floods in.
- Low initial volume (chicken-egg for social).
- Moderation workload spikes.
- Storage / bandwidth costs if viral video moments appear.
- Legal exposure from user media (consent, IP).

**Mitigations**
- Strong onboarding + visible guidelines.
- Start with existing submitter audience from the site.
- Fast human review loop early.
- Clear rate limits + upload caps.
- Strong license language + consent prompts.

**Assumptions**
- The core audience exists and wants a dedicated place (to be validated).
- Positive, imperfect humor travels well on social.
- Owner is willing to start small and manual-moderate.

**Open Questions (to resolve together)**
- Username vs display name policy? Real names allowed?
- Default post visibility (public only for MVP?)
- How aggressively do we pre-moderate vs post-moderate?
- Do we allow anonymous viewing or require login to browse?
- Summer seasonal mode: auto-tag or separate "Summer" filter?
- Handle policy for offensive or squatted usernames?
- Content licensing terms (make them friendly but protective)?
- When to introduce following feed vs keep everything public?
- Any existing assets (logos, design system, color palette) we should use?

---

## 17. Roadmap Sketch (High Level)

**Week 0-1**: Finalize this spec + stack decisions + repo setup
**Week 1-3**: Core MVP build (auth, post creation, feed, comments/reactions, basic admin)
**Week 3-4**: Polish, mobile testing, moderation flow hardening, content guidelines copy
**Week 4+**: Soft launch to existing submitters + small group → gather feedback → iterate
**Post-launch**: Phase 1 features based on real usage data

---

## 18. Glossary

- **MUB Moment**: Any real, authentic, human moment (funny/awkward/chaotic/heartfelt/relatable) that fits one of the four categories.
- **Human Truth**: Painfully relatable thing we all secretly do.
- **Peak MUB Behavior**: Harmless chaos and questionable choices.
- **That's My MUB**: Celebrating the lovable chaotic people in your life.
- **MUB Reflection**: More thoughtful, honest, or meaningful moments.

---

## 19. References

- Scraped pages (2026-06-21):
  - https://myuselessbuddy.com
  - /pages/submit-your-mub-moments
  - /pages/human-truths
  - /pages/peak-mub-behavior
  - /pages/thats-my-mub
  - /pages/mub-reflections
  - /pages/summer-mub-moments
  - /blogs/what-is-mub/what-is-mub
  - /blogs/what-is-mub/how-mub-started-two-friends-one-joke-and-a-very-human-idea

All category definitions, examples, submission guidelines, and tone language are taken directly from the live site.

---

## 20. Next Steps (after this spec is reviewed)

1. User review + feedback on this document.
2. Decide on final MVP cut + stack.
3. (Explicit future approval required) Set up Git repo + initial project skeleton.
4. Start implementing thin vertical slices (e.g. auth + post creation first).

---

## 21. Verified Badge System (X-inspired, MUB-adapted)

### Overview
Inspired by X's (public) verification badge system for trust and reducing impersonation:
- Small, non-intrusive badge next to display name/handle in posts, profiles, suggestions, and search.
- Tiered for different levels of notability.
- Visible in feed, "Buddies to follow", etc.
- Tooltip on hover/click explaining the verification.

**MUB Flavor**: "Only Human" theme. Badges celebrate authentic chaos rather than polish. Icon: ☀️ (tied to "Under the Same Sun™").

### Tiers
- **Verified** (sky blue ☀️): Standard for users with notable, high-engagement MUB Moments (e.g. viral relatable truths).
- **Legend** (amber/gold ☀️): Top contributors with massive community impact ("Chaos Legends").
- **Official** (emerald ☀️): Platform accounts, partners, or brand-safe entities.

### Placement & Display (X-like structure)
- Post header: **Name ☀️ · @handle · time**
- Sidebar suggestions: Name ☀️ @handle + Follow button.
- Future: Profile pages, search results, notifications.
- Color-coded for quick scan.
- Non-blocking: Doesn't affect post layout.

### Verification Process (MUB-specific, community-first)
1. **Application**: User submits via "Get MUB Verified" form:
   - Link/describe notable moment(s).
   - Reason ("why you're a notable human").
   - Agree to guidelines.
2. **Criteria** (aligned with brand):
   - 10k+ total engagements (likes + mubs).
   - No violations (hate, non-consensual, off-vibe).
   - Community upvotes or manual review for authenticity.
3. **Review**: Manual + signals (like X's notability). "Sun Pass" subscription for priority review.
4. **Approval**: Badge granted instantly in prototype; real = pending queue + email.
5. **Revocation**: On violations or community reports.
6. **Benefits**: Higher visibility, "verified" feed filter, reduced impersonation flags.

**Anti-abuse**: Like X, manual oversight + reports. Ties into Moderation section.

### Implementation (Current Prototype)
- Client-side only (mock data + localStorage).
- Badges on verified seed posts (e.g. @fridgephantom as Legend) and suggestions.
- New posts from verified user show badge.
- "Apply Now" opens modal with form; submit "approves" and enables for future posts.
- Filter: "Verified" tab shows only verified moments.
- No backend yet (future: Supabase flag per user).

### Open Questions
- Exact criteria thresholds (engagement numbers)?
- Paid tier details vs pure community?
- Badge on anonymous posts?
- Integration with main site (myuselessbuddy.com) for cross-verified creators?

This extends the Moderation and User features for trust.

---

**End of v0.1 Spec**

This document is living. Update as we learn.

"Only Human. Under the Same Sun™"
