import styled from "styled-components"
import { Bottle } from "../features/bottle/ui/Bottle"
import { KissCounter } from "../features/score/ui/KissCounter"
import { PlayersCards } from "../entities/players/ui/PlayersCards"
import { KissBlock } from "../features/kissBlock/ui/KissBlock"
import { Timer } from "../features/timer/ui/Timer"
import useAppStore from "../shared/config/store"
import { Button } from "../shared/ui/components/Button"
import { Curtain } from "../shared/ui/components/Curtain"

const Wrapper = styled.div`
  background-image: url(src/assets/background.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: relative;
`

function App() {
  const isKissBlock = useAppStore((state) => state.isKissBlock)
  const startGame = useAppStore((state) => state.startGame)
  return (
    <Wrapper>
      <Curtain isVisible={!startGame} />
      <Button isVisible={!startGame} />
      <Timer isVisible={startGame} />
      <KissBlock isActive={isKissBlock} />
      <KissCounter />
      <Bottle />
      <PlayersCards />
    </Wrapper>
  )
}

export default App
