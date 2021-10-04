import s from './NotFound.module.css';
import notFound from '../../img/404error.jpg';

export default function NotFound() {
  return (
    <div className={s.NotFound}>
      <h1 className={s.title}>PAGE NOT FOUND</h1>
      <img className={s.img} src={notFound} alt="page not found" />
    </div>
  );
}
