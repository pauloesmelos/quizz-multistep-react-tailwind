import React from 'react';

export const GlobalContextSlide = React.createContext();

export const GlobalContextSlideProvider = ({ children }) => {
  const [slideActive, setSlideActive] = React.useState(0);
  const nextSlide = () => {
    setSlideActive(slide => slide + 1);
  }
  const prevSlide = () => {
    if(slideActive > 0)
      setSlideActive(slide => slide - 1);
  }
  return (
    <GlobalContextSlide.Provider value={{slideActive, setSlideActive, nextSlide, prevSlide}}>
      {children}
    </GlobalContextSlide.Provider>
  );
}
