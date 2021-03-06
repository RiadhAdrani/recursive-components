import { CreateComponent } from "@riadh-adrani/recursive";

export default ({
    children,
    disabled,
    label,
    selected,
    value,
    props,
    key,
    events,
    hooks,
    style,
    flags,
}) => {
    return new CreateComponent({
        tag: "option",
        children,
        props: { ...props, disabled, label, selected, value },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
