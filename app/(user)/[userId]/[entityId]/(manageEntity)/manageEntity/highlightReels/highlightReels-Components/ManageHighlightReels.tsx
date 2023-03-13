"use client";
import ToggleButton from "@/app/root-Components/tools-Components/ToggleButton";
import deleteReel from "@/lib/delete/deleteReel";
import { useState } from "react";
import AddNewHighlightModal from "./AddNewHighlightModal";
import EditHighlightModal from "./EditHighlightModal";

export default function ManageHighlightReels({ listOfReels, entityId }) {
  //Add new highlight reel modal
  const [isAddHighlightModalOpen, setIsAddHighlightModalOpen] = useState(false);

  const handleAddHighlightButton = (e) => {
    e.preventDefault();
    setIsAddHighlightModalOpen(true);
  };

  const closeHighlightModal = () => {
    setIsAddHighlightModalOpen(false);
  };

  //Edit  highlight reel modal
  const [isEditHighlightModalOpen, setIsEditHighlightModalOpen] =
    useState(false);

  const closeEditHighlightModal = () => {
    setIsEditHighlightModalOpen(false);
  };

  //Remove Reel function
  async function handleRemoveReelButton(reelId) {
    await deleteReel(reelId);
  }

  //Storing the Id of the highlight being edited
  const [highlightBeingEditedId, setHighlightBeingEditedId] = useState();
  //Storing the item being edited to send it to the modal
  const [highlightObjectBeingEdited, setHighlightObjectBeingEdited] =
    useState();
  //Function used to find the highlight being edited and its Id
  function handleEditHighlightButton(highlightId) {
    setHighlightBeingEditedId(highlightId);
    listOfReels.map((reel) => {
      if (reel.id == highlightId) {
        setHighlightObjectBeingEdited(reel);
      }
    });
    setIsEditHighlightModalOpen(true);
  }

  return (
    <>
      <div className="bg-gray-300 sm:h-fit min-h-screen sm:min-h-screen sm:px-0 pb-3 sm:py-0">
        <div className="h-fit bg-white rounded-lg p-3 sm:p-4 drop-shadow-lg flex flex-col">
          {/* HIGHLIGHTS and ADD HIGHLIGHTS ROW */}
          <div className="flex pb-6">
            <div className="text-xl font-bold grow">Highlights</div>
            <button
              onClick={handleAddHighlightButton}
              className="text-blue-500 flex items-center space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add Highlight
            </button>
          </div>

          {/* DESKTOP HIGHLIGHTS COMPONENT */}
          <div className="hidden sm:block">
            <table className="table-fixed w-full">
              <thead>
                <tr>
                  <th className="pr-96 pb-4">Highlight</th>
                  <th className="pr-96 pb-4">Status</th>
                  <th className=" pr-96 pb-4">Publish</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 text-gray-500">
                {listOfReels.map((reel) => (
                  <tr>
                    <td>{reel.reel_name}</td>
                    <td className="italic">
                      {reel.published ? "Public" : "Private"}
                    </td>
                    <td className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 py-3">
                        <ToggleButton switchedOn={reel.published} />
                        <p className="pb-1">{reel.published ? "Yes" : "No"}</p>
                      </div>
                      <div className="flex items-center space-x-10 text-blue-600">
                        <button
                          onClick={() => {
                            handleEditHighlightButton(reel.id);
                          }}
                        >
                          Edit
                        </button>

                        <button onClick={() => handleRemoveReelButton(reel.id)}>
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE VERSION HIGHLIGHT TABLE */}
          <div className="sm:hidden grid grid-cols-2 ">
            <div>
              <p className="font-bold pb-2">Highlight</p>
              <div className="divide-y">
                <p className="text-gray-500 py-2">Events</p>
                <p className="text-gray-500 py-2">Events</p>
                <p className="text-gray-500 py-2">Our Customers</p>
              </div>
            </div>
            <div className="grid overflow-x-auto pb-4">
              <div className="flex space-x-7">
                <p className="font-bold mb-2">Publish</p>
                <p className="font-bold mb-2">Edit/Remove</p>
              </div>
              <div className="divide-y">
                <div className="flex items-center space-x-1 pb-1">
                  <div className="flex items-center pt-2 space-x-2 w-20">
                    <ToggleButton />
                    <p className="pb-1 text-gray-500">Yes</p>
                  </div>
                  <div className="flex items-center pt-1 space-x-4 text-blue-600">
                    <button>Edit</button>
                    <button>Remove</button>
                  </div>
                </div>
                <div className="flex items-center space-x-1 pb-1">
                  <div className="flex items-center pt-2 space-x-2 w-20">
                    <ToggleButton />
                    <p className="pb-1 text-gray-500">Yes</p>
                  </div>
                  <div className="flex items-center pt-1 space-x-4 text-blue-600">
                    <button>Edit</button>
                    <button>Remove</button>
                  </div>
                </div>
                <div className="flex items-center space-x-1 pb-1">
                  <div className="flex items-center pt-2 space-x-2 w-20">
                    <ToggleButton />
                    <p className="pb-1 text-gray-500">Yes</p>
                  </div>
                  <div className="flex items-center pt-1 space-x-4 text-blue-600">
                    <button>Edit</button>
                    <button>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddNewHighlightModal
        open={isAddHighlightModalOpen}
        closeModal={closeHighlightModal}
        entityId={entityId}
      />
      <EditHighlightModal
        open={isEditHighlightModalOpen}
        closeModal={closeEditHighlightModal}
        reel={highlightObjectBeingEdited}
        highlightBeingEditedId={highlightBeingEditedId}
      />
    </>
  );
}
