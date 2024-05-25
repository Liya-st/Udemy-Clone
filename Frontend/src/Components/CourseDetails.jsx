import { useEffect, useState } from 'react';

const CourseDetails = ({ course }) => {
  return (
    <div className="courses">
      <p key={course._id}>{course.name}</p>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Category:</strong> {course.category}</p>
      
    </div>
        
  );
};

export default CourseDetails;