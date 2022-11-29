// Select Styles Config
const selectStyles = {
    control: (base, state) => ({
        ...base,
        background: "transparent",
        // match with the menu
        borderRadius: state.isFocused ? "0" : "0",
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "transparent" : "transparent",
        // Removes weird border around container
        boxShadow: state.isFocused ? null : null,
        fontSize: "26px",
        "&:hover": {
            // Overwrittes the different states of border
            borderColor: state.isFocused ? "transparent" : "transparent"
        },
    }),
    valueContainer: (base) => ({
        ...base,
        paddingLeft: "0px",
    }),
    input: (base) => ({
        ...base,
        "@media (max-width: 1600px)": {
            ...base,
            fontSize: "21px",
        },
        "@media (max-width: 767px)": {
            ...base,
            fontSize: "16px",
        },
        "@media (max-width: 575px)": {
            ...base,
            fontSize: "14px",
        },
    }),
    placeholder: (base) => ({
        ...base,
        color: "#23262c",
        fontWeight: "500",
        marginLeft: "0px",
        "@media (max-width: 1600px)": {
            ...base,
            fontSize: "21px",
        },
        "@media (max-width: 767px)": {
            ...base,
            fontSize: "16px",
        },
        "@media (max-width: 575px)": {
            ...base,
            fontSize: "14px",
        },
        "@media (max-width: 460px)": {
            paddingLeft: "0px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
    }),
    singleValue: (base) => ({
        ...base,
        "@media (max-width: 1600px)": {
            ...base,
            fontSize: "21px",
        },
        "@media (max-width: 767px)": {
            ...base,
            fontSize: "16px",
        },
        "@media (max-width: 575px)": {
            ...base,
            fontSize: "14px",
        },
    }),
    indicatorSeparator: (base) => ({
        ...base,
        display: "none",
    }),
    indicatorsContainer: (base) => ({
        ...base,
        "@media (max-width: 575px)": {
            ...base,
            width: "2px",
        },
    }),
    menu: base => ({
        ...base,
        // override border radius to match the box
        // borderRadius: 0,
        // kill the gap
        marginTop: 0,
        "@media (max-width: 767px)": {
            ...base,
            fontSize: "16px",
        },
        "@media (max-width: 575px)": {
            ...base,
            fontSize: "14px",
            width: "max-content",
            minWidth: "100%"
        },
    }),
    menuList: base => ({
        ...base,
        // kill the white space on first and last option
        padding: 0
    })
};
export default selectStyles;
// Betting List Styles Config Ends Here