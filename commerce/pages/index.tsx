import React from "react";
// import Layout from "../components/Layout";

const Home = () => {
    const handleClick = () => {
        fetch("api/add-itme?name=Jacket")
            .then((res) => res.json())
            .then((data) => alert(data.message));
    };
    return <button onClick={handleClick}> Add Jacket</button>;
};

export default Home;
