import { useLocation, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { state } = useLocation();
  const params = useParams();
  console.log(state);
  console.log(params);

  return (
    <div>
      <h2>Name: {state.name}</h2>
      <h3>Calories: {state.calories}</h3>
    </div>
  );
};
export default ProductDetail;
