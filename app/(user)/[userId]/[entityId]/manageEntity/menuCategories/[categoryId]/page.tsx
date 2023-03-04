"use client";

import SearchBar from "@/app/root-Components/tools-Components/BasicSearchBar";
import ToggleButton from "@/app/root-Components/tools-Components/ToggleButton";
import supabase from "@/utils/supabase";
import { useState } from "react";
import AddNewItemModal from "../../manageEntity-Components/modals/AddNewItemModal";
import EditItemModal from "../../manageEntity-Components/modals/EditItemModal";
import ManageMenuItemsMobile from "./menuItems-Components/ManageMenuItemsMobile";
import Link from "next/link";

export default function Home({ params }) {
  const menuItems = [
    {
      name: "Chicken Escalope",
      published: true,
      imageUrl:
        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Pasta Arabiatta",
      published: true,
      imageUrl:
        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Pizza Margharita",
      published: false,
      imageUrl:
        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  //Add New Item Modal
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);

  const handleAddItemButton = (e) => {
    e.preventDefault();
    setIsAddItemModalOpen(true);
  };

  const closeAddCategoryModal = () => {
    setIsAddItemModalOpen(false);
  };

  const saveAsDraftButtonInModalIsClicked = () => {
    //write code to when "Save" is clicked
    setIsAddItemModalOpen(false);
  };

  async function publishButtonInModalIsClicked(
    itemName: string,
    itemDescription: string,
    itemPrice: string
  ) {
    //when "Save" in modal is clicked:
    const { data, error } = await supabase
      .from("menu_item")
      .insert({
        item_name: itemName,
        item_price: itemPrice,
        item_description: itemDescription,
        menu_category_id: menuId,
      })
      .select();

    if (error) throw error;
    console.log("data returned after item creation", data);
    //Closing the modal:
    setIsEditItemModalOpen(false);
  }

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
    //write code to when "Publish" is clicked
    setIsEditItemModalOpen(false);
  };
  //Finding menu category id
  const menuId = params.categoryId;

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
                  href={"/1/1/manageEntity/menuCategories"}
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
                  <p className="font-bold text-3xl">Breakfast</p>
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
              <div className="flex pb-6">
                <table className="table-fixed w-full">
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
                              src={item.imageUrl}
                              alt=""
                            />
                          </td>
                          <td>{item.name}</td>
                        </div>
                        <td className="italic">
                          {item.published ? "Public" : "Private"}
                        </td>
                        <td className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 py-3">
                            <ToggleButton switchedOn={item.published} />
                            <p className="pb-1">
                              {item.published ? "Yes" : "No"}
                            </p>
                          </div>
                          <div className="flex items-center space-x-10 text-blue-600">
                            <button onClick={handleEditItemButton}>Edit</button>
                            <button>Remove</button>
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
          <p className="font-bold text-3xl ">Breakfast</p>
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
        saveAsDraftButtonInModalIsClicked={saveAsDraftButtonInModalIsClicked}
        publishButtonInModalIsClicked={publishButtonInModalIsClicked}
      />
      <EditItemModal
        open={isEditItemModalOpen}
        closeModal={closeEditItemModal}
        saveButtonInEditItemModalIsClicked={saveButtonInEditItemModalIsClicked}
      />
    </>
  );
}
