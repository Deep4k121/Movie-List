import axios from "axios";
import React, { useEffect, useState } from "react";

const Value = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    axios
      .get("https://www.omdbapi.com/?s=man&apikey=4a3b711b")
      .then(res => {
        if (res) {
          setMoviesData(res.data.Search);
          setIsloading(false);
        }
      })
      .catch(err => {
        console.log("err", err);
      });
  }, []);

  useEffect(() => {}, [moviesData]);
  return (
    <div>
      <div>
        {isLoading ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="data py-3">
              {moviesData &&
                moviesData.length > 0 &&
                moviesData.map((item, ind) => (
                  <div className="cards" key={ind}>
                    <h2>{item.Title}</h2>
                    <div className="poster">
                      <img
                        src={item.Poster}
                        alt="poster"
                        className="img-fluid"
                      />
                    </div>
                    <p>Year {item.Year}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
      {/* <footer className="bg-primary py-1 text-white">
        {" "}
        all rights are reserved
      </footer> */}
    </div>
  );
};

export default Value;