import { useState } from "react";

function ListContact() {
  const contactList = [
    { id: 1, Name: "코디", Email: "codi@gmail.com" },
    { id: 2, Name: "윤소희", Email: "yoonsohee@gmail.com" },
  ];

  const [List, setList] = useState(contactList);
  const [newEmail, setNewEmail] = useState("");
  const [newName, setNewName] = useState("");

  const addContact = () => {
    const newObj = {
      id: List[List.length - 1].id + 1,
      Name: newName,
      Email: newEmail,
    };
    const newList = List.concat(newObj);

    setList(newList);
    setNewName("");
    setNewEmail("");
  };

  const deleteContact = (id) => {
    const newList = List.filter((value) => value.id !== id);
    setList(newList);
  };

  return (
    <>
      <h1>응용실습 01~02</h1>

      <input
        type="text"
        placeholder="이름"
        value={newName}
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="이메일"
        value={newEmail}
        onChange={(e) => {
          setNewEmail(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addContact();
          }
        }}
      />

      <ul>
        {List.map((value) => {
          return (
            <li
              style={{ cursor: "pointer" }}
              key={value.id}
              onDoubleClick={() => {
                deleteContact(value.id);
              }}
            >
              {value.Name} : {value.Email}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListContact;
