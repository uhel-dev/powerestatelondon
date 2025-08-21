export function cn(...classes: Array<string | undefined | null | false>) {
	return classes.filter(Boolean).join(" ");
}

export function telHref(number: string) {
	const digits = number.replace(/[^0-9+]/g, "");
	return `tel:${digits}`;
}

export function whatsappHref(e164WithoutPlus: string) {
	return `https://wa.me/${e164WithoutPlus}`;
}

export function toTitleCase(input: string) {
	return input
		.split(" ")
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(" ");
} 