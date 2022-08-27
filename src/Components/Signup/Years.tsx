interface yearProps {
    yearValueHandler: any
}

const Years = ({ yearValueHandler }: yearProps) => {
    let years = [];
    const lastYear = new Date().getFullYear() - 3;

    for (let i = lastYear; i >= 1870; i--) {
        years.push(<div className='option' onClick={() => yearValueHandler(i)} >{i}</div>);
    }

    return (
        <>{years}</>
    )
}

export default Years