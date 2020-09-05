import React from 'react'

const ThemeProvider = ({ children }) => {
  return (
    <>
        {children}
      <GlobalStyles />
    </>
  )
};

export default ThemeProvider;