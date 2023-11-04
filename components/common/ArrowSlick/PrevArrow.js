import { ArrowLeft } from "~/public/assets/svgs";

export default function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', top: '-60px', left: 'calc(100% - 72px)' }}
            onClick={onClick}
        >
            <ArrowLeft />
        </div>
    );
}