import React from "react";
import styled from "styled-components";

interface SearchInputProps {
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (query: string) => void;
    // onClear?: () => void; // 검색어 지우기 기능
    // className?: string; // 추가적인 스타일링 지원
}

const SearchBox = styled.form`
    /* display: flex;
    align-items: center;
    justify-content: space-between; */
    width: 100%;
    max-width: 400px;  /* 검색창 크기 */
    padding: 8px;
    border: 1px solid lightgray;
    border-radius: 30px;
    background-color: white;
    position: relative;
    font-family: 'FreesentationLight';
`;

const InputBox = styled.input`
    width: calc(100% - 32px);
    padding: 8px 16px;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: 18px;
`;


function SearchInput(props: SearchInputProps) {
    const { value, placeholder, onChange, onSubmit } = props;

    const handleSubmit = (event: any) => {
        event.preventDefault();
        onSubmit(value);
    };


    return (
        <SearchBox onSubmit={handleSubmit}>
            <InputBox
                placeholder={placeholder}
                value={value}
                onChange={onChange} />
        </SearchBox>
    )
}

export default SearchInput;  