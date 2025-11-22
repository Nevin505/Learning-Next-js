import { useRef } from "react";
import Button from "../ui/button";
import classe from "./event-search.module.css";
const EventsSearch = (props) => {
  const yearValue = useRef();
  const monthValue = useRef();

  // console.log(yearValue.current.value, monthValue.current.value);

  const submitHandler = (event) => {
    console.log(yearValue.current.value, monthValue.current.value);
    const selectedYear = yearValue.current.value;
    const selectedMonth = monthValue.current.value;

    event.preventDefault();
    props?.onSearch(selectedYear, selectedMonth);
  };
  return (
    <form className={classe.form} onSubmit={submitHandler}>
      <div className={classe.controls}>
        <div className={classe.control}>
          <label htmlFor="year">Year</label>
          <select name="year" id="year" ref={yearValue}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classe.control}>
          <label htmlFor="month">Month</label>
          <select name="month" id="month" ref={monthValue}>
            <option value="2">February</option>
            <option value="1">January</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default EventsSearch;
