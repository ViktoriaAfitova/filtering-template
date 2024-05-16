import style from './styles.module.scss';

interface FilterOption<T> {
  title: string;
  value: T;
}

interface Props<T extends string> {
  options: Array<FilterOption<T>>;
  value: T;
  onChange: (value: T) => void;
}

function CourseFilter<T extends string>({
  options,
  value,
  onChange,
}: Props<T>) {
  return (
    <div className={style.filterGroup}>
      {options.map((option) => (
        <button
          className={`${style.filterItem} ${option.value === value ? style.oppositeColor : ''}`}
          type='button'
          key={option.value}
          onClick={() => onChange(option.value)}
        >
          {option.title}
        </button>
      ))}
    </div>
  );
}

export default CourseFilter;
