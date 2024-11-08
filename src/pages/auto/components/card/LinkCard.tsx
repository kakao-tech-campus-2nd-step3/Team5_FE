import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from '@/components';

import { useLinkContext } from '@/pages/auto/provider';

import { cn } from '@/lib/utils';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

const LinkCard = () => {
  const { linkState } = useLinkContext();

  console.log('state', linkState);

  return (
    <Card className={cn('w-[338px]')}>
      <CardHeader>
        <AspectRatio
          ratio={5 / 4}
          className='bg-muted flex justify-center align-middle'
        >
          {linkState.url ? (
            <iframe src={linkState.url} />
          ) : (
            <img
              src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
              alt='Photo by Drew Beamer'
              className='h-full w-full rounded-md object-cover'
            />
          )}
        </AspectRatio>
      </CardHeader>
      <CardContent>
        <CardTitle className={cn('text-2xl font-bold')}>
          {linkState.title || 'Default Title'}
        </CardTitle>
        <CardDescription className={cn('text-black font-bold')}>
          {linkState.user || 'Default User'}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default LinkCard;
