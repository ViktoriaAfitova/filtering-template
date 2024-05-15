import style from './styles.module.scss';

interface Course {
  id: string;
  name: string;
  image: string;
  bgColor: string;
}

type Props = {
  course: Course;
};

export const CoursePreview = ({ course }: Props) => {
  const { bgColor } = course;

  return (
    <div className={style.card}>
      <div
        style={{
          backgroundColor: bgColor,
          borderTopLeftRadius: '18px',
          borderTopRightRadius: '18px',
        }}
      >
        <img src={course.image} alt={course.name} className={style.image} />
      </div>
      <h4 className={style.name}>{course.name}</h4>
    </div>
  );
};
