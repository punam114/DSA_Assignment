import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const RecipeDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/recipes/${id}`)
      .then((res) => setDetail(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!detail) return <p>Loading...</p>;

  return (
    <div>
      <h2>{detail.name}</h2>
      <img src={detail.image} alt={detail.name} />
      <p>Cuisine: {detail.cuisine}</p>
      <p>{detail.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
