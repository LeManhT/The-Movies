export const convertListTab = (arrContent, arrQuantity) => {
    const newListArr = []
    for(let i = 0; i< arrContent.length; i++) {
        newListArr.push({
            content: arrContent[i],
            quantity: arrQuantity[i] ? arrQuantity[i] : null
        })
    }

    return newListArr
}