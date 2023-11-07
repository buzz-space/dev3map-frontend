import { ArrowRight } from "~/public/assets/svgs";

export default function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: 'block', top: '-60px', right: '24px' }} onClick={onClick}>
            <ArrowRight />
        </div>
    );
}