import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenu,
} from "@/components/ui/navigation-menu";

export default function Navigation() {
  
  return (
    <NavigationMenu style={{ listStyleType: "none"}}>
      <NavigationMenuItem>
        <NavigationMenuLink href="#features">
         <p className="text-lg">Features</p>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#how-it-works">
          <p className="text-lg">How it Works</p>
          </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#benefits"><p className="text-lg">Benefits</p></NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#contact"><p className="text-lg">Contact</p></NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}
