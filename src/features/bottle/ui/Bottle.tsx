import styled from "styled-components"
import bottle from "../../../assets/Bottle.png"
import breakpoints from "../../../shared/lib/utils"
import { useEffect, useRef, useState } from "react"
import anime from "animejs"
import Sound from "../../../assets/sounds/Spinning sound.mp3"
import useAppStore from "../../../shared/config/store"

const Wrapper = styled.div`
  height: 200px;
  width: 80px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (min-width: ${breakpoints.Laptop4K}) {
    width: 80px;
    height: 200px;
  }

  @media (min-width: ${breakpoints.LaptopL}) and (max-width: ${breakpoints.Laptop4K}) {
    width: 80px;
    height: 200px;
  }

  @media (min-width: ${breakpoints.Laptop}) and (max-width: ${breakpoints.LaptopL}) {
    width: 70px;
    height: 140px;
  }

  @media (min-width: ${breakpoints.Tablet}) and (max-width: ${breakpoints.Laptop}) {
    width: 65px;
    height: 130px;
  }

  @media (min-width: ${breakpoints.MobileL}) and (max-width: ${breakpoints.Tablet}) {
    width: 50px;
    height: 110px;
  }

  @media (min-width: ${breakpoints.MobileM}) and (max-width: ${breakpoints.MobileL}) {
    width: 50px;
    height: 90px;
  }

  @media (min-width: ${breakpoints.MobileS}) and (max-width: ${breakpoints.MobileM}) {
    width: 40px;
    height: 80px;
  }
  @media (max-width: ${breakpoints.MobileS}) {
    width: 20px;
    height: 60px;
  }
`

const Img = styled.img`
  height: 100%;
  width: auto;
  transform-origin: center center;
`

export const Bottle: React.FC = () => {
  const blockRef = useRef<HTMLDivElement | null>(null)
  const players = useAppStore((state) => state.players)
  const [currentAngle, setCurrentAngle] = useState(0)

  const currentPlayer = useAppStore((state) => state.currentPlayer)
  const isGameLaunch = useAppStore((state) => state.isGameLaunch)

  const setSelectedPlayer = useAppStore((state) => state.setSelectedPlayer)
  const setIsStartRotation = useAppStore((state) => state.setIsStartRotation)
  const setIsFinishRotation = useAppStore((state) => state.setIsFinishRotation)
  const setIsGameLaunch = useAppStore((state) => state.setIsGameLaunch)

  useEffect(() => {
    if (blockRef.current) {
      // жёсткое положение для трансформации
      blockRef.current.style.transform = "translate(-50%, -50%)"
    }
  }, [])

  const spinBottle = () => {
    const numPlayers = players.length

    // Получаем индекс текущего выбранного игрока
    const currentPlayerIndex = players.findIndex(
      (player) => player.id === currentPlayer.id
    )

    // Создаем массив возможных индексов, исключая индекс текущего игрока
    const possibleIndices = players
      .map((_, index) => index)
      .filter((index) => index !== currentPlayerIndex)

    // Выбираем случайный индекс из оставшихся
    const randomIndex =
      possibleIndices[Math.floor(Math.random() * possibleIndices.length)]

    const newSelectedPlayer = players[randomIndex]
    setSelectedPlayer(newSelectedPlayer) // Сохраняем выбранного игрока
    setIsStartRotation(true)

    // Угол сектора, чтобы бутылка идеально указывала горлышком на игрока
    const anglePerPlayer = 360 / numPlayers
    const targetAngle = anglePerPlayer * randomIndex
    const spins = 3 // Количество полных оборотов перед остановкой

    const newAngle = 360 * spins + targetAngle
    const angleDifference = newAngle - currentAngle

    const sound = new Audio(Sound)

    anime({
      targets: blockRef.current,
      rotate: `+=${angleDifference}`, // Количество оборотов плюс корректный угол
      duration: 4000, // Длительность анимации
      easing: "easeOutQuart", // Плавное завершение вращения
      begin: () => {
        sound.play() // Запуск звука
      },
      complete: () => {
        sound.pause() // Остановка звука

        sound.currentTime = 0 // Сброс времени воспроизведения для следующего использования
        setIsFinishRotation(true)

        setCurrentAngle(targetAngle % 360)
      },
    })
  }

  useEffect(() => {
    if (isGameLaunch) {
      spinBottle()
      setIsGameLaunch(false)
    }
  }, [isGameLaunch, setIsGameLaunch])

  return (
    <Wrapper onClick={spinBottle} ref={blockRef}>
      <Img src={bottle} alt="bottle" />
    </Wrapper>
  )
}
