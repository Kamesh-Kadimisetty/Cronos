export const themeScript = `
(function() {
  function getThemePreference() {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    return 'light'
  }
  
  function applyTheme(theme) {
    // Remove both classes first to ensure clean state
    document.documentElement.classList.remove('dark', 'light')
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      // Default to light theme
      document.documentElement.classList.add('light')
    }
  }
  
  // Force light theme as default - clear any existing dark preference
  if (typeof localStorage !== 'undefined') {
    const existingTheme = localStorage.getItem('theme')
    if (!existingTheme || existingTheme === 'system') {
      localStorage.setItem('theme', 'light')
    }
  }
  
  const theme = getThemePreference()
  applyTheme(theme)
  
  // Store the theme so we can access it later
  window.__theme = theme
  window.__onThemeChange = applyTheme
})()
`
