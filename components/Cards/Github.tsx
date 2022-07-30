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

  return (
    <GithubContainer>
      {!data ? (
        data
          ?.filter((f: any) => f.topics.includes("portfolio"))
          .map((item: any, i: number) => {
            return (
              <GithubCard key={i} items={item} />
            );
          })
      ) : (
        <p> api request limit</p>
      )}
    </GithubContainer>
  );
};

export default Github;
