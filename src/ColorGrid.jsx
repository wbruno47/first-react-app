import './ColorGrid.css';
import ColorBox from './ColorBox';
function ColorGrid({ colors }) {
    const boxes = [];
    for (let i = 0; i < 25; i++) {
        boxes.push(<ColorBox colors={colors} />);
    }

    return (
        <div className='colorGrid'>
            {boxes}
        </div>

    )
}

export default ColorGrid;
