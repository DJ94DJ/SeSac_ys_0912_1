import { useState } from "react";

// map은 앞에 있는 배열에 대해서 반복을 하면서,
// map의 인자로 넘어가는 콜백함수의 return 값을 이용해 새로운 배열을 생성함.
// [<li>a</li>, <li>b</li>, <li>c</li>]

function ListMap() {
  const productList = [
    { id: 1, product: "가방" },
    { id: 2, product: "신발" },
    { id: 3, product: "상의" },
    { id: 4, product: "하의" },
    { id: 5, product: "가구" },
  ];

  const [list, setList] = useState(productList);
  const [newProduct, setNewProduct] = useState("");
  const addProduct = () => {
    //list와 추가할 객체를 합쳐줘야 함

    //원래라면 새로운 상품을 back에서 insert하고 생긴 고유 primary값을 id에 담아두면 좋다? (지금은 임시)
    //그러나 편의상 지금은 length를 이용한다.

    const newObj = { id: list[list.length - 1].id + 1, product: newProduct };

    const newList = list.concat(newObj);
    // const newList = [...list, newObj];

    // ...는 배얼을 열어서 전개해준다.
    setList(newList);
    setNewProduct("");
  };

  const deleteProduct = (id) => {
    // 더블클릭한 리스트 내 상품에 대한 정보 삭제를 해야함
    // 필터 메소드란?

    // 필터 메소드는 앞에 있는 배열에 대해서 반복.
    //= 필터의 리턴값은 조건이 되어야함 트루일 경우 해당 원소는 배열에 새 배열에 포함됨
    // false일시 해당 요소는 새 배열에서 제외 (필터링)
    const newList = list.filter((value) => value.id !== id);
    // 해당 아이디와 일치하지 않는 것만 새 배열에 넣음
    // 렌더링시 배열을 이용하여 -> list 배열에서 원하는 원소를 삭제해야함
    // 삭제후 새 list 배열을 띄워 상태변경. (seList 이용)
    setList(newList);
  };

  //setlist
  return (
    <>
      <label>추가할 상품: </label>
      <input
        type="text"
        value={newProduct}
        onChange={(e) => {
          setNewProduct(e.target.value);
        }}
      />
      <button onClick={addProduct}>추가</button>
      <ul>
        {list.map((value) => {
          return (
            <li
              style={{ cursor: "pointer" }}
              key={value.id}
              onDoubleClick={() => {
                deleteProduct(value.id);
              }}
            >
              {value.product}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default ListMap;
