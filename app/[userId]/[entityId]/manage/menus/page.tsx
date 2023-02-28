"use client";

import { useState } from "react";
import ToggleButton from "@/app/Components/ToggleButton";
import SearchBar from "@/app/Components/SearchBar";
import MenuCategoryCard from "./Components/MenuCategoryCard";
import ManageEntityMenu from "./Components/ManageEntityLeftMenu";
import MobileDropdownManagement from "../Components/MobileDropdownManagement";
import EditMenuCategoryNameModal from "../Components/modals/EditMenuCategoryNameModal";
import AddNewMenuCategoryModal from "../Components/modals/AddNewMenuCategoryModal";
import supabase from "@/utils/supabase";
import { useAuthContext } from "@/app/Store";

export default function Home() {
  //Owner chooses between pdf and manually inputting items
  const [isPdf, setIsPdf] = useState(false);

  const menuCategories = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Desert",
    "Drinks",
    "Our Specialties",
  ];

  //Edit Category Name Modal
  const [isEditCategoryNameModalOpen, setIsEditCategoryNameModalOpen] =
    useState(false);

  const handleEditCategoryNameButton = (e) => {
    e.preventDefault();
    setIsEditCategoryNameModalOpen(true);
  };

  const closeEditCategoryNameModal = () => {
    setIsEditCategoryNameModalOpen(false);
  };

  const saveButtonInModalIsClicked = () => {
    //write code to when "Save" is clicked
    setIsEditCategoryNameModalOpen(false);
  };

  //Add New Category Modal
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);

  const handleAddCategoryButton = (e) => {
    e.preventDefault();
    setIsAddCategoryModalOpen(true);
  };

  const closeAddCategoryModal = () => {
    setIsAddCategoryModalOpen(false);
  };

  const saveAsDraftButtonInModalIsClicked = () => {
    //write code to when "Save" is clicked
    setIsAddCategoryModalOpen(false);
  };

  const { ownedEntityId } = useAuthContext();

  async function publishButtonInModalIsClicked(categoryName: string) {
    //After published button in modal is clicked:
    const { data, error } = await supabase
      .from("menu_category")
      .insert({
        menu_category: categoryName,
        entity_id: ownedEntityId,
      })
      .select();

    if (error) throw error;
    console.log("data returned after category creation", data);

    //Close the modal
    setIsAddCategoryModalOpen(false);
  }

  return (
    <>
      <div className="px-3 flex items-center justify-between sm:hidden h-14 sm:pl-16 sm:h-fit py-3 sm:pt-6 sm:mt-0 sm:pb-5 bg-gray-300 w-full z-50 sm:z-0 fixed sm:relative sm:mb-0 text-2xl sm:text-2xl font-bold sm:font-bold">
        <p>Manage Menu</p>
        <div className="sm:hidden">
          <MobileDropdownManagement />
        </div>
      </div>
      <div className="bg-gray-300 sm:h-fit sm:min-h-screen px-3 sm:px-12 pt-0 pb-4 sm:py-8">
        {/* PAGE BG COLOR AND PADDING  */}
        <div className="hidden sm:block font-bold text-2xl pt-6 pb-4">
          Manage Entity
        </div>
        <div className="flex sm:space-x-4">
          {/* LEFT MENU */}
          <ManageEntityMenu />

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* <div className="flex flex-col space-y-3 sm:space-y-2 w-full"> */}

          <div className="flex flex-col space-y-3 sm:space-y-2 w-full">
            {/* DIV TO COMPENSATE THE HEADER DIV FIXED */}
            <div className="h-14 sm:h-0"></div>
            {/* MENU HEADER AND ADD CATEGORY BUTTON */}
            <div className="flex  items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex pt-1 space-x-2 sm:flex-row flex-row-reverse">
                  <p className="text-xs mt-0.5 ml-2 sm:ml-0">
                    Upload your menu as a PDF
                  </p>
                  <ToggleButton />
                </div>
              </div>

              {!isPdf && (
                <>
                  {/* ADD CATEGORY BUTTON */}
                  <button
                    onClick={handleAddCategoryButton}
                    className="hidden sm:block w-32 h-10 hover:bg-blue-600 text-xs rounded-3xl bg-blue-500 text-white -mt-2"
                  >
                    Add New Category
                  </button>
                </>
              )}
            </div>

            {isPdf ? (
              <div className="bg-gray-100  h-56 rounded-lg border-2 border-dashed border-gray-400 mt-1">
                <div className=" flex justify-center rounded-md px-6 pt-[52px] ">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-gray-100 font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-400"
                      >
                        <span className="">Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, JPG up to 10MB</p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* "SEARCH FOR A CATEGORY" SEARCH BAR */}
                <SearchBar placeHolder="Seach for a category" />
                {/* ADD CATEGORY FOR MOBILE */}
                <button
                  onClick={handleAddCategoryButton}
                  className="sm:hidden w-fit text-blue-500 flex items-center justify-between space-x-1"
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
                  Add New Category
                </button>
                <div>
                  {/* MENU CATEGORIES */}
                  <div className="grid sm:grid-cols-4 gap-4">
                    {menuCategories.map((category) => (
                      <MenuCategoryCard
                        type={category}
                        openEditNameModal={handleEditCategoryNameButton}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* MODALS */}
      <EditMenuCategoryNameModal
        open={isEditCategoryNameModalOpen}
        closeModal={closeEditCategoryNameModal}
        saveButtonInModalIsClicked={saveButtonInModalIsClicked}
      />
      <AddNewMenuCategoryModal
        open={isAddCategoryModalOpen}
        closeModal={closeAddCategoryModal}
        saveAsDraftButtonInModalIsClicked={saveAsDraftButtonInModalIsClicked}
        publishButtonInModalIsClicked={publishButtonInModalIsClicked}
      />
    </>
  );
}
