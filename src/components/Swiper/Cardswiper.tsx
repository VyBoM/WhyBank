import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import styles from '../../components/Swiper/Cardswiper.module.scss';

import metal from '../../assets/img/METAL.png';
import kripto from '../../assets/img/KRIPTO.png';
import luxury from '../../assets/img/LUXURY.png';

export function Cardswiper() {
	return (
		<>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				coverflowEffect={{
					rotate: 50,
					stretch: 2,
					depth: 100,
					modifier: 1,
					slideShadows: true
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination]}
				className='mySwiper'
			>
				<SwiperSlide className={styles.swiper_slide}>
					<img src={metal} />
				</SwiperSlide>

				<SwiperSlide className={styles.swiper_slide}>
					<img src={kripto} />
				</SwiperSlide>

				<SwiperSlide className={styles.swiper_slide}>
					<img src={luxury} />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
