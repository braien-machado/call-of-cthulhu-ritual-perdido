import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Call of Cthulhu: O Ritual Perdido" },
    {
      name: "description",
      content: "Bem-vindo a Call of Cthulhu: O Ritual Perdido",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
