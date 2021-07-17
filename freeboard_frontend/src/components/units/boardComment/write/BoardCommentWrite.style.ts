import styled from "@emotion/styled";

export const Wrapper = styled.div`
    height: 300px;
    width: 1200px;
    background-color: pink;
    
    `

export const WrapperComment = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const WrapperHeadComment = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`

export const CommentTop = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;    
`

export const CommentMid = styled.div`

`


export const CommentImg = styled.img`
    margin-right: 14px; 
    height: 20px;
    width: 20px;

`
export const CommentTitle = styled.div`

`

export const CommentWriter = styled.input`
    height: 52px;
    width: 180px;
    margin-right: 20px;
    
`
export const CommentPassword = styled.input`
    height: 52px;
    width: 180px;
`
export const CommentContents = styled.textarea`
    height: 108px;
    width: 1200px;
    resize: none;
`
export const WrapperGroup = styled.div`
    display: flex;
    flex-direction: column;
`


export const WrapperFooterComment = styled.div`
    display: flex;
    justify-content: space-between;

`
export const CommentText = styled.div`
    line-height: 52px;
    color: gray;     

`

export const CommentSubmit = styled.div`
    height: 52px;
    width: 91px;
    background-color:${(props) => props.isEdit ? "yellow" : "black"} ;
    color: ${(props) => props.isEdit ? "black" : "white"}  ;
    font-size: 16px;
    line-height: 52px;
    text-align: center;

`