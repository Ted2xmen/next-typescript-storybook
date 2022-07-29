import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const GithubContainer = styled.div`
  color: black;
`;

const Github = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {

    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_GITHUB_TOKEN,
      },
    };
    setLoading(true);
    fetch("https://api.github.com/users/ted2xmen/repos", options)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setLoading(false);
      });
  }, []);

  return (
    <GithubContainer>
      {data
        ?.filter((repo: any) => repo.topics.map((ite: any) => ite === "tailwindcss"))
        
        .map((item: any, i) => {
          return <li key={item.id}> {i} {item.name} </li>
        })}
    </GithubContainer>
  );
};

export default Github;
