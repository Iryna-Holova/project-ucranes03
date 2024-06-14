import MainTitle from 'components/Shared/MainTitle/MainTitle';
import { useSelector } from 'react-redux';
import { selectTestimonials } from 'store/testimonialsSlice/selectors';
import {Swiper, SwiperSlide} from 'swiper/react';

const Testimonials = () => {
  const testimonials = useSelector(selectTestimonials);
  console.log(testimonials);
  return (
    <section>
      <h3>What our customer say</h3>
      <MainTitle>Testimonials</MainTitle>
      <Swiper>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
