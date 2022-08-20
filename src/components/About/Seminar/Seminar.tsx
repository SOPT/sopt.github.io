import SeminarImg from '@src/assets/images/SeminarImg.svg';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import { ABOUT_INFO } from '@src/constants/about';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import AboutWrapper from '../AboutWrapper';
import PartInfos from './PartInfos';
import * as S from './Seminar.style';

function Seminar() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  return (
    <AboutWrapper>
      <AboutWrapper.Top
        leftTitleProps={
          <>
            <S.Description>{ABOUT_INFO.SEMINAR.description}</S.Description>
            <UnderlinedTitle fontSize="40px">{ABOUT_INFO.SEMINAR.title}</UnderlinedTitle>
          </>
        }
        leftDescriptionProps={<S.Contents>{ABOUT_INFO.SEMINAR.contents}</S.Contents>}
        rightProps={
          <Image
            src={SeminarImg}
            width={isDesktop ? 280 : 229}
            height={isDesktop ? 300 : 249}
            alt="service - design, plan, server, web, ios, android"
          />
        }
      />
      <AboutWrapper.Content>
        <PartInfos />
      </AboutWrapper.Content>
    </AboutWrapper>
  );
}

export default Seminar;
