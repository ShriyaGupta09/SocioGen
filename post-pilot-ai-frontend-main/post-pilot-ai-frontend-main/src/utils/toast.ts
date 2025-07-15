import { toaster } from "@/components/ui/toaster";

interface ToastMessage {
  title: string;
  description: string;
  type: "success" | "error";
}

const showMessage = ({ type, title, description }: ToastMessage) => {
  toaster.create({
    title: title,
    description: description,
    type: type,
  });
};

export { showMessage };
