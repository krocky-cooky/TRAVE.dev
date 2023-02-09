import {Motion, spring} from "react-motion";


export const BattleViewer = (prop: {
    position: number
}) => {
    return (
        <>
            <Motion defaultStyle={{p: 0.5}} style={{p: spring(prop.position)}}>
                {(value) => (
                    <div 
                        style={{
                            fontSize: '40px',
                            WebkitTransform: `translate3d(${value.p*500}px,0,0)`
                        }}
                        >
                            HelloWorld!!
                        </div>
                )}
            </Motion>
        </>
    )
}

export default BattleViewer;