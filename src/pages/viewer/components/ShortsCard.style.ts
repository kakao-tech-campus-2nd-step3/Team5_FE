import styled from 'styled-components';

export const InfoContainer = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  padding: 10px 15px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition:
    opacity 0.4s ease,
    visibility 0.4s ease,
    transform 0.4s ease;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 100%;
`;

export const VideoContainer = styled.div`
  width: 100%;
  position: relative;
  padding-top: 177.78%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover ${InfoContainer} {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid #fff;
`;

export const ProfileName = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
`;

export const Title = styled.h3`
  font-size: 13px;
  font-weight: normal;
  color: #d3d3d3;
  margin: 0;
`;
