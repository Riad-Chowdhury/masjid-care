import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import Payment from "./Payment";

export default function MyModal({ user }) {
  const { _id, name, number, defaultFee, image } = user || {};
  let [isOpen, setIsOpen] = useState(true);
  //   const { payData, setPayData } = useState({
  //     user: {
  //       name,
  //       number,
  //       defaultFee,
  //       image,
  //     },
  //   });
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30"
      >
        Open dialog
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4 ">
            <DialogPanel
              transition
              className="border-2 w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="h3" className=" font-medium text-xl">
                name : {name}
              </DialogTitle>
              <p className="mt-2 text-xl"> TK :{defaultFee}</p>
              <div className="mt-4">
                <Payment close={close}></Payment>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
