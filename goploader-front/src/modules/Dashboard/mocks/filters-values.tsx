import { Image, Video, Headphones, File, MoreHorizontal } from "lucide-react";

export const fileType = {
	placeholder: "File type",
	options: [
		{ value: "image", label: "Image", icon: <Image  className="h-4"/> },
		{ value: "video", label: "Video", icon: <Video  className="h-4"/> },
		{ value: "audio", label: "Audio", icon: <Headphones  className="h-4"/> },
		{ value: "document", label: "Document", icon: <File  className="h-4"/> },
		{ value: "other", label: "Other", icon: <MoreHorizontal  className="h-4"/> },
	],
};

export const lastModified = {
	placeholder: "Last modified",
	options: [
		{ value: "today", label: "Today" },
		{ value: "yesterday", label: "Yesterday" },
		{ value: "last-week", label: "Last week" },
		{ value: "last-month", label: "Last month" },
		{ value: "this-year", label: `This year (${new Date().getFullYear()})` },
		{ value: "last-year", label: `Last year (${new Date().getFullYear() - 1})` },
		{ value: "older", label: "Older" },
	],
};
