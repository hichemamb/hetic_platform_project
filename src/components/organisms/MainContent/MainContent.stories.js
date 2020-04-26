import React from "react";
import MainContent from "./MainContent";
import image1 from "../../../assets/img/michael-jordan-space-jam.jpg";
import image2 from "../../../assets/img/SmithCenter_Splashscreen.jpeg";
import image3 from "../../../assets/img/he_got_game_-_h_-_1998.jpg";
export const Default = () => (
  <MainContent
    title="This is my title"
    subText="This is my subText"
    sources={[image1, image2, image3]}
  >
    {" "}
    <p>
      Le 17 février 1963, à Brooklyn, New York, Michael Jeffrey Jordan arrive
      sur terre. Dès sa première saison (1982) en NCAA, il permet aux North
      Carolina Tar Heels de remporter 27 victoires pour 2 défaites dans la
      saison régulière. Jordan est l'acteur principal de cette saison record
      pour l'université.
    </p>
    <p>
      Il impressionne nombre de coaches et l'un d'eux déclare: "Si Dieu décidait
      de choisir un athlète et de lui offrir tous les dons, c'est de Jordan dont
      il s'agit."
    </p>
    <p>
      C'est ainsi que son équipe parvient à se hisser jusqu'au Final Four, à la
      Nouvelle Orléans. En demi-finale, les Tar Heels battent Houston 68-63,
      l'équipe de Hakeem Olajuwon, de Clyde Drexler (deux des meilleurs joueurs
      de tous les temps) et de Michael Young (qui fera partie, ensuite, de
      l'équipe championne d'Europe en 1993 avec le CSP Limoges). Vient, ensuite,
      le match qui va révéler le jeune joueur, Michael jordan. En finale, contre
      l'équipe des Hoyas de Georgetown où joue Patrick Ewing.
    </p>
    <p>
      Dans les gradins, 61 612 spectateurs hurlent et plus de 80 millions
      d'américains assistent à l'avènement de Jordan. Il reste 30 secondes à
      jouer et les Hoyas mènent d'un point. C'est alors que Jordan, freshman, 19
      ans, prend le shoot décisif à 17 secondes du buzzer, à 5 mètres du cercle.
      Panier ! Georgetown ne reviendra plus et Jordan devient un héros pour
      toute l'Amérique. Il restera ensuite 2 ans à l'université et après les
      Jeux Olympiques de 1984 alors qu'il n'a pas fini son cursus scolaire,
      débute l'histoire du célèbre numéro 23 des Chicago Bulls. Jordan s'inscrit
      à la draft du 24 juin 1984.{" "}
    </p>
  </MainContent>
);
