import React from 'react'
// Понадобиться, если создавать свою тему SC
const ThemeProvider = ({ children }) => {
  return (
    <>
        {children}
      <GlobalStyles />
    </>
  )
};

export default ThemeProvider;