import React from 'react';

const Header = ({ title, description }) => {
  React.useEffect(() => {
    document.querySelector('title').innerHTML = title;
    document.querySelector('meta[name="description"]').setAttribute("content", description);
  }, []);
  return (
    <>
    </>
  )
}

export default Header;