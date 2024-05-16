import { useEffect, useState } from 'react';
import { Course, CoursePreview } from './course/CoursePreview';
import { getCourse } from '../../api/api';
import CourseFilter from './course/CourseFilter';
import style from './styles.module.scss';

const NOT_FOUND_COURSE_TITLE = 'УПС!';
const NOT_FOUND_COURSE_DESCRIPTION =
  'На данный момент нет курсов, соответствующих выбранному фильтру.';

export interface FilterOption<T> {
  value: T;
  title: string;
}

type CourseFilterValue =
  | 'Все темы'
  | 'Логика и мышление'
  | 'Загадки'
  | 'Головоломки'
  | 'Путешествия';

const COURSE_FILTER_OPTIONS: Array<FilterOption<CourseFilterValue>> = [
  {
    value: 'Все темы',
    title: 'Все темы',
  },
  {
    value: 'Логика и мышление',
    title: 'Логика и мышление',
  },
  {
    value: 'Загадки',
    title: 'Загадки',
  },
  {
    value: 'Головоломки',
    title: 'Головоломки',
  },
  {
    value: 'Путешествия',
    title: 'Путешествия',
  },
];

const checkFilterIntersection = (
  values: Array<string>,
  activeFilters: Array<string>,
) => {
  return values.some((item) =>
    activeFilters.some((filter) =>
      item.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    ),
  );
};

export const CourseSection = () => {
  const [courseFilter, setCourseFilter] =
    useState<CourseFilterValue>('Все темы');
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

  const activeFilters = [courseFilter].filter((value) => value !== 'Все темы');
  const filteredCourses =
    activeFilters.length === 0
      ? courses
      : courses.filter((course) =>
          checkFilterIntersection(course.tags, activeFilters),
        );

  return (
    <div className={style.section}>
      <div className={style.filterContainer}>
        <CourseFilter
          options={COURSE_FILTER_OPTIONS}
          value={courseFilter}
          onChange={setCourseFilter}
        />
      </div>
      <div className={style.coursesContainer}>
        {filteredCourses.length === 0 ? (
          <div className={style.notFoundCourseContainer}>
            <h1>{NOT_FOUND_COURSE_TITLE}</h1>
            <p>{NOT_FOUND_COURSE_DESCRIPTION}</p>
          </div>
        ) : (
          filteredCourses.map((course) => (
            <CoursePreview
              key={course.id}
              id={course.id}
              name={course.name}
              image={course.image}
              bgColor={course.bgColor}
            />
          ))
        )}
      </div>
    </div>
  );
};
