import dynamic from "next/dynamic";
import "smart-webcomponents-react/source/styles/smart.default.css";
import styles from "../../../../public/css/client/schedule.module.css";
import PageBanner from '../../../components/Client/Common/PageBanner';


//Dynamically import the Smart.Scheduler component
const Scheduler = dynamic(() => import("smart-webcomponents-react/scheduler"), {
  ssr: false, //no server-side rendering
});

function Schedule() {
  const today = new Date(),
    todayDate = today.getDate(),
    currentYear = today.getFullYear(),
    currentMonth = today.getMonth(),
    dataSource = [
      {
        label: "Google AdWords Strategy",
        dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
        dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30),
        backgroundColor: "#E67C73",
      },
      {
        label: "New Brochures",
        dateStart: new Date(currentYear, currentMonth, todayDate - 1, 11, 30),
        dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 14, 15),
        backgroundColor: "#8E24AA",
      },
      {
        label: "Brochure Design Review",
        dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
        dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15),
        backgroundColor: "#039BE5",
      },
    ],
    currentTimeIndicator = true,
    shadeUntilCurrentTime = true,
    view = "day",
    views = [
      "day",
      "week",
      "month",
      "timelineDay",
      "timelineWeek",
      "timelineMonth",
    ],
    firstDayOfWeek = 1;

  return (
    <>
      

      <div className={styles.container}>
        <main className={styles.main}>
          <p></p>
        <div className="appointment-item appointment-item-two">
                    <h2>Dr. Babatunde's schedule :</h2>
                </div>
          <Scheduler
            className={styles.scheduler}
            id="scheduler"
            currentTimeIndicator={currentTimeIndicator}
            shadeUntilCurrentTime={shadeUntilCurrentTime}
            dataSource={dataSource}
            view={view}
            views={views}
            firstDayOfWeek={firstDayOfWeek}
          ></Scheduler>
        </main>
      </div>
    </>
  );
}

export default Schedule;
