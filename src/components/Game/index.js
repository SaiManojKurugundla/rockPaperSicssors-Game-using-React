import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import Buttons from '../Buttons'
import GameResult from '../GameResult'

import {
  MainContainer,
  HeadingContainer,
  ScoreSection,
  Text,
  ScoreText,
  UnorderedList,
  RulesButton,
  RulesImage,
  PopupContainer,
  PopupCloseButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Game extends Component {
  state = {
    score: 0,
    you: '',
    opponent: '',
    onShow: false,
    resultText: '',
  }

  updateScore = () => {
    const {you, opponent} = this.state
    if (
      (you === 'ROCK' && opponent === 'SCISSORS') ||
      (you === 'SCISSORS' && opponent === 'PAPER') ||
      (you === 'PAPER' && opponent === 'ROCK')
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        resultText: 'YOU WON',
      }))
    } else if (
      (you === 'ROCK' && opponent === 'ROCK') ||
      (you === 'SCISSORS' && opponent === 'SCISSORS') ||
      (you === 'PAPER' && opponent === 'PAPER')
    ) {
      this.setState({resultText: 'IT IS DRAW'})
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        resultText: 'YOU LOSE',
      }))
    }
  }

  onStartGame = id => {
    const random =
      choicesList[Math.floor(Math.random() * choicesList.length)].id
    this.setState(
      prevState => ({you: id, opponent: random, onShow: !prevState.onShow}),
      this.updateScore,
    )
  }

  onPlayAgain = () => {
    this.setState(prevState => ({onShow: !prevState.onShow}))
  }

  render() {
    const {onShow, resultText, score, you, opponent} = this.state
    const yourSelection = choicesList.find(eachItem => eachItem.id === you)
    const opponentSelection = choicesList.find(
      eachItem => eachItem.id === opponent,
    )
    return (
      <MainContainer>
        <HeadingContainer>
          <div>
            <Text>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </Text>
          </div>
          <ScoreSection>
            <ScoreText>Score</ScoreText>
            <ScoreText>{score}</ScoreText>
          </ScoreSection>
        </HeadingContainer>

        {!onShow && (
          <UnorderedList className="unordered-choice-list">
            {choicesList.map(eachChoice => (
              <Buttons
                choicesList={eachChoice}
                key={eachChoice.id}
                startGame={this.onStartGame}
              />
            ))}
          </UnorderedList>
        )}

        {onShow && (
          <GameResult
            playAgain={this.onPlayAgain}
            resultText={resultText}
            yourImage={yourSelection.imageUrl}
            opponentImage={opponentSelection.imageUrl}
          />
        )}

        <Popup
          modal
          trigger={<RulesButton type="button">Rules</RulesButton>}
          position="left bottom center"
        >
          {close => (
            <PopupContainer>
              <PopupCloseButton
                onClick={close}
                type="button"
                className="close-btn"
              >
                <RiCloseLine />
              </PopupCloseButton>

              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopupContainer>
          )}
        </Popup>
      </MainContainer>
    )
  }
}

export default Game
