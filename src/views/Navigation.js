import React from "react";
import Main from "../components/layouts/Main";
import { Default } from "../components/atoms/MainLink/MainLink.stories";
import { useHistory } from "react-router-dom";
import { Left, Right } from "../components/atoms/ButtonLink/ButtonLink.stories";
import Cinemabg from "../assets/img/michael-jordan-space-jam.jpg";
import "../assets/styles/reset.css";

const Navigation = () => {
  const history = useHistory();
  return (
    <Main src={Cinemabg}>
      <div style={{ marginRight: "120px" }}>
        <Left onClick={() => alert("In progress")} />
      </div>
      <Default onClick={() => history.push("/navigation/cinema/1")}>
        Cinéma
      </Default>
      <div style={{ marginLeft: "120px" }}>
        <Right onClick={() => alert("In progress")} />
      </div>
    </Main>
  );
};

export default Navigation;
