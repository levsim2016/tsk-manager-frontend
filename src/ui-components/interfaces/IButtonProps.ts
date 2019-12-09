export interface IButtonProps {
    label: string;
    type?: 'primary' | 'secondary';
    clickHandler: () => void;
}