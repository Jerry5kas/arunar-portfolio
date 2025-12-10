# Animation Debug Guide

## Current Animation Setup

### CSS Animation (resources/css/app.css)
```css
@keyframes scrollUp {
    0% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(-50%);
    }
}
```

### Component Setup
- Container: `h-[200%]` (200% of parent height)
- Two identical content blocks for seamless loop
- Animation: `scrollUp 120s linear infinite`
- Opacity: `text-[#d4af37]/8` (8% opacity - very subtle)

## Potential Issues & Solutions

### Issue 1: Animation Not Visible
**Symptoms:** Text doesn't move at all

**Possible Causes:**
- CSS not loading (check browser DevTools → Network tab)
- Animation name mismatch
- Container overflow issues
- z-index conflicts

**Solutions:**
1. Check browser console for errors
2. Verify CSS is loaded: Inspect element → Check computed styles
3. Test with higher opacity temporarily: `text-[#d4af37]/30`
4. Check if `md:block` is working (desktop only)

### Issue 2: Animation Too Slow/Subtle
**Symptoms:** Can't see movement, or it's barely noticeable

**Solutions:**
1. Reduce duration: Change `120s` to `60s` or `30s` for testing
2. Increase opacity: Change `/8` to `/15` or `/20`
3. Check if text is actually moving (use browser DevTools animation inspector)

### Issue 3: Animation Jumps/Not Smooth
**Symptoms:** Animation stutters or jumps between loops

**Solutions:**
1. Ensure `linear` timing function (already set)
2. Check `willChange: 'transform'` is applied (already set)
3. Verify container has `overflow-hidden`
4. Check for CSS conflicts

### Issue 4: Text Visible on Page Load
**Symptoms:** Text appears before animation starts

**Solutions:**
1. Add initial transform: `transform: translateY(100%)` to start hidden
2. Or use animation-delay
3. Ensure container properly clips content

## Quick Test Steps

1. **Temporarily increase visibility:**
   - Change opacity to `/30` or `/40`
   - Reduce duration to `30s` for faster testing

2. **Check in browser DevTools:**
   - Open DevTools (F12)
   - Go to Elements tab
   - Find the scrolling div
   - Check if `animation` property is applied
   - Use Animation inspector to see if it's running

3. **Verify CSS is loaded:**
   - Check Network tab → Look for `app.css`
   - Check if `@keyframes scrollUp` exists in Sources

4. **Test animation manually:**
   - In DevTools, try adding inline style: `transform: translateY(-25%)`
   - See if text moves (this tests if transform works)

## Current Configuration

- **Duration:** 120 seconds (very slow)
- **Timing:** linear (constant speed)
- **Loop:** infinite
- **Opacity:** 8% (very subtle)
- **Text Size:** 120px (very large)
- **Width:** 75% of container
- **Visibility:** Desktop only (`md:block`)

## Recommended Test Changes

To make animation more visible for testing:

```tsx
// In welcome.tsx, temporarily change:
style={{ 
    animation: 'scrollUp 30s linear infinite',  // Faster for testing
    willChange: 'transform',
    transform: 'translateY(0%)'
}}

// And change opacity:
className="text-[120px] font-bold leading-relaxed text-[#d4af37]/30"  // More visible
```

