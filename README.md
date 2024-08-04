# Portfolio Website Template

This is a template for a simple portfolio website that show outlines your skills, works and experiences.

### Live example

[Live Site](https://devdivine.netlify.app/) - https://devdivine.netlify.app/

## Requirements

- Basic knowledge of HTML
- Basic knowledge of CSS

### Pros

- Responsive and accessible on multiple devices
- Compatible with popular browsers
- Beautiful UI
- Customizable Theme
- Dark mode
- Nice interactions

### Built-in

Html, CSS and JavaScript

### Customizable

```
:root {
  box-sizing: border-box;

  /* Color palette */
  --primary-color: #da3030;
  --secondary-color: #b65d5d;
  --background-color: #e6e6e6;
  --secondary-bg-color: #f7f0f0;
  --text-color: #1b0b0b;
  --text-light-color: #9a3636;
  --border-color: #aaa9a9;
  --shadow-color: #2525257d;

  /* Font sizes */
  --font-size-base: 16px;
  --font-size-xl: 2rem;
  --font-size-lg: 1.5rem;
  --font-size-md: 1.125rem;
  --font-size-sm: 0.875rem;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 32px;
  --spacing-xl: 64px;

  /* Border radius */
  --border-radius: 5px;
  --border-radius-large: 10px;
  --border-radius-xl: 15px;
  --border-radius-full: 100%;

  /* Transition */
  --transition-speed: 300ms;
  --transition-delay: 100ms;
}
```

### For dark mode

```
.dark,
.dark * {
  --primary-color: #dc3f3f;
  --secondary-color: #b65d5d;
  --background-color: #252222;
  --secondary-bg-color: #2d2b2b;
  --nav-background-color: #352f2f;
  --text-color: #d3d3d3;
  --text-light-color: #fda4a4;
  --border-color: #db7c7c;
}
```

You can customize the look and feel by modifying these custom properties

```
<h1>Hi, I'm [Enter name] Divine</h1>
```

Customize the content by changing the values in the square brackets

### Images and Icons

All the images and icons are contained in the assets folder.

### Hosting

You can deploy and host your portfolio with services like [Vercel](vercel.com), [Netlify](app.netlify.com) or any other solution.
