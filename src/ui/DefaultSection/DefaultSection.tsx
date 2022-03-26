import React from 'react';
import styled from 'styled-components';

const DefaultSection: React.FC = ({children}) => {
  return(
    <Section>
      {children}
    </Section>
  )
}

const Section = styled.div`
  margin: 20px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  h3{
    margin: 0;
  }
  p{
    margin: 0 auto 0 20px;
    font-size: 18px;
    line-height: 18px;
  }
`
export default DefaultSection;
