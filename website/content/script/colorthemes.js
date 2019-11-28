function activateDeuteranopyMode() {
  const rootElement = document.querySelector(':root')
  const deuteranopyTheme = {
    '--background-color': '#1e1e1e',
    '--primary-color': '#157efb',
    '--font-color': '#dedede',
    '--subtle-primary-color': '#151513',
    '--block-background-color': '#323232',
    '--menu-item-color': '#dedede',
    '--menu-item-hover-color': '#157efb',
    '--menu-item-alert-bg': '#151513',
    '--menu-item-alert-shadow': '#151513',
    '--alert-border-color': '#000',
    '--tertiary-color:': '#727680'
  }
  for(k in deuteranopyTheme) {
    rootElement.style.setProperty(k, deuteranopyTheme[k])
  }
  alert("Tema alterado com sucesso!");
}

function activateProtanopyMode() {
  const rootElement = document.querySelector(':root')
  const protanopyTheme = {
    '--background-color': '#fff',
    '--page-width': '70em',
    '--primary-color': '#151513',
    '--font-color': '#151513',
    '--subtle-primary-color': '#151513',
    '--block-background-color': '#f1f3f4',
    '--menu-item-color': '#000',
    '--menu-item-hover-color': '#000',
    '--menu-item-alert-bg': '#ffffff',
    '--menu-item-alert-shadow': '#dfe1e7',
    '--alert-border-color': '#dfe1e7',
    '--tertiary-color:': '#727680'
  }
  for(k in protanopyTheme) {
    rootElement.style.setProperty(k, protanopyTheme[k])
  }
  alert("Tema alterado com sucesso!");
}

function activateTritanopyMode() {
  const rootElement = document.querySelector(':root')
  const tritanopyTheme = {
    '--background-color': '#fff',
    '--page-width': '70em',
    '--primary-color': '#151513',
    '--font-color': '#151513',
    '--subtle-primary-color': '#151513',
    '--block-background-color': '#f1f3f4',
    '--menu-item-color': '#000',
    '--menu-item-hover-color': '#000',
    '--menu-item-alert-bg': '#ffffff',
    '--menu-item-alert-shadow': '#dfe1e7',
    '--alert-border-color': '#dfe1e7',
    '--tertiary-color:': '#727680'
  }
  for(k in tritanopyTheme) {
    rootElement.style.setProperty(k, tritanopyTheme[k])
  }
  alert("Tema alterado com sucesso!");
}

function activateNormalMode() {
  const rootElement = document.querySelector(':root')
  const normalTheme = {
    '--background-color': '#fff',
    '--page-width': '70em',
    '--primary-color': '#151513',
    '--font-color': '#151513',
    '--subtle-primary-color': '#151513',
    '--block-background-color': '#f1f3f4',
    '--menu-item-color': '#000',
    '--menu-item-hover-color': '#000',
    '--menu-item-alert-bg': '#ffffff',
    '--menu-item-alert-shadow': '#dfe1e7',
    '--alert-border-color': '#dfe1e7',
    '--tertiary-color:': '#727680'
  }
  for(k in normalTheme) {
    rootElement.style.setProperty(k, normalTheme[k])
  }
  alert("Tema alterado com sucesso!");
}

/**
 * Sets a color scheme for the website.
 * If browser supports "prefers-color-scheme" it will respect the setting for light or dark mode
 * otherwise it will set a dark theme during night time
 */
function setColorScheme() {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
  const isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches
  const isNotSpecified = window.matchMedia("(prefers-color-scheme: no-preference)").matches
  const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;

  window.matchMedia("(prefers-color-scheme: dark)").addListener(e => e.matches && activateDarkMode())
  window.matchMedia("(prefers-color-scheme: light)").addListener(e => e.matches && activateLightMode())

  if(isDarkMode) activateDarkMode()
  if(isLightMode) activateLightMode()
  if(isNotSpecified || hasNoSupport) {
    console.log('You specified no preference for a color scheme or your browser does not support it. I Schedule dark mode during night time.')
    now = new Date();
    hour = now.getHours();
    if (hour < 4 || hour >= 16) {
      activateDarkMode();
    }
  }
}