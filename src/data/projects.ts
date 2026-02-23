import { Terminal, Zap, Ghost, Cpu, Wifi, Gauge, type LucideIcon } from "lucide-react";

export interface Project {
  issue: string;
  title: string;
  subtitle: string;
  price: string;
  desc: string;
  color: string;
  icon: LucideIcon;
}

export const PROJECTS: Project[] = [
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
  {
    issue: "#004",
    title: "ESP32 MESH",
    subtitle: "Swarm Intelligence",
    price: "BETA",
    desc: "A self-healing mesh network of ESP32 nodes communicating via ESP-NOW.",
    color: "bg-comic-purple",
    icon: Wifi,
  },
  {
    issue: "#005",
    title: "CAN ANALYZER",
    subtitle: "Bus Whisperer",
    price: "HARDWARE",
    desc: "Custom PCB sniffing and decoding CAN traffic with sub-microsecond precision.",
    color: "bg-comic-yellow",
    icon: Cpu,
  },
  {
    issue: "#006",
    title: "PROFILER PRO",
    subtitle: "Performance Pulse",
    price: "ALPHA",
    desc: "Real-time Python performance tracking with flame graphs and memory leak detection.",
    color: "bg-comic-blue",
    icon: Gauge,
  },
];
