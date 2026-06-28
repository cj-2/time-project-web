import type { Toast } from "~/components/ui/toast/use-toast";

export const MessageErrorHandle = (error: unknown): Toast => {
	const t = useNuxtApp().$i18n.t;

	if (typeof error == "string") {
		const translate = TranslateErrorHandle(error);
		return {
			description: translate ? t(translate) : error,
			variant: "destructive",
		};
	}

	const castingE1 = error as { data?: { message: string } }

	if (castingE1.data != null && castingE1.data.message != null) {
		const translate = TranslateErrorHandle(castingE1.data.message);
		return {
			description: translate ? t(translate) : castingE1.data.message,
			variant: "destructive",
		};
	}

	const castingE2 = error as Error;

	if (castingE2.message) {
		const translate = TranslateErrorHandle(castingE2.message);
		return {
			description: translate ? t(translate) : castingE2.message,
			variant: "destructive",
		};
	}

	return {
		description: t("genericError"),
		variant: "destructive",
	};
};
