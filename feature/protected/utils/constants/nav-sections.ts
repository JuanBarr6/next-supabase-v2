import { CreditCard, Folder, SquarePlus, StickyNote, User } from "lucide-react";

export const menuSections = [
  {
    Icon: SquarePlus,
    title: "Create Contract",
  },
  {
    Icon: StickyNote,
    title: "Contracts",
  },
  {
    Icon: CreditCard,
    title: "Payments",
  },
  {
    Icon: SquarePlus,
    title: "Com. Documents",
  },
  {
    Icon: Folder,
    title: "Invoice Receipts",
  },
  {
    Icon: User,
    title: "Team Settings",
  },
];

export const organizationSections = [
  {
    Icon: SquarePlus,
    title: "Apps & Perks",
  },
  {
    Icon: StickyNote,
    title: "Tax forms",
  },
  {
    Icon: CreditCard,
    title: "Organizations Settings",
  },
];

export const navBarSections = [
  {
    title: "My Profile",
    href: "/protected/account-settings",
  },
  {
    title: "Security",
    href: "/protected/account-settings/security?from=navbar",
  },
  {
    title: "Teams",
    href: "/protected/account-settings/teams",
  },
  {
    title: "Team Member",
    href: "/protected/account-settings/team-member",
  },
  {
    title: "Notifications",
    href: "/protected/account-settings/notifications",
  },
  {
    title: "Billing",
    href: "/protected/account-settings/billing",
  },
  {
    title: "Data Export",
    href: "/protected/account-settings/data-export",
  },
  {
    title: "To Do List",
    href: "/protected/account-settings/todo-list",
  },
];
