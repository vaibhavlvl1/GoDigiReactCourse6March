import { useParams } from "react-router-dom";

export default function SingleUsers() {
  const { id } = useParams();

  return (
    <>
      <h1>This is page for User with {id} </h1>
      
    </>
  );
}
