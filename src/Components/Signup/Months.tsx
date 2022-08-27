interface monthsProps {
    monthValueHandler: any
}

const Months = ({ monthValueHandler }: monthsProps) => {

    return (
        <>
            <div className="option" id="option-0" onClick={() => monthValueHandler("January")}>January</div>
            <div className="option" id="option-1" onClick={() => monthValueHandler("Februrary")}>February</div>
            <div className="option" id="option-2" onClick={() => monthValueHandler("March")}>March</div>
            <div className="option" id="option-3" onClick={() => monthValueHandler("April")}>April</div>
            <div className="option" id="option-4" onClick={() => monthValueHandler("May")}>May</div>
            <div className="option" id="option-5" onClick={() => monthValueHandler("June")}>June</div>
            <div className="option" id="option-6" onClick={() => monthValueHandler("July")}>July</div>
            <div className="option" id="option-7" onClick={() => monthValueHandler("August")}>August</div>
            <div className="option" id="option-8" onClick={() => monthValueHandler("September")}>September</div>
            <div className="option" id="option-9" onClick={() => monthValueHandler("October")}>October</div>
            <div className="option" id="option-10" onClick={() => monthValueHandler("November")}>November</div>
            <div className="option" id="option-11" onClick={() => monthValueHandler("December")}>December</div>
        </>
    )
}

export default Months