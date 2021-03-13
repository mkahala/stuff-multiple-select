import React, {useState} from 'react';
import './SearchField.scss';

interface OwnProps {
    searchParam: string;
    setSearchParam: (newValue: string) => void;
}

const SearchField = ({ searchParam, setSearchParam }: OwnProps) => (
    <input
        className="Search"
        placeholder="Search questions"
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
    />
);

export default SearchField;
