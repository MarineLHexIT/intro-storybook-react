import { Button } from '@/components/ui/button.tsx';

interface ResetButtonProps {
    onReset: () => void;
    disabled?: boolean;
}

const ResetButton = ({ onReset, disabled = false }: ResetButtonProps) => {
    return <Button onClick={ onReset } disabled={ disabled } >
        Reset
    </Button>;
};

export default ResetButton;