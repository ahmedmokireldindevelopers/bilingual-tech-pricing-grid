

## Plan: Create a Dataset Marketplace Page

### Overview
Create a new `/data` page inspired by the reference site (page.aldata.org) — a landing page for selling data packages. The page will have a professional design with placeholder sections ready for real data to be added later.

### Page Structure

1. **Hero Section** — Dark/gradient background with bold Arabic+English headline about data packages available for sale, with a CTA button (WhatsApp/contact)

2. **About the Package** — Brief description section explaining what data packages are offered

3. **Dataset Cards Grid** — Repeatable card components, each showing:
   - Category name (e.g., "Company Directory", "Marketing Companies", "Contractors")
   - Stats counters (number of records, emails, phone numbers) with animated counters
   - Preview screenshot placeholder
   - Action buttons: "Preview on Google Drive" + "Download Sample"
   - All with placeholder data that can be easily swapped later

4. **Pricing/CTA Section** — Package pricing with WhatsApp contact button

5. **Sticky Bottom Bar** — WhatsApp + Purchase buttons (like the reference site)

### Technical Approach

- **New file**: `src/pages/DataStore.tsx` — main page component
- **New file**: `src/components/data-store/DatasetCard.tsx` — reusable dataset card
- **New file**: `src/components/data-store/DataStoreHero.tsx` — hero section
- **New file**: `src/components/data-store/DataStoreCTA.tsx` — sticky CTA bar
- **Edit**: `src/App.tsx` — add route `/data`
- **Edit**: `src/components/Header.tsx` — add navigation link to the data store page

The page will:
- Use the existing `LanguageProvider` for bilingual support (AR/EN)
- Use existing UI components (Card, Badge, Button)
- Include placeholder dataset entries with sample stats
- Have a sticky WhatsApp/contact bar at the bottom
- Match the current site's color scheme and branding
- Be fully responsive

### Dataset Card Structure (data-driven, easy to update later)
```text
┌─────────────────────────────┐
│  📊 Category Icon + Title    │
│  Description text            │
├─────────────────────────────┤
│  [Count]  [Emails]  [Phones]│
│  Records   Emails   Contacts│
├─────────────────────────────┤
│  Screenshot placeholder      │
├─────────────────────────────┤
│  [Preview]  [Download Sample]│
└─────────────────────────────┘
```

All dataset entries will be defined in a simple array, making it trivial to add/edit/remove datasets later without touching component code.

