const Image = ({ src, width, isSquare }) => {

    const height = isSquare ? width : "auto"

    return <img 
            src={src} 
            style={{width, height}} 
            />
}

export default Image

// Typescript