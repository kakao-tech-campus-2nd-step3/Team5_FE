import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from '@/components';

import { cn } from '@/lib/utils';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

const LinkCard = () => {
  return (
    <Card className={cn('w-[338px]')}>
      <CardHeader>
        <AspectRatio ratio={5 / 4} className='bg-muted'>
          <img
            src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
            alt='Photo by Drew Beamer'
            className='h-full w-full rounded-md object-cover'
          />
        </AspectRatio>
      </CardHeader>
      <CardContent>
        <CardTitle className={cn('text-2xl font-bold')}>Link</CardTitle>
        <CardDescription className={cn('text-black font-bold')}>
          Convert a long link to a short link
        </CardDescription>
        <CardDescription>24.08.12</CardDescription>
      </CardContent>
    </Card>
  );
};

export default LinkCard;
