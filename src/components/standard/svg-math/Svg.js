import { CreateComponent } from "@riadh-adrani/recursive";

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
    return new CreateComponent({
        tag: "svg",
        children,
        props: { ...props, height, preserveAspectRatio, viewBox, width, x, y },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
