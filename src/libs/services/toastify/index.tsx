import { ToastContainer } from 'react-toastify';

const ToastifyContainer = () => {
  return (
    <ToastContainer
      autoClose={3500}
      position="top-right"
      pauseOnHover={false}
      closeButton={false}
      theme="colored"
      pauseOnFocusLoss={false}
    />
  );
};

export default ToastifyContainer;
