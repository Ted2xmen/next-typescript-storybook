import React, { useEffect, useState } from "react";
import styled from "styled-components";

import GithubCard from "../../components/Cards/GithubCard";

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
    fetch(
      "https://api.github.com/users/ted2xmen/repos?per_page=100&page=1",
      options
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setLoading(false);
      });
  }, []);

  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 20px;
    margin-top: 10px;
  `;

  const GithubContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    background-color: #1f2940;
    border-radius: 15px;
    border: 1px solid;
    border-left-color: rgb(187, 247, 208);
    border-right-color: rgb(74, 222, 128);
    border-top-color: rgb(34, 197, 94);
    border-bottom-color: rgb(187, 247, 208);
  `;

  return (
    <GithubContainer>
      <GridContainer>
        {data ? (
          data
            ?.filter((f: any) => f.topics.includes("portfolio"))
            .slice(0, 3)
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
