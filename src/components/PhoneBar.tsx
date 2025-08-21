"use client";
import { telHref, whatsappHref } from "@/lib/utils";
import { site } from "../../site.config";
import { Phone, MessageCircle } from "lucide-react";

export default function PhoneBar() {
	return (
		<div className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white/95 backdrop-blur md:hidden">
			<div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-neutral-200">
				<a href={telHref(site.phones.primary)} className="flex items-center justify-center gap-2 py-3 text-sm font-medium">
					<Phone className="h-4 w-4" aria-hidden /> Call {site.phones.primary}
				</a>
				<a href={whatsappHref(site.phones.whatsapp)} className="flex items-center justify-center gap-2 py-3 text-sm font-medium">
					<MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
				</a>
			</div>
		</div>
	);
} 