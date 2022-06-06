import { CreateComponent } from "@riadh-adrani/recursive";

export default ({
    children,
    dir,
    href,
    mathBackground,
    mathColor,
    mode,
    props,
    key,
    events,
    hooks,
    style,
    flags,
}) => {
    return new CreateComponent({
        tag: "math",
        children,
        props: { ...props, dir, href, mathBackground, mathColor, mode },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
