import React from "react";

// Icons
import CasinoRoundedIcon from "@material-ui/icons/CasinoRounded";
import EmojiEventsRoundedIcon from "@material-ui/icons/EmojiEventsRounded";
import SubjectRoundedIcon from "@material-ui/icons/SubjectRounded";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";

export const SidebarData = [
  {
    title: "Jogos",
    icon: <CasinoRoundedIcon />,
    link: "/games",
  },
  {
    title: "Ranking",
    icon: <EmojiEventsRoundedIcon />,
    link: "/ranking",
  },
  {
    title: "Postagens",
    icon: <SubjectRoundedIcon />,
    link: "/posts",
  },
  {
    title: "Eventos",
    icon: <DateRangeRoundedIcon />,
    link: "/events",
  },
  {
    title: "Grupos",
    icon: <GroupRoundedIcon />,
    link: "/groups",
  },
  {
    title: "Nos Ajude",
    icon: <AttachMoneyRoundedIcon />,
    link: "/donation",
  },
];
