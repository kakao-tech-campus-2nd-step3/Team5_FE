import { useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import ShortsThumbnailCard from '@/components/feature/card/ShortsThumbnailCard';
import shortsImg from '@/assets/shorts_img.png';

const shortsData = [
  {
    image: { src: shortsImg, alt: 'Shorts' },
    title: '인기 쇼츠1',
    timeAgo: '2일 전'
  },
  {
    image: { src: shortsImg, alt: 'Shorts' },
    title: '인기 쇼츠2',
    timeAgo: '4시간 전'
  },
  {
    image: { src: shortsImg, alt: 'Shorts' },
    title: '인기 쇼츠3',
    timeAgo: '11시간 전'
  },
  {
    image: { src: shortsImg, alt: 'Shorts' },
    title: '인기 쇼츠4',
    timeAgo: '1시간 전'
  },
  {
    image: { src: shortsImg, alt: 'Shorts' },
    title: '인기 쇼츠5',
    timeAgo: '1시간 전'
  },
  {
    image: { src: shortsImg, alt: 'Shorts' },
    title: '인기 쇼츠6',
    timeAgo: '1시간 전'
  },
  {
    image: { src: shortsImg, alt: 'Shorts' },
    title: '인기 쇼츠7',
    timeAgo: '1시간 전'
  },
  {
    image: { src: shortsImg, alt: 'Shorts' },
    title: '인기 쇼츠8',
    timeAgo: '1시간 전'
  },
];

const ShortsGrid = () => {
  const constraintsRef = useRef(null);

  return (
    <SliderWrapper>
      <SliderContainer
        ref={constraintsRef}
      >
        <Slider
          drag="x"
          dragConstraints={constraintsRef}
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {shortsData.map((shorts, index) => (
            <motion.div key={index} className="card-wrapper">
              <ShortsThumbnailCard
                image={shorts.image}
                title={shorts.title}
                timeAgo={shorts.timeAgo}
              />
            </motion.div>
          ))}
        </Slider>
      </SliderContainer>
    </SliderWrapper>
  );
};

export default ShortsGrid;

const SliderWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  overflow: hidden;
`;

const SliderContainer = styled(motion.div)`
  overflow: 'hidden';
  cursor: 'grab'
`;

const Slider = styled(motion.div)`
  display: flex;
  gap: 30px; 
  .card-wrapper {
    min-width: 180px; 
  }
`;