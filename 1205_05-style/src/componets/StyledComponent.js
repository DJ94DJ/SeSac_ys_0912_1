import styled from "styled-components";
// css의 네이밍 중복을 방지
// css in js (style-jsx)

const Container = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color || "black"};

  &:hover {
    transform: scale(1.2);
  }
`;

export default function StyledComponents() {
  return (
    <>
      <Container>
        <Box color="red" />
        <Box color="orange" />
        <Box color="yellow" />
        <Box color="green" />
        <Box color="blue" />
        <Box color="purple" />
        <Box />
      </Container>
    </>
  );
}
