import styled from 'styled-components';

type StatusDotProps = {
  status: 'success' | 'error' | 'processing' | 'idle';
  size?: number;
  className?: string;
};

// Status에 따른 색상 지정
const statusColors = {
  success: '#4CAF50', // 초록색
  error: '#F44336', // 빨간색
  processing: '#FF9800', // 주황색
  idle: '#B0BEC5', // 회색
};

const Dot = styled.div<{ size: number; color: string }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
  animation: ${(props) =>
    props.color === statusColors.processing ? 'load 1.5s infinite' : 'none'};

  @keyframes load {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
  }
`;

const StatusDot: React.FC<StatusDotProps> = ({
  status,
  size = 12,
  className,
}) => {
  const color = statusColors[status] || statusColors.idle;

  return <Dot className={className} size={size} color={color} />;
};

export default StatusDot;
