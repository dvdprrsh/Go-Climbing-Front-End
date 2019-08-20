import swal from "sweetalert";
import { NETWORK_ERROR } from "./errorTypes";

export const errorMessage = error => {
  switch (error.message) {
    case NETWORK_ERROR:
      return connectionError(error);

    default:
      return genericError(error);
  }
};

const genericError = error => {
  swal({
    title: error,
    icon: "error"
  });
};

const connectionError = error => {
  swal({
    title: error,
    text: "Please check your connection and refresh if needs be",
    icon: "error",
    button: false,

    closeOnClickOutside: false
  });
};
