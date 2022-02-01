interface ChildProps {
    color: string;
    onClick: () => void;
}
// typescript doesn't recognize it as react component
// doesn't receive children prop automatically
export const Child = ({color, onClick}: ChildProps) => {
    return <div>
        {color}!
        <button onClick={onClick}>Click Me</button>
    </div>
};

//Child.displayName will not work

// now it's function component and receive all data from react like propTypes or contexts
// receive children prop automatically
export const ChildAsFc: React.FC<ChildProps> = ({ color, onClick }) => {
    return <div>
        {color}!
        <button onClick={onClick}>Click Me</button>
    </div>
}

//ChildAsFc.displayName will work
