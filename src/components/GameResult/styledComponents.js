import styled from 'styled-components'

export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  margin-right: 40px;
  @media screen and (max-width: 576px) {
    width: 30%;
  }
`
export const ResultName = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 500;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const ResultText = styled.p`
  color: white;
  font-size: 25px;
  font-weight: 500;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
export const PlayAgainButton = styled.button`
  padding: 10px 20px 10px 20px;
  color: #223a5f;
  background-color: #ffffff;
  font-size: 10px;
  align-items: center;
  border-radius: 5px;
  border-style: none;
  outline: none;
  margin-top: 20px;
`
export const GameImage = styled.img`
  width: 150px;
  height: 150px;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
  }
`
