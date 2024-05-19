import "./App.css";
import Card1 from "./components/Card1";
import UserList1 from "./components/UserList1";
import Welcome1 from "./components/Welcome1";
import UserCard1 from "./components/UserCard1";
import ItemList1 from "./components/ItemList1";
import Container from "./components/Container";
import Greeting1 from "./components/Greeting1";
import ProductList from "./components/ProductList";
import Welcome from "./components/Welcome";
import FruitList from "./components/FruitList";
import NestedList1 from "./components/NestedList1";
import HighlightTaskList from "./components/HighlightTaskList";
import ProfileCard from "./components/ProfileCard";
import ButtonClick1 from "./components/ButtonClick1";
import HighlightList1 from "./components/HighlightList1";
import ConditionalMessage1 from "./components/ConditionalMessage1";
import NestedTaskList from "./components/NestedTaskList";
import LoginMessage from "./components/LoginMessage";
import Greeting from "./components/Greeting";
import ToggleButton from "./components/ToggleButton";

function ComponentWrappedWithinCard1Component() {
  return <div>This component is wrapped within Card 1 Component</div>;
}

function ComponentWrapperWithinContainerComponent() {
  return <h4>This component is wrapped within Container Component</h4>;
}

function App() {
  const user1 = { name: "Oliver Queen", email: "kTqZs@example.com" };
  const user2 = { name: "Barry Allen", age: 24, location: "Metropolis" };

  return (
    <>
      <Greeting1 />
      <Welcome />
      <ConditionalMessage1 isLoggedIn={true} />
      <LoginMessage isLoggedIn={true} />
      <ItemList1 />
      <FruitList />
      <ButtonClick1 />
      <ToggleButton />
      <Welcome1 name="Bruce Wayne" />
      <Greeting message="I am Batman" />
      <UserCard1 {...user1} />
      <ProfileCard {...user2} />
      {<Card1>
        <ComponentWrappedWithinCard1Component />
      </Card1> }
      {<Container>
        <ComponentWrapperWithinContainerComponent />
      </Container>}
      <UserList1 />
      <ProductList />
      <HighlightList1 />
      <HighlightTaskList />
      <NestedList1 />
      <NestedTaskList />
    </>
  );
}

export default App;
