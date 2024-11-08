import { useState, useRef, useEffect } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { ShortsThumbnailCard } from '@/components';

import shortsImg from '@/assets/shorts_img.png';

const shortsData = [
  {
    image: { src: shortsImg, alt: 'Shorts' },
    title: '인기 쇼츠1',
    timeAgo: '2일 전',
  },
  {
    image: { src: shortsImg, alt: 'Shorts' },
    title: '인기 쇼츠2',
    timeAgo: '4시간 전',
  },
  {
    image: { src: shortsImg, alt: 'Shorts' },
    title: '인기 쇼츠3',
    timeAgo: '11시간 전',
  },
  {
    image: { src: shortsImg, alt: 'Shorts' },
    title: '인기 쇼츠4',
    timeAgo: '1시간 전',
  },
  {
    image: { src: shortsImg, alt: 'Shorts' },
    title: '인기 쇼츠5',
    timeAgo: '1시간 전',
  },
  {
    image: { src: shortsImg, alt: 'Shorts' },
    title: '인기 쇼츠6',
    timeAgo: '1시간 전',
  },
  {
    image: { src: shortsImg, alt: 'Shorts' },
    title: '인기 쇼츠7',
    timeAgo: '1시간 전',
  },
  {
    image: { src: shortsImg, alt: 'Shorts' },
    title: '인기 쇼츠8',
    timeAgo: '1시간 전',
  },
];

const CARD_WIDTH = 210; 
const SLIDE_AMOUNT = CARD_WIDTH * 2;

const ShortsGrid = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [maxPosition, setMaxPosition] = useState(0);

  useEffect(() => {
    if (constraintsRef.current) {
      const sliderWidth = constraintsRef.current.scrollWidth;
      const containerWidth = constraintsRef.current.offsetWidth;
      setMaxPosition(-(sliderWidth - containerWidth));
    }
  }, []);

  const handlePrev = () => {
    setPosition((prev) => Math.min(prev + SLIDE_AMOUNT, 0));
  };

  const handleNext = () => {
    setPosition((prev) => Math.max(prev - SLIDE_AMOUNT, maxPosition));
  };

  return (
    <SliderWrapper>
      <Button onClick={handlePrev} disabled={position === 0}>
        {'<'}
      </Button>
      <SliderContainer ref={constraintsRef}>
        <Slider
          animate={{ x: position }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {shortsData.map((shorts, index) => (
            <motion.div key={index} className='card-wrapper'>
              <ShortsThumbnailCard
                image={shorts.image}
                title={shorts.title}
                timeAgo={shorts.timeAgo}
              />
            </motion.div>
          ))}
        </Slider>
      </SliderContainer>
      <Button onClick={handleNext} disabled={position === maxPosition}>
        {'>'}
      </Button>
    </SliderWrapper>
  );
};

export default ShortsGrid;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  overflow: hidden;
  flex: 1;
`;

const Slider = styled(motion.div)`
  display: flex;
  gap: 30px;
  .card-wrapper {
    min-width: 180px;
  }
`;

const Button = styled.button`
  background-color: #ddd;
  border: none;
  border-radius: 15%;
  padding: 10px;
  margin: 0 20px;
  font-size: 24px;
  cursor: pointer;
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
