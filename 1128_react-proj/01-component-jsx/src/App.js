import "./App.css";
import FuncComponent from "./components/FuncComponent";
import FuncComponentPj from "./components/FuncComponentPj";
import ClassComponent from "./components/ClassComponent";
import FuncPropsEx from "./components/FuncPropsEx";
import Section from "./components/Section";
import ClassPropsEx from "./components/ClassPropsEx";
import FuncPropsPj from "./components/FuncPropsPj";
import FuncPropsPj2 from "./components/FuncPropsPj2";
import ClassPropsPj from "./components/ClassPropsPj";

function App() {
  return (
    <div>
      <ClassComponent />
      <ClassComponent></ClassComponent>

      <FuncComponent />
      <FuncComponentPj food="" content="hello world" />
      {/* <FuncComponent></FuncComponent> */}
      <FuncPropsEx title="SeSAC" content="hello world" number={5} />
      <FuncPropsEx number={6} />

      <Section title="SeSAC 영역">
        <div>SeSAC 영역의 content입니다.</div>
        {/* 자식 파트 */}
      </Section>

      <Section title="코딩온 영역">
        <h5>코딩온 영역의 content입니다.</h5>
      </Section>

      <ClassPropsEx
        title="SeSAC뿅"
        content="hello world wow"
        number={15}
      ></ClassPropsEx>

      <br />
      <FuncPropsPj />
      <FuncPropsPj food="선지해장국" />
      <br />
      <FuncPropsPj2 />
      <FuncPropsPj2
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      />

      <ClassPropsPj />
      <ClassPropsPj
        text="app.js에서 받아온 text"
        valid={() => {
          console.log("콘솔 출력이 완료되었습니다.");
        }}
      />
    </div>
  );
}

export default App;
