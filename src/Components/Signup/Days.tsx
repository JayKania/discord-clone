interface daysProps {
    dayValueHandler: any
}

const Days = ({ dayValueHandler }: daysProps) => {
    let days = [];
    for (let i = 1; i <= 31; i++) {
        days.push(<div className='option' onClick={() => dayValueHandler(i)}>{i}</div>);
    }

    return (
        <>{days}</>
    )
}

export default Days