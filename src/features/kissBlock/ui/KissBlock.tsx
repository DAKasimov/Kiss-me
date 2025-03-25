import styled from "styled-components"
import kissImg from "../../../assets/Kiss.png"
import breakpoints from "../../../shared/lib/utils"

const Wrapper = styled.div<{ $isActive: boolean }>`
  width: 300px;
  height: 300px;
  display: ${(props) => (props.$isActive ? "block" : "none")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  transition: 1s all;

  @media (min-width: ${breakpoints.Laptop4K}) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: ${breakpoints.LaptopL}) and (max-width: ${breakpoints.Laptop4K}) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: ${breakpoints.Laptop}) and (max-width: ${breakpoints.LaptopL}) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: ${breakpoints.Tablet}) and (max-width: ${breakpoints.Laptop}) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: ${breakpoints.MobileL}) and (max-width: ${breakpoints.Tablet}) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: ${breakpoints.MobileM}) and (max-width: ${breakpoints.MobileL}) {
    width: 150px;
    height: 150px;
  }

  @media (min-width: ${breakpoints.MobileS}) and (max-width: ${breakpoints.MobileM}) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: ${breakpoints.MobileS}) {
    width: 20%;
    height: 90px;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

type KissBlockProps = {
  isActive: boolean
}

export const KissBlock: React.FC<KissBlockProps> = ({ isActive }) => {
  return (
    <Wrapper $isActive={isActive}>
      <Img src={kissImg} alt="kiss" />
    </Wrapper>
  )
}
