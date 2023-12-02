import { useState } from "react";

function ListWrite() {
  const WriteList = [
    {
      id: null,
      Name: null,
      title: null,
    },
  ];

  const [List, setList] = useState([]);
  const [newtitle, setNewtitle] = useState("");
  const [newName, setNewName] = useState("");

  const [searchResult, setSearchResult] = useState([]);
  const [searchType, setSearchType] = useState("name");
  const [searchWord, setSearchWord] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  const addWrite = () => {
    const newObj = {
      id: List.length > 0 ? List[List.length - 1].id + 1 : 1,
      Name: newName,
      title: newtitle,
    };
    const newList = List.concat(newObj);

    setList(newList);
    setNewName("");
    setNewtitle("");

    // setSearchResult(newList); // 검색 결과도 업데이트
  };

  const deleteWrite = (id) => {
    const newList = List.filter((value) => value.id !== id);
    setList(newList);
    // setSearchResult(newList); // 검색 결과도 업데이트
  };

  const doSearch = () => {
    if (!searchWord) {
      setSearchResult(List);
      return;
    }

    const result = List.filter((item) =>
      String(item[searchType]).toLowerCase().includes(searchWord.toLowerCase())
    );
    setSearchResult(result);

    if (result.length > 0) {
      setSearchClicked(true); // 검색 버튼 클릭시 검색 결과 보이기
    }
  };

  return (
    <>
      <h1>응용실습 03</h1>

      <div
        style={{
          display: "flex",
          border: "solid 1px black",
          padding: "5px",
          margin: "10px",
          height: "50px",
          alignItems: "center",
          alignContent: "center",
          width: "80%",
          // justifyContent: "space-around",
        }}
      >
        <div style={{ padding: "5px" }}>
          {"작성자 : "}
          <input
            type="text"
            placeholder="작성자"
            value={newName}
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />
        </div>
        <div style={{ padding: "5px" }}>
          {"제목 : "}
          <input
            type="text"
            placeholder="제목을 입력해주세요"
            value={newtitle}
            onChange={(e) => {
              setNewtitle(e.target.value);
            }}
          />
        </div>
        <button style={{ flexBasis: 50, margin: "10px" }} onClick={addWrite}>
          작성
        </button>
      </div>

      <div
        style={{
          display: "flex",
          padding: "5px",
          margin: "10px",
          height: "50px",
          alignItems: "center",
          alignContent: "center",
          width: "80%",
        }}
      >
        <form
          action="#"
          style={{
            padding: "10px",
            margin: "0px",
            height: "35px",
          }}
        >
          <label for="search"></label>
          <select
            name="search"
            id="search"
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value="Name">작성자</option>
            <option value="title">제목</option>
            <option value="id">번호</option>
          </select>
        </form>

        <input
          type="text"
          placeholder="검색할 내용"
          value={searchWord}
          onChange={(e) => {
            setSearchWord(e.target.value);
            setSearchClicked(false);
          }}
        />
        <button style={{ flexBasis: 50, margin: "10px" }} onClick={doSearch}>
          검색
        </button>
      </div>

      <table
        style={{
          width: "66%",
          padding: "50px",
          margin: "10px",
          alignItems: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <th
          style={{
            width: "10%",
          }}
        >
          번호
        </th>
        <th
          style={{
            width: "50%",
          }}
        >
          제목
        </th>
        <th
          style={{
            width: "20%",
          }}
        >
          작성자
        </th>

        {List.map((value) => {
          return (
            <tr key={value.id}>
              <td
                style={{
                  textAlign: "center",
                }}
              >
                {value.id}
              </td>
              <td
                style={{
                  textAlign: "left",
                }}
              >
                {value.title}
              </td>
              <td>{value.Name}</td>
            </tr>
          );
        })}
      </table>

      {searchWord.length > 0 && (
        <table
          style={{
            width: "66%",
            padding: "50px",
            margin: "10px",
            alignItems: "center",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          <th
            style={{
              width: "10%",
            }}
          >
            번호
          </th>
          <th
            style={{
              width: "50%",
            }}
          >
            제목
          </th>
          <th
            style={{
              width: "20%",
            }}
          >
            작성자
          </th>
          {searchResult.map((value) => {
            return (
              <tr key={value.id}>
                <td
                  style={{
                    textAlign: "center",
                  }}
                >
                  {value.id}
                </td>
                <td
                  style={{
                    textAlign: "left",
                  }}
                >
                  {value.title}
                </td>
                <td>{value.Name}</td>
              </tr>
            );
          })}
        </table>
      )}
    </>
  );
}

export default ListWrite;
