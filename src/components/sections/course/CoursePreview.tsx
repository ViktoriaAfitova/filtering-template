import { PartialBy } from '../../../utils/types';
import style from './styles.module.scss';

export interface Course {
  id: string;
  name: string;
  image: string;
  bgColor: string;
  tags: Array<string>;
}

type Props = PartialBy<
  Pick<Course, 'id' | 'name' | 'image' | 'bgColor' | 'tags'>,
  'tags'
>;

export const CoursePreview = ({ name, image, bgColor }: Props) => {
  return (
    <div className={style.card}>
      <div
        style={{
          backgroundColor: bgColor,
          height: '162px',
          borderTopLeftRadius: '18px',
          borderTopRightRadius: '18px',
        }}
      >
        <img src={image} alt={name} className={style.image} />
      </div>
      <h4 className={style.name}>{name}</h4>
    </div>
  );
};
