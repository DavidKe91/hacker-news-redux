import styled from 'styled-components';
import { mobile, tablet } from 'styles/mediaQueries';

export const Wrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  overflow: hidden;
  padding-bottom: 200px;

  ${tablet} {
    width: 96%;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 25px;
  font-weight: 300;
`;

export const TitleWrapper = styled.div`
    display: block;
    text-align: center;
    margin: 35px 0px;

  ${mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
`;

export const SocialLink = styled.a`
  margin-left: 16px;

  i {
    color: ${({ theme }) => theme.text};
  }

  ${mobile} {
    margin-left: 0;
    margin-right: 16px;
  }
`;
