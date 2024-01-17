import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectError, selectIsLoading } from "../../redux/selectors";
import { Loader } from "../Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetError } from "../../redux/mainSlice";
import { Layout } from "../Layout/Layout";

const App: FC = () => {
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    return () => {
      dispatch(resetError());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
  return (
    <>
      <Layout />
      <ToastContainer />
      {isLoading && <Loader />}
    </>
  );
};

export default App;
