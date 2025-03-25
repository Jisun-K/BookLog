import React from "react";
import styled from "styled-components";

interface SearchInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (query: string) => void;
    // placeholder?: string;
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
`;

const InputBox = styled.input`
    width: calc(100% - 32px);
    padding: 8px 16px;
    border: none;
    outline: none;
`;


function SearchInput(props: SearchInputProps) {
    const { value, onChange, onSubmit } = props;

    const handleSubmit = (event: any) => {
        event.preventDefault();
        onSubmit(value);
    };


    return (
        <SearchBox onSubmit={handleSubmit}>
            <InputBox
                placeholder="책 이름을 입력하세요."
                value={value}
                onChange={onChange} />
        </SearchBox>
    )
}

export default SearchInput;  