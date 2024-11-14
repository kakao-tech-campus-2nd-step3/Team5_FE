import { AspectRatio } from '@radix-ui/react-aspect-ratio';

const ShortsVideo = ({
  url,
  isSelected,
  onClick,
}: {
  url: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    // Enter(13) 또는 Space(32) 키로 클릭 이벤트를 트리거
    if (event.key === 'Enter' || event.key === ' ') {
      onClick();
    }
  };

  return (
    <AspectRatio ratio={8 / 3} style={{ width: '100%', height: '100%' }}>
      <div
        role='button'
        tabIndex={0}
        style={{
          border: isSelected ? '6px solid #4caf50' : '2px solid transparent',
          cursor: 'pointer',
          width: '100%',
          height: 'auto',
        }}
        onClick={onClick}
        onKeyDown={handleKeyDown}
      >
        <video src={url} style={{ width: '100%', height: '100%' }} controls />
      </div>
    </AspectRatio>
  );
};

export default ShortsVideo;
