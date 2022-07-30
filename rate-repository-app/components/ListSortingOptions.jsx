import { Picker } from '@react-native-picker/picker';
import { useRef, useState } from 'react';

const ListSortingOptions = () => {
    const [selectedSort, setSelectedSort] = useState('')
    console.log(selectedSort)
    
    const handleChange = (value) => {
        setSelectedSort(value)
    }

    return ( 
        <Picker
            selectedValue={selectedSort}
            onValueChange={(value, index) => setSelectedSort(value)}
        >   
            <Picker.Item label="Latest repositories" value={{ orderBy: "CREATE_AT", orderDirection: "DESC" }}/>
            <Picker.Item label="Highest rated repositories" value={{ orderBy: "RATING_AVERAGE", orderDirection: "DESC"}}/>
            <Picker.Item label="Lowest rated repositories" value={{ orderBy: "RATING_AVERAGE", orderDirection: "ASC"}}/>
        </Picker>
    )
}

export default ListSortingOptions