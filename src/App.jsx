import { useForm } from "react-hook-form";
import "./styles.css";

export default function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log("onSubmit:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <input {...register("lastName")} />
      <input {...register("email")} />
      <input type="submit" />
    </form>
  );
}
