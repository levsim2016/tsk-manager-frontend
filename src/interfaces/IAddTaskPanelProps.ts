export interface IAddTaskPanelProps {
    enteredSummary: string;
    summaryInputHandler: (newSummary: string) => void;
    addTaskButtonHandler: () => void;
}