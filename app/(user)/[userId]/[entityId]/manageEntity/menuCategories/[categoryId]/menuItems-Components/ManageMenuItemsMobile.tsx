// ALL THIS COMPONENT IS FOR MOBILE VERSION

import ToggleButton from "@/app/root-Components/tools-Components/ToggleButton";
import { useState } from "react";
import EditItemModal from "../../../manageEntity-Components/modals/EditItemModal";

export default function ManageMenuItemsMobile() {
  //Edit Item Modal
  const [isEditItemModalOpen, setIsEditItemModalOpen] = useState(false);

  const handleEditItemButton = (e) => {
    e.preventDefault();
    setIsEditItemModalOpen(true);
  };

  const closeEditItemModal = () => {
    setIsEditItemModalOpen(false);
  };

  const saveButtonInEditItemModalIsClicked = () => {
    //write code to when "Save" is clicked
    setIsEditItemModalOpen(false);
  };
  const menuItems = [
    {
      name: "Chicken Escalope",
      published: true,
      imageUrl:
        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Pasta Arabiatta",
      published: false,
      imageUrl:
        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Pizza Margharita",
      published: true,
      imageUrl:
        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <div className="bg-gray-300 sm:h-fit min-h-screen sm:min-h-screen sm:px-12  sm:py-8">
      <div className="h-fit  bg-white rounded-lg p-3 sm:p-4 drop-shadow-lg flex flex-col">
        {/* MOBILE VERSION MENU ITEMS TABLE */}
        <div className="grid grid-cols-2">
          <div>
            <p className="font-bold pb-2">Item</p>
            <div className="divide-y">
              {menuItems.map((item) => (
                <div className="flex py-2 ">
                  <img
                    className="inline-block w-14 h-14 mr-1 rounded-full ring-2 ring-white"
                    src={item.imageUrl}
                    alt=""
                  />
                  <p className="text-gray-500 min-h-max">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid overflow-x-auto">
            <div className="flex space-x-7">
              <p className="font-bold">Publish</p>
              <p className="font-bold">Edit/Remove</p>
            </div>
            <div className="mt-2">
              {menuItems.map((item) => (
                <div className="flex items-center space-x-1 border-b py-[18px]">
                  <div className="flex items-center pt-2 space-x-2 w-20">
                    <ToggleButton switchedOn={item.published} />
                    <p className="pb-1 text-gray-500">
                      {item.published ? "Yes" : "No"}
                    </p>
                  </div>
                  <div className="flex items-center pt-1 space-x-4 text-blue-600">
                    <button onClick={handleEditItemButton}>Edit</button>
                    <button>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <EditItemModal
        open={isEditItemModalOpen}
        closeModal={closeEditItemModal}
        saveButtonInEditItemModalIsClicked={saveButtonInEditItemModalIsClicked}
      />
    </div>
  );
}
