import { useToast } from "@/components/ui/toast/use-toast";

export const ErrorToast = (error: unknown) => {
	return useToast().toast(MessageErrorHandle(error));
};
