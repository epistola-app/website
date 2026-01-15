---
title: "Implementing Dark Mode in Your SaaS - Complete Technical Guide"
description: "Learn how to add and customize dark mode support in your Astro application. This comprehensive guide covers implementation, best practices, accessibility, and user experience considerations."
date: 2024-02-15
updatedDate: 2024-02-20
author: "Epistola Team"
cover: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop&q=80"
tags: ["development", "dark-mode", "ui", "accessibility", "ux"]
---

## Why Dark Mode Matters

Dark mode isn't just a trend—it's a user expectation. Here's why it's important:

### User Benefits

- **Reduced eye strain** in low-light conditions
- **Battery savings** on OLED displays (up to 30% on some devices)
- **Better focus** for many users
- **Accessibility** for users with light sensitivity
- **Modern aesthetic** that users prefer

### Business Benefits

- **Increased user satisfaction** and retention
- **Competitive advantage** (many users expect it)
- **Better accessibility** compliance
- **Professional appearance**

## Implementation Overview

We use a class-based dark mode approach with Tailwind CSS. This provides:

- **Performance**: No JavaScript required for styling
- **Flexibility**: Easy to customize
- **Compatibility**: Works with all modern browsers
- **Accessibility**: Respects system preferences

## Technical Implementation

### Configuration

Dark mode is configured in `tailwind.config.mjs`:

```javascript
export default {
  darkMode: 'class',
  // ... rest of config
}
```

The `'class'` strategy means Tailwind will apply dark mode styles when the `dark` class is present on the HTML element.

### Toggle Component

The `DarkModeToggle` component handles theme switching:

```tsx
// Simplified version
const toggleDarkMode = () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};
```

**Key features:**

- Toggles the `dark` class on `<html>`
- Persists preference in localStorage
- Provides visual feedback
- Accessible with proper ARIA labels

### Initialization

On page load, the theme is initialized:

```javascript
if (localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
     window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
}
```

This ensures:

- User preference is respected
- System preference is used as fallback
- No flash of wrong theme (FOUC)

## Color Considerations

Choosing the right colors for dark mode is crucial.

### Contrast Ratios

Maintain WCAG AA standards:

- **Normal text**: 4.5:1 contrast ratio minimum
- **Large text**: 3:1 contrast ratio minimum
- **Interactive elements**: Clear visual distinction

### Color Palette

Use a carefully chosen palette:

```css
/* Light mode */
--accent-dark: #343434;
--accent-teal: #055e68;
--accent-green: #62a388;
--accent-light: #b9d2d2;

/* Dark mode adjustments */
/* Colors are adjusted for better visibility */
```

**Best practices:**

- Don't just invert colors
- Adjust saturation and brightness
- Test readability in both themes
- Consider color-blind users

### Background Colors

Choose backgrounds that:

- Reduce eye strain (not pure black)
- Maintain sufficient contrast
- Feel comfortable for extended reading
- Work with your brand colors

**Recommended:**

- Light mode: `#ffffff` or `#f9fafb`
- Dark mode: `#1a1a1a` or `#0f172a` (not `#000000`)

## Component Styling

### Using Tailwind Classes

```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content that adapts to theme
</div>
```

### Conditional Styling

For complex components:

```tsx
const className = clsx(
  'base-styles',
  isDark ? 'dark-styles' : 'light-styles'
);
```

### CSS Variables

For dynamic theming:

```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
}

.dark {
  --bg-primary: #1a1a1a;
  --text-primary: #ffffff;
}
```

## Accessibility

Dark mode should be accessible to all users.

### System Preference Detection

Respect user's OS preference:

```javascript
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
prefersDark.addEventListener('change', (e) => {
  // Update theme if no manual preference set
});
```

### Keyboard Navigation

Ensure toggle is keyboard accessible:

- Focusable with Tab
- Activatable with Enter/Space
- Clear focus indicators

### Screen Readers

Provide proper labels:

```html
<button aria-label="Toggle dark mode">
  <MoonIcon />
</button>
```

## User Experience

Great dark mode UX goes beyond just switching colors.

### Smooth Transitions

Add transitions for theme changes:

```css
* {
  transition: background-color 0.3s, color 0.3s;
}
```

**Note:** Be careful with transitions on all elements—it can cause performance issues. Target specific properties instead.

### Persistence

Save user preference:

- **localStorage**: Persists across sessions
- **Cookies**: Works across subdomains
- **Server-side**: For logged-in users

### Default Behavior

When no preference is set:

1. Check localStorage first
2. Fall back to system preference
3. Default to light mode if neither available

## Common Issues and Solutions

### Flash of Unstyled Content (FOUC)

**Problem:** Wrong theme flashes before JavaScript loads

**Solution:** Initialize theme in `<head>` before body renders

### Inconsistent Colors

**Problem:** Some elements don't adapt to dark mode

**Solution:** Use Tailwind's `dark:` prefix consistently

### Performance

**Problem:** Transitions cause jank

**Solution:** Use `transform` and `opacity` for animations, avoid layout properties

### Images

**Problem:** Images look wrong in dark mode

**Solution:** Use CSS filters or provide dark mode variants

## Best Practices Summary

1. **Respect user choice**: Always honor manual selection
2. **System preference**: Use as intelligent default
3. **Smooth transitions**: Make theme changes feel natural
4. **Accessibility first**: Ensure contrast and readability
5. **Test thoroughly**: Check all components and states
6. **Performance**: Don't sacrifice speed for transitions
7. **Consistency**: Apply dark mode across entire application

## Conclusion

Dark mode is more than a feature—it's a user expectation. By implementing it thoughtfully:

- You improve user experience
- Increase accessibility
- Show attention to detail
- Stay competitive

Remember: Great dark mode is invisible. Users shouldn't notice the implementation—they should just enjoy using your application in their preferred theme.

Start with the basics, test thoroughly, and iterate based on user feedback. Your users will appreciate the effort!
