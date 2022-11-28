import stylesInput from "./Input.modules.scss";

export const Input = ({ onNumberChange }) => {
  const numberChanged = (event) => {
    onNumberChange(+event.target.value);
  };

  return (
    <div className="form_group">
      <input
        type="text"
        placeholder={1}
        name="number"
        //pattern="[0-9]+([\,][0-9]{1,2})?"
        onChange={numberChanged}
      />
    </div>
  );
};
