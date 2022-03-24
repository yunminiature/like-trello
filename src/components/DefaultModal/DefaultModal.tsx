import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const DefaultModal: React.FC<{}> = (props) => {

  return(
    <Modal>
      {props.children}
    </Modal>
  )
}

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255,255,255,0.8);
`

export default DefaultModal;
