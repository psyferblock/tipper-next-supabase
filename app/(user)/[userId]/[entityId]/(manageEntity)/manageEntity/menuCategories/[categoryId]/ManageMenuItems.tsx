"use client";

import SearchBar from "@/app/root-Components/tools-Components/BasicSearchBar";
import ToggleButton from "@/app/root-Components/tools-Components/ToggleButton";
import supabase from "@/utils/supabase-browser";
import { lazy, Suspense, useState } from "react";
import ManageMenuItemsMobile from "./menuItems-Components/ManageMenuItemsMobile";
import Link from "next/link";
import Image from "next/image";
import AddNewItemModal from "./menuItems-Components/AddNewItemModal";
import EditItemModal from "./menuItems-Components/EditItemModal";
import deleteMenuItem from "@/lib/delete/deleteMenuItem";
import { useAuthContext } from "@/app/Store";
import { useSearchParams } from "next/navigation";

export default function ManageMenuItems({ menuItems, menuCategoryId }) {
  const { userId, ownedEntityId } = useAuthContext();

  const searchParams = useSearchParams();
  const categoryName = searchParams.get("categoryName");

  //Add New Item Modal
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);

  const handleAddItemButton = (e) => {
    e.preventDefault();
    setIsAddItemModalOpen(true);
  };

  const closeAddCategoryModal = () => {
    setIsAddItemModalOpen(false);
  };

  //Edit Item Modal
  const [isEditItemModalOpen, setIsEditItemModalOpen] = useState(false);

  //Storing the Id of the menu item being edited
  const [menuItemBeingEditedId, setMenuItemBeingEditedId] = useState();
  //Storing the item being edited to send it to the modal
  const [itemBeingEdited, setItemBeingEdited] = useState();

  //Function used to find the item being edited and its Id
  function handleEditItemButton(menuItemId) {
    setMenuItemBeingEditedId(menuItemId);
    menuItems.map((item) => {
      if (item.id == menuItemId) {
        setItemBeingEdited(item);
      }
    });
    setIsEditItemModalOpen(true);
  }

  //Function to close the Edit Modal
  const closeEditItemModal = () => {
    setIsEditItemModalOpen(false);
  };

  //Function to delete a menu item
  async function handleRemoveItemButton(menuItemId) {
    await deleteMenuItem(menuItemId);
  }

  return (
    <>
      {/* DESKTOP VERSION */}
      <div className="hidden sm:block w-full sm:h-fit sm:min-h-screen">
        <div className="hidden sm:flex flex-col space-y-3 w-full">
          <div className="h-fit bg-white rounded-lg p-4 drop-shadow-lg flex flex-col">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                {/* CATEGORY NAME HEADER */}
                <Link
                  href={`${userId}/${ownedEntityId}/manageEntity/menuCategories`}
                  className="flex items-center space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                  <Link
                    href={`${userId}/${ownedEntityId}/manageEntity/menuCategories`}
                    className="font-bold text-3xl"
                  >
                    {categoryName}
                  </Link>
                </Link>
                {/* ADD CATEGORY BUTTON */}
                <button
                  onClick={handleAddItemButton}
                  className="w-32 h-10 hover:bg-blue-600 text-xs rounded-3xl bg-blue-500 text-white -mt-2"
                >
                  Add Item
                </button>
              </div>

              {/* SEARCH CATEGORY SEARCH BAR */}
              <SearchBar placeHolder="Seach for an item" />
              <div id="one" className="flex pb-6">
                <table id="two" className="table-fixed w-full">
                  <thead>
                    <tr>
                      <th className="pr-96 pb-4">Item</th>
                      <th className="pr-96 pb-4">Status</th>
                      <th className="pr-96 pb-4">Publish</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300 text-gray-500">
                    {menuItems.map((item) => (
                      <tr>
                        <div className="my-3">
                          <td>
                            <img
                              className="inline-block w-14 h-14 mr-3 rounded-full ring-2 ring-white"
                              src={item.item_picture_url}
                              alt=""
                            />
                          </td>
                          <td>{item.item_name}</td>
                        </div>
                        <td id="three" className="italic">
                          {item.published ? "Public" : "Private"}
                        </td>
                        <td className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 py-3">
                            <ToggleButton switchedOn={item.published} />
                            <p id="four" className="pb-1">
                              {item.published ? "Yes" : "No"}
                            </p>
                          </div>
                          <div className="flex items-center space-x-10 text-blue-600">
                            <button
                              onClick={() => {
                                handleEditItemButton(item.id);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => {
                                handleRemoveItemButton(item.id);
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////// */}
      {/* MOBILE VERSION */}
      <div className="sm:hidden w-full flex items-center px-3 py-3 justify-between bg-gray-300 z-50 fixed">
        <button className=" flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <p className="font-bold text-3xl ">{categoryName}</p>
        </button>
        <button
          onClick={handleAddItemButton}
          className="mt-1 text-sm text-blue-500 flex items-center justify-end space-x-1"
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
          Add Item
        </button>
      </div>
      <div className="sm:hidden  ">
        <div className="h-16 sm:h-0"></div>
        <div className="px-3 space-y-3">
          <SearchBar placeHolder="Search for item" />
          <ManageMenuItemsMobile />
        </div>
      </div>

      {/* //THOSE 2 MODALS ARE AVAILABLE ON DESKTOP, FOR MOBILE VERSION THE EDIT ITEM MODAL IS IN THE "MANAGE MENU ITEMS MOBILE COMPONENT" */}

      <AddNewItemModal
        open={isAddItemModalOpen}
        closeModal={closeAddCategoryModal}
        menuCategoryId={menuCategoryId}
      />

      <EditItemModal
        open={isEditItemModalOpen}
        closeModal={closeEditItemModal}
        item={itemBeingEdited}
        menuItemBeingEditedId={menuItemBeingEditedId}
      />
    </>
  );
}
