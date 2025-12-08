import { toast } from "react-toastify";

export function successToast(key) {
  toast.dismiss();
  toast.success(key);
}

export function errorToast(key) {
  toast.dismiss();
  toast.error(key, {
    className: "error-toast",
  });
}

export function warnToast(key) {
  toast.dismiss();
  toast.warn(key);
}
