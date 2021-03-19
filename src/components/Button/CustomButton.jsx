import { Button } from './Styled';

const CustomButton = ({ children, icon, ...props }) => {
  return (
    <Button {...props}>
      <span className="l-icon">{icon}</span>
      {children}
    </Button>
  );
};

export default CustomButton;
