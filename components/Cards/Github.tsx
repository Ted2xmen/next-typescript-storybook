import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import GithubCard from "./GithubCard";

const GithubContainer = styled.div`
  color: green;
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

  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    margin-top: 20px;
  `;

  return (
    <GithubContainer>
      <GridContainer>
        {data ? (
          data
            ?.filter((f: any) => f.topics.includes("vue"))
            .map((item: any, i: number) => {
              return <GithubCard key={i} items={item} />;
            })
        ) : (
          <p> api request limit</p>
        )}
      </GridContainer>
    </GithubContainer>
  );
};

export default Github;
