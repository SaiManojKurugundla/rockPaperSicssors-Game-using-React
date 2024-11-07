import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  background-size: cover;
  min-height: 100vh;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 40px;
  width: 100%;
`
export const HeadingContainer = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  border: 2px solid #ffffff;
  border-radius: 10px;
  width: 60%;
  padding: 10px;
  margin-bottom: 40px;
  
`

export const ScoreSection = styled.div`
  background-color: #ffffff;
  color: #223a5f;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
`

export const Text = styled.h1`
    font-family: 'Bree Serif';
    font-size: 20px;
`

export const ScoreText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  
`
export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 500px;
  flex-wrap: wrap;
  align-self: center;
`

export const RulesButton = styled.button`
  align-self: flex-end;
`

export const RulesImage = styled.img`
  height: 350px;
  width: 400px;
`

export const PopupContainer = styled.div`
  background-color: #ffffff;
  background-size: cover;
  height: 500px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PopupCloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 25px;
`
