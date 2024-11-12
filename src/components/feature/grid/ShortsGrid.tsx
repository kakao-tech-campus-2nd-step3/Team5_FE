import { useState, useRef, useEffect } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { ShortsThumbnailCard } from '@/components';

import {
  fetchShortsByCategory,
  ShortsVideoProps,
} from '@/pages/main/apis/fetchShortsList.api';

interface ShortsGridProps {
  categoryId: number;
}

const CARD_WIDTH = 210;
const SLIDE_AMOUNT = CARD_WIDTH * 3;

const ShortsGrid = ({ categoryId }: ShortsGridProps) => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [maxPosition, setMaxPosition] = useState(0);
  const [shortsData, setShortsData] = useState<ShortsVideoProps[]>([]);

  useEffect(() => {
    const loadShorts = async () => {
      try {
        const data = await fetchShortsByCategory({
          categoryId,
          page: 0,
          size: 10,
        });
        setShortsData(data);
      } catch (error) {
        console.error('Error fetching shorts:', error);
      }
    };
    loadShorts();
  }, [categoryId]);

  useEffect(() => {
    if (constraintsRef.current) {
      const sliderWidth = constraintsRef.current.scrollWidth;
      const containerWidth = constraintsRef.current.offsetWidth;
      setMaxPosition(-(sliderWidth - containerWidth));
    }
  }, [shortsData]);

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
          {shortsData.map((short, index) => (
            <motion.div key={index} className='card-wrapper'>
              <ShortsThumbnailCard
                videoId={short.videoId}
                image={{ src: short.thumbnail, alt: short.title }}
                title={short.title}
                timeAgo={short.createdAt}
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
  margin: 20px 0;
  padding: 0 10px;
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
    min-width: ${CARD_WIDTH}px;
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
