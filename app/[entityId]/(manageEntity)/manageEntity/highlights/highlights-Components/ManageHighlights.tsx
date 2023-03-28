"use client";
import ToggleButton from "@/app/root-Components/tools-Components/ToggleButton";
import deleteHighlight from "@/lib/delete/deleteHighlight";
import updateIsHighlightPublic from "@/lib/update/updateIsHighlightPublic";
import { useState } from "react";
import AddNewHighlightModal from "./AddNewHighlightModal";
import DeleteHighlightModal from "./DeleteHighlightModal";
import EditHighlightModal from "./EditHighlightModal";

export default function ManageHighlights({ listOfHighlights, entityId }) {
  //Add new highlight modal
  const [isAddHighlightModalOpen, setIsAddHighlightModalOpen] = useState(false);
  const [isEditHighlightModalOpen, setIsEditHighlightModalOpen] =
    useState(false);
  const [isDeleteHighlightModalOpen, setIsDeleteHighlightModalOpen] =
    useState(false);
  //Storing the Id of the highlight being edited
  const [highlightBeingEditedId, setHighlightBeingEditedId] = useState();
  //Storing the item being edited to send it to the modal
  const [highlightObjectBeingEdited, setHighlightObjectBeingEdited] =
    useState();
  //Storing the id of the highlight to be deleted and passing it as props to the delete highlight modal
  const [highlightIdToDelete, setHighlightIdToDelete] = useState();

  const handleAddHighlightButton = (e) => {
    e.preventDefault();
    setIsAddHighlightModalOpen(true);
  };

  const closeHighlightModal = () => {
    setIsAddHighlightModalOpen(false);
  };

  //EDIT HIGHLIGHT MODAL
  const closeEditHighlightModal = () => {
    setIsEditHighlightModalOpen(false);
  };

  //DELETE HIGHLIGHT MODAL
  const closeDeleteHighlightModal = () => {
    setIsDeleteHighlightModalOpen(false);
  };

  //Function used to find the highlight being edited and its Id
  function handleEditHighlightButton(highlightId) {
    setHighlightBeingEditedId(highlightId);
    listOfHighlights.map((highlight) => {
      if (highlight.id == highlightId) {
        setHighlightObjectBeingEdited(highlight);
      }
    });
    setIsEditHighlightModalOpen(true);
  }

  function handleRemoveHighlightButton(highlightId) {
    setHighlightIdToDelete(highlightId);
    setIsDeleteHighlightModalOpen(true);
  }

  //Storing the highlight Id that is being toggled to public or not public
  let highlightIdToggled;
  async function handleToggleButton(boolean) {
    await updateIsHighlightPublic(boolean, highlightIdToggled);
  }

  return (
    <>
      <div className="bg-gray-300 sm:h-fit min-h-screen sm:min-h-screen sm:px-0 py-4 sm:py-0">
        <div className="h-fit bg-white rounded-lg p-3 sm:p-4 drop-shadow-lg flex flex-col">
          {/* HIGHLIGHTS and ADD HIGHLIGHTS ROW */}
          <div className="flex pb-6">
            <div className="hidden sm:block text-xl font-bold grow">
              Highlights
            </div>
            <button
              onClick={handleAddHighlightButton}
              className="text-blue-500 flex w-full justify-end items-center space-x-1 "
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
          <div className="sm:block">
            <table className="table-fixed w-full">
              <thead>
                <tr>
                  <th className="pr-96 pb-4">Highlight</th>
                  <th className=" pr-96 pb-4">Publish</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 text-gray-500">
                {listOfHighlights.map((highlight) => (
                  <tr>
                    <td>{highlight.highlight_name}</td>
                    <td className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 sm:space-x-2 pt-1 my-3 sm:my-3">
                        <ToggleButton
                          switchedOn={highlight.is_highlight_public}
                          handleToggleButton={(booleanProp) => {
                            highlightIdToggled = highlight.id;
                            handleToggleButton(booleanProp);
                          }}
                        />
                        <div className="pb-1">
                          {highlight.is_highlight_public ? "Yes" : "No"}
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 sm:space-x-10 text-blue-600">
                        <button
                          className="hidden sm:block"
                          onClick={() => {
                            handleEditHighlightButton(highlight.id);
                          }}
                        >
                          Edit
                        </button>

                        <button
                          className="hidden sm:block"
                          onClick={() =>
                            handleRemoveHighlightButton(highlight.id)
                          }
                        >
                          Delete
                        </button>

                        {/* EDIT ICON */}
                        <button
                          className="sm:hidden"
                          onClick={() => {
                            handleEditHighlightButton(highlight.id);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                        </button>

                        {/* TRASH ICON */}
                        <button
                          className="sm:hidden"
                          onClick={() =>
                            handleRemoveHighlightButton(highlight.id)
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-blue-500 m-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE VERSION HIGHLIGHT TABLE */}
          {/* <div className="sm:hidden grid grid-cols-2 ">
            <div>
              <div className="font-bold pb-2">Highlight</div>
              <div className="divide-y">
                <div className="text-gray-500 py-2">Events</div>
                <div className="text-gray-500 py-2">Events</div>
                <div className="text-gray-500 py-2">
                  <div className="truncate ...">Our Customers ugadgub</div>
                </div>
              </div>
            </div>
            <div className="grid overflow-x-auto pb-4">
              <div className="flex space-x-7">
                <div className="font-bold mb-2">Publish</div> */}
          {/* <div className="font-bold mb-2">Edit/Remove</div> */}
          {/* </div>
              <div className="divide-y">
                <div className="flex items-center space-x-1 pb-1">
                  <div className="flex items-center pt-2 space-x-2 w-20">
                    <ToggleButton />
                    <div className="pb-1 text-gray-500">Yes</div>
                  </div>
                  <div className="flex items-center pt-1 space-x-4 text-blue-600">
                    <button>Edit</button>
                    <button>Remove</button>
                  </div>
                </div>
  
              </div>
            </div>
          </div> */}
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
        highlight={highlightObjectBeingEdited}
        highlightBeingEditedId={highlightBeingEditedId}
        entityId={entityId}
      />
      <DeleteHighlightModal
        open={isDeleteHighlightModalOpen}
        closeModal={closeDeleteHighlightModal}
        highlightIdToDelete={highlightIdToDelete}
        entityId={entityId}
      />
    </>
  );
}
