import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenu,
} from "@/components/ui/navigation-menu";

export default function Navigation() {
  return (
    <NavigationMenu style={{ listStyleType: "none" }}>
      <NavigationMenuItem>
        <NavigationMenuLink href="#features">
          <p>Features</p>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#how-it-works">How it Works</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#benefits">Benefits</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#contact">Contact</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}
