import styled from "styled-components";

export const TodoBody = styled.div<{don:string, deleted:number}>`
    height:300px;
    width:300px;
    border-radius:10px;
    box-shadow:1px 1px 2px 1px rgba(0,0,0,0.7);
    background-color: ${({ don }) => (don)};
    opacity: ${({ deleted }) => (deleted)};
    display:flex;
    flex-direction:column;
    transition:all .4s ease-in;
`;
export const HeaderWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    padding:1rem;
`;
export const TitleArea = styled.div`
    width:90%;
    font-size:20px;
    font-weight:bold;
    word-break: break-all ;
`;
export const TaskBody = styled.div`
    padding:1rem;
    padding-top:0.2rem;
    width:100%;
    word-break: break-all;
    font-size:15px;
    text-align:left;
`;
export const OptionWrapper = styled.div`
    height:15%;
    width:100%;
    background:gray;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`;
export const ImportanceIcon = styled.div`
    display:flex;
`