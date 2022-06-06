import { CreateComponent } from "@riadh-adrani/recursive";

export default ({
    children,
    autoComplete,
    autoFocus,
    disabled,
    form,
    multiple,
    name,
    required,
    size,
    props,
    key,
    events,
    hooks,
    style,
    flags,
}) => {
    return new CreateComponent({
        tag: "select",
        children,
        props: {
            ...props,
            autoComplete,
            autoFocus,
            disabled,
            form,
            multiple,
            name,
            required,
            size,
        },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
