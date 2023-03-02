import ToggleButton from "../ToggleButton";
import WorkingHoursRow from "../working hours section/WorkingHoursRow";

export default function Home() {
  return (
    <>
      <div className=" bg-white rounded-lg p-3 sm:p-5 drop-shadow-lg">
        <p className="text-lg font-bold ">Working Hours</p>
        <p className="text-xs mb-4 sm:hidden">
          Press the clock icon to set the hour
        </p>
        {/* DIV CONTAINING ROWS */}
        <div className="flex flex-col space-y-5">
          <WorkingHoursRow
            day="Monday"
            caption="Press the clock icon to set hour"
          />
          <WorkingHoursRow day="Tuesday" />
          <WorkingHoursRow day="Wednesday" />
          <WorkingHoursRow day="Thursday" />
          <WorkingHoursRow day="Friday" />
          <WorkingHoursRow day="Saturday" />
          <WorkingHoursRow day="Sunday" />
        </div>
      </div>
    </>
  );
}
