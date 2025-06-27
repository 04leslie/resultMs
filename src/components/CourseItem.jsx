// src/components/CourseItem.jsx
import React from 'react';

function CourseItem({ title, courseId, onSelect }) {
  const handleClick = () => {
    onSelect(courseId); // Pass the correct courseId
  };

  return (
    <div className="item">
      <p>{title}</p>
      <button className="add-button" onClick={handleClick}>
        Enter Results
      </button>
    </div>
  );
}

export default CourseItem;