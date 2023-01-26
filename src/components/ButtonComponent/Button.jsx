const Button = ({children, ...props}) => {
 
  return (
    <Button 
      onClick={props.onClick}
    >{children}</Button>
  );
};

export default Button;
