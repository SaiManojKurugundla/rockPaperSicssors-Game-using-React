import {ListContainer, ChoiceButton, ChoiceImage} from './styledComponents'

const Buttons = props => {
  const {choicesList, startGame} = props
  const {id, imageUrl} = choicesList
  const onClickButton = () => {
    startGame(id)
  }

  return (
    <ListContainer key={id}>
      <ChoiceButton
        type="button"
        onClick={onClickButton}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <ChoiceImage src={imageUrl} alt={id} />
      </ChoiceButton>
    </ListContainer>
  )
}

export default Buttons
