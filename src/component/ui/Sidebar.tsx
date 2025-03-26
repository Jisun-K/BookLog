import styled from "styled-components";
import { Header, Logo } from "../../styles/styles";


const SidebarContainer = styled.div<{ isOpen: boolean }>`
    width: ${props => (props.isOpen ? '250px' : '0px')};;
    height: inherit;
    background: #dad3ca;
    /* padding: 0 0 0 1rem; */
    border-right: 1px solid #c2bcb4;
    position: fixed;
    top: 0;
    left: 0;
    transition: width 0.5s ease; // 슬라이딩 애니메이션 추가
    overflow: hidden; // 내용이 넘치지 않도록
`;

function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

    return (
        <SidebarContainer isOpen={isOpen}>
            <Header>
                <Logo src="../logo192.png" alt="logo" onClick={() => setIsOpen(!isOpen)} />
            </Header>
        </SidebarContainer>
    )
}

export default Sidebar;