// import '../../App.css'
import {FC} from 'react';

interface counterButtonProps {
    count: number,
    increment: () => void,
    text: string
}

const  CounterButton: FC<counterButtonProps> = (props) => {
// const  CounterButton = (props: counterButtonProps) => {
    // props: {count: number, increment: () => void}) => {
    // console.log("Props:", props);
    return (
        <button onClick={props.increment}>Батончик №{props.count} {props.text}</button>
    );
}

export default CounterButton;