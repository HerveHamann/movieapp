import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Pagination from "../components/Pagination";
import Select from "../components/Select";
import { movies$ } from "../movies";
const Home = () => {
  const [Initaldata, setInitalData] = useState();
  const [data, setData] = useState();
  const numberOfPagesOption = [{ number: 4 }, { number: 8 }, { number: 12 }];
  const [numberOfPagesSelected, SetNumberOfPagesSelected] = useState(numberOfPagesOption[0].number);
  const [ItemShowed, setItemShowed] = useState();
  async function getData() {
    const res = await movies$.then((res) => {
      setData(res);
      setInitalData(res);
      setItemShowed(res);
    });
    return res;
  }
  useEffect(() => {
    getData();
  }, []);

  if (!data || !Initaldata) {
    return <h2>AWAIT DATA</h2>;
  } else {
    return (
      <div className="home">
        <Header />
        <div className="settings-container">
          <Select
            type={numberOfPagesOption}
            numberOfPagesSelected={numberOfPagesSelected}
            SetNumberOfPagesSelected={SetNumberOfPagesSelected}
          />

          <Filter Initaldata={Initaldata} data={data} setData={setData} />
        </div>
        <div className="card-container">
          {ItemShowed.length !== 0 ? (
            ItemShowed.map((movie) => (
              <Card
                ItemShowed={ItemShowed}
                key={movie.id}
                id={movie.id}
                category={movie.category}
                title={movie.title}
                likes={movie.likes}
                dislikes={movie.dislikes}
                setData={setData}
                setItemShowed={setItemShowed}
              />
            ))
          ) : (
            <p className="message">There is no movie to show on this page. Please change filter or page.</p>
          )}
        </div>
        <Pagination
          ItemShowed={ItemShowed}
          numberOfPagesSelected={numberOfPagesSelected}
          Initaldata={Initaldata}
          data={data}
          setItemShowed={setItemShowed}
        />
        <Footer />
      </div>
    );
  }
};

export default Home;
