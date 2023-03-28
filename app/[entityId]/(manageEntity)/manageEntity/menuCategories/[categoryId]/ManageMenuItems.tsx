"use client";

import SearchBar from "@/app/root-Components/tools-Components/BasicSearchBar";
import ToggleButton from "@/app/root-Components/tools-Components/ToggleButton";
import { lazy, Suspense, useState } from "react";
import ManageMenuItemsMobile from "./menuItems-Components/ManageMenuItemsMobile";
import Link from "next/link";
import Image from "next/image";
import AddNewItemModal from "./menuItems-Components/AddNewItemModal";
import EditItemModal from "./menuItems-Components/EditItemModal";
import { useSearchParams } from "next/navigation";
import DeleteMenuItemModal from "./menuItems-Components/DeleteMenuItemModal";
import { useSupabase } from "@/app/supabase-provider";
import updateIsMenuItemPublic from "@/lib/update/updateIsMenuItemPublic";

export default function ManageMenuItems({
  menuItems,
  menuCategoryId,
  entityId,
}) {
  const searchParams = useSearchParams();
  const categoryName = searchParams.get("categoryName");

  //Add New Item Modal
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);

  //DELETE ITEM MODAL
  const [isDeleteItemModalOpen, setIsDeleteItemModalOpen] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState();

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

  function handleRemoveItemButton(menuItemIdToDelete) {
    setItemIdToDelete(menuItemIdToDelete);
    setIsDeleteItemModalOpen(true);
  }

  //Function to close the Edit Modal
  const closeEditItemModal = () => {
    setIsEditItemModalOpen(false);
  };

  //Function to close the Edit Modal
  const closeDeleteItemModal = () => {
    setIsDeleteItemModalOpen(false);
  };

  let menuItemIdToggled;
  async function handleToggleButton(boolean) {
    await updateIsMenuItemPublic(boolean, menuItemIdToggled);
  }

  return (
    <>
      {/* DESKTOP VERSION */}
      <div className=" block w-full sm:h-fit sm:min-h-screen">
        <div className=" sm:flex flex-col space-y-3 w-full">
          <div className="h-fit bg-white rounded-lg p-4 drop-shadow-lg flex flex-col">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                {/* CATEGORY NAME HEADER */}
                <Link
                  href={`${entityId}/manageEntity/menuCategories`}
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
                    href={`${entityId}/manageEntity/menuCategories`}
                    className="font-bold text-3xl"
                  >
                    {categoryName}
                  </Link>
                </Link>
                {/* ADD Menu Item BUTTON */}
                {/* DESKTOP */}
                <button
                  onClick={handleAddItemButton}
                  className=" hidden sm:block w-32 h-10 hover:bg-blue-600 text-xs rounded-3xl bg-blue-500 text-white -mt-2"
                >
                  Add Item
                </button>
                {/* MOBILE */}
                <button
                  onClick={handleAddItemButton}
                  className="sm:hidden mt-1 text-sm text-blue-500 flex items-center justify-end space-x-1"
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

              {/* SEARCH CATEGORY SEARCH BAR */}
              <SearchBar placeHolder="Seach for an item" />
              <div id="one" className="flex pb-6">
                <table id="two" className="table-fixed w-full">
                  <thead>
                    <tr>
                      <th className="pr-96 pb-4">Item</th>
                      <th className="pr-96 pb-4">Publish</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300 text-gray-500">
                    {menuItems.map((item) => (
                      <tr>
                        <td>
                          <div className="my-3 flex items-center">
                            <td>
                              <div className="relative w-10 h-10 mr-3 rounded-full ring-2 ring-white overflow-hidden">
                                <Image
                                  src={
                                    item.item_picture_url
                                      ? item.item_picture_url
                                      : ""
                                  }
                                  alt=""
                                  fill
                                />
                              </div>
                            </td>
                            <td>{item.item_name}</td>
                          </div>
                        </td>
                        <td className="flex items-center justify-between pt-0 sm:pt-1 my-3 sm:my-3">
                          <div className="flex items-center space-x-1 sm:space-x-2 pt-2">
                            <ToggleButton
                              switchedOn={item.is_menu_item_public}
                              handleToggleButton={(booleanProp) => {
                                menuItemIdToggled = item.id;
                                handleToggleButton(booleanProp);
                              }}
                            />
                            <div id="four" className="pb-1">
                              {item.is_menu_item_public ? "Yes" : "No"}
                            </div>
                          </div>
                          <div className="flex items-center space-x-1 sm:space-x-10 text-blue-600">
                            <button
                              className="hidden sm:block"
                              onClick={() => {
                                handleEditItemButton(item.id);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="hidden sm:block"
                              onClick={() => {
                                handleRemoveItemButton(item.id);
                              }}
                            >
                              Remove
                            </button>

                            {/* EDIT ICON */}
                            <button
                              className="sm:hidden pt-1"
                              onClick={() => {
                                handleEditItemButton(item.id);
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
                              className="sm:hidden pt-1"
                              onClick={() => {
                                handleRemoveItemButton(item.id);
                              }}
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
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////// */}

      {/* //THOSE 2 MODALS ARE AVAILABLE ON DESKTOP, FOR MOBILE VERSION THE EDIT ITEM MODAL IS IN THE "MANAGE MENU ITEMS MOBILE COMPONENT" */}

      <AddNewItemModal
        open={isAddItemModalOpen}
        closeModal={closeAddCategoryModal}
        categoryName={categoryName}
        menuCategoryId={menuCategoryId}
        entityId={entityId}
      />

      <EditItemModal
        open={isEditItemModalOpen}
        closeModal={closeEditItemModal}
        item={itemBeingEdited}
        menuItemBeingEditedId={menuItemBeingEditedId}
        categoryName={categoryName}
        menuCategoryId={menuCategoryId}
        entityId={entityId}
      />

      <DeleteMenuItemModal
        open={isDeleteItemModalOpen}
        closeModal={closeDeleteItemModal}
        itemIdToDelete={itemIdToDelete}
        categoryName={categoryName}
        menuCategoryId={menuCategoryId}
        entityId={entityId}
      />
    </>
  );
}
