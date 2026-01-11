# 🌟 About Me Website Template

A beautiful, easy-to-customize "About Me" website template perfect for sharing your social media links, Discord, and personal information. **No coding experience required!**

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

## ✨ Features

- 🎨 **Modern & Responsive Design** - Looks great on all devices (desktop, tablet, mobile)
- 🌓 **Dark/Light Mode** - Built-in theme toggle with automatic preference saving
- 🔗 **Social Media Integration** - Pre-configured for Discord, Twitter, Instagram, YouTube, Twitch, TikTok, and more
- 📝 **Easy to Customize** - Clear comments throughout the code showing you exactly what to change
- 🚀 **No Build Required** - Just edit and open in your browser
- ♿ **Accessible** - Built with accessibility best practices
- 📱 **Mobile-First** - Optimized for all screen sizes

## 🚀 Quick Start (For Complete Beginners)

### Step 1: Get the Files

1. Click the green **"Code"** button at the top of this page
2. Select **"Download ZIP"**
3. Extract the ZIP file to a folder on your computer

### Step 2: Customize Your Page

Open the files in a text editor (like Notepad on Windows, TextEdit on Mac, or download [VS Code](https://code.visualstudio.com/) for a better experience).

#### 📄 Edit `index.html`

Look for comments that say `<!-- CUSTOMIZE: ... -->` - these show you exactly what to change:

1. **Your Name & Title** (Lines 37-38)
   ```html
   <h1 class="name">Your Name Here</h1>
   <p class="tagline">Content Creator | Gamer | Artist</p>
   ```

2. **Profile Picture** (Line 34)
   ```html
   <img src="https://via.placeholder.com/200" alt="Profile Picture">
   ```
   Replace the URL with your image link or use a local file like `src="my-photo.jpg"`

3. **About Me Bio** (Lines 45-51)
   ```html
   <p>
       Hey there! 👋 Welcome to my corner of the internet...
   </p>
   ```

4. **Social Media Links** (Lines 67-122)
   - Replace `YOUR_USERNAME` or `YOUR_DISCORD_ID` with your actual usernames
   - Remove any social links you don't use (delete the entire `<a>` tag)
   - Keep the ones you want!

5. **Interests** (Lines 131-161)
   - Change the icons, titles, and descriptions to match your interests
   - Add or remove interest cards as needed

#### 🎨 Edit `style.css` (Optional)

Want to change colors? Look for the section at the top:

```css
:root {
    --accent-color: #667eea;  /* Change this to your favorite color! */
    --accent-hover: #5a67d8;  /* A slightly darker shade */
}
```

Try these color codes:
- Purple: `#667eea`
- Pink: `#ed64a6`
- Blue: `#4299e1`
- Green: `#48bb78`
- Orange: `#ed8936`

### Step 3: View Your Page

1. Find the `index.html` file in your folder
2. Double-click it to open in your web browser
3. Admire your new About Me page! 🎉

## 📤 How to Publish Your Website

### Option 1: GitHub Pages (Free & Easy)

1. Create a free [GitHub account](https://github.com)
2. Create a new repository called `yourusername.github.io`
3. Upload your files (index.html, style.css, script.js)
4. Your site will be live at `https://yourusername.github.io`

### Option 2: Netlify (Free & Simple)

1. Create a free [Netlify account](https://netlify.com)
2. Drag and drop your folder onto Netlify
3. Get an instant live website!

### Option 3: Neocities (Free)

1. Create a free [Neocities account](https://neocities.org)
2. Upload your files through their dashboard
3. Your site is live!

## 🎯 Customization Guide

### Adding a New Social Media Link

Copy one of the existing social link blocks and modify it:

```html
<a href="YOUR_LINK_HERE" target="_blank" class="social-link YOUR-PLATFORM">
    <i class="fab fa-YOUR-ICON"></i>
    <span>Platform Name</span>
</a>
```

Find icons at [Font Awesome](https://fontawesome.com/icons)

Then add a color in `style.css`:

```css
.social-link.YOUR-PLATFORM:hover { 
    background: #COLOR_CODE; 
    color: white; 
    border-color: #COLOR_CODE; 
}
```

### Changing Fonts

The template uses "Poppins" from Google Fonts. To use a different font:

1. Go to [Google Fonts](https://fonts.google.com)
2. Select a font you like
3. Copy the import line and replace line 7 in `style.css`
4. Update the `font-family` on line 31

### Removing Sections

Don't want the Interests section? Delete lines 131-162 in `index.html`

## 📁 File Structure

```
AboutMeTemplate/
│
├── index.html      # Main HTML file (your content goes here)
├── style.css       # Styling file (colors, layout, design)
├── script.js       # JavaScript file (theme toggle, animations)
└── README.md       # This file (instructions)
```

## 🆘 Troubleshooting

**Q: My social media icons aren't showing**
- Make sure you have internet connection (icons load from Font Awesome CDN)
- Check that line 10 in `index.html` is intact

**Q: My image isn't loading**
- Make sure the image file is in the same folder as `index.html`
- Check the spelling of the filename (it's case-sensitive!)
- Or use an image URL from the internet

**Q: Colors look weird**
- Make sure you're using valid color codes (hex codes like #667eea)
- Test your colors at [Color Picker](https://htmlcolorcodes.com/)

**Q: Theme toggle isn't working**
- Make sure `script.js` is in the same folder
- Check that line 165 in `index.html` is intact

## 🎨 Example Color Schemes

### Cyberpunk
```css
--accent-color: #ff0080;
--bg-primary: #1a0033;
```

### Ocean
```css
--accent-color: #00d4ff;
--bg-primary: #001a33;
```

### Forest
```css
--accent-color: #00ff7f;
--bg-primary: #0d1f0d;
```

### Sunset
```css
--accent-color: #ff6b35;
--bg-primary: #2b1a1a;
```

## 🤝 Contributing

Found a bug or want to suggest an improvement? Feel free to open an issue or submit a pull request!

## 📝 License

This template is free to use for personal and commercial projects. No attribution required (but appreciated!).

## 💡 Tips

- **Test on mobile**: View your site on your phone to make sure it looks good
- **Keep it simple**: Don't overload with too much information
- **Update regularly**: Keep your links and info current
- **Have fun**: Make it your own! This is YOUR page

## 🌟 Showcase

Using this template? We'd love to see what you create! Share your page by opening an issue with the "Showcase" tag.

---

Made with ❤️ for the community. Happy customizing! 🎉

**Need help?** Open an issue and we'll help you out!
