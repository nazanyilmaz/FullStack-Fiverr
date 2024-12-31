import { ICategory, IInfo, IInput } from "../types";
import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaPenNib,
  FaVideo,
  FaRobot,
  FaMusic,
  FaBriefcase,
  FaUserTie,
} from "react-icons/fa";

export const categories: ICategory[] = [
  {
    name: "Programming and Tech",
    slug: "programming-tech", // URL için uygun hale getirilmiş slug
    icon: <FaCode />,
  },
  {
    name: "Graphics and Design",
    slug: "graphics-design",
    icon: <FaPaintBrush />,
  },
  {
    name: "Digital Marketing",
    slug: "digital-marketing",
    icon: <FaBullhorn />,
  },
  {
    name: "Writing and Translation",
    slug: "writing-translation",
    icon: <FaPenNib />,
  },
  {
    name: "Video and Animation",
    slug: "video-animation",
    icon: <FaVideo />,
  },
  {
    name: "AI Services",
    slug: "ai-services",
    icon: <FaRobot />,
  },
  {
    name: "Music and Audio",
    slug: "music-audio",
    icon: <FaMusic />,
  },
  {
    name: "Business",
    slug: "business",
    icon: <FaBriefcase />,
  },
  {
    name: "Consulting",
    slug: "consulting",
    icon: <FaUserTie />,
  },
];

export const items: IInfo[] = [
  {
    title: "Expert Recruitment Consultants",
    text: "Rely on an account manager to find the right talent and meet every need of your project.",
  },
  {
    title: "Satisfaction Guarantee",
    text: "Place your orders with confidence with guaranteed refunds for incomplete deliveries.",
  },
  {
    title: "Advanced Management Tools",
    text: "Seamlessly integrate freelancers into your teams and projects.",
  },
  {
    title: "Flexible Payment Models",
    text: "Pay per project or choose hourly rate options for longer-term collaborations.",
  },
];

export const inputs: IInput[] = [
  {
    label: "Title",
    name: "title",
    required: true,
  },
  {
    label: "Cover Image",
    name: "coverImage",
    required: true,
    type: "file",
  },
  {
    label: "Images",
    name: "images",
    required: true,
    type: "file",
    multiple: true,
  },
  {
    label: "Revizyon Count",
    name: "package_revisions",
    required: true,
    type: "number",
    min: 1,
  },
  {
    label: "Features (',' with)",
    name: "package_features",
    required: true,
    type: "textarea",
  },
  {
    label: "Description",
    name: "description",
    required: true,
    type: "textarea",
  },
  {
    label: "Paket Description",
    name: "package_description",
    required: true,
  },
  {
    label: "Paket Title",
    name: "package_title",
    required: true,
  },
  {
    label: "Delivery Time (day)",
    name: "package_duration",
    required: true,
    type: "number",
    min: 1,
    max: 90,
  },
  {
    label: "Price ($)",
    name: "package_price",
    type: "number",
    required: true,
    min: 1,
  },
];
