import { useEffect, useState } from 'react';
import CourseDetails from './CourseDetails';

const ParentComponent = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:4001/api/courses');
        const json = await response.json();

        if (response.ok) {
          setCourses(json);
        }else{
          console.error('Error fetching courses:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="courses">
      {courses.map((course) => (
        <CourseDetails key={course._id} course={course} />
      ))}
    </div>
  );
};

export default ParentComponent;