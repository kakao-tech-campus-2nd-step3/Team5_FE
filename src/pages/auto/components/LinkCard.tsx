import * as CommonUI from '@/components/common';

import { cn } from '@/lib/utils';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

const LinkCard = () => {
  return (
    <CommonUI.Card className={cn('w-[338px]')}>
      <CommonUI.CardHeader>
        <AspectRatio ratio={5 / 4} className='bg-muted'>
          <img
            src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
            alt='Photo by Drew Beamer'
            className='h-full w-full rounded-md object-cover'
          />
        </AspectRatio>
      </CommonUI.CardHeader>
      <CommonUI.CardContent>
        <CommonUI.CardTitle className={cn('text-2xl font-bold')}>
          Link
        </CommonUI.CardTitle>
        <CommonUI.CardDescription className={cn('text-black font-bold')}>
          Convert a long link to a short link
        </CommonUI.CardDescription>
        <CommonUI.CardDescription>24.08.12</CommonUI.CardDescription>
      </CommonUI.CardContent>
    </CommonUI.Card>
  );
};

export default LinkCard;
