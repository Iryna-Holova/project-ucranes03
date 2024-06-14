import MainTitle from 'components/Shared/MainTitle/MainTitle';
import { useSelector } from 'react-redux';
import { selectTestimonials } from 'store/testimonialsSlice/selectors';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import css from './Testimonials.module.css';
import 'swiper/css';
import TestimonialItem from './TestimonialItem/TestimonialItem';

const Testimonials = () => {
  const testimonials = useSelector(selectTestimonials);
  const paginationConfig = {
    clickable: true,
    renderBullet: function (_, className) {
      return '<span class="' + className + '"></span>';
    },
  };
  return (
    <section>
      <p className={css.info_title}>What our customer say</p>
      <MainTitle><span className={css.title}>Testimonials</span></MainTitle>
      <Swiper
        pagination={paginationConfig}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testimonials.map((it) => (
          <SwiperSlide key={it._id}>
            <TestimonialItem author={it.owner.name} testimonial={it.testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
