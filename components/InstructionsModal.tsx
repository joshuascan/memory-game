import { useEffect, useState } from "react";

const InstructionsModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [showModal]);

  return (
    <>
      <button
        className="bg-red-600 text-white active:bg-red-700 text-xl py-2 px-6 mb-8 rounded-lg"
        type="button"
        onClick={openModal}
      >
        Instructions
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                <div className="flex justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-center">
                    Instructions
                  </h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    The objective of the game is to match as many images as you
                    can. Click on one of the blue circles to reveal it&apos;s
                    contents and then click on a second one to try and find a
                    match. If you find a match, you receive a point and get to
                    go again. If you don&apos;t, it&apos;s the next
                    player&apos;s turn. Whoever has the most points in the end
                    wins!
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-600 background-transparent font-bold uppercase text-md mb-1"
                    type="button"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default InstructionsModal;
