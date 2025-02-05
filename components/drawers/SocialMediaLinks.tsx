import { DrawerTemplate } from "./Template";
import { socialLinks } from "../../constants/app";
import { SocialMediaIconLink } from "../SocialMediaIconLink";
import { VStack } from "../ui/vstack";

export function SocialMediaLinks() {
  return (
    <DrawerTemplate title="Links">
      <VStack space="sm" className="mt-4">
        {socialLinks.map((link) => (
          <SocialMediaIconLink
            key={link.title}
            url={link.url}
            icon={link.icon}
            title={link.title}
            body={link.body}
          />
        ))}
      </VStack>
    </DrawerTemplate>
  );
}
