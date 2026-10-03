# Portfolio — UI/UX Structure Template (No Content)

Dark theme, cyan/blue accent, rounded cards, glow effects.
All text is placeholder. Only layout, components, and behavior are defined.

---

## 1. Design Tokens

### Colors (approximate)

| Token | Value | Usage |
|---|---|---|
| `--bg-main` | `#161b26` | Main body, footer |
| `--bg-header-band` | `#0f1115` | Inner page title band |
| `--bg-contact` | `#000000` | Contact page body |
| `--bg-card` | `#1f2430` | Cards |
| `--bg-card-dark` | `#0d0d0d` | Form container |
| `--bg-input` | `#1a1a1a` | Inputs |
| `--accent` | `#00b4d8` | Accent text, bullets, underline bars, active link |
| `--accent-btn` | `#0891b2` | Primary buttons |
| `--accent-blue` | `#2563eb` | Gradient end |
| `--text-primary` | `#ffffff` | Headings |
| `--text-secondary` | `#9ca3af` | Paragraphs, labels |
| `--border` | `rgba(255,255,255,0.08)` | Card and pill borders |
| `--success` | `#10b981` | Status dot |

Title gradient: `linear-gradient(90deg, #ffffff, #00d4ff, #2563eb)`

### Typography
- Body/UI: rounded geometric sans, weights 400 / 500 / 700.
- Hero title: bold, ~96px, gradient fill.
- Section titles: bold, uppercase, wrapped like code tags: `<> TITLE </>`.
- Small labels: uppercase, letter-spacing `0.2em`, 12–13px.
- Featured title: italic bold, ~64px, gradient on second word.

### Shape & Spacing
- Container max-width ~1600px, side padding ~140px.
- Cards radius 24–32px, 1px subtle border.
- Buttons/pills radius 999px. Inputs radius ~16px.
- Section vertical spacing 100–160px.

### Effects
- Cyan glow behind hero image and under primary buttons.
- Blurred blue blobs in the background corner.
- Fade-out edges on horizontal sliders.

---

## 2. Global Components

### 2.1 Navbar (sticky)
```
[ LOGO ]        [ Link 1 ] [ Link 2 ] [ Link 3 ]        [ CTA BUTTON ⬇ ]
```
- Logo: bold text with one cyan dot/letter.
- Active link: cyan text + dark teal pill background.
- CTA: outlined pill with download icon.
- On scroll: thin bottom border, height shrinks (~110px to ~75px).
- Mobile: hamburger menu, CTA moves inside.

### 2.2 Scroll-to-top
- Fixed bottom-right, ~60px circle, dark fill, white arrow.
- Cyan ring showing scroll progress.
- Appears after the hero.

### 2.3 Footer (3 columns)

| Column | Structure |
|---|---|
| Left | Logo, short description, row of social icons (rounded bordered squares) |
| Center | Small uppercase label + vertical list of links |
| Right | Small uppercase label + 2 rounded info cards (icon + label + value) |

Bottom bar: centered, small, muted copyright line, separated by a top divider.

---

## 3. Page: Home

### 3.1 Hero (2 columns, full viewport height)
- **Left:** small cyan greeting → huge gradient name → subtitle → two buttons (primary filled cyan with glow, secondary outlined).
- **Right:** transparent-background portrait, radial blue glow, two thin concentric circles behind it, bottom edge fades out.

### 3.2 About section (2 columns)
- **Left:** centered title → 3 paragraphs (key phrases highlighted in cyan or bold with underline) → quote block (dark card, thick cyan left border, italic).
- **Right:** 2×2 stats grid + status pill below.
  - Stat card: icon in a small dark rounded square, big bold number, small uppercase label.
  - Icon colors: cyan, blue, purple, green.
  - Status pill: dashed border, green dot, uppercase spaced text.

### 3.3 Services slider
- Header row: title on the left, short description on the right.
- Horizontal auto-scrolling carousel, faded edges, pause on hover.
- Card (~510×400px): icon box top-left → title → short cyan underline → 3 bullets with cyan dots.

### 3.4 Tech stack marquee
- Centered title + centered muted description.
- Infinite horizontal marquee, faded edges.
- Card (~240×180px): logo on top, uppercase label below.
- Hover: slight lift + cyan border.

---

## 4. Page: Projects

### 4.1 Header band
- Darker band, centered big title (first word white, second word gradient).
- Breadcrumb under it: `HOME › CURRENT PAGE` (uppercase, spaced, current page in cyan).

### 4.2 Intro
- Small cyan spaced label.
- Big italic title with gradient on second word.

### 4.3 Project rows (alternating)
```
Row odd :  [ IMAGE ]   [ TEXT ]
Row even:  [ TEXT ]    [ IMAGE ]
```
- Rows separated by a thin divider.
- **Image:** screenshot in a white-bordered rounded frame (radius ~40px), giant faint row number behind the corner.
- **Text:** huge bold uppercase name → short cyan underline bar → description paragraph (muted, ~18px, line-height 1.8) → white pill button with arrow.
- Reveal on scroll, button hover lift.

---

## 5. Page: Contact

Pure black background.

### 5.1 Left column
1. Big 3-line headline (middle word italic cyan).
2. Muted intro paragraph.
3. Three info rows: rounded dark icon box (cyan icon) + small uppercase label + value (email, phone, location).
4. "Follow" label + row of square social buttons.

### 5.2 Right column (form card)
- Large rounded card (radius ~48px, near-black, subtle border).
- Title + short cyan underline.
- Fields: text input, email input, textarea (~210px tall), 16px gap.
- Full-width cyan pill submit button, uppercase, glow.

Form UX:
- Focus: cyan border + soft glow.
- Inline validation under each field.
- Loading state on button, then success or error toast.

---

## 6. Responsive

| Breakpoint | Changes |
|---|---|
| ≥ 1280px | Full layout |
| 768–1279px | Hero stacks, stats stay 2×2, project rows stack (image above text) |
| < 768px | Hamburger nav, contact columns stack (info first, form second), footer stacks, hero title ~48px, sliders swipeable |

---

## 7. Interactions

| Element | Behavior |
|---|---|
| Nav links | Active pill, hover color change |
| Hero buttons | Navigate to Projects / Contact |
| Sliders and marquee | Auto-scroll, pause on hover |
| Stat cards | Optional count-up on first view |
| Project rows | Reveal on scroll |
| Scroll-to-top | Appears after hero, progress ring |
| Social icons | Lift + cyan border on hover |
| Form | Focus glow, validation, feedback toast |

---

## 8. Sitemap

```
Home
 ├─ Hero
 ├─ About + Stats
 ├─ Services slider
 ├─ Tech marquee
 └─ Footer
Projects
 ├─ Header band + breadcrumb
 ├─ Project rows
 └─ Footer
Contact
 ├─ Intro + info + socials | Form
 └─ Footer
```
