"use client";

import { Schedule } from "@/components/drawers/Schedule";
import { About } from "@/components/drawers/About";
import { Galery } from "@/components/drawers/Galery";
import { Center } from "@/components/ui/center";
import { Image } from "@/components/ui/image";
import { VStack } from "@/components/ui/vstack";
import { ReactElement, useCallback, useState } from "react";

import { Drawer } from "react-native-drawer-layout";
import NativeIcons from "@/components/Icons";
import { RequestMusic, SocialMediaLinks, Team } from "@/components/drawers";
import { MenuIcons } from "@/components/MenuIcons";
import { PlayingNow } from "@/components/PlayingNow";
import { MusicPlay } from "@/components/MusicPlay";
import { FooterHome } from "@/components/FooterHome";

export default function HomeScreen() {
  const [page, setPage] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);

  function navigationView(): ReactElement {
    const pageContentByNumber = [
      <Schedule />,
      <Team />,
      <About />,
      <Galery />,
      <RequestMusic />,
      <SocialMediaLinks />,
    ];

    return pageContentByNumber[page - 1];
  }

  const handleOnPressIcon = useCallback((pageNumber: number) => {
    setDrawerOpen(true);
    setPage(pageNumber);
  }, []);

  return (
    <Drawer
      open={drawerOpen}
      onOpen={() => setDrawerOpen(true)}
      onClose={() => setDrawerOpen(false)}
      drawerPosition="left"
      renderDrawerContent={navigationView}
    >
      <Image
        source={require("../assets/images/bg9.png")}
        alt="Imagem de fundo"
        className="absolute w-full h-full bg-repeat flex-1"
      />
      <VStack className="flex-1 justify-evenly">
        <Center className="px-6">
          <NativeIcons.RadioLogoIcon width={313.03} height={140} />
          <PlayingNow />
          <MusicPlay />
          <MenuIcons onPressIcon={(page) => handleOnPressIcon(page)} />
        </Center>
        <FooterHome />
      </VStack>
    </Drawer>
  );
}
