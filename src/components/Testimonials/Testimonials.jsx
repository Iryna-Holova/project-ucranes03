import MainTitle from 'components/Shared/MainTitle/MainTitle';
import { useSelector } from 'react-redux';
import { selectTestimonials } from 'store/testimonialsSlice/selectors';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { selectAreTestimonialsLoading } from 'store/testimonialsSlice/selectors';

import css from './Testimonials.module.css';
import 'swiper/css';
import TestimonialItem from './TestimonialItem/TestimonialItem';
import Loader from 'components/Shared/Loader/Loader';

const Testimonials = () => {
  const testimonials = useSelector(selectTestimonials);
  const isLoading = useSelector(selectAreTestimonialsLoading);

  const paginationConfig = {
    clickable: true,
    renderBullet: function (_, className) {
      return '<span class="' + className + '"></span>';
    },
  };

  const autoplayConfig = {
    delay: 5000
  };

  const testimonialsList = testimonials.length ? (
    <Swiper
      pagination={paginationConfig}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      autoplay={autoplayConfig}
    >
      {testimonials.map(it => (
        <SwiperSlide key={it._id}>
          <TestimonialItem
            author={it.owner.name}
            testimonial={it.testimonial}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    ''
  );

  return (
    <section>
      <p className={css.info_title}>What our customer say</p>
      <MainTitle>
        <span className={css.title}>Testimonials</span>
      </MainTitle>
      {isLoading ? <Loader /> : testimonialsList}
    </section>
  );
};

export default Testimonials;
