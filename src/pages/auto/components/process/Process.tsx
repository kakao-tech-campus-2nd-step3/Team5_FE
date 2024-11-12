import {
  FaCloudUploadAlt,
  FaAngleDoubleRight,
  FaCloudDownloadAlt,
} from 'react-icons/fa';

import styled from 'styled-components';

type ProcessStepProps = {
  Icon: React.ComponentType<{ size: string; color: string }>;
  label: string;
  isActive: boolean;
};

const ProcessStep = ({ Icon, label, isActive }: ProcessStepProps) => (
  <ProcessIconsWrapper>
    <Icon size='24' color={isActive ? '#000' : '#00000018'} />
    <ProcessText color={isActive ? '#000' : '#00000018'}>{label}</ProcessText>
  </ProcessIconsWrapper>
);

const Process = ({
  processState,
}: {
  processState: 'initial' | 'progress' | 'final';
}) => {
  const steps = [
    {
      icon: FaCloudUploadAlt,
      label: 'Upload',
      state: 'initial',
    },
    {
      icon: FaAngleDoubleRight,
      label: 'Convert',
      state: 'progress',
    },
    {
      icon: FaCloudDownloadAlt,
      label: 'Extraction',
      state: 'final',
    },
  ];

  return (
    <ProcessContainer>
      {steps.map(({ icon: Icon, label, state }) => (
        <ProcessStep
          key={state}
          Icon={Icon}
          label={label}
          isActive={processState === state}
        />
      ))}
    </ProcessContainer>
  );
};

export default Process;

const ProcessContainer = styled.ol`
  display: flex;
  gap: 48px;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

const ProcessIconsWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
`;

const ProcessText = styled.strong<{ color: string }>`
  font-size: 16px;
  color: ${(props) => props.color};
`;
