# MatFam Platters Menu

A beautiful, responsive menu display application for MatFam Platters restaurant.

## Features

- 📱 Fully responsive design (mobile & desktop)
- 🎨 Elegant burgundy color scheme
- 📄 Print-friendly styling
- 🔄 Easy to update menu items via JSON
- 🚀 Static site - no backend required

## Menu Categories

- Signature Platters
- Snacks & Appetizers
- Desserts
- Beverages
- Hot Drinks

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository: `your-username.github.io` (replace `your-username` with your actual GitHub username)
   - **Important:** The repository name must exactly match this format for GitHub Pages to work
4. Make the repository **Public**
5. Click "Create repository"

### Step 2: Initialize Git and Push Code

Run these commands in your terminal (in the `/home/haxor44/menu` directory):

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: MatFam Platters menu"

# Add your GitHub repository as remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"

### Step 4: Access Your Site

Your menu will be live at: `https://your-username.github.io`

It may take a few minutes for the site to become available after the first deployment.

## Updating the Menu

To update menu items, edit the `menu-data.js` file:

1. Edit the file locally
2. Commit and push changes:
   ```bash
   git add menu-data.js
   git commit -m "Update menu items"
   git push
   ```
3. Changes will be live within a few minutes

## Local Development

Simply open `index.html` in your browser to view the menu locally.

## File Structure

```
menu/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── menu-data.js        # Menu items (easy to update)
├── app.js              # JavaScript for rendering
└── README.md           # This file
```

## Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --burgundy: #6B1C2A;    /* Main color */
    --cream: #F5F1E8;       /* Background */
    --dark-text: #2C1810;   /* Text color */
}
```

### Updating Contact Information

Edit the footer section in `index.html`:

```html
<div class="hours">Open 7 Days<br>6am - 10:30pm<br>Home Deliveries</div>
<div class="contact">Contact Us<br>+254 XXX XXX XXX</div>
```

### Adding Menu Items

Edit `menu-data.js` and add new items to the appropriate category.

## License

Free to use and modify for your restaurant.
