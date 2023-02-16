import { Fragment } from "react";
const Sidebar = ({ dataFromClick, widthDynamic }) => {
    const styleMap = {
        top: 70,
        left: 0,
        width: widthDynamic,
        height: "100%",
        position: "absolute",
        backgroundColor: "white",
        overflow: 'hidden'
    }; ``
    return (
        <Fragment>
            <div style={styleMap}>
                <div style={{ position: "absolute", left: 0 }}>
                    {JSON.stringify(dataFromClick)}
                </div>
            </div>
        </Fragment>
    );
};

export default Sidebar;
// dòng số 6 muốn cho nó ẩn thì set biến động cho nó về 0 khi nào ấn click thì cho biến đó tăng lên
// dòng số 16 tự css nha
