import CreateSvgComponent from "@riadh-adrani/recursive/src/recursive-svg/CreateSvgComponent.js";

export default ({ children, props, key, events, hooks, style, flags }) => {
    return new CreateSvgComponent({
        tag: "view",
        children,
        props: { ...props },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
