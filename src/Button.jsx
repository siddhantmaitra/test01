
// const Button = ({children, prop}) => {

//     const handleClick = () => {
//         console.log(`${children}` + " was pressed: "+`${prop}`);
//         //object object is being printed

//         }
//     return (
//         <>
//             <button onClick={handleClick}>{children}</button>
//         </>
//     )
// };

const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function PlayButton({ movieName }) {
    function handlePlayClick() {
        alert(`Playing ${movieName}!`);
    }

    return (
        <Button onClick={handlePlayClick}>
            Play "{movieName}"
        </Button>
    );
}

function UploadButton() {
    return (
        <Button onClick={() => alert('Uploading!')}>
            Upload Image
        </Button>
    );
}

export default Button;
// export default Button; // This was a default export
export {PlayButton,UploadButton}; //named export

