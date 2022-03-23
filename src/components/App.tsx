import styled from 'styled-components';

export function App(): JSX.Element {
  return (
    <Container>
      <h1>Hello world</h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;
