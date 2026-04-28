// withRequiredProps.jsx
const withRequiredProps = (Component, requiredProps) => {
    const validateProps = requiredProps || Component.requiredProps || [];
    return (props) => {
        const missingProps = validateProps.filter(
            (prop) => props[prop] === undefined || props[prop] === null
        );

        if (missingProps.length > 0) {
            console.warn(`${Component.name} : Required props missing : ${missingProps.join(", ")}`)
            return (
                <></>
                // <div style={{
                //     border: "2px solid red",
                //     padding: "8px 12px",
                //     borderRadius: "4px",
                //     backgroundColor: "#fff0f0",
                //     color: "red",
                //     fontSize: "13px",
                //     fontFamily: "monospace"
                // }}>
                //     ⚠️ <strong>{Component.name}:</strong> Required props missing:{" "}
                //     <strong>{missingProps.join(", ")}</strong>
                // </div>
            );
        }

        return <Component {...props} />;
    };
};

export default withRequiredProps;