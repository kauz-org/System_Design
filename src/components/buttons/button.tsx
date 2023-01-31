export enum TypeButton {
    primary,
    outline,
}

interface IProps {
    text: string;
    type?: TypeButton;
    onClick: () => void;
}
const Button = ({ text, type, onClick }: IProps) => {
    let style = [];
    if (type == TypeButton.outline)
        style = ["border-secundary border-4 text-secundary"];
    else style = ["bg-primary text-white py-1"];
    return <button
        onClick={onClick}
    >{text}</button>;
};
export default Button;
