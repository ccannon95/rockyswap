## Palette Review

1. **Cyan `#00ffff`**

   * Contrast with black: 16.75 → AAA safe even for tiny text.
   * Works very well as a **background for text** (big cyan block, black text on top).
   * Usability: readable at all sizes, not overwhelming if used in panels/sections.

2. **Magenta `#ff00ff`**

   * Contrast with black: \~6.7 → WCAG AA for large text, borderline for body text.
   * Usability: too heavy for body backgrounds, but great for **titlebars, accent bars, hover states, or icon fills**.
   * If used as a background, limit to short headlines or icons.

3. **Yellow `#ffff00`**

   * Contrast with black: 19.56 → “super” contrast.
   * Usability: perfect for **CTA buttons** or “warning/highlight” areas.
   * But visually overwhelming if used too much → keep it for *action elements only*.

4. **Black `#000000`**

   * Universal text color. Works across all three brights.

---

## Application Strategy

* **Background hierarchy**

  * Primary sections: cyan (#00ffff) with black text.
  * Accents/stripes: magenta (#ff00ff) in limited areas (e.g., window headers).
  * Interactive: yellow (#ffff00) for buttons → ensures CTAs pop immediately.

* **Text hierarchy**

  * Body = black on cyan.
  * Headlines = black on magenta (since contrast is just high enough).
  * Buttons = black text on yellow.

* **Accessibility**

  * Cyan + black is safe for paragraphs.
  * Magenta should never carry paragraphs of text — only short bold headlines.
  * Yellow buttons with black text = highly accessible and attention-grabbing.

---

