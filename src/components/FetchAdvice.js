import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchAdvice = () => {
  const [loading, setLoading] = useState(true);
  const [advice, setAdvice] = useState("");

  const fetchData = async () => {
    return await axios
      .get("https://api.adviceslip.com/advice", {
        "Content-Type": "application/xml; charset=utf-8",
      })
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <div>...loading</div>
  ) : (
    <div>
      <h1>{advice}</h1>
      <button onClick={fetchData}>Give me advice!</button>
    </div>
  );
};

export default FetchAdvice;
