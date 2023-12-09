import { useForm } from "react-hook-form";

export default function Pj01_SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    //watch 함수 불러오려면 여기서 불러와야 한다..
  } = useForm();

  const onVaild = (data) => {
    console.log("성공", data);
  };

  const onInvaild = (err) => {
    console.log("실패", err);
  };

  console.log(watch(["username", "age"]));

  return (
    <>
      <h4>react hook form 실습</h4>
      <form onSubmit={handleSubmit(onVaild, onInvaild)}>
        <input
          type="text"
          placeholder="이름"
          {...register("username", {
            required: "이름은 필수 항목입니다.",
          })}
        />
        <br />
        {errors.username?.message}
        <br />
        <input
          type="number"
          placeholder="나이"
          {...register("age", {
            required: "0 이상의 숫자만 입력 가능합니다.",
          })}
        />
        <br />
        {errors.age?.message}
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
