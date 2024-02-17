import Container from "./components/Container";
import Row from "./components/Row";
import SelectMenu from "./components/SelectMenu";

function App() {
  return (
    <>
      <Container className="mt-4">
        <Row>
          <SelectMenu />
        </Row>
      </Container>
    </>
  );
}

export default App;
