import styled from "styled-components"
import heart from "../../../assets/heart.png"
import breakpoints from "../../../shared/lib/utils"
import useAppStore from "../../../shared/config/store"
import { useEffect, useRef } from "react"
import anime from "animejs"

const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  z-index: 2;

  @media (min-width: ${breakpoints.Laptop4K}) {
    width: 100px;
    height: 50px;
  }

  @media (min-width: ${breakpoints.LaptopL}) and (max-width: ${breakpoints.Laptop4K}) {
    width: 100px;
    height: 50px;
  }

  @media (min-width: ${breakpoints.Laptop}) and (max-width: ${breakpoints.LaptopL}) {
    width: 100px;
    height: 50px;
  }

  @media (min-width: ${breakpoints.Tablet}) and (max-width: ${breakpoints.Laptop}) {
    width: 100px;
    height: 50px;
  }

  @media (min-width: ${breakpoints.MobileL}) and (max-width: ${breakpoints.Tablet}) {
    width: 80px;
    height: 40px;
  }

  @media (min-width: ${breakpoints.MobileM}) and (max-width: ${breakpoints.MobileL}) {
    width: 70px;
    height: 30px;
  }

  @media (min-width: ${breakpoints.MobileS}) and (max-width: ${breakpoints.MobileM}) {
    width: 60px;
    height: 20px;
  }
  @media (max-width: ${breakpoints.MobileS}) {
    width: 60px;
    height: 20px;
  }
`

const Counter = styled.div`
  width: 50%;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  color: white;
  line-height: 50px;

  @media (min-width: ${breakpoints.Laptop4K}) {
    font-size: 35px;
  }

  @media (min-width: ${breakpoints.LaptopL}) and (max-width: ${breakpoints.Laptop4K}) {
    font-size: 35px;
  }

  @media (min-width: ${breakpoints.Laptop}) and (max-width: ${breakpoints.LaptopL}) {
    font-size: 35px;
  }

  @media (min-width: ${breakpoints.Tablet}) and (max-width: ${breakpoints.Laptop}) {
    font-size: 35px;
  }

  @media (min-width: ${breakpoints.MobileL}) and (max-width: ${breakpoints.Tablet}) {
    font-size: 35px;
    line-height: 40px;
  }

  @media (min-width: ${breakpoints.MobileM}) and (max-width: ${breakpoints.MobileL}) {
    font-size: 30px;
    line-height: 30px;
  }

  @media (min-width: ${breakpoints.MobileS}) and (max-width: ${breakpoints.MobileM}) {
    font-size: 25px;
    line-height: 20px;
  }
  @media (max-width: ${breakpoints.MobileS}) {
    font-size: 25px;
    line-height: 20px;
  }
`

const Img = styled.img`
  height: 100%;
  width: 50%;
`

export const KissCounter: React.FC = () => {
  const kissCounter = useAppStore((state) => state.kissCounter)

  const kissBlockRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    anime({
      targets: kissBlockRef.current,
      scale: 1.5,
      easing: "easeInOutQuad",
      duration: 1000,
      complete: () => {
        anime({
          targets: kissBlockRef.current,
          scale: 1.0,
          easing: "easeInOutQuad",
          duration: 1000,
        })
      },
    })
  }, [kissCounter])

  return (
    <Wrapper>
      <Counter>{kissCounter}</Counter>
      <Img ref={kissBlockRef} src={heart} alt="heart" />
    </Wrapper>
  )
}
