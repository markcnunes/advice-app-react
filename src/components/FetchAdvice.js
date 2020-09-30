import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchAdvice = () => {
  const [loading, setLoading] = useState(true);
  const [ourAdvice, setOurAdvice] = useState("");

  const fetchData = async () => {
    return await axios.get("https://api.adviceslip.com/advice", {
      "Content-Type": "application/xml; charset=utf-8",
    });
  };

  useEffect(() => {
    fetchData().then((res) => {
      setOurAdvice(res.data.slip.advice);
      setLoading(false);
    });
  }, []);

  const handleClick = () => {
    fetchData()
      .then((res) => {
        setOurAdvice(res.data.slip.advice);
      })
      .catch((err) => console.log(err));
  };

  return loading ? (
    <div className="advice">...loading</div>
  ) : (
    <div className="advice">
      <h1>{ourAdvice}</h1>
      <button onClick={handleClick}>Give me another advice!</button>
    </div>
  );
};

export default FetchAdvice;
