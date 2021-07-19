import { DatePicker , Rate} from 'antd'
import ReactPlayer from 'react-player'
import styled from '@emotion/styled';



const YouTube = styled(ReactPlayer)`
        
`;


const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

export default function Libraries2Page(){

    function onChangeStar (value){
        console.log(value);
    }


    return (
        <div>
            <DatePicker />

            <div></div>
            <Rate  tooltips={desc} onChange={onChangeStar}/>
            <YouTube url ='https://www.youtube.com/watch?v=McHtMb6a0aI'/>
            
        </div>

    )
}
