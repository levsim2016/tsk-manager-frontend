export interface ICheckboxProps {
    label: string;
    isChecked: boolean;
    selectHandler: (isSelected: boolean) => void;
}