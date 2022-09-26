function SearchTable(props) {
    return (
        <table id="s_table" border={1} cellSpacing={0} cellPadding={5}>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                </tr>
            </thead>
            {props.s_list.map((dict) => {
                return <tbody>
                            <tr><td>{dict.index}</td><td>{dict.title}</td><td>{dict.name}</td></tr>
                        </tbody>
            })}
        </table>
    )
}

export default SearchTable;