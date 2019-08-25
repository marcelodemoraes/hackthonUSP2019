import React from 'react'
import styled from 'styled-components'
import { ButtonBase, Dialog } from '@material-ui/core'
import { navigate } from '@reach/router'

import { MAX_SLOTS } from './ScheduleTime'
import Button from './common/Button'

import { setData } from './utils'

const Card = styled(ButtonBase)`
  && {
    border-radius: 10px;
    margin: 10px;
    height: 70px;
    background-color: ${props => props.full ? '#a52828d9':  '#00000052' };
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 40px;
    text-align: center;
    @media(min-width: 800px) {
      width: 30%;
    }
    > span {
      width: 100%;     
    }
  }
`

const Slots = styled.div`
  color: #ffffff;
  width: 90px;
  height: calc(100% - 2px);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  span {
    font-size: 22px;
    font-weight: bold;
  }
`;

const Modal = styled(Dialog)`
  && {
    background-color: #381654 !important;
    @supports (backdrop-filter: none) {
      & {
        background-color: transparent !important;
        backdrop-filter: blur(10px);
        background: linear-gradient(0deg, transparent, transparent);
      }
    }
  }
`

const ModalWrapper = styled.div`
  min-height: 300px;
  font-size: 34px;
  background-color: #0c3e8824;
  padding: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  justify-content: space-around;
  > span {
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > button {
    margin: 5px 0;
  }
`;

const ScheduleCard = ({ slots, time }) => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Card full={slots >= MAX_SLOTS} disabled={slots >= MAX_SLOTS} onClick={() => setModalOpen(true)}>
        <span>
          {time}
        </span>
        <Slots>
          Vagas: <span> {MAX_SLOTS - slots} </span>
        </Slots>
      </Card>
      <Modal onClose={() => setModalOpen(false)} open={isModalOpen}>
        <ModalWrapper>
          <span> Deseja agendar para as {time}h? </span>
          <ButtonWrapper>
            <Button variant={'contained'} color={'primary'} onClick={() => {
              setData({ slots, time })
              navigate('/mobile/scheduled')
            }}>
              Confirmar
            </Button>
            <Button variant={'contained'} color={'secondary'} onClick={() => setModalOpen(false)}>
              Cancelar
            </Button>
          </ButtonWrapper>
        </ModalWrapper>
      </Modal>
    </>
  )
}

export default ScheduleCard;
