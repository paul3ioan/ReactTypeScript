import styled from "styled-components";

export const TaskLayout = styled.div`
display:flex;
padding:1rem;
justify-content:center;
box-shadow: 4px 7px rgba(0,0,0, 0.45);
height:80%;
width:50%;
background:white;
border-radius:30px;
overflow:hidden;
`;
export const Title = styled.input`
    
    padding:0 1rem;
    width: 100%;
    height:3rem;
    display:flex;
    justify-content:center;
    align-items:center;
    background: rgba(0,120, 24, 0.5);
    border:0;
    border-radius:10px;
    outline:none;
    &:hover{
        cursor:pointer;
        background: rgba(0,120, 24, 0.7);
    }
`;
export const Description = styled.textarea`
    height:100%;
    width:80%;
    resize:none;
    padding:1rem;
    border:0;
    outline:0;
    background:rgba(100, 100, 100, 0.4);

`;
export const MainForm = styled.div`
    width:100%;
    height:100%;
    font-family:'Roboto'
    padding:0.3rem;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap:1rem;
`;
export const MoreInfoAboutTaskWrapper = styled.div`
    display:flex;
    width:100%;
    height:100%;
`
export const SubmitBtn = styled.button`
    margin-top:10px;
    padding:1rem 2rem;
    border:0;
    font-size:14px;
    outline:0;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    font-family:'Roboto';
    border-radius:10px;
    text-transform:uppercase;
    font-weight:600;
    background: #8ac5db;
    overflow:hidden;
    &:hover{
        padding:1rem 1.8rem;
        font-size:16px;
        transition:all .2s ease;
        box-shadow:1px 1px black;
    }
`;
export const ImportanceContainer = styled.div`
    display:flex;
    height:100%;
    width:20%;
    flex-direction:column;
    padding:1rem 1rem;
    justify-content:space-around;
    align-items:center;
`