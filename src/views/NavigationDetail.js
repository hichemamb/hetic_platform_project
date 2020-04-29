import React, { useState, useContext } from "react";
import styled from "styled-components";
import DataContext from "../DataContext";
import Header from "../components/organisms/Header/Header";
import Link from "../components/atoms/Link/Link";
import MainContent from "../components/organisms/MainContent/MainContent";
import ButtonLinkBack from "../components/molecules/ButtonLinkBack";
import { useHistory, useParams } from "react-router-dom";

const NavigationDetail = () => {
  let history = useHistory();
  const { element, id } = useParams();
  const { data } = useContext(DataContext);
  const currentData = data.contents.find(
    (el) => el.id.toString() === id && el.type === element
  );
  const allSlugs = data.contents
    .filter((el) => el.type === element)
    .map((el) => {
      return { name: el.slug, id: el.id };
    });

  const sources = currentData.pictures.map(
    (el) => `http://localhost:1337/${el.url}`
  );
  console.log(allSlugs);
  return (
    <DataContext.Consumer>
      {(props) => (
        <NavigationDetailStyled>
          <Header>
            {allSlugs.map((slug) => (
              <Link
                isActive={slug.name === currentData.slug}
                onClick={() =>
                  history.push(`/navigation/${element}/${slug.id}`)
                }
              >
                {slug.name}
              </Link>
            ))}
          </Header>

          <div className="navigationdetail-flex">
            <div style={{ marginBottom: "24px" }}>
              <ButtonLinkBack
                title="Retour"
                width="default"
                height="default"
                onClick={() => history.push("/navigation")}
              />
            </div>
            <MainContent
              title={currentData.Title}
              subText={currentData.SubTitle}
              sources={sources}
            >
              {currentData.Description}
            </MainContent>
          </div>
        </NavigationDetailStyled>
      )}
    </DataContext.Consumer>
  );
};

const NavigationDetailStyled = styled.div`
  background: #202020;
  min-width: 100%;
  height: 100vh;
  display: flex;
  .navigationdetail-flex {
    width: calc(100% - 300px);
    margin: 72px 0 72px 76px;
  }
`;

export default NavigationDetail;
