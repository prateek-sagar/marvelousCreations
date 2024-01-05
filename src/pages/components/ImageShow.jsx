import React from "react";
import { IoClose } from "react-icons/io5";

export default function ImageShow(props) {
  const handleClose = () => {
    props.onClose();
  };
  console.log(props.image);
  const close_style = {
    color: "white",
    fontSize: "2em",
    backgroundColor: "rgb(0, 0, 0, 0.7)",
    borderRadius: "100%",
  };
  if (!props.visible) return null;

  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform rounded-lg bg-gray-500 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="absolute -top-3 -right-3 cursor-pointer rounded-full flex items-center justify-center">
                <IoClose style={close_style} onClick={handleClose} />
              </div>
              <img
                src={props.image}
                className="flex w-full justify-center rounded-lg items-center bg-gray-500"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
