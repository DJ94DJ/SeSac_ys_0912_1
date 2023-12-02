import "./App.css";
import StateClass from "./components/StateClass";
import StateFunc from "./components/StateFunc";
import Pj01_StateClass from "./components/ex/Pj01_StateClass";
import Pj02_StateFunc from "./components/ex/Pj02_StateFunc";
import EventClass from "./components/EventClass";
import EventFunc from "./components/EventFunc";
import HandlerEx from "./components/ex/Pj03_HanderEx";
import EventHandling from "./components/ex/Pj04_EventHandling_";
import EventHandling2 from "./components/ex/Pj05_EventHandling2";
import EventHandling3 from "./components/ex/Pj06_EventHandling3";
// import Practice4 from "./components/1202_";

function App() {
  return (
    <div>
      <StateClass name="Dj" />
      <StateFunc />
      <Pj01_StateClass />
      <Pj02_StateFunc />
      <EventClass />

      <EventFunc />

      <HandlerEx />
      <EventHandling />
      <EventHandling2 />
      <EventHandling3 />
      {/* <Practice4 /> */}
    </div>
  );
}

export default App;
