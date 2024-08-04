import React, {useEffect} from 'react';
import './StarrySky.css';

type StarrySkyProps = {
  starCount: number;
};

const StarrySky = ({starCount}: StarrySkyProps) => {
  useEffect(() => {
    const starrySky = document.getElementById('starry-sky');
    if (!starrySky) return;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');

      // Set random position
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;

      // Set fixed size
      star.style.width = '4px';
      star.style.height = '4px';

      // Add the star to the container
      starrySky.appendChild(star);
    }
  }, [starCount]);

  return <div id="starry-sky" className={'starrySky'}></div>;
};

export default StarrySky;
