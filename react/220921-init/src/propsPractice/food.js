const style = {
    color : "red"
}

function ClassComponent(props) {
    return(
        <div>
            <h4>음식 이름 : <span style={style}>{props.food}</span></h4>
            설명: 맛있음
        </div>
    )
}

ClassComponent.defaultProps = {
    food: '입력없음'
}

export default ClassComponent;