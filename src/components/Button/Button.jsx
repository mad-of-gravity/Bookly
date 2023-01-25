const getContainedButtonStyle = ({color, display}) => {
    const defaultColors = {
        primary: "#4838D1",
        transparent: "transparent",
    }

    return {
        padding: "16px 32px",
        color: "#FFFFFF",
        backgroundColor: (!defaultColors.hasOwnProperty(color)) ? color : defaultColors[color], //If the object does not contain color property -> return color 
        border: "none",
        borderRadius: "8px",
        display: display,
        width: (display === "block") ? "100%" : "inherit",
    }
}

export const Button = ({color = "primary", variant="contained", display="inline-block", children}) => {
    return (
        <button style={getContainedButtonStyle({color, display})}>
            {children}
        </button>
    )
}