import {ChildAsFc} from './Child'

const Parent = () => {
    return <ChildAsFc
        color={"red"}
        onClick={ () => console.log('Clicked')}>
    </ChildAsFc>;
};

export default Parent;