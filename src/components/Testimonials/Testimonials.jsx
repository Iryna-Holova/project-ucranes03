import MainTitle from 'components/Shared/MainTitle/MainTitle';
import { useSelector } from 'react-redux';
import { selectTestimonials } from 'store/testimonialsSlice/selectors';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import css from './Testimonials.module.css';
import 'swiper/css';

const Testimonials = () => {
  const testimonials = useSelector(selectTestimonials);
  const paginationConfig = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };
  console.log(testimonials);
  return (
    <section>
      <h3>What our customer say</h3>
      <MainTitle>Testimonials</MainTitle>
      <Swiper pagination={paginationConfig} modules={[Pagination]} className="mySwiper">
        {testimonials.map((it) => (
          <SwiperSlide key={it._id}>{it.testimonial}</SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
