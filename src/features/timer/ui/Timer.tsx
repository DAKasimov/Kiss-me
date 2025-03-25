import styled from "styled-components"
import breakpoints from "../../../shared/lib/utils"
import { useEffect, useState } from "react"
import useAppStore from "../../../shared/config/store"

const Wrapper = styled.div<{ $isActive: boolean; $isVisible?: boolean }>`
  height: 300px;
  width: 300px;
  font-size: 200px;
  font-weight: bold;
  color: white;
  line-height: 300px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  display: ${(props) =>
    props.$isVisible && props.$isActive ? "block" : "none"};
  transform: translate(-50%, -50%);
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000, 2px 2px 4px rgba(0, 0, 0, 0.4);
  z-index: 2;

  @media (min-width: ${breakpoints.Laptop4K}) {
    font-size: 200px;
  }

  @media (min-width: ${breakpoints.LaptopL}) and (max-width: ${breakpoints.Laptop4K}) {
    font-size: 200px;
  }

  @media (min-width: ${breakpoints.Laptop}) and (max-width: ${breakpoints.LaptopL}) {
    font-size: 200px;
  }

  @media (min-width: ${breakpoints.Tablet}) and (max-width: ${breakpoints.Laptop}) {
    font-size: 170px;
  }

  @media (min-width: ${breakpoints.MobileL}) and (max-width: ${breakpoints.Tablet}) {
    font-size: 150px;
  }

  @media (min-width: ${breakpoints.MobileM}) and (max-width: ${breakpoints.MobileL}) {
    font-size: 120px;
  }

  @media (min-width: ${breakpoints.MobileS}) and (max-width: ${breakpoints.MobileM}) {
    height: 200px;
    width: 200px;
    line-height: 200px;
    font-size: 100px;
  }
  @media (max-width: ${breakpoints.MobileS}) {
    height: 100px;
    width: 90%;
    line-height: 100px;
    font-size: 100px;
  }
`

type TimerProps = {
  isVisible?: boolean
}

export const Timer: React.FC<TimerProps> = ({ isVisible }) => {
  const [time, setTime] = useState(3)
  const setIsGameLaunch = useAppStore((state) => state.setIsGameLaunch)
  const isGameLaunch = useAppStore((state) => state.isGameLaunch)
  const setIsTime = useAppStore((state) => state.setIsTime)
  const isTime = useAppStore((state) => state.isTime)

  useEffect(() => {
    if (time > 0 && isTime) {
      const timer = setInterval(() => {
        setTime((prevCount) => prevCount - 1)
      }, 1000)
      return () => {
        clearInterval(timer)
      }
    } else if (time <= 0 && isTime) {
      setIsGameLaunch(true)
      setIsTime(false)
    }
  }, [time, isGameLaunch, isTime, setIsGameLaunch, setIsTime])
  return (
    <Wrapper $isVisible={isVisible} $isActive={time > 0}>
      {time}
    </Wrapper>
  )
}
