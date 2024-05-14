const sortDataByMonth = (data) => {
    //referenced 
    const monthsOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Convert object to array of key-value pairs
    const dataArray = Object.entries(data);

    // Sort the array based on months
    dataArray.sort(([monthA], [monthB]) => {
        const indexA = monthsOrder.indexOf(monthA);
        const indexB = monthsOrder.indexOf(monthB);
        return indexA - indexB;
    });

    // Convert back to object
    const sortedData = Object.fromEntries(dataArray);

    return sortedData;
};

export default sortDataByMonth;