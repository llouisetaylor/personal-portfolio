const yearsFromNow = (date) => {
    const today = new Date();

    let dMonths;
    dMonths = (date.getFullYear() - today.getFullYear()) * 12;
    dMonths -= today.getMonth() + 1;
    dMonths += date.getMonth();
    const dYears = dMonths / 12
    const roundedYears = Math.round(Math.abs(dYears))

    return roundedYears === 0 
        ? 'this year'
        : `${roundedYears} year${roundedYears > 1 ? 's' : ''} ${dYears < 0 ? 'ago' : 'in the future'}`
};

export {
    yearsFromNow
};