import Calendar from "@toast-ui/react-calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
function Calendars() {
  return <div className="calendarContainer">
    <Calendar usageStatistics={false}/>
  </div>;
}

export default Calendars;
