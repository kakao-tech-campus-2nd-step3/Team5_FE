import Header from '@/components/feature/header'
import ShortsThumbnailCard from '@/components/feature/card/ShortsThumbnailCard';

import shortsImg from '@/assets/shorts_img.png';

const MainPage = () => {
  return (
    <>
      <Header />
      <ShortsThumbnailCard 
        image={ { src: shortsImg, alt: 'shorts' } }
        title='인기 쇼츠1'
        timeAgo='1시간 전'
        category='스포츠'
      />
    </>
  )
};

export default MainPage;