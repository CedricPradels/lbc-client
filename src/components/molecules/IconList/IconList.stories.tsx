import React from "react";

import IconList from "../IconList";

import { Bell, Clock, Eye } from "react-feather";

export default {
  title: "Icon List",
  component: IconList,
};

const items = [
  {
    icon: <Clock size={"100%"} strokeWidth={"3.5px"} />,
    title: "Gagner du temps",
    details:
      "Publiez vos annonces rapidement, avec vos informations pré-remplies chaque fois que vous souhaitez déposer une nouvelle annonce.",
  },
  {
    icon: <Bell size={"100%"} strokeWidth={"3.5px"} />,
    title: "Soyez les premiers informés",
    details:
      "Créez des alertes Immo ou Emploi et ne manquez jamais l'annonce qui vous intéresse.",
  },
  {
    icon: <Eye size={"100%"} strokeWidth={"3.5px"} />,
    title: "Visibilité",
    details:
      "Suivez les statistiques de vos annonces (nombre de fois où votre annonce a été vue, nombre de contact reçus).",
  },
];

export const classic = () => <IconList title="title" items={items} />;
