const getStoredEstate = () =>{
    const storedEstate = localStorage.getItem('estate');
    if(storedEstate){
        return JSON.parse(storedEstate);
    }
    return [];
}

const saveEstate = id =>{
    const storedEstates = getStoredEstate();
    const exists = storedEstates.find(estateId => estateId === id);
    if(!exists){
        storedEstates.push(id);
        localStorage.setItem('estate', JSON.stringify(storedEstates));
    }
}

export {getStoredEstate, saveEstate}