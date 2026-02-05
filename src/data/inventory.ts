import { Terminal, Zap, Ghost, type LucideIcon } from "lucide-react";

export interface InventoryItem {
  issue: string;
  title: string;
  subtitle: string;
  price: string;
  desc: string;
  color: string;
  icon: LucideIcon;
}

export const INVENTORY: InventoryItem[] = [
  {
    issue: "#001",
    title: "NUCLEO ORIGINS",
    subtitle: "The Bare Metal Saga",
    price: "OPEN SRC",
    desc: "Direct register manipulation on STM32F446RE. No HAL attached.",
    color: "bg-comic-blue",
    icon: Zap,
  },
  {
    issue: "#002",
    title: "SEATHRU VISION",
    subtitle: "Underwater NeRFs",
    price: "W.I.P.",
    desc: "Physics-informed AI seeing through the murky depths of robotics.",
    color: "bg-comic-green",
    icon: Ghost,
  },
  {
    issue: "#003",
    title: "LAZYVIM CONFIG",
    subtitle: "The Tools of War",
    price: "FREE",
    desc: "A custom Lua-powered environment for embedded warriors.",
    color: "bg-comic-red",
    icon: Terminal,
  },
];
