import { Feather } from "@expo/vector-icons";

import ImgCamara01 from "../assets/images/imgCamara01.jpg";
import ImgCamara02 from "../assets/images/imgCamara02.jpg";
import ImgCamara03 from "../assets/images/imgCamara03.jpg";
import ImgCamara04 from "../assets/images/imgCamara04.jpg";
import ImgCamara05 from "../assets/images/imgCamara05.jpg";
import ImgCamara06 from "../assets/images/imgCamara06.jpg";
import ImgCamara07 from "../assets/images/imgCamara07.jpg";

import Edigle from "../assets/images/edigle.jpg";
import Israel from "../assets/images/israel.jpg";
import Jamerson from "../assets/images/jamerson.jpg";
import Luis from "../assets/images/luis.jpg";
import Renato from "../assets/images/renato.jpg";
import Tadeu from "../assets/images/tadeu.jpg";
import Vitoria from "../assets/images/vitoria.jpg";
import Wesley from "../assets/images/wesley.jpg";

export const teamList = [
  {
    name: "VITÓRIA SAMPAIO",
    rules: "DIRETORA",
    image: Vitoria,
  },
  {
    name: "JAMERSON DUARTE",
    rules: "OPERADOR DE SISTEMA",
    image: Jamerson,
  },
  {
    name: "LUIS FERNANDES",
    rules: "OPERADOR DE ÁUDIO",
    image: Luis,
  },
  {
    name: "TADEU FERREIRA ",
    rules: "COMUNICADOR",
    image: Tadeu,
  },
  {
    name: "EDIGLÊ RIBEIRO",
    rules: "RADIALISTA",
    image: Edigle,
  },
  {
    name: "WESLEY SIEBRA",
    rules: "ASSISTENTE DE OPERAÇÕES",
    image: Wesley,
  },
  {
    name: "RENATO DIAS",
    rules: "ASSISTENTE DE OPERAÇÕES",
    image: Renato,
  },
  {
    name: "ISRAEL VARELLA",
    rules: "RADIALISTA",
    image: Israel,
  },
];

export const URL_PEDIDO = "https://player.xcast.com.br/pedido/10658";
export const URL_TOCANDO =
  "https://pa-def.srvsite.com/template/tocando_agora.php?idsite=7430";

export const galery = [
  ImgCamara01,
  ImgCamara02,
  ImgCamara03,
  ImgCamara04,
  ImgCamara05,
  ImgCamara06,
  ImgCamara07,
];

interface MenuIconType {
  pageNumber: number;
  icon: keyof typeof Feather.glyphMap;
  text: string;
}

export const menuIcons: MenuIconType[] = [
  {
    pageNumber: 1,
    icon: "mic",
    text: "Programação",
  },
  {
    pageNumber: 2,
    icon: "users",
    text: "Equipe",
  },
  {
    pageNumber: 3,
    icon: "heart",
    text: "Quem Somos",
  },
  {
    pageNumber: 4,
    icon: "camera",
    text: "Galeria",
  },
  {
    pageNumber: 5,
    icon: "music",
    text: "Pedir Música",
  },
  {
    pageNumber: 6,
    icon: "link",
    text: "Links",
  },
];

interface ScheduleType {
  weekDay: string;
  routine: string[];
}

export const scheduleGrid: ScheduleType[] = [
  {
    weekDay: "Segunda-feira",
    routine: ["12:00 as 13:00h - CÂMARA EM PAUTA"],
  },
  {
    weekDay: "Terça-feira",
    routine: ["12:00 as 13:00h - CÂMARA EM PAUTA"],
  },
  {
    weekDay: "Quarta-feira",
    routine: [
      "12:00 as 13:00h - CÂMARA EM PAUTA",
      "14:00 as 19:00h - SESSÃO LEGISLATIVA",
    ],
  },
  {
    weekDay: "Quinta-feira",
    routine: ["12:00 as 13:00h - CÂMARA EM PAUTA", "19:00h - CÂMARA MULHER"],
  },
  {
    weekDay: "Sexta-feira",
    routine: ["12:00 as 13:00h - CÂMARA EM PAUTA"],
  },
];

type SocialLinkType = {
  url: string;
  title: string;
  body: string;
  icon: keyof typeof Feather.glyphMap;
};

export const socialLinks: SocialLinkType[] = [
  {
    url: "https://www.facebook.com/cm.varzeaalegre",
    icon: "facebook",
    title: "Facebook",
    body: "fb.com/camaravarzeaalegre",
  },
  {
    url: "https://www.instagram.com/cmvarzeaalegre/",
    title: "instagram",
    body: "@cmvarzeaalegree",
    icon: "instagram",
  },
  {
    url: "https://www.youtube.com/@tvcamaravarzeaalegre-ce9019",
    title: "Youtube",
    body: "@tvcamaravarzeaalegre-ce9019",
    icon: "youtube",
  },
  {
    url: "https://www.camaravarzeaalegre.ce.gov.br/",
    title: "Site",
    body: "camaravarzeaalegre.ce.gov.br",
    icon: "link",
  },
];
