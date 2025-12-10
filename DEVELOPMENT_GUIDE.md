# Development Guide - Laravel Inertia React Portfolio

## 🚀 Quick Start

This project uses **Laravel + Inertia.js + React + Vite**. You need to run **TWO servers** simultaneously for development:

### Option 1: Use Composer Dev Script (Recommended)
This runs both servers automatically:

```bash
composer dev
```

This will start:
- Laravel server (PHP) on `http://127.0.0.1:8000`
- Vite dev server (HMR) on `http://localhost:5173`
- Queue worker (if needed)

### Option 2: Run Servers Separately

**Terminal 1 - Laravel Server:**
```bash
php artisan serve
```

**Terminal 2 - Vite Dev Server:**
```bash
npm run dev
```

## 📝 Important Notes

### Why Changes Don't Show Up

1. **Vite dev server not running** - Vite handles Hot Module Replacement (HMR)
   - Without it, changes won't be compiled or reflected
   - Check if `npm run dev` is running

2. **Browser cache** - Hard refresh your browser:
   - **Windows/Linux**: `Ctrl + Shift + R` or `Ctrl + F5`
   - **Mac**: `Cmd + Shift + R`

3. **Wrong URL** - Make sure you're accessing:
   - `http://127.0.0.1:8000` or `http://localhost:8000`
   - NOT `http://localhost:5173` (that's just Vite's dev server)

4. **Build required for production** - If running production mode:
   ```bash
   npm run build
   ```

## 🔧 Troubleshooting

### Check if Vite is Running
Look for output like:
```
VITE v7.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Clear All Caches
```bash
# Clear Laravel caches
php artisan cache:clear
php artisan config:clear
php artisan view:clear

# Clear browser cache (hard refresh)
# Or use incognito/private window
```

### Rebuild Assets
```bash
# Stop all servers (Ctrl+C)
# Then rebuild:
npm run build

# Then start dev again:
composer dev
```

### Check Port Conflicts
If port 8000 or 5173 is in use:
```bash
# Change Laravel port
php artisan serve --port=8001

# Change Vite port (edit vite.config.ts or use --port flag)
npm run dev -- --port 5174
```

## 📁 Project Structure

```
resources/
├── js/
│   ├── pages/          # React pages (Inertia components)
│   │   └── welcome.tsx # Your main page
│   ├── components/     # Reusable React components
│   ├── layouts/        # Layout components
│   └── app.tsx         # Main React entry point
├── css/
│   └── app.css         # Global styles & animations
└── views/
    └── app.blade.php   # Laravel blade template (Inertia root)
```

## 🎨 Making Changes

1. **Edit React components** in `resources/js/pages/` or `resources/js/components/`
2. **Edit styles** in `resources/css/app.css`
3. **Save the file** - Vite will automatically:
   - Compile changes
   - Hot reload in browser (if HMR is working)
   - Show errors in terminal

## ✅ Verification Checklist

Before reporting issues, verify:

- [ ] `npm run dev` is running (check terminal)
- [ ] `php artisan serve` is running (check terminal)
- [ ] Browser is at `http://127.0.0.1:8000`
- [ ] Hard refreshed browser (`Ctrl + Shift + R`)
- [ ] No errors in browser console (F12)
- [ ] No errors in terminal running `npm run dev`

## 🐛 Common Issues

### "Vite client not found"
- Make sure `npm run dev` is running
- Check if port 5173 is accessible

### "Changes not reflecting"
- Hard refresh browser
- Check Vite terminal for compilation errors
- Restart both servers

### "Module not found" errors
- Run `npm install` to ensure dependencies are installed
- Check if file paths are correct

### CSS changes not showing
- Tailwind CSS needs to be recompiled
- Make sure Vite is running
- Check if classes are in the correct format

## 📚 Additional Resources

- [Laravel Documentation](https://laravel.com/docs)
- [Inertia.js Documentation](https://inertiajs.com)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)

