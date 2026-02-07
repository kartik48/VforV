# Valentine's Day Website 💕

A romantic and interactive website to ask your special someone to be your Valentine!

## Features

- Beautiful animated gradient background
- Floating hearts animation
- Countdown timer to Valentine's Day
- Interactive photo gallery with modal view
- Background music player
- Fun interactive "Yes/No" buttons (the No button runs away!)
- Celebration animation when she says Yes

## Setup Instructions

### 1. Add Your Photos

Replace the placeholder images with your own photos:
- `photo1.jpg` through `photo6.jpg`

You can add more or fewer photos by editing:
- The HTML file (index.html) - add/remove gallery items
- The JavaScript file (script.js) - update the photos array with your captions

**Important:** Make sure your photos are in the same directory as index.html, or update the paths in the code.

### 2. Add Background Music (Optional)

1. Find a romantic song you both love
2. Convert it to MP3 format
3. Name it `romantic-music.mp3` and place it in the project folder
4. Or update the filename in `index.html` line 15

**Where to find royalty-free music:**
- YouTube Audio Library
- Free Music Archive
- Incompetech

### 3. Customize the Content

Edit `index.html` to personalize:
- The greeting message (line 22)
- Photo captions in `script.js` (lines 2-9)

### 4. Test Locally

Simply open `index.html` in your web browser to test the website!

### 5. Deploy Online (Optional)

To share the website with your girlfriend, you can host it for free on:

**GitHub Pages:**
1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Enable GitHub Pages
5. Share the URL with her!

**Netlify:**
1. Sign up at netlify.com
2. Drag and drop your project folder
3. Get your URL instantly!

**Vercel:**
1. Sign up at vercel.com
2. Import your project
3. Deploy with one click!

## How It Works

The website has 4 main sections:

1. **Welcome** - A sweet greeting to start
2. **Countdown** - Shows time remaining until Valentine's Day
3. **Photo Gallery** - Your favorite memories together
4. **The Big Question** - Will you be my Valentine?

### The Fun Part

When she clicks "No", the button gets smaller and starts moving around while the "Yes" button gets bigger. After enough clicks, the "No" button disappears entirely!

When she clicks "Yes", a celebration animation with hearts appears!

## Customization Tips

### Change Colors
Edit `styles.css` line 11 to change the gradient background colors:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #ff6b95 100%);
```

### Adjust Countdown Date
Edit `script.js` line 53 to change the target date:
```javascript
const valentine = new Date('2026-02-14T00:00:00').getTime();
```

### Add More Photos
1. Add new photo files to the folder
2. Add gallery items in `index.html`
3. Update the photos array in `script.js`

## Troubleshooting

**Photos not showing?**
- Make sure the image files are in the correct location
- Check that filenames match exactly (case-sensitive)
- Try using different image formats (jpg, png, etc.)

**Music not playing?**
- Some browsers block autoplay - user needs to click the music button
- Check that the music file is in MP3 format
- Verify the filename matches in the HTML

**Website looks weird?**
- Make sure all three files (HTML, CSS, JS) are in the same folder
- Clear your browser cache and refresh
- Try a different browser

## Good Luck! 💕

I hope this website helps you create a memorable Valentine's Day moment! Remember, the most important thing is the thought and effort you put into it.

Feel free to customize everything to make it truly special for your relationship!
