import React from 'react'
import './AboutCard.css';
const AboutCard = React.forwardRef(({title,content},ref) => {
  return (
    <div className='about-card-container' ref={ref}>
      <h1>{title}</h1>
        <p>{content}</p>
    </div>
   );
});
export default AboutCard
