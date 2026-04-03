import { Bounce, toast, ToastOptions } from 'react-toastify';

const baseConfig: ToastOptions = {
  position: "bottom-right",
  autoClose: 2000,
  theme: 'light',
  hideProgressBar: true,
  closeOnClick: false,
  draggable: true,
  progress: undefined,
  transition: Bounce,
  icon: false,
};

export const showToast = (
  message: string,
  type: 'success' | 'warning' | 'error' | 'info' | 'success'
) => {
  toast[type](message, baseConfig);
};