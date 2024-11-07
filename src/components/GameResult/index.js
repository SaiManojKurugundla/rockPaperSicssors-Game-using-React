import {
  GameResultContainer,
  ResultImageContainer,
  ResultName,
  ResultText,
  GameImage,
  PlayAgainButton,
  CustomContainer,
} from './styledComponents'

const GameResult = props => {
  const {playAgain, resultText, yourImage, opponentImage} = props
  const onClickPlayAgain = () => {
    playAgain()
  }
  return (
    <GameResultContainer>
      <ResultImageContainer>
        <CustomContainer>
          <ResultName>YOU</ResultName>
          <GameImage src={yourImage} alt="your choice" />
        </CustomContainer>
        <CustomContainer>
          <ResultName>OPPONENT</ResultName>
          <GameImage src={opponentImage} alt="opponent choice" />
        </CustomContainer>
      </ResultImageContainer>
      <CustomContainer>
        <ResultText>{resultText}</ResultText>
        <PlayAgainButton type="button" onClick={onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </CustomContainer>
    </GameResultContainer>
  )
}

export default GameResult
