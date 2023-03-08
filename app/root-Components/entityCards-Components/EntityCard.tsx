import getFirstMenuCategoryId from "@/lib/getFirstMenuCategoryId";
import Link from "next/link";
export default async function EntityCard(props) {
  const entity = props.entity;
  const entityId = entity.id;

  const firstMenuCategoryId = await getFirstMenuCategoryId(entityId);

  return (
    <>
      <Link
        href={`/1/${entityId}/menu/${firstMenuCategoryId}`}
        className="bg-gray-400 w-60 sm:w-[342px] h-40 sm:h-[162px] drop-shadow-lg rounded-md sm:pb-6"
      >
        {/* <!-- Pin to bottom left corner --> */}
        <div className="absolute bottom-3 sm:bottom-5 left-0 h-8 sm:w-fit flex space-x-2 pl-2">
          <img
            className="w-8 h-8 inline-block rounded-full ring-2 mt-1"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div>
            <p>{entity.entity_name}</p>
            <p className="text-xs">{entity.entity_type}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
