Personal Note-Taking App — UI & Design System Reference

Project style: Warm, cozy, minimal
Platform: Desktop
Layout: Sidebar + editor
Themes: Light and dark
Design philosophy: A quiet, paper-inspired space for thoughts. Prioritize readability, simplicity, consistency, and
distraction-free writing.

1. Design Principles
   Keep the interface calm, warm, and uncluttered.
   Let the written content be the focal point.
   Use whitespace and typography instead of excessive borders and cards.
   Maintain a consistent colour palette across every screen.
   Keep interactions predictable and keyboard-friendly.
   Use subtle animations and visual feedback.
   Design light mode first, then adapt the same system for dark mode.
2. Colour Palette
   Light Theme — Warm Paper & Sage
   Token Hex Usage
   Paper #FAF8F3 Main editor background
   Linen #F0EDE6 Sidebar and secondary surfaces
   Surface #FFFFFF Inputs and elevated surfaces
   Ink #302F2B Primary text and headings
   Secondary text #706D64 Metadata and muted labels
   Oat #E8E2D8 Borders and dividers
   Sage #647657 Primary buttons and active controls
   Sage hover #536548 Hover state for primary actions
   Pale sage #E5EBDD Selected navigation and soft highlights
   Terracotta #D9A58B Occasional decorative accents
   Dark Theme — Night Desk
   Token Hex Usage
   Canvas #242521 Main editor background
   Sidebar #2E2F29 Navigation background
   Surface #35362F Raised surfaces and inputs
   Primary text #EAE5DA Headings and body text
   Secondary text #B0AEA3 Metadata and muted labels
   Border #45463E Dividers and outlines
   Sage #A8B696 Primary accent
   Sage hover #BBC7AC Hover state
   Pale sage #3B4435 Selected states
   Accent text #242521 Text on sage-filled controls
   Tag Colours
   Tag Background Text
   Personal #DFE7D9 #40523A
   Ideas #F0DED3 #774E3B
   Reading #DFE5EF #425777

Colour rules:

Use neutral backgrounds for most of the interface.
Reserve sage for primary actions, selection, and focus.
Use terracotta sparingly.
Keep tag colours muted and consistent.
Maintain sufficient contrast in both themes.
Define semantic colour tokens instead of hardcoding hex values throughout components.

3. Typography

Use two typefaces with separate roles.

Inter — Interface

Use for navigation, buttons, metadata, labels, and settings.

Lora — Writing

Use for note titles and the main reading/writing experience.

Element Size Weight
Note title 32 px 500
Section heading 20 px 600
Editor body 18 px 400
Interface body 14 px 400
Buttons 13–14 px 500
Metadata 12 px 400

Editor typography:

Line height: approximately 1.7.
Use a readable measure rather than stretching text across the window.
Prefer regular font weights for long-form writing.
Use clear heading hierarchy.

Font resources:

Inter: https://fonts.google.com/specimen/Inter
Lora: https://fonts.google.com/specimen/Lora

A simpler alternative is to use Inter throughout the interface and reserve Lora for note titles.

4. Layout System
   Desktop Structure

Use a two-part workspace:

Sidebar: navigation, search, note list, tags, settings.
Editor: note title, metadata, tags, content, save status.

The note list lives within the sidebar rather than occupying a permanent third column.

Layout Tokens
Token Value
Sidebar width 240px
Editor maximum width 720px
Base spacing unit 8px
Small radius 6px
Medium radius 10px
Large radius 14px
Interactive row height 40–44px
Compact button height 36–40px
Spacing Scale
Token Value Usage
space-1 4 px Icon gaps
space-2 8 px Compact spacing
space-3 12 px Sidebar padding
space-4 16 px Standard component spacing
space-6 24 px Section separation
space-8 32 px Content separation
space-12 48 px Page-level breathing room

Use 8 px increments as the default, with 4 px adjustments where necessary.

5. Main Screen Specification
   Sidebar

Include:

App logo and name.
Search field.
All Notes.
Favorites.
Recent.
Archive.
Note list with title, preview, and timestamp.
Tags.
Preferences or settings.

Behaviour:

Default items use neutral backgrounds.
Selected items use pale sage.
Hover states are subtle.
Keep icons consistent in size and alignment.
Allow the sidebar to collapse.
Editor

Include:

Breadcrumb or note category.
Favorite and overflow actions.
Note title.
Last-edited date.
Optional tags.
Main writing area.
Autosave status.

Behaviour:

Center the editor within a maximum width of approximately 720 px.
Keep metadata visually secondary.
Avoid unnecessary cards around paragraphs.
Use generous line height and paragraph spacing.
Allow the editor to expand when the sidebar is collapsed.
Empty State

Use:

A small illustration or simple icon.
A short message, such as “A little space for your thoughts.”
One clear New Note action.

Avoid complex onboarding checklists.

6. Component Design System
   Buttons

Primary: Dark sage background with white text in light mode.

Secondary: Pale sage background with dark text.

Tertiary: Neutral background or text-only button.

Define states for:

Default
Hover
Pressed
Disabled
Keyboard focus
Navigation Items
Consistent icon and text alignment.
Approximately 40–44 px row height.
Subtle rounded corners.
Pale sage selected state.
Selection must be distinguishable beyond colour alone.
Inputs
White or theme-appropriate surface.
Subtle border.
Clear focus indicator.
Consistent padding.
Minimal or no shadows.
Note Rows

Display:

Note title.
Optional preview.
Last-edited time.
Optional favourite indicator.

Keep previews and timestamps muted. Avoid excessive metadata.

Tags
Small, rounded pills.
Fixed set of muted colours.
Optional remove action.
Consistent text contrast.
Editor States

Support:

Empty
Editing
Saving
Saved
Save error

Do not display a successful save state until the content has actually been persisted.

7. Dark Mode

Dark mode should feel like a dimly lit reading room, not a pure-black interface.

Rules:

Use warm charcoal rather than black.
Use warm off-white rather than bright white.
Desaturate accents appropriately.
Keep borders subtle but visible.
Preserve the same semantic colour roles across themes.

Offer three theme settings:

Light
Dark
System

Test all interactive states and text contrast in both themes.

8. Interaction and Keyboard Shortcuts

Recommended shortcuts:

Shortcut Action
Ctrl/Cmd + N Create a new note
Ctrl/Cmd + K Open search
Esc Close overlays or dialogs

Additional interaction rules:

Focus the editor when creating a new note.
Make search quick and accessible.
Provide clear feedback for saving.
Keep transitions brief and subtle.
Ensure keyboard focus is always visible.
Support accessible labels and keyboard navigation.

9. Autosave and Persistence

Recommended save flow:

User edits a note.
Changes are marked as pending.
Saving begins after a short debounce.
Successful persistence updates the status to Saved.
Failed saves show an error and provide a recovery path.

Important:

Do not lose unsaved edits when switching notes.
Prevent stale saves from overwriting newer content.
Provide a clear strategy for retries and offline changes if needed.

10. Suggested Implementation Tokens
    :root {
    color-scheme: light;

--color-canvas: #FAF8F3;
--color-sidebar: #F0EDE6;
--color-surface: #FFFFFF;
--color-text: #302F2B;
--color-text-secondary: #706D64;
--color-border: #E8E2D8;

--color-accent: #647657;
--color-accent-hover: #536548;
--color-accent-soft: #E5EBDD;
--color-accent-text: #FFFFFF;

--font-ui: "Inter", sans-serif;
--font-editor: "Lora", Georgia, serif;

--sidebar-width: 240px;
--editor-max-width: 720px;

--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;

--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 14px;
}

[data-theme="dark"] {
color-scheme: dark;

--color-canvas: #242521;
--color-sidebar: #2E2F29;
--color-surface: #35362F;
--color-text: #EAE5DA;
--color-text-secondary: #B0AEA3;
--color-border: #45463E;

--color-accent: #A8B696;
--color-accent-hover: #BBC7AC;
--color-accent-soft: #3B4435;
--color-accent-text: #242521;
}

body {
margin: 0;
background: var(--color-canvas);
color: var(--color-text);
font-family: var(--font-ui);
}

.note-editor {
width: min(100%, var(--editor-max-width));
margin-inline: auto;
font-family: var(--font-editor);
font-size: 18px;
line-height: 1.7;
}

Extend this token set for additional components and semantic states. Use the same variables throughout the application.

11. Suggested Development Roadmap
    Phase 1 — Core Workspace
    Sidebar and navigation.
    Note list.
    Editor with title and body.
    Create, edit, and delete notes.
    Basic autosave.
    Phase 2 — Writing Experience
    Markdown support.
    Search.
    Favorites.
    Tags.
    Timestamps and save status.
    Phase 3 — Visual Polish
    Dark mode.
    Keyboard shortcuts.
    Empty states.
    Hover, focus, and pressed states.
    Collapsible sidebar.
    Phase 4 — Reliability
    Persistence and recovery.
    Error handling.
    Keyboard accessibility.
    Contrast checks.
    Testing with long notes and many notes.

Avoid complex features such as databases, backlinks, and elaborate dashboards until the core writing experience is
solid.

12. Design Inspiration
    Craft: https://www.craft.do/
    Simplenote: https://simplenote.com/
    Bear: https://bear.app/
    Notion: https://www.notion.com/
    Mobbin: https://mobbin.com/
    Dribbble: https://dribbble.com/search/note-taking-app
    Coolors: https://coolors.co/
    Realtime Colors: https://www.realtimecolors.com/

Use these references for inspiration rather than copying entire interfaces.

13. Final Design Checklist
    Visual consistency
    One primary accent colour.
    Consistent spacing and radius tokens.
    Clear typography hierarchy.
    Minimal borders and shadows.
    Consistent icon sizing.
    Muted, reusable tag colours.
    Functionality
    Create and edit notes.
    Search and organize notes.
    Autosave with error handling.
    Favorites and archive.
    Keyboard shortcuts.
    Light, dark, and system themes.
    Accessibility
    Readable text contrast.
    Visible keyboard focus.
    Keyboard-operable controls.
    Accessible names for icon-only buttons.
    Selected states do not rely only on colour.
    Final principle

Keep the interface quiet, the writing experience comfortable, and the design system consistent.

Start with Warm Paper & Sage, Inter for the interface, Lora for writing, a 240 px sidebar, and a 720 px editor. Build
the essentials first and add visual polish only when it improves the experience.