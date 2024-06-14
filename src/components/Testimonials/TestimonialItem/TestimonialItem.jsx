import css from './TestimonialItem.module.css';
import icons from '../../../images/icons.svg';

const TestimonialItem = ({author, testimonial}) => {
    return (
        <article className={css.testimonial_item}>
            <svg className={css.icon}>
                <use href={`${icons}#icon-quote`}></use>
              </svg>
            <p className={css.testimonial}>{testimonial}</p>
            <p className={css.testimonial_author}>{author}</p>
        </article>
    )
}

export default TestimonialItem
