import React from "react";
import { useParams } from "react-router-dom";

export default function AnimeDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1>This is Anime Drtails page with id = {id}</h1>
    </div>
  );
}
