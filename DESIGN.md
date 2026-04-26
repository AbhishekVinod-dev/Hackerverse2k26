---
name: Hyper-Grid
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c9ac'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9379'
  outline-variant: '#444933'
  surface-tint: '#abd600'
  primary: '#ffffff'
  on-primary: '#283500'
  primary-container: '#c3f400'
  on-primary-container: '#556d00'
  inverse-primary: '#506600'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#ffffff'
  on-tertiary: '#303030'
  tertiary-container: '#e4e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c3f400'
  primary-fixed-dim: '#abd600'
  on-primary-fixed: '#161e00'
  on-primary-fixed-variant: '#3c4d00'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 96px
    fontWeight: '700'
    lineHeight: 100%
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 110%
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 120%
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  label-mono:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 100%
    letterSpacing: 0.1em
spacing:
  base: 8px
  gutter: 24px
  margin: 48px
  grid_columns: '12'
---

## Brand & Style

This design system is engineered for **hackerverse**, a high-octane hackathon event. The personality is unapologetically technical, competitive, and visionary. It targets developers and digital creators who thrive in high-pressure, innovative environments.

The visual direction combines **Neo-Brutalism** with **High-Contrast Tech** aesthetics. It utilizes a raw, "code-first" structure characterized by exposed grids, heavy borders, and aggressive typographic scales. The UI should feel like a high-end terminal or a futuristic command center, evoking feelings of urgency, precision, and digital mastery. 

Key visual hallmarks include:
- Radical contrast between deep blacks and electric neons.
- Intentional use of "glitch" elements and monospace-adjacent styling.
- A rigid, mathematical layout that prioritizes information density and structural clarity.

## Colors

The palette is built on a "Matrix-Dark" foundation, optimized for low-light environments typical of late-night coding sessions.

- **Primary (Neon Green):** Used exclusively for high-priority actions, data highlights, and branding accents. It represents energy and the "active" state of the hackathon.
- **Backgrounds:** A tiered system of black and dark greys (`#0A0A0A` for the base, `#1A1A1A` for containers) creates depth without sacrificing the tech-focused mood.
- **Accents:** Use pure white sparingly for critical text readability, but prefer tinted greys for secondary information to maintain the dark-mode immersion.

## Typography

The typography system uses a dual-threat approach to balance raw impact with technical legibility.

- **Headlines:** Use **Space Grotesk** for all titles and hero sections. It provides the necessary "tech-futuristic" edge with its geometric terminals. Bold and Extra Bold weights should be used to create a hierarchy that feels loud and authoritative.
- **Body:** **Inter** is utilized for long-form content and data tables. Its utilitarian nature ensures that complex hackathon rules and schedules remain highly readable.
- **Labels & UI Metadata:** Small-caps or all-caps monospace-style styling using Space Grotesk should be applied to status tags, timestamps, and "hacker" IDs.

## Layout & Spacing

This design system employs a **Rigid Fixed Grid** model inspired by technical blueprints. 

- **The 12-Column Grid:** All major components must align to a 12-column structure with strict 24px gutters. Visual "broken grid" elements (like overlapping images or offset text) are encouraged but must be anchored to the grid lines.
- **Rhythm:** Spacing follows an 8px base unit. 
- **The "Scanner" Layout:** Important metadata (dates, prizes, status) should be placed on the peripheries of the layout, mimicking the UI of a heads-up display (HUD). Use vertical text for sidebars to maximize the futuristic feeling.

## Elevation & Depth

Depth in this system is achieved through **structural layering and high-contrast borders** rather than soft shadows.

- **Flat Stacked Layers:** Use solid 1px or 2px borders in Neon Green or Medium Grey to define containers. 
- **Z-Axis Hierarchy:** Higher elevation elements are indicated by a shift from the `#0A0A0A` background to `#1A1A1A`, often accompanied by a subtle "glow" border-effect using the primary color.
- **Glow Effects:** Use hard-edged outer glows (0px blur, 4px spread) to make active cards or buttons "pop" against the dark background. 
- **No Soft Shadows:** Avoid traditional ambient shadows. The look should be crisp, digital, and flat.

## Shapes

The shape language is **strictly angular and sharp**. 

- **Sharp Corners:** All buttons, cards, and input fields must have a `0px` border radius. This reinforces the "hard-tech" and brutalist aesthetic.
- **Beveled Edges:** For primary hero elements, consider "clipped corners" (45-degree angle cuts) to evoke a military or aerospace hardware feel.
- **Decorative Lines:** Use thin, horizontal and vertical "hairlines" to separate sections, mimicking a circuit board or terminal interface.

## Components

- **Buttons:** Primary buttons are solid Neon Green with Black text. Hover states should invert the colors or trigger a "glitch" displacement effect. Use a "ghost" style (Neon Green border, no fill) for secondary actions.
- **Cards:** Cards should feature a 1px border. The top-right corner of cards is an ideal location for "Status Labels" (e.g., "LIVE", "CLOSED", "UPCOMING").
- **Input Fields:** Dark background with a bottom-only border in Neon Green. When focused, the entire border should appear with a subtle primary color glow.
- **Hackathon-Specific Components:**
    - **Countdown Timer:** Large, high-impact display-xl font with ticking animations.
    - **Terminal Console:** A code-snippet area for "How to Join" instructions.
    - **Leaderboard Rows:** High-density lists with sharp dividers and monospaced ranking numbers.
- **Chips/Tags:** Small rectangular boxes with uppercase monospaced text, used for tech stacks (e.g., REACT, RUST, WEB3).