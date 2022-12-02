import {useLocation} from "react-router-dom";
import "C:/Users/Val/hello-world/src/assets/style.css"

function useQuery(){
    const {_name_} = useLocation();
    return React.useMemo(() => new URLSearchParams(_name_), [_name_]);
}

function HelloWorld(){
    let {_name_} = useQuery().get('_name_') ?? 'Anonym'
    return(
        <div className="hw">
            Hello World, I'm {_name_};
        </div>
    );
}

export default HelloWorld;