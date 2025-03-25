import styled from "styled-components"

const Wrapper = styled.div<{ $isVisible?: boolean }>`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 4;
  top: 0;
  left: 0;
  display: ${(props) => (props.$isVisible ? "block" : "none")};
`

type CurtainProps = {
  isVisible?: boolean
}

export const Curtain: React.FC<CurtainProps> = ({ isVisible }) => {
  return <Wrapper $isVisible={isVisible}></Wrapper>
}
