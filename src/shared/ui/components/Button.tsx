import styled from "styled-components"
import useAppStore from "../../config/store"
import breakpoints from "../../lib/utils"

const Wrapper = styled.button<{ $isVisible?: boolean }>`
  height: 70px;
  width: 200px;
  border-radius: 10px;
  padding: 10px;
  background-color: red;
  border: 1px solid white;
  color: white;
  font-size: 25px;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  text-align: center;
  cursor: pointer;
  transition: 1s all;
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.Laptop4K}) {
    height: 70px;
    width: 200px;
  }

  @media (min-width: ${breakpoints.LaptopL}) and (max-width: ${breakpoints.Laptop4K}) {
    height: 70px;
    width: 200px;
  }

  @media (min-width: ${breakpoints.Laptop}) and (max-width: ${breakpoints.LaptopL}) {
    height: 70px;
    width: 200px;
  }

  @media (min-width: ${breakpoints.Tablet}) and (max-width: ${breakpoints.Laptop}) {
    height: 70px;
    width: 200px;
  }

  @media (min-width: ${breakpoints.MobileL}) and (max-width: ${breakpoints.Tablet}) {
    height: 50px;
    width: 150px;
    font-size: 20px;
  }

  @media (min-width: ${breakpoints.MobileM}) and (max-width: ${breakpoints.MobileL}) {
    height: 40px;
    width: 120px;
    font-size: 15px;
  }

  @media (min-width: ${breakpoints.MobileS}) and (max-width: ${breakpoints.MobileM}) {
    height: 30px;
    width: 100px;
    font-size: 12px;
  }
  @media (max-width: ${breakpoints.MobileS}) {
    height: 25px;
    width: 90px;
    font-size: 10px;
  }
`

type ButtonProps = {
  isVisible?: boolean
}

export const Button: React.FC<ButtonProps> = ({ isVisible }) => {
  const setIsTime = useAppStore((state) => state.setIsTime)
  const setStartGame = useAppStore((state) => state.setStartGame)

  const startingGame = () => {
    setStartGame(true)
    setIsTime(true)
  }

  return (
    <Wrapper $isVisible={isVisible} onClick={startingGame}>
      Начать игру
    </Wrapper>
  )
}
