"use client";

import { useState } from "react";
import ToggleButton from "@/app/root-Components/tools-Components/ToggleButton";
import SearchBar from "@/app/root-Components/tools-Components/BasicSearchBar";
import MenuCategoryCard from "./menuCategories-Components/MenuCategoryCard";
import MobileDropdownManagement from "../manageEntity-Components/MobileDropdownManagement";
import EditMenuCategoryNameModal from "./menuCategories-Components/EditMenuCategoryNameModal";
import AddNewMenuCategoryModal from "./menuCategories-Components/AddNewMenuCategoryModal";
<<<<<<< HEAD
import { useAuthContext } from "@/app/context/Store";
=======
import { useAuthContext } from "@/app/Store";
import DeleteMenuCategoryModal from "./menuCategories-Components/DeleteMenuCategoryModal";
>>>>>>> f6fa4aaaf0f9f85cae5f257035fea6f563841eb4

export default function ManageMenuCategories(props) {
  //Owner chooses between pdf and manually inputting items
  const [isPdf, setIsPdf] = useState(false);
  const menuCategories = props.menuCategories;
  //Edit Category Name Modal
  const [isEditCategoryNameModalOpen, setIsEditCategoryNameModalOpen] =
    useState(false);
  //State variable to store the menu category name being edited to send to modal
  const [
    categoryNameInEditCategoryNameModal,
    setCategoryNameInEditCategoryNameModal,
  ] = useState();
  //State to know what is the Id of the menu category name having its name edited
  const [editNameCategoryId, setEditNameCategoryId] = useState();
  //Add New Category Modal
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  //DELETE CATEGORY MODAL
  const [isDeleteMenuCategoryModalOpen, setIsDeleteMenuCategoryModalOpen] =
    useState(false);
  const [menuCategoryIdToDelete, setMenuCategoryIdToDelete] = useState();

  function handleEditCategoryNameButton(categoryId) {
    setEditNameCategoryId(categoryId);
    menuCategories.map((category) => {
      if (category.id == categoryId) {
        setCategoryNameInEditCategoryNameModal(category.menu_category_name);
      }
    });
    setIsEditCategoryNameModalOpen(true);
  }

  function handleDeleteCategoryButton(categoryIdToDelete) {
    setMenuCategoryIdToDelete(categoryIdToDelete);
    setIsDeleteMenuCategoryModalOpen(true);
  }

  const closeEditCategoryNameModal = () => {
    setIsEditCategoryNameModalOpen(false);
  };

  const handleAddCategoryButton = (e) => {
    e.preventDefault();
    setIsAddCategoryModalOpen(true);
  };

  const closeAddCategoryModal = () => {
    setIsAddCategoryModalOpen(false);
  };

  const closeDeleteCategoryModal = () => {
    setIsDeleteMenuCategoryModalOpen(false);
  };

  const entityId = "a7fb29ed-3b7a-452b-a284-ae2a2dff14bb";

  return (
    <>
      <div className="px-3 flex items-center justify-between sm:hidden h-14 sm:pl-16 sm:h-fit py-3 sm:pt-6 sm:mt-0 sm:pb-5 bg-gray-300 w-full z-50 sm:z-0 fixed sm:relative sm:mb-0 text-2xl sm:text-2xl font-bold sm:font-bold">
        <p>Manage Menu</p>
        <div className="sm:hidden">
          <MobileDropdownManagement />
        </div>
      </div>

      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* <div className="flex flex-col space-y-3 sm:space-y-2 w-full"> */}

      <div className="flex flex-col space-y-3 sm:space-y-2 w-full">
        {/* DIV TO COMPENSATE THE HEADER DIV FIXED */}
        <div className="h-14 sm:h-0"></div>
        {/* MENU HEADER AND ADD CATEGORY BUTTON */}
        <div className="flex  items-center justify-end">
          {/* UPLOAD MENU AS PDF */}
          {/* <div className="flex items-center space-x-6">
            <div className="flex pt-1 space-x-2 sm:flex-row flex-row-reverse">
              <div className="text-xs mt-0.5 ml-2 sm:ml-0">
                Upload your menu as a PDF
              </div>
              <ToggleButton />
            </div>
          </div> */}

          {/* ADD CATEGORY BUTTON */}
          <button
            onClick={handleAddCategoryButton}
            className="hidden sm:block w-32 h-10 hover:bg-blue-600 text-xs rounded-3xl bg-blue-500 text-white -mt-2"
          >
            Add New Category
          </button>
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
                    categoryName={category.menu_category_name}
                    categoryId={category.id}
                    openEditNameModal={handleEditCategoryNameButton}
                    openDeleteMenuCategoryModal={handleDeleteCategoryButton}
                    entityId={entityId}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* MODALS */}
      <EditMenuCategoryNameModal
        open={isEditCategoryNameModalOpen}
        closeModal={closeEditCategoryNameModal}
        currentName={categoryNameInEditCategoryNameModal}
        categoryId={editNameCategoryId}
      />
      <AddNewMenuCategoryModal
        open={isAddCategoryModalOpen}
        closeModal={closeAddCategoryModal}
        entityId={entityId}
      />

      <DeleteMenuCategoryModal
        open={isDeleteMenuCategoryModalOpen}
        closeModal={closeDeleteCategoryModal}
        entityId={entityId}
        categoryIdToDelete={menuCategoryIdToDelete}
      />
    </>
  );
}
