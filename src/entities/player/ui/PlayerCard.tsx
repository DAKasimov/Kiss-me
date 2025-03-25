import styled from "styled-components"
import breakpoints from "../../../shared/lib/utils"
import { forwardRef } from "react"

const Wrapper = styled.div<{
  $pos: {
    translateX?: string
    translateY?: string
    rotate?: string
    top?: string
    left?: string
    right?: string
    bottom?: string
  }
  $isActive?: boolean
}>`
  position: absolute;
  width: 15%;
  height: 15%;
  border-radius: 50%;
  overflow: hidden;
  display: flex;

  justify-content: center;
  align-items: center;
  transition: 1s all;
  box-shadow: ${(props) =>
    props.$isActive && "0 0 10px #3498db, 0 0 20px #3498db,0 0 30px #3498db"};
  top: ${(props) => props.$pos.top};
  left: ${(props) => props.$pos.left};
  right: ${(props) => props.$pos.right};
  bottom: ${(props) => props.$pos.bottom};
  transform: translateX(
      ${(props) => (props.$pos.translateX ? props.$pos.translateX : "0")}
    )
    translateY(
      ${(props) => (props.$pos.translateY ? props.$pos.translateY : "0")}
    )
    rotate(${(props) => (props.$pos.rotate ? props.$pos.rotate : "0")});

  @media (min-width: ${breakpoints.Laptop4K}) {
    width: 180px;
    height: 180px;
  }

  @media (min-width: ${breakpoints.LaptopL}) and (max-width: ${breakpoints.Laptop4K}) {
    width: 90px;
    height: 90px;
  }

  @media (min-width: ${breakpoints.Laptop}) and (max-width: ${breakpoints.LaptopL}) {
    width: 85px;
    height: 85px;
  }

  @media (min-width: ${breakpoints.Tablet}) and (max-width: ${breakpoints.Laptop}) {
    width: 75px;
    height: 75px;
  }

  @media (min-width: ${breakpoints.MobileL}) and (max-width: ${breakpoints.Tablet}) {
    width: 45px;
    height: 45px;
  }

  @media (min-width: ${breakpoints.MobileM}) and (max-width: ${breakpoints.MobileL}) {
    width: 35px;
    height: 35px;
  }

  @media (min-width: ${breakpoints.MobileS}) and (max-width: ${breakpoints.MobileM}) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: ${breakpoints.MobileS}) {
    width: 20px;
    height: 20px;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
  object-position: center;
`

interface PlayerCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  isActive?: boolean
  pos: {
    translateX?: string
    translateY?: string
    rotate?: string
    top?: string
    left?: string
    right?: string
    bottom?: string
  }
}

export const PlayerCard: React.ForwardRefExoticComponent<
  PlayerCardProps & React.RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, PlayerCardProps>(
  ({ src, pos, isActive, ...rest }, ref) => {
    return (
      <Wrapper {...rest} ref={ref} $isActive={isActive} $pos={pos}>
        <Img src={src} alt={src} />
      </Wrapper>
    )
  }
)
