import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

interface ModalProps {
  imgSrc: string;
  imgAlt: string;
}

export const Modal = ({ imgSrc, imgAlt }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="absolute bg-blend-normal top-[17px] left-[16px] md:top-[490px] bg-[#000000] text-white flex items-center opacity-75 py-[14px] px-[16px]"
      >
        <img
          src="/shared/icon-view-image.svg"
          alt="view image icon"
          width={12}
          height={12}
          className="mr-[14px]"
        />
        View Image
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-2 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-85"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform rounded-2xl transition-all">
                  <div className="flex flex-col items-end">
                    <button
                      type="button"
                      className="text-white mb-[33px] text-[14px]"
                      onClick={closeModal}
                    >
                      CLOSE
                    </button>
                    <img src={imgSrc} alt={imgAlt} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
