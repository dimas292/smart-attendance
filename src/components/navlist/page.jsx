import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Navigation() {
  return (
    <NavigationMenu style={{ listStyleType: "none" }}>
      <NavigationMenuItem>
        <NavigationMenuLink>
          <Link href="/docs">Features</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>
          <Link href="/docs">How it Works</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>
          <Link href="/docs">Benefit</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>
          <Link href="/docs">Contact</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}
