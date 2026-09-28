# Swift Digitals

Approved navy/lavender redesign, built as a server-rendered multi-page website.

## Pages
Home, Services, Website Design, NDIS & Allied Health, E-commerce, SEO & Digital Marketing, AI Automation, Design Concepts, Packages, About, Contact and Privacy.

## Enquiries
POST /api/enquiries validates and saves enquiries in the managed D1 database. It has a honeypot, duplicate-submission protection and a per-email submission limit. No public endpoint exposes enquiry records. The site owner can retrieve records using the Sites database tools. Automatic email notification is not configured. Telephone and email links are also available.

## SEO and launch
Unique titles, descriptions, canonical URLs, crawlable server-rendered content, service and business structured data, breadcrumbs, sitemap.xml and robots.txt are included. Canonical origin is in lib/site.ts. Update it when connecting the final production domain. New Sites are private; public accessibility and domain/Search Console configuration are required for search indexing. No ranking guarantees are made. No analytics provider or advertising pixels are installed.

The original logo was retrieved from the existing Swift Digitals website. Portfolio images are original illustrative concepts and are labelled accordingly.

## Local development
Use the Sites installation, managed preview and publishing workflow. D1 schema is in db/schema.ts; production schema migrations are in drizzle/. Do not alter applied migrations. Preview database records are not part of deployment.

## Verification
TypeScript check and production build; desktop and 390px mobile visual review; mobile menu; enquiry submission with database read-back; service-specific metadata and structured data. WebMCP service-selection enhancement is feature-detected; no supported tool context was available for runtime validation.
