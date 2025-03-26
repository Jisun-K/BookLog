import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import { useAppContext } from "../../context/AppContext";
import { Header, Logo } from "../../styles/styles";

const Layout = styled.div`
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    
    /* background: #f0eae4; */
    /* display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: scroll; */
`;

const ContentWrapper = styled.div<{ isOpen: boolean }>`
    margin-left: ${props => (props.isOpen ? '250px' : '0')};  // 사이드바 크기에 맞게 왼쪽 여백 조정
    transition: margin-left 0.5s ease; // 애니메이션
    width: 100%;
`;

function Main() {
    const {
        isOpen,
        setIsOpen,
    } = useAppContext();

    return (
        <Layout>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <Header>
                {!isOpen &&
                    <Logo src="../logo192.png" alt="logo" onClick={() => setIsOpen(!isOpen)} />
                }
            </Header>
            <ContentWrapper isOpen={isOpen} >
                <Outlet />
            </ContentWrapper>
        </Layout>
    );

}

export default Main;