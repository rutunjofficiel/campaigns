import { BsCheckLg } from "react-icons/bs";
import { SlEnvolopeLetter } from "react-icons/sl";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import {
  TicketPercent,
  Check,
  BadgePercent,
  FileText,
  BarChartHorizontalBig,
  Gauge,
  Blocks,
  EyeOff,
  UsersRound,
  PanelsTopLeft,
  Eye,
} from "lucide-react";
import { SiPagespeedinsights } from "react-icons/si";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { FaUserShield } from "react-icons/fa";
import { TfiPanel } from "react-icons/tfi";
import { PiNewspaperLight } from "react-icons/pi";
import { MdOutlineContactMail } from "react-icons/md";
import { FolderSync } from "lucide-react";
import { GiGrowth } from "react-icons/gi";
import { HiOutlineRectangleStack } from "react-icons/hi2";

export const ICONS = {
  check: BsCheckLg,
  envolope: SlEnvolopeLetter,
  ticketPercent: TicketPercent,
  check: Check,
  users: UsersRound,
  performance: SiPagespeedinsights,
  passwordHidden: EyeOff,
  passwordVisible: Eye,
  costEffective: FaHandHoldingUsd,
  globalOutreach: AiOutlineGlobal,
  calendar: CiCalendarDate,
  migrate: FolderSync,
  automation: FaGears,
  kyc: FaUserShield,
  campaignMaster: TfiPanel,
  content: PiNewspaperLight,
  contact: MdOutlineContactMail,
  growth: GiGrowth,
  signUpFree: TicketPercent,
  options: HiOutlineRectangleStack,
  thirdPartyIntegration: Blocks,
  landingPage: PanelsTopLeft,
  audience: UsersRound,
  analyticalDashboard: BarChartHorizontalBig,
};

export const HeroFeatures = ["Feature 1", "Feature 2", "Feature 3"];
