import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    badge: {
        boxSizing: "border-box",
        display: "flex",
        alignItems: "flex-start",
        borderRadius: "24px",
        border: "1px solid #FFFFFF",
        color: "#FFFFFF",
        padding: "4px 12px",
        gap: "10px",
        fontSize: "14px",
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: "21px",
        cursor: "pointer"
    }
});

const Badge = ({children, ...props}) => {
    const classes = useStyles();
    return (
        <span className={classes.badge} {...props} onClick={props.onClick}>
            {children}
        </span>
    );
}

export default Badge;