import CreateSvgComponent from "@riadh-adrani/recursive/src/recursive-svg/CreateSvgComponent.js";

export default ({
    children,
    height,
    preserveAspectRatio,
    viewBox,
    width,
    x,
    y,
    props,
    key,
    events,
    hooks,
    style,
    flags,
}) => {
    return new CreateSvgComponent({
        tag: "svg",
        children,
        props: { height, preserveAspectRatio, viewBox, width, x, y, ...props },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
