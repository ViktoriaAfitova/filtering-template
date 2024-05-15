import { useEffect, useState } from 'react';
import { CoursePreview } from '../../components/course-preview/CoursePreview';
import { getCourse } from '../../api/api';
import style from './styles.module.scss';

interface Course {
  name: string;
  id: string;
  image: string;
  bgColor: string;
}

export const Home = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    getCourse()
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }, []);

  if (!courses) {
    return <p>Loading...</p>;
  }

  return (
    <div className={style.section}>
      <div>Filter Tags</div>
      <div className={style.coursesContainer}>
        {courses.map((course) => (
          <CoursePreview key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};
