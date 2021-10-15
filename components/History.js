export default function History({gratitudes}){
    return(
        <p className = "test-white text 2x1">
        Previously, you were grateful for
        <span className = "font-bold">
            {gratitudes.map(g => ' ' + g).toString()}
        </span>
        </p>
    )
}