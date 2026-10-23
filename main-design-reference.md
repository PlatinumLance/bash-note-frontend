
# Color Cheat Sheet — Journaling App

**Design direction:** Warm, calm, minimal, and editorial.

## Design Philosophy

The interface should feel like a quiet space for reflection. Use warm neutrals as the foundation, forest green to highlight important actions, and semantic colors only when they communicate a specific status.

**Golden rule:** Most of the interface should remain neutral. Color should establish hierarchy, communicate meaning, or indicate interaction—not serve as decoration.

---

## 1. Color Palette

The palette is divided into two groups: core colors, which define the overall interface, and semantic colors, which communicate specific states.

### 1.1 Core Colors

Use these colors consistently across pages and components to maintain a cohesive visual identity.

| Token | Hex | Purpose | Typical Use |
|---|---|---|---|
| `color-bg` | `#F8F5EF` | Warm paper background | Main page backgrounds |
| `color-surface` | `#FFFFFF` | Clean content surface | Cards, dialogs, and input backgrounds |
| `color-primary` | `#355747` | Primary interaction and selection | Primary buttons, active navigation, important links |
| `color-text` | `#292D29` | Primary text | Headings, body text, and primary labels |
| `color-muted` | `#777970` | Secondary information | Dates, metadata, hints, and supporting text |
| `color-border` | `#E8E3DA` | Subtle visual separation | Card borders, input borders, and dividers |

### 1.2 Semantic Colors

Semantic colors communicate specific states or consequences. They should not be used for general decoration.

| Token | Hex | Meaning | Typical Use |
|---|---|---|---|
| `color-success` | `#287A50` | Something succeeded | Save confirmations and completion messages |
| `color-warning` | `#A96513` | Attention is needed | Unsaved changes and cautionary notices |
| `color-error` | `#B33D36` | Something failed or is destructive | Validation errors and destructive-action warnings |

**Usage rule:** Use semantic colors only when their meaning is relevant. For example, a successfully saved journal entry does not need a green border. Show success feedback only when it provides useful information to the user.

---

## 2. Rules for Combining Colors

The palette works best when each color has a clear and consistent role. Apply the following rules across the entire application.

### Rule 1: Keep Backgrounds Neutral by Default

Use a small set of neutral colors to establish a consistent visual foundation.

| Element | Color | Guideline |
|---|---|---|
| Page background | `color-bg` | Use the warm paper tone throughout the application |
| Cards and content surfaces | `color-surface` | Keep content areas clean and easy to read |
| Inputs and dialogs | `color-surface` | Use white to distinguish interactive surfaces from the page |
| Primary text | `color-text` | Maintain a clear visual hierarchy |
| Supporting text | `color-muted` | Use for secondary information, not essential content |
| Borders and dividers | `color-border` | Separate elements subtly without adding visual weight |

Avoid assigning a different background color to every card or section. Use spacing, typography, and subtle borders to distinguish content instead.

### Rule 2: Reserve Green for Actions and Selection

Use `color-primary` to identify important interactive elements and selected states.

**Appropriate uses:**
- Primary actions, such as **New Entry** and **Save Entry**.
- The currently selected navigation item.
- Important links that lead to meaningful actions.
- Selected controls when a clear selection indicator is needed.

**Avoid using green for:**
- Every heading or piece of emphasized text.
- Every icon throughout the interface.
- Card backgrounds without a functional reason.
- Decorative sections that do not represent an action or selected state.

Green should help users understand where they can act or what they have selected. If everything is green, nothing stands out.

### Rule 3: Give Each Area One Primary Action

Every page or section should have a clear visual priority. The primary action should be easy to identify without competing with equally prominent buttons.

For example, the journal editor should prioritize saving an entry.

| Action | Visual Treatment | Reason |
|---|---|---|
| Save Entry | Green primary button | The main action the user is expected to take |
| Cancel | Neutral secondary button | Available without competing with saving |
| Delete Entry | Red destructive action | Visually distinct because it has potentially irreversible consequences |

Keep destructive actions separate from routine actions when possible. This reduces accidental clicks and makes the interface easier to understand.

### Rule 4: Use Semantic Colors Sparingly

Semantic colors should appear only when they communicate useful information.

| Color | Use When | Do Not Use When |
|---|---|---|
| Green (`color-success`) | An operation succeeds or a task is completed | An entry is simply saved and no confirmation is needed |
| Amber (`color-warning`) | The user needs to review something or take action | A section needs decorative emphasis |
| Red (`color-error`) | An operation fails, input is invalid, or an action is destructive | An element needs stronger contrast without a semantic reason |

Do not confuse the primary green (`color-primary`) with the success green (`color-success`). The primary green represents interaction and selection; the success green communicates a successful outcome.

### Rule 5: Establish Hierarchy Beyond Color

Color is only one part of visual hierarchy. Before introducing a new color, use the following techniques in order of preference:

1. **Typography:** Adjust font size, weight, or style.
2. **Spacing and positioning:** Give important content room to breathe.
3. **Borders and surfaces:** Use subtle separation to group related elements.
4. **Primary accent color:** Highlight an important action or selected state.
5. **Semantic color:** Communicate success, warning, or error when appropriate.

Not every important element needs a different color. A quiet, consistent interface often feels more intentional than one with frequent visual emphasis.

---

## 3. Component Color Reference

Use this table as a practical reference when designing or implementing individual components.

| Component | Background | Text | Border | Notes |
|---|---|---|---|---|
| Page | `color-bg` | `color-text` | None | Use the warm paper background |
| Card | `color-surface` | `color-text` | `color-border` | Keep surfaces neutral and consistent |
| Primary button | `color-primary` | White | None | Reserve for the main action |
| Secondary button | Transparent or `color-surface` | `color-text` | `color-border` | Should remain visually secondary |
| Text input | `color-surface` | `color-text` | `color-border` | Maintain clear boundaries and readable text |
| Input placeholder | `color-surface` | `color-muted` | `color-border` | Keep distinguishable from entered text |
| Active navigation | Neutral or subtle green tint | `color-primary` | Usually none | Clearly indicate the current location |
| Inactive navigation | Transparent | `color-muted` | None | Avoid competing with the active item |
| Dates and metadata | Inherited background | `color-muted` | None | Keep secondary information understated |
| Error message | Neutral or pale red tint | `color-error` | Optional | Clearly communicate what needs correction |
| Success message | Neutral or pale green tint | `color-success` | Optional | Confirm an outcome when useful |

### Interaction States

Hover, focus, disabled, and selected states should be consistent with the core palette. Avoid introducing unrelated colors to represent these states.

| State | Recommended Treatment |
|---|---|
| Hover | Use a subtle background, border, or color variation |
| Focus | Provide a clearly visible focus indicator with sufficient contrast |
| Disabled | Reduce visual emphasis while keeping the control and its label understandable |
| Selected | Use `color-primary` or a subtle green tint to indicate selection |
| Error | Use `color-error` alongside a clear explanation of the problem |
| Success | Use `color-success` when communicating a successful outcome |

These are starting points rather than fixed prescriptions. Check each state for sufficient contrast and make sure interaction is not communicated by color alone.

---

## 4. Page Layout Recipes

The same color principles should apply across every page. Individual layouts can vary according to their purpose, but they should still feel like parts of the same application.

### 4.1 Home / Journal List

**Goal:** Make journal entries easy to browse while keeping the interface calm and content-focused.

- Use `color-bg` for the page background.
- Use `color-text` for the page title and entry titles.
- Use `color-muted` for dates, timestamps, and excerpts that serve as secondary information.
- Display entries on white cards with subtle `color-border` outlines.
- Use one green **New Entry** button as the primary action.
- Avoid colored card backgrounds unless they communicate meaningful information.

**Design principle:** Entry titles and excerpts should attract attention before decorative elements do.

### 4.2 Journal Editor

**Goal:** Provide a quiet writing environment where the user's words are the primary focus.

- Use `color-bg` for the surrounding page or `color-surface` for a dedicated writing surface.
- Use `color-text` for the entry title and body.
- Use `color-muted` for dates and supporting metadata.
- Use neutral borders for inputs and other controls.
- Make **Save Entry** the primary green action.
- Keep **Cancel** neutral and visually secondary.
- Style **Delete Entry** as a red destructive action and separate it from routine editing controls.

**Design principle:** Minimize visual distractions. The writing area should feel comfortable, spacious, and easy to read.

### 4.3 Settings

**Goal:** Organize configuration options into clear, predictable groups.

- Use `color-bg` as the page background.
- Group related options into white cards.
- Use `color-text` for headings and labels.
- Use `color-muted` for descriptions and supplementary guidance.
- Use green for selected options and primary actions.
- Use red only for destructive account actions or relevant error states.

**Design principle:** Make settings easy to scan without giving every group a different visual treatment.

### 4.4 Authentication

**Goal:** Make signing in and creating an account feel straightforward and trustworthy.

- Use `color-bg` for the page background.
- Place the form in a simple white card.
- Use `color-text` for headings, labels, and entered text.
- Use neutral input borders and clear field spacing.
- Use a green primary button for actions such as **Sign In** or **Create Account**.
- Use red inline messages for validation errors.

**Design principle:** Keep the form focused on the task. Avoid unnecessary decoration, multiple competing actions, or excessive color accents.

---

## 5. Quick Decision Checklist

Before assigning a color to an element, use this checklist to confirm that the choice supports the interface's hierarchy and meaning.

| Question | Recommended Choice |
|---|---|
| Is this the main page background? | `color-bg` |
| Is this a card, dialog, or input surface? | `color-surface` |
| Is this primary text? | `color-text` |
| Is this secondary information? | `color-muted` |
| Is this a border or divider? | `color-border` |
| Is this an important action or selected state? | Consider `color-primary` |
| Does this communicate success? | `color-success` |
| Does this indicate caution or pending attention? | `color-warning` |
| Does this communicate an error or destructive action? | `color-error` |
| Does this color have a clear functional purpose? | If not, remove it |

When a color choice is unclear, return to the component's role rather than adding another shade to make it stand out.

---

## 6. Common Mistakes to Avoid

Keep the following pitfalls in mind during design reviews and implementation.

| Mistake | Better Approach |
|---|---|
| Giving every card a different background | Use consistent white surfaces and subtle borders |
| Using green for all headings, links, icons, and buttons | Reserve green for primary actions, active states, and selected elements |
| Using red or amber as decoration | Reserve semantic colors for meaningful states |
| Adding a new color whenever a page feels plain | Improve spacing, typography, and hierarchy first |
| Adding colored borders and shadows to every component | Use subtle separation only where it improves clarity |
| Using muted text for essential information without checking readability | Verify contrast and increase emphasis when necessary |
| Assuming more colors make an interface more interesting | Build visual interest through layout, typography, and whitespace |
| Using color alone to communicate status or selection | Pair color with text, icons, labels, or other visual cues |
| Treating primary green and success green as interchangeable | Use primary green for interaction and success green for successful outcomes |

The goal is not to eliminate all visual variety. It is to ensure that every visual distinction serves a clear purpose.

---

## 7. Accessibility and Contrast

The palette provides a starting point for the visual design, but the listed colors are not guaranteed to meet every accessibility requirement.

Before shipping, verify actual foreground and background combinations against the applicable WCAG contrast requirements.

Pay particular attention to:

- **Muted text:** Dates, hints, metadata, and placeholders must remain readable against their backgrounds.
- **Primary buttons:** White text on `color-primary` should be checked for sufficient contrast.
- **Semantic messages:** Error, warning, and success indicators must remain distinguishable and readable.
- **Interactive states:** Focus indicators, selected controls, and disabled elements should be understandable and sufficiently visible.
- **Color-independent communication:** Do not rely on color alone to communicate errors, success, selection, or destructive actions.

As a general WCAG 2.2 AA reference, normal text should achieve a contrast ratio of at least **4.5:1**, while large text should achieve at least **3:1**. Applicable non-text interface elements and visual indicators generally require at least **3:1** contrast against adjacent colors.

Disabled controls have specific contrast exceptions under WCAG, but they should still remain understandable in practice.

---

## 8. Final Rule

When in doubt, return to the core combination:

| Role | Color |
|---|---|
| Page background | Warm paper — `#F8F5EF` |
| Content surface | White — `#FFFFFF` |
| Primary text | Charcoal — `#292D29` |
| Supporting text | Muted grey — `#777970` |
| Borders and dividers | Grey-beige — `#E8E3DA` |
| Primary actions and selection | Forest green — `#355747` |

Use semantic colors only when they communicate a relevant status or consequence.

If a new color is not necessary to communicate meaning, support interaction, or establish hierarchy, do not introduce it.

**Consistency matters more than finding the perfect shade for every component.** A small, well-defined palette will make the journaling app feel calmer, more cohesive, and easier to use.
