import AddNewHighlightModal from "@/components/modals/AddNewHighlightModal";
import ToggleButton from "@/components/ToggleButton";
import { useState } from "react";

export default function Home() {
  const [isAddHighlightModalOpen, setIsAddHighlightModalOpen] = useState(false);

  const handleAddHighlightButton = (e) => {
    e.preventDefault();
    setIsAddHighlightModalOpen(true);
  };

  const closeHighlightModal = () => {
    setIsAddHighlightModalOpen(false);
  };

  const addButtonInModalIsClicked = () => {
    //write code to when "Add" is clicked
    setIsAddHighlightModalOpen(false);
  };

  return (
    <div className="bg-gray-300 sm:h-fit min-h-screen sm:min-h-screen sm:px-12 pb-3 sm:py-0">
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
          <AddNewHighlightModal
            open={isAddHighlightModalOpen}
            closeModal={closeHighlightModal}
            addButtonInModalIsClicked={addButtonInModalIsClicked}
          />
        </div>

        {/* DESKTOP HIGHLIGHTS COMPONENT */}
        <div className="hidden sm:block">
          <table className="table-fixed w-full">
            <thead>
              <tr>
                <th className="pr-96 pb-4">Highlight</th>
                <th className="pr-96 pb-4">Status</th>
                <th className=" pr-96 pb-4">Publish/Unpublish</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300 text-gray-500">
              <tr>
                <td>Events</td>
                <td className="italic">Public</td>
                <td className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 py-3">
                    <ToggleButton />
                    <p className="pb-1">Yes</p>
                  </div>
                  <div className="flex items-center space-x-10 text-blue-600">
                    <button>Edit</button>
                    <button>Remove</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Happy Customers</td>
                <td className=" italic">Private</td>
                <td className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 py-3">
                    <ToggleButton />
                    <p className="pb-1">No</p>
                  </div>
                  <div className="flex items-center space-x-10 text-blue-600">
                    <button>Edit</button>
                    <button>Remove</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Our offers</td>
                <td className=" italic">Private</td>
                <td className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 py-3">
                    <ToggleButton />
                    <p className="pb-1">No</p>
                  </div>
                  <div className="flex items-center space-x-10 text-blue-600">
                    <button>Edit</button>
                    <button>Remove</button>
                  </div>
                </td>
              </tr>
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
  );
}
