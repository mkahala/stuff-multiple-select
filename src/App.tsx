import React, {useState} from 'react';
import './App.scss';
import SearchField from './components/SearchField/SearchField';
import Option from './components/Option/Option';

interface OptionType {
    selected: boolean;
    value: string;
}

const OPTIONS_LIST: OptionType[] = [
    {
        selected: false,
        value: 'Budget',
    },
    {
        selected: false,
        value: 'Food allergies',
    },
    {
        selected: false,
        value: 'Number of people',
    },
    {
        selected: false,
        value: 'Special restrictions',
    },
];

function App() {
    const [optionsList, setOptionsList] = useState<OptionType[]>(OPTIONS_LIST);
    const [searchParam, setSearchParam] = useState<string>('');

    const toggleSelected = (index: number) => {
        OPTIONS_LIST[index].selected = !OPTIONS_LIST[index].selected;
        setOptionsList([...OPTIONS_LIST]);
    };

    const filteredOptions = (): OptionType[] => {
        if (searchParam === '') {
            return optionsList;
        }

        return optionsList.filter((option) =>
            option.value.toLowerCase().startsWith(searchParam.toLowerCase()));
    };

    return (
        <div className='Container'>
            <SearchField searchParam={searchParam} setSearchParam={setSearchParam} />
            <div className='Separator' />
            {filteredOptions().map((option, index) => (
                <Option
                    value={option.value}
                    onClick={() => !option.selected && toggleSelected(index)}
                    selected={option.selected}
                />
            ))}
        </div>
    );
}

export default App;
