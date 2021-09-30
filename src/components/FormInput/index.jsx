import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";
import { Container } from "./styles";

const FormInput = () => {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.name);

  const handleForm = () => {
    dispatch(changeName(userInput));
    console.log(user);
  };

  return (
    <Container>
      <h3>User name: {user}</h3>
      <input onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={handleForm}>Enviar</button>
    </Container>
  );
};

export default FormInput;
