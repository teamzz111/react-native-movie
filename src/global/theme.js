const colors = {
  text: '#0A0A0A',
  background: '#FFF',
  primary: '#1476F2',
  secondary: '#595959',
  border: '#E2E8F0',
  modes: {
    dark: {
      text: '#FFF',
      background: '#141414',
      primary: '#1476F2',
      secondary: '#595959',
      border: '#403A3A',
    }
  }
}

const modes = Object.keys(theme.colors.modes).map((key) => key)

modes.unshift('default')

export {
  theme,
  modes
}